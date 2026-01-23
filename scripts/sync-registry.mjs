import fs from "fs";
import path from "path";
import ts from "typescript";

const repoRoot = process.cwd();
const opensiteUiPath =
  process.env.OPENSITE_UI_PATH ||
  path.resolve(repoRoot, "..", "..", "utility-modules", "opensite-ui");
const exportPath = path.join(opensiteUiPath, "registry-export.json");
const overridesPath = path.join(repoRoot, "src/data/registry-overrides.json");
const outputPath = path.join(repoRoot, "src/data/registry.generated.json");

const PLACEHOLDER_THUMBNAIL = {
  desktop: "/placeholder-desktop.png",
  mobile: "/placeholder-mobile.png",
};

const BLOCKS_COMPONENTS_DIR = path.join(opensiteUiPath, "components", "blocks");
const TYPES_DIR = path.join(opensiteUiPath, "src", "types");
const UI_DIR = path.join(opensiteUiPath, "components", "ui");

const isTsFile = (file) => file.endsWith(".ts") || file.endsWith(".tsx");

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

const collectSourceFiles = (rootDirs) => {
  const files = [];

  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir)) {
      if (entry.startsWith(".")) continue;
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        if (entry === "node_modules" || entry === "dist") continue;
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

const buildTypeIndex = (sourceFiles) => {
  const interfaces = new Map();
  const typeAliases = new Map();

  for (const filePath of sourceFiles) {
    const contents = fs.readFileSync(filePath, "utf-8");
    const sourceFile = ts.createSourceFile(
      filePath,
      contents,
      ts.ScriptTarget.Latest,
      true,
      filePath.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS
    );

    const visit = (node) => {
      if (ts.isInterfaceDeclaration(node)) {
        interfaces.set(node.name.text, { node, sourceFile });
      }

      if (ts.isTypeAliasDeclaration(node)) {
        let kind = "other";
        if (ts.isTypeLiteralNode(node.type)) {
          kind = "object";
        } else if (ts.isUnionTypeNode(node.type)) {
          const allString = node.type.types.every((t) => ts.isLiteralTypeNode(t));
          if (allString) {
            kind = "stringUnion";
          }
        }
        typeAliases.set(node.name.text, { node, sourceFile, kind });
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
  }

  return { interfaces, typeAliases };
};

const schemaCache = new Map();

const buildSchemaFromTypeNode = (typeNode, context, index, stack = new Set()) => {
  if (!typeNode) {
    return { type: "object", description: "" };
  }

  const typeText = typeNode.getText(context.sourceFile).replace(/\s+/g, " ");
  const setTypeLabel = (schema) => {
    if (!schema.typeLabel && typeText && !["string", "number", "boolean"].includes(typeText)) {
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
        stack
      );
      const schema = {
        type: "array",
        description: "",
        items: itemSchema,
      };
      if (itemSchema.typeLabel) {
        schema.typeLabel = `${itemSchema.typeLabel}[]`;
      }
      return schema;
    }

    if (index.typeAliases.has(name)) {
      const alias = index.typeAliases.get(name);
      if (alias.kind === "stringUnion") {
        return { type: "string", description: "", typeLabel: name };
      }
    }

    if (index.interfaces.has(name) || index.typeAliases.has(name)) {
      const fields = buildSchemaForNamedType(name, index, stack);
      return setTypeLabel({ type: "object", description: "", fields });
    }

    if (name === "React.ReactNode" || name === "ReactNode" || name === "JSX.Element") {
      return { type: "object", description: "", typeLabel: name };
    }

    return { type: "object", description: "", typeLabel: name };
  }

  if (ts.isArrayTypeNode(typeNode)) {
    const itemSchema = buildSchemaFromTypeNode(typeNode.elementType, context, index, stack);
    const schema = { type: "array", description: "", items: itemSchema };
    if (itemSchema.typeLabel) {
      schema.typeLabel = `${itemSchema.typeLabel}[]`;
    }
    return schema;
  }

  if (ts.isUnionTypeNode(typeNode)) {
    const filtered = typeNode.types.filter(
      (t) => t.kind !== ts.SyntaxKind.UndefinedKeyword && t.kind !== ts.SyntaxKind.NullKeyword
    );

    if (filtered.length === 1) {
      return buildSchemaFromTypeNode(filtered[0], context, index, stack);
    }

    const allStringLiterals = filtered.every((t) => ts.isLiteralTypeNode(t));
    if (allStringLiterals) {
      return { type: "string", description: "", typeLabel: typeText };
    }

    return { type: "object", description: "", typeLabel: typeText };
  }

  if (ts.isTypeLiteralNode(typeNode)) {
    const fields = buildSchemaFieldsFromMembers(typeNode.members, context, index, stack);
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
    const name = member.name.getText(context.sourceFile);
    const schema = buildSchemaFromTypeNode(member.type, context, index, stack);
    schema.description = getJsDocComment(member) || schema.description || "";
    schema.required = !member.questionToken;
    fields[name] = schema;
  }

  return fields;
};

const buildSchemaForNamedType = (name, index, stack = new Set()) => {
  if (schemaCache.has(name)) {
    return schemaCache.get(name);
  }

  if (stack.has(name)) {
    return {};
  }

  stack.add(name);

  if (index.interfaces.has(name)) {
    const { node, sourceFile } = index.interfaces.get(name);
    const fields = buildSchemaFieldsFromMembers(node.members, { sourceFile }, index, stack);
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
        stack
      );
      schemaCache.set(name, fields);
      stack.delete(name);
      return fields;
    }
  }

  stack.delete(name);
  return {};
};

const deriveComponentPath = (categorySlug, id) => {
  return `blocks/${categorySlug}/${id}.tsx`;
};

const readShowcaseCode = (componentPath) => {
  const fullPath = path.join(repoRoot, "src", componentPath);
  if (!fs.existsSync(fullPath)) return "";
  return fs.readFileSync(fullPath, "utf-8");
};

const exportData = readJson(exportPath, null);
if (!exportData) {
  throw new Error(`Missing registry export at ${exportPath}`);
}

const overridesData = readJson(overridesPath, { blocks: {} });
const overrides = overridesData.blocks || {};

const blocks = exportData.blocks || exportData;
const metadata = exportData.metadata || {};
const sources = collectSourceFiles([BLOCKS_COMPONENTS_DIR, TYPES_DIR, UI_DIR]);
const index = buildTypeIndex(sources);

const generatedBlocks = blocks.map((block) => {
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

  return {
    id,
    name,
    title,
    category,
    categorySlug,
    description: block.description || "",
    thumbnail: override.thumbnail || PLACEHOLDER_THUMBNAIL,
    preview: override.preview || override.thumbnail || PLACEHOLDER_THUMBNAIL,
    componentPath,
    code,
    propsSchema,
    defaultProps: override.defaultProps || {},
    dependencies: override.dependencies || [],
    tags: block.semanticTags || [],
    performance: override.performance || {},
  };
});

const output = {
  metadata: {
    ...metadata,
    syncedAt: new Date().toISOString(),
  },
  blocks: generatedBlocks,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`Registry synced: ${generatedBlocks.length} blocks -> ${outputPath}`);
