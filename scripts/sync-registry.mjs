/**
 * Sync the @opensite/ui block registry into src/data/registry.generated.json.
 *
 * Primary source: the installed @opensite/ui package. We dynamically import
 * `@opensite/ui/registry` (the public contract entry point) and project each
 * BlockRegistryEntry through to the showcase's registry shape.
 *
 * Dev fallback (OPENSITE_UI_PATH): when set, we resolve the package from that
 * sibling checkout instead. Intended for engineers iterating on @opensite/ui
 * locally without a fresh npm publish — never the production source.
 *
 * Props schema is derived by parsing the `.d.ts` file each block ships under
 * `dist/{block-id}.d.ts` (resolved via the package's `exports` map). The
 * shipped d.ts contains the same interface declarations the source would,
 * so we don't need an opensite-ui working tree to pick them up.
 */
import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { pathToFileURL } from "url";
import ts from "typescript";

const require = createRequire(import.meta.url);
const repoRoot = process.cwd();
const overridesPath = path.join(repoRoot, "src/data/registry-overrides.json");
const outputPath = path.join(repoRoot, "src/data/registry.generated.json");

const PLACEHOLDER_THUMBNAIL = {
  desktop:
    "https://cdn.ing/assets/i/r/287646/ob4iqx5aibk1tdym49ybx2swtppo/isometric-data-stack-layers-dark-tech-illustration.png",
  mobile:
    "https://cdn.ing/assets/i/r/287650/oj637ssn1crip2uhna398g3eud94/placeholder-mobile.png",
};

const readJson = (filePath, fallback) => {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

const toTitleCase = (value) =>
  value
    .split(/[-_\s]+/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const toHumanTitle = (value) =>
  value
    .replace(/([a-z\d])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Walk up from a file path until we find the directory containing the
 * `@opensite/ui` package.json. We can't `require.resolve("@opensite/ui/package.json")`
 * because the published package doesn't list `./package.json` in its `exports`
 * (Node ≥ 12 enforces that, and Node 22 has no escape hatch). Reading
 * package.json directly off disk is fine — the exports restriction only
 * applies to module resolution, not filesystem reads.
 */
function findPackageRootFromFile(filePath, expectedName) {
  let dir = path.dirname(filePath);
  while (true) {
    const candidate = path.join(dir, "package.json");
    if (fs.existsSync(candidate)) {
      try {
        const parsed = JSON.parse(fs.readFileSync(candidate, "utf-8"));
        if (parsed.name === expectedName) {
          return { packageRoot: dir, pkg: parsed };
        }
      } catch {
        // Ignore malformed package.json files; keep walking up.
      }
    }
    const parent = path.dirname(dir);
    if (parent === dir) {
      throw new Error(
        `Could not locate ${expectedName} package.json walking up from ${filePath}`,
      );
    }
    dir = parent;
  }
}

/**
 * Resolve the on-disk root of @opensite/ui. Honors OPENSITE_UI_PATH for local
 * iteration; otherwise resolves from node_modules via the package's `./registry`
 * subpath export. Returns the directory containing package.json, plus the
 * parsed package.json and the loaded `./registry` module.
 */
async function resolveOpenSiteUiPackage() {
  const overridePath = process.env.OPENSITE_UI_PATH;
  if (overridePath) {
    const pkgJsonPath = path.join(overridePath, "package.json");
    if (!fs.existsSync(pkgJsonPath)) {
      throw new Error(
        `OPENSITE_UI_PATH points to ${overridePath}, but no package.json found there.`,
      );
    }
    const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
    const registryRel =
      pkg.exports?.["./registry"]?.import ||
      pkg.exports?.["./registry"]?.require ||
      "dist/registry.js";
    const registryAbs = path.join(overridePath, registryRel);
    const registry = await import(pathToFileURL(registryAbs).href);
    return { packageRoot: overridePath, pkg, registry };
  }

  // Resolve via the exported `./registry` subpath, which IS in the package's
  // `exports` map. From the resolved file path we can derive the package root
  // by walking up to the nearest package.json named `@opensite/ui`.
  const registrySpecifier = "@opensite/ui/registry";
  const registryFilePath = require.resolve(registrySpecifier);
  const { packageRoot, pkg } = findPackageRootFromFile(
    registryFilePath,
    "@opensite/ui",
  );
  const registry = await import(registrySpecifier);
  return { packageRoot, pkg, registry };
}

/**
 * Map a block id (e.g. "hero-mental-health-team") to its shipped .d.ts file.
 * Tries the package's exports map first (`./blocks/{category}/{id}` and a few
 * other shapes), then falls back to `dist/{id}.d.ts`.
 */
function resolveDtsPathForBlock(packageRoot, pkg, blockId, categorySlug) {
  const exports = pkg.exports || {};
  const candidateKeys = [
    `./blocks/${categorySlug}/${blockId}`,
    `./${blockId}`,
    `./components/blocks/${categorySlug}/${blockId}`,
  ];
  for (const key of candidateKeys) {
    const entry = exports[key];
    if (entry && typeof entry === "object" && entry.types) {
      const abs = path.join(packageRoot, entry.types);
      if (fs.existsSync(abs)) return abs;
    }
  }
  const fallback = path.join(packageRoot, "dist", `${blockId}.d.ts`);
  if (fs.existsSync(fallback)) return fallback;
  return null;
}

const isTsFile = (file) => file.endsWith(".ts") || file.endsWith(".tsx");

const collectSourceFiles = (rootDirs) => {
  const files = [];
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir)) {
      if (entry.startsWith(".")) continue;
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        if (entry === "node_modules") continue;
        walk(fullPath);
      } else if (stat.isFile() && isTsFile(fullPath)) {
        files.push(fullPath);
      }
    }
  };
  rootDirs.forEach(walk);
  return files;
};

const getJsDocComment = (node) => {
  if (!node.jsDoc || node.jsDoc.length === 0) return "";
  return node.jsDoc
    .map((doc) => {
      const comment = doc.comment;
      if (!comment) return "";
      if (typeof comment === "string") return comment;
      if (Array.isArray(comment)) {
        return comment.map((part) => part.text || "").join("");
      }
      return "";
    })
    .join(" ")
    .trim();
};

const getPropertyName = (name, sourceFile) => {
  if (
    ts.isIdentifier(name) ||
    ts.isStringLiteral(name) ||
    ts.isNumericLiteral(name)
  ) {
    return name.text;
  }
  return name.getText(sourceFile);
};

const buildTypeIndex = (sourceFiles) => {
  const interfaces = new Map();
  const typeAliases = new Map();
  const program = ts.createProgram(sourceFiles, {
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    jsx: ts.JsxEmit.ReactJSX,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    skipLibCheck: true,
    target: ts.ScriptTarget.Latest,
  });
  const checker = program.getTypeChecker();

  for (const filePath of sourceFiles) {
    const sourceFile = program.getSourceFile(filePath);
    if (!sourceFile) continue;

    const visit = (node) => {
      if (ts.isInterfaceDeclaration(node)) {
        interfaces.set(node.name.text, { node, sourceFile });
      }
      if (ts.isTypeAliasDeclaration(node)) {
        let kind = "other";
        if (ts.isTypeLiteralNode(node.type)) {
          kind = "object";
        } else if (ts.isUnionTypeNode(node.type)) {
          const allString = node.type.types.every((t) =>
            ts.isLiteralTypeNode(t),
          );
          if (allString) kind = "stringUnion";
        }
        typeAliases.set(node.name.text, { node, sourceFile, kind });
      }
      ts.forEachChild(node, visit);
    };
    visit(sourceFile);
  }

  return { checker, interfaces, typeAliases };
};

/**
 * String-literal values of a union type NODE, or null when the node is not a
 * string-literal union. Tolerates two idioms:
 *  - `undefined`/`null` members (optional props) are skipped;
 *  - the `"a" | "b" | (string & {})` "keep autocomplete but allow any string"
 *    idiom — the widening member adds no value, so it is skipped rather than
 *    disqualifying the union (this is what `SectionSpacing` uses, and why it
 *    previously degraded to `{type:"object", fields:{}}`).
 * The emitted enum is the CLOSED set of known values: a consumer offering only
 * these cannot splice an unvalidated string into a className or `url(...)`.
 */
const literalUnionFromNode = (typeNode) => {
  if (!typeNode || !ts.isUnionTypeNode(typeNode)) return null;
  const values = [];
  let type = null;
  const claim = (next) => {
    if (type && type !== next) return false;
    type = next;
    return true;
  };
  for (const member of typeNode.types) {
    const inner = ts.isParenthesizedTypeNode(member) ? member.type : member;
    if (
      inner.kind === ts.SyntaxKind.UndefinedKeyword ||
      inner.kind === ts.SyntaxKind.NullKeyword
    ) {
      continue;
    }
    if (ts.isLiteralTypeNode(inner)) {
      const literal = inner.literal;
      if (ts.isStringLiteral(literal)) {
        if (!claim("string")) return null;
        values.push(literal.text);
        continue;
      }
      // `columns?: 2 | 3 | 4` — a NUMERIC union. Emitting `type:"string"` for
      // these (the previous behavior) mistyped the control.
      if (ts.isNumericLiteral(literal)) {
        if (!claim("number")) return null;
        values.push(Number(literal.text));
        continue;
      }
      return null;
    }
    if (
      ts.isIntersectionTypeNode(inner) &&
      inner.types.some((part) => part.kind === ts.SyntaxKind.StringKeyword)
    ) {
      if (!claim("string")) return null;
      continue;
    }
    return null;
  }
  return values.length ? { type, values: [...new Set(values)] } : null;
};

/** Same contract as [`literalUnionFromNode`], over resolved checker types. */
const literalUnionFromCheckerTypes = (members) => {
  if (!Array.isArray(members) || members.length < 2) return null;
  const values = [];
  let type = null;
  for (const member of members) {
    const next = member.isStringLiteral?.()
      ? "string"
      : member.isNumberLiteral?.()
        ? "number"
        : null;
    if (!next || (type && type !== next)) return null;
    type = next;
    values.push(member.value);
  }
  return values.length ? { type, values: [...new Set(values)] } : null;
};

/**
 * Checker fallback for aliases whose values are not syntactically literal —
 * `keyof typeof patternSvgs` resolves to the real pattern-name union, which no
 * amount of AST walking can enumerate.
 */
const literalUnionFromCheckerNode = (typeNode, checker) => {
  if (!checker || !typeNode) return null;
  let resolved;
  try {
    resolved = checker.getTypeAtLocation(typeNode);
  } catch {
    return null;
  }
  return resolved?.isUnion?.()
    ? literalUnionFromCheckerTypes(resolved.types)
    : null;
};

const schemaCache = new Map();

const buildSchemaFromCheckerType = (type, checker) => {
  const unionTypes = type.isUnion()
    ? type.types.filter(
        (member) =>
          !(member.flags & ts.TypeFlags.Undefined) &&
          !(member.flags & ts.TypeFlags.Null),
      )
    : [type];
  const normalizedType = unionTypes.length === 1 ? unionTypes[0] : type;
  const typeLabel = checker.typeToString(normalizedType);
  const withTypeLabel = (schema) => {
    if (
      !schema.typeLabel &&
      typeLabel &&
      !["string", "number", "boolean"].includes(typeLabel)
    ) {
      schema.typeLabel = typeLabel;
    }
    return schema;
  };

  const literalUnion =
    unionTypes.length > 1 ? literalUnionFromCheckerTypes(unionTypes) : null;
  if (literalUnion) {
    return {
      type: literalUnion.type,
      description: "",
      typeLabel,
      enum: literalUnion.values,
    };
  }
  if (normalizedType.flags & ts.TypeFlags.StringLike) {
    return { type: "string", description: "" };
  }
  if (normalizedType.flags & ts.TypeFlags.NumberLike) {
    return { type: "number", description: "" };
  }
  if (
    normalizedType.flags & ts.TypeFlags.BooleanLike ||
    typeLabel === "boolean"
  ) {
    return { type: "boolean", description: "" };
  }
  return withTypeLabel({ type: "object", description: "" });
};

const buildSchemaFieldsFromCheckerType = (typeNode, context, index) => {
  if (!index.checker) return {};
  const type = index.checker.getTypeAtLocation(typeNode);
  const fields = {};
  for (const property of index.checker.getPropertiesOfType(type)) {
    const declaration = property.valueDeclaration || property.declarations?.[0];
    const propertyType = index.checker.getTypeOfSymbolAtLocation(
      property,
      declaration || typeNode,
    );
    const schema = buildSchemaFromCheckerType(propertyType, index.checker);
    schema.description = declaration ? getJsDocComment(declaration) : "";
    schema.required = !(property.flags & ts.SymbolFlags.Optional);
    fields[property.getName()] = schema;
  }
  return fields;
};

const buildSchemaFromTypeNode = (typeNode, context, index, stack = new Set()) => {
  if (!typeNode) return { type: "object", description: "" };

  const typeText = typeNode.getText(context.sourceFile).replace(/\s+/g, " ");
  const setTypeLabel = (schema) => {
    if (
      !schema.typeLabel &&
      typeText &&
      !["string", "number", "boolean"].includes(typeText)
    ) {
      schema.typeLabel = typeText;
    }
    return schema;
  };

  if (ts.isParenthesizedTypeNode(typeNode)) {
    return buildSchemaFromTypeNode(typeNode.type, context, index, stack);
  }

  if (ts.isTypeReferenceNode(typeNode)) {
    const name = typeNode.typeName.getText(context.sourceFile);
    if (name === "Array" && typeNode.typeArguments?.length) {
      const itemSchema = buildSchemaFromTypeNode(
        typeNode.typeArguments[0],
        context,
        index,
        stack,
      );
      const schema = { type: "array", description: "", items: itemSchema };
      if (itemSchema.typeLabel) schema.typeLabel = `${itemSchema.typeLabel}[]`;
      return schema;
    }
    if (index.typeAliases.has(name)) {
      const alias = index.typeAliases.get(name);
      // Emit the allowed VALUES, not just the alias name. `kind` is not
      // consulted: it only flags PURE literal unions, which misses the
      // `(string & {})` widening idiom and `keyof typeof …` aliases.
      const aliasUnion =
        literalUnionFromNode(alias.node.type) ??
        literalUnionFromCheckerNode(alias.node.type, index.checker);
      if (aliasUnion) {
        return {
          type: aliasUnion.type,
          description: "",
          typeLabel: name,
          enum: aliasUnion.values,
        };
      }
    }
    if (index.interfaces.has(name) || index.typeAliases.has(name)) {
      const fields = buildSchemaForNamedType(name, index, stack);
      return setTypeLabel({ type: "object", description: "", fields });
    }
    if (
      name === "React.ReactNode" ||
      name === "ReactNode" ||
      name === "JSX.Element"
    ) {
      return { type: "object", description: "", typeLabel: name };
    }
    return { type: "object", description: "", typeLabel: name };
  }

  if (ts.isArrayTypeNode(typeNode)) {
    const itemSchema = buildSchemaFromTypeNode(
      typeNode.elementType,
      context,
      index,
      stack,
    );
    const schema = { type: "array", description: "", items: itemSchema };
    if (itemSchema.typeLabel) schema.typeLabel = `${itemSchema.typeLabel}[]`;
    return schema;
  }

  if (ts.isUnionTypeNode(typeNode)) {
    const filtered = typeNode.types.filter(
      (t) =>
        t.kind !== ts.SyntaxKind.UndefinedKeyword &&
        t.kind !== ts.SyntaxKind.NullKeyword,
    );
    if (filtered.length === 1) {
      return buildSchemaFromTypeNode(filtered[0], context, index, stack);
    }
    const inlineUnion = literalUnionFromNode(typeNode);
    if (inlineUnion) {
      return {
        type: inlineUnion.type,
        description: "",
        typeLabel: typeText,
        enum: inlineUnion.values,
      };
    }
    return { type: "object", description: "", typeLabel: typeText };
  }

  if (ts.isTypeLiteralNode(typeNode)) {
    const fields = buildSchemaFieldsFromMembers(
      typeNode.members,
      context,
      index,
      stack,
    );
    return setTypeLabel({ type: "object", description: "", fields });
  }

  if (typeNode.kind === ts.SyntaxKind.StringKeyword) {
    return { type: "string", description: "" };
  }
  if (typeNode.kind === ts.SyntaxKind.NumberKeyword) {
    return { type: "number", description: "" };
  }
  if (typeNode.kind === ts.SyntaxKind.BooleanKeyword) {
    return { type: "boolean", description: "" };
  }
  return { type: "object", description: "", typeLabel: typeText };
};

const buildSchemaFieldsFromMembers = (members, context, index, stack) => {
  const fields = {};
  for (const member of members) {
    if (!ts.isPropertySignature(member) || !member.type) continue;
    const name = getPropertyName(member.name, context.sourceFile);
    const schema = buildSchemaFromTypeNode(member.type, context, index, stack);
    schema.description = getJsDocComment(member) || schema.description || "";
    schema.required = !member.questionToken;
    fields[name] = schema;
  }
  return fields;
};

const buildSchemaFieldsFromHeritage = (node, context, index, stack) => {
  const fields = {};
  for (const heritageClause of node.heritageClauses || []) {
    for (const heritageType of heritageClause.types) {
      const expressionName = heritageType.expression.getText(context.sourceFile);
      if (
        index.interfaces.has(expressionName) ||
        index.typeAliases.has(expressionName)
      ) {
        Object.assign(fields, buildSchemaForNamedType(expressionName, index, stack));
        continue;
      }
      if (expressionName === "VariantProps") {
        Object.assign(
          fields,
          buildSchemaFieldsFromCheckerType(heritageType, context, index),
        );
      }
    }
  }
  return fields;
};

const buildSchemaForNamedType = (name, index, stack = new Set()) => {
  if (schemaCache.has(name)) return schemaCache.get(name);
  if (stack.has(name)) return {};
  stack.add(name);

  if (index.interfaces.has(name)) {
    const { node, sourceFile } = index.interfaces.get(name);
    const fields = {
      ...buildSchemaFieldsFromHeritage(node, { sourceFile }, index, stack),
      ...buildSchemaFieldsFromMembers(node.members, { sourceFile }, index, stack),
    };
    schemaCache.set(name, fields);
    stack.delete(name);
    return fields;
  }
  if (index.typeAliases.has(name)) {
    const { node, sourceFile, kind } = index.typeAliases.get(name);
    if (kind === "object" && ts.isTypeLiteralNode(node.type)) {
      const fields = buildSchemaFieldsFromMembers(
        node.type.members,
        { sourceFile },
        index,
        stack,
      );
      schemaCache.set(name, fields);
      stack.delete(name);
      return fields;
    }
  }
  stack.delete(name);
  return {};
};

const deriveComponentPath = (categorySlug, id) =>
  `blocks/${categorySlug}/${id}.tsx`;

const readShowcaseCode = (componentPath) => {
  const fullPath = path.join(repoRoot, "src", componentPath);
  if (!fs.existsSync(fullPath)) return "";
  return fs.readFileSync(fullPath, "utf-8");
};

const { packageRoot, pkg, registry } = await resolveOpenSiteUiPackage();
console.log(
  `Reading @opensite/ui registry from ${packageRoot} (v${pkg.version || "unknown"})`,
);

const blockEntries = Object.values(registry.BLOCK_REGISTRY || {});
if (blockEntries.length === 0) {
  throw new Error(
    "@opensite/ui/registry exported no blocks (BLOCK_REGISTRY is empty).",
  );
}

const overridesData = readJson(overridesPath, { blocks: {} });
const overrides = overridesData.blocks || {};

// Build a single TypeScript program over all the .d.ts files we need so
// type references between them resolve correctly.
const dtsFiles = new Set();
const blockDtsByBlockId = new Map();
for (const block of blockEntries) {
  const categorySlug = (block.category || "uncategorized").toLowerCase();
  const dtsPath = resolveDtsPathForBlock(
    packageRoot,
    pkg,
    block.id,
    categorySlug,
  );
  if (dtsPath) {
    dtsFiles.add(dtsPath);
    blockDtsByBlockId.set(block.id, dtsPath);
  }
}

// Pull in shared .d.ts files that block .d.ts files reference (e.g. the
// `community-initiatives-*.js` / `blocks-*.js` chunks that hold shared
// interfaces like ImageItem, ActionConfig).
const sharedDtsDir = path.join(packageRoot, "dist");
if (fs.existsSync(sharedDtsDir)) {
  for (const entry of fs.readdirSync(sharedDtsDir)) {
    if (entry.endsWith(".d.ts")) {
      dtsFiles.add(path.join(sharedDtsDir, entry));
    }
  }
}

const indexSources = collectSourceFiles([]);
indexSources.push(...dtsFiles);
const index = buildTypeIndex(indexSources);

const generatedBlocks = blockEntries.map((block) => {
  const id = block.id;
  const override = overrides[id] || {};
  const categorySlug = (block.category || "uncategorized").toLowerCase();
  const category = override.category || toTitleCase(block.category || "uncategorized");
  const name = block.name || toHumanTitle(id);
  const title = override.title || toHumanTitle(block.name || id);
  const componentPath =
    override.componentPath || deriveComponentPath(categorySlug, id);

  const propsSchema = block.props
    ? buildSchemaForNamedType(block.props, index)
    : {};

  const code = override.componentPath ? readShowcaseCode(override.componentPath) : "";

  // Forward-compat: accept the new `exampleProps` key (post opensite-ui #88)
  // and the legacy `defaultProps` key from older publishes. Always emit
  // `exampleProps` on the output — the showcase API only speaks the new
  // name. Fall back to an override `exampleProps` only if neither upstream
  // shape was set (override is the bridge before #88 is published).
  const exampleProps =
    block.exampleProps !== undefined
      ? block.exampleProps
      : block.defaultProps !== undefined
        ? block.defaultProps
        : override.exampleProps !== undefined
          ? override.exampleProps
          : undefined;

  return {
    id,
    name,
    title,
    category,
    categorySlug,
    description: block.description || "",
    thumbnail: override.thumbnail || PLACEHOLDER_THUMBNAIL,
    componentPath,
    code,
    propsSchema,
    exampleProps,
    dependencies: override.dependencies || [],
    tags: block.semanticTags || [],
    performance: override.performance || {},
    // Upstream importantUsageNotes is the canonical source; override only
    // bridges blocks that haven't been migrated upstream yet.
    importantUsageNotes:
      typeof block.importantUsageNotes === "string"
        ? block.importantUsageNotes
        : typeof override.importantUsageNotes === "string"
          ? override.importantUsageNotes
          : undefined,
    // Structured usage requirements straight from the registry contract.
    // Override is a transition fallback only.
    usageRequirements:
      block.usageRequirements || override.usageRequirements || undefined,
  };
});

const output = {
  metadata: {
    version: pkg.version,
    source: "@opensite/ui",
    syncedAt: new Date().toISOString(),
    totalBlocks: generatedBlocks.length,
  },
  blocks: generatedBlocks,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(
  `Registry synced: ${generatedBlocks.length} blocks -> ${outputPath}`,
);
