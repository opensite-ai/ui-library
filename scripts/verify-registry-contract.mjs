/**
 * Verify the generated registry contract for blocks consumed by the
 * downstream Octane sync. Run with `node scripts/verify-registry-contract.mjs`.
 * Exits non-zero on contract regression.
 *
 * Targets:
 *   - hero-mental-health-team: structured usageRequirements, mediaSlots,
 *     exampleProps (formerly defaultProps), absolute-URL media, and the
 *     enriched propsSchema projection.
 *   - hero-mentorship-video-split: structured usageRequirements that
 *     distinguish image-only vs video-only media slots, exampleProps with
 *     absolute URLs for both image and video, and the enriched propsSchema
 *     projection.
 *   - about and article category blocks: generated API code must not contain
 *     placeholder media variables or relative image paths.
 *   - iframe-embed, script-embed, free-form-design, tripleseat-form: the
 *     generated `code` must survive octane's example_code extractor intact
 *     (single `return (` marker, no early `);` sever, under the 1400-char
 *     cap, no dropped props), reference https media only, ship a non-empty
 *     propsSchema/exampleProps/importantUsageNotes with no legacy
 *     defaultProps, and — for free-form-design — carry a complete className
 *     manifest covering designTree plus sectionClassName/containerClassName.
 *     The manifest may be an inline `className="…"` literal or a single
 *     static string const referenced as `className={IDENT}` (needed because
 *     rich demos exceed octane's 1400-char example_code cap when the full
 *     manifest is inlined in the JSX); either way it is resolved statically
 *     and checked for exact token-set equality.
 *   - componentLoaders keys must all resolve to a registry block id.
 *   - Schema-wide invariants: the renamed `exampleProps` key replaces the
 *     legacy `defaultProps` key — neither block should still emit
 *     `defaultProps`.
 */

import fs from "fs";
import path from "path";

const repoRoot = process.cwd();
const generatedPath = path.join(
  repoRoot,
  "src",
  "data",
  "registry.generated.json",
);

const failures = [];
const record = (msg) => failures.push(msg);

const registry = JSON.parse(fs.readFileSync(generatedPath, "utf-8"));

const ABOUT_BLOCK_IDS = [
  "alternating-blocks",
  "about-mission-features",
  "about-stats-showcase",
  "about-company-profile",
  "about-vision-gallery",
  "about-developer-story",
  "about-story-gallery",
  "about-streamline-team",
  "about-developer-profile",
  "about-startup-team",
  "about-minimal-story",
  "about-story-hero",
  "about-stats-sidebar",
  "about-interactive-tabs",
  "about-mission-dual-image",
  "about-story-expertise",
  "about-network-spotlight",
  "about-location-info-hero",
  "about-split-hero",
  "about-mission-principles",
  "about-expandable-values",
  "community-initiatives",
  "about-culture-tabs",
];

const ABOUT_BLOCK_IDS_WITH_MEDIA = new Set([
  "alternating-blocks",
  "about-mission-features",
  "about-stats-showcase",
  "about-company-profile",
  "about-vision-gallery",
  "about-developer-story",
  "about-story-gallery",
  "about-streamline-team",
  "about-developer-profile",
  "about-startup-team",
  "about-minimal-story",
  "about-story-hero",
  "about-interactive-tabs",
  "about-mission-dual-image",
  "about-story-expertise",
  "about-network-spotlight",
  "about-location-info-hero",
  "about-split-hero",
  "community-initiatives",
  "about-culture-tabs",
]);

const ARTICLE_BLOCK_IDS = [
  "article-hero-prose",
  "article-sidebar-sticky",
  "article-toc-sidebar",
  "article-breadcrumb-social",
  "article-compact-toc",
  "article-chapters-author",
  "article-split-animated",
];

const ARTICLE_BLOCK_IDS_WITH_MEDIA = new Set(ARTICLE_BLOCK_IDS);

function topLevelPropFromPath(p) {
  return p.split(/[.[]/)[0] || p;
}

function enrichPropsSchemaWithConstraints(propsSchema, ur) {
  if (!ur) return propsSchema;
  const out = { ...propsSchema };
  if (ur.requiredProps) {
    for (const name of ur.requiredProps) {
      if (out[name]) out[name] = { ...out[name], required: true };
    }
  }
  if (ur.propConstraints) {
    for (const [name, c] of Object.entries(ur.propConstraints)) {
      const base = out[name] || { type: "object", description: "" };
      out[name] = {
        ...base,
        ...(c.required !== undefined ? { required: c.required } : {}),
        ...(c.maxLength !== undefined ? { maxLength: c.maxLength } : {}),
        ...(c.count !== undefined ? { count: c.count } : {}),
        ...(c.minItems !== undefined ? { minItems: c.minItems } : {}),
        ...(c.maxItems !== undefined ? { maxItems: c.maxItems } : {}),
        ...(c.pinnedValues !== undefined
          ? { pinnedValues: c.pinnedValues }
          : {}),
      };
    }
  }
  if (ur.mediaSlots) {
    for (const slot of Object.values(ur.mediaSlots)) {
      const name = topLevelPropFromPath(slot.path);
      if (out[name]) out[name] = { ...out[name], mediaHints: slot };
    }
  }
  return out;
}

function check(prefix, condition, message) {
  if (!condition) record(`[${prefix}] ${message}`);
}

function findBlock(id) {
  const block = registry.blocks.find((b) => b.id === id);
  if (!block) {
    record(`block '${id}' missing from registry.generated.json`);
    return null;
  }
  return block;
}

// ---------- about category code field safety ----------
for (const id of ABOUT_BLOCK_IDS) {
  const block = findBlock(id);
  if (!block) continue;

  const code = block.code || "";

  check(id, !!block.usageRequirements, "usageRequirements missing");
  check(id, !!block.exampleProps, "exampleProps missing");
  check(
    id,
    !("defaultProps" in block),
    "legacy defaultProps key must not be present",
  );
  check(
    id,
    !/imagePlaceholders/.test(code),
    "code must not import/use 'imagePlaceholders'",
  );
  check(
    id,
    !/videoPlaceholders/.test(code),
    "code must not import/use 'videoPlaceholders'",
  );
  check(
    id,
    !/brandLogoPlaceholders/.test(code),
    "code must not import/use 'brandLogoPlaceholders'",
  );
  check(
    id,
    !/["']\/images\//.test(code),
    "code must not use relative '/images/' paths",
  );

  if (ABOUT_BLOCK_IDS_WITH_MEDIA.has(id)) {
    check(
      id,
      /https?:\/\//.test(code),
      "code must reference absolute media URLs",
    );
    check(
      id,
      Object.keys(block.usageRequirements?.mediaSlots || {}).length > 0,
      "mediaSlots missing for media-capable about block",
    );
  }
}

// ---------- article category code field safety ----------
for (const id of ARTICLE_BLOCK_IDS) {
  const block = findBlock(id);
  if (!block) continue;

  const code = block.code || "";

  check(id, !!block.usageRequirements, "usageRequirements missing");
  check(id, !!block.exampleProps, "exampleProps missing");
  check(
    id,
    !("defaultProps" in block),
    "legacy defaultProps key must not be present",
  );
  check(
    id,
    !/imagePlaceholders/.test(code),
    "code must not import/use 'imagePlaceholders'",
  );
  check(
    id,
    !/videoPlaceholders/.test(code),
    "code must not import/use 'videoPlaceholders'",
  );
  check(
    id,
    !/["']\/images\//.test(code),
    "code must not use relative '/images/' paths",
  );
  check(
    id,
    !/\bshareUrls=/.test(code),
    "code must not use unsupported 'shareUrls' prop",
  );
  check(
    id,
    !/\bctaButtonText=/.test(code),
    "code must not use unsupported 'ctaButtonText' prop",
  );
  check(id, !/\bctaText=/.test(code), "code must not use 'ctaText' prop");
  check(id, !/\bctaHref=/.test(code), "code must not use 'ctaHref' prop");

  if (ARTICLE_BLOCK_IDS_WITH_MEDIA.has(id)) {
    check(
      id,
      /https?:\/\//.test(code),
      "code must reference absolute media URLs",
    );
    check(
      id,
      Object.keys(block.usageRequirements?.mediaSlots || {}).length > 0,
      "mediaSlots missing for media-capable article block",
    );
  }
}

// ---------- hero-mental-health-team ----------
const hmht = findBlock("hero-mental-health-team");
if (hmht) {
  const pfx = "hero-mental-health-team";

  // Renamed contract key
  check(
    pfx,
    !("defaultProps" in hmht),
    "legacy 'defaultProps' key must not be present after #88 rename",
  );
  check(pfx, "exampleProps" in hmht, "exampleProps key missing");

  // Backwards-compat fields still present
  for (const field of [
    "id",
    "name",
    "title",
    "category",
    "categorySlug",
    "thumbnail",
    "componentPath",
    "code",
    "propsSchema",
    "dependencies",
    "tags",
    "importantUsageNotes",
  ]) {
    check(pfx, field in hmht, `missing legacy field '${field}'`);
  }

  // featuredImage typo must be gone
  check(
    pfx,
    !/featuredImage/.test(hmht.importantUsageNotes || ""),
    "importantUsageNotes still contains 'featuredImage' typo",
  );
  check(
    pfx,
    /featureImage/.test(hmht.importantUsageNotes || ""),
    "importantUsageNotes does not reference 'featureImage'",
  );

  const ur = hmht.usageRequirements;
  check(pfx, !!ur, "usageRequirements missing");
  if (ur) {
    check(pfx, Array.isArray(ur.requiredProps), "requiredProps not an array");
    for (const req of ["heading", "smallImages", "featureImage", "testimonial"]) {
      check(
        pfx,
        ur.requiredProps?.includes(req),
        `requiredProps missing '${req}'`,
      );
    }
    const pc = ur.propConstraints || {};
    check(pfx, pc.heading?.maxLength === 40, "heading.maxLength != 40");
    check(pfx, pc.description?.maxLength === 130, "description.maxLength != 130");
    check(pfx, pc.smallImages?.count === 2, "smallImages.count != 2");
    check(pfx, pc.smallImages?.minItems === 2, "smallImages.minItems != 2");
    check(pfx, pc.smallImages?.maxItems === 2, "smallImages.maxItems != 2");
    check(
      pfx,
      pc.actions?.pinnedValues?.["0.variant"] === "default",
      "actions[0].variant pin != default",
    );
    check(
      pfx,
      pc.actions?.pinnedValues?.["1.variant"] === "outline",
      "actions[1].variant pin != outline",
    );

    const slots = ur.mediaSlots || {};
    check(pfx, !!slots.featureImage, "mediaSlots.featureImage missing");
    check(
      pfx,
      slots.featureImage?.path === "featureImage",
      "featureImage slot path mismatch",
    );
    check(
      pfx,
      slots.featureImage?.roles?.includes("feature"),
      "featureImage slot missing 'feature' role",
    );
    check(
      pfx,
      slots.featureImage?.disallowedRoles?.includes("logo"),
      "featureImage slot should disallow 'logo'",
    );
    check(pfx, !!slots["smallImages[]"], "mediaSlots.smallImages[] missing");
    check(
      pfx,
      !!slots["testimonial.avatarSrc"],
      "mediaSlots.testimonial.avatarSrc missing",
    );

    check(
      pfx,
      ur.requiresSiteCapabilities?.includes("reviews_or_testimonials"),
      "requiresSiteCapabilities missing 'reviews_or_testimonials'",
    );
    check(
      pfx,
      ur.requiresSiteCapabilities?.includes("media_library"),
      "requiresSiteCapabilities missing 'media_library'",
    );
  }

  // exampleProps canonical example present, with ABSOLUTE URLs per #88
  const ep = hmht.exampleProps || {};
  check(pfx, !!ep.heading, "exampleProps.heading missing");
  check(
    pfx,
    Array.isArray(ep.smallImages) && ep.smallImages.length === 2,
    "exampleProps.smallImages should have 2 entries",
  );
  check(pfx, !!ep.featureImage?.src, "exampleProps.featureImage.src missing");
  check(
    pfx,
    /^https?:\/\//.test(ep.featureImage?.src || ""),
    "exampleProps.featureImage.src must be an absolute URL",
  );
  for (const [i, img] of (ep.smallImages || []).entries()) {
    check(
      pfx,
      /^https?:\/\//.test(img?.src || ""),
      `exampleProps.smallImages[${i}].src must be an absolute URL`,
    );
  }
  check(
    pfx,
    /^https?:\/\//.test(ep.testimonial?.avatarSrc || ""),
    "exampleProps.testimonial.avatarSrc must be an absolute URL",
  );
  check(pfx, !!ep.testimonial?.author, "exampleProps.testimonial.author missing");
  check(
    pfx,
    Array.isArray(ep.actions) && ep.actions.length === 2,
    "exampleProps.actions should have 2 entries",
  );
  check(
    pfx,
    ep.actions?.[0]?.variant === "default",
    "exampleProps.actions[0].variant != default",
  );
  check(
    pfx,
    ep.actions?.[1]?.variant === "outline",
    "exampleProps.actions[1].variant != outline",
  );

  // Code field safety: example demo code must not reference placeholder
  // media variables or relative /images/ paths, and must use absolute URLs.
  const code = hmht.code || "";
  check(
    pfx,
    !/imagePlaceholders/.test(code),
    "code must not import/use 'imagePlaceholders'",
  );
  check(
    pfx,
    !/videoPlaceholders/.test(code),
    "code must not import/use 'videoPlaceholders'",
  );
  check(
    pfx,
    !/["']\/images\//.test(code),
    "code must not use relative '/images/' paths",
  );
  check(
    pfx,
    /https?:\/\//.test(code),
    "code must reference absolute media URLs",
  );

  // propsSchema projection
  const enriched = enrichPropsSchemaWithConstraints(
    hmht.propsSchema || {},
    hmht.usageRequirements,
  );
  check(pfx, enriched.smallImages?.minItems === 2, "enriched smallImages.minItems != 2");
  check(pfx, enriched.smallImages?.maxItems === 2, "enriched smallImages.maxItems != 2");
  check(pfx, enriched.smallImages?.required === true, "enriched smallImages.required != true");
  check(pfx, enriched.heading?.maxLength === 40, "enriched heading.maxLength != 40");
  check(pfx, enriched.description?.maxLength === 130, "enriched description.maxLength != 130");
  check(pfx, enriched.featureImage?.required === true, "enriched featureImage.required != true");
  check(
    pfx,
    enriched.featureImage?.mediaHints?.roles?.includes("feature"),
    "enriched featureImage.mediaHints missing 'feature' role",
  );
  check(
    pfx,
    enriched.smallImages?.mediaHints?.roles?.includes("thumbnail"),
    "enriched smallImages.mediaHints missing 'thumbnail' role",
  );
}

// ---------- hero-mentorship-video-split ----------
const hmvs = findBlock("hero-mentorship-video-split");
if (hmvs) {
  const pfx = "hero-mentorship-video-split";

  check(
    pfx,
    !("defaultProps" in hmvs),
    "legacy 'defaultProps' key must not be present after #88 rename",
  );
  check(pfx, "exampleProps" in hmvs, "exampleProps key missing");

  check(
    pfx,
    typeof hmvs.importantUsageNotes === "string" &&
      hmvs.importantUsageNotes.length > 0,
    "importantUsageNotes missing",
  );
  check(
    pfx,
    /image asset/i.test(hmvs.importantUsageNotes || ""),
    "importantUsageNotes should warn about image/video asset distinction",
  );
  check(
    pfx,
    /NEVER swap/i.test(hmvs.importantUsageNotes || ""),
    "importantUsageNotes should explicitly warn against swapping image/video",
  );

  const ur = hmvs.usageRequirements;
  check(pfx, !!ur, "usageRequirements missing");
  if (ur) {
    check(pfx, ur.requiredProps?.includes("heading"), "requiredProps missing 'heading'");
    check(pfx, ur.requiredProps?.includes("image"), "requiredProps missing 'image'");

    const pc = ur.propConstraints || {};
    check(pfx, pc.heading?.maxLength === 60, "heading.maxLength != 60");
    check(pfx, pc.description?.maxLength === 220, "description.maxLength != 220");
    check(pfx, pc.image?.required === true, "image.required != true");

    const slots = ur.mediaSlots || {};
    check(pfx, !!slots.image, "mediaSlots.image missing");
    check(
      pfx,
      slots.image?.roles?.includes("hero"),
      "mediaSlots.image should include 'hero' role",
    );
    check(
      pfx,
      slots.image?.disallowedRoles?.includes("video-thumbnail"),
      "mediaSlots.image should disallow 'video-thumbnail' (image-only slot)",
    );

    check(
      pfx,
      !!slots["modalVideo.video.src"],
      "mediaSlots.modalVideo.video.src missing (video-only slot)",
    );
    check(
      pfx,
      Array.isArray(slots["modalVideo.video.src"]?.roles) &&
        slots["modalVideo.video.src"].roles.length === 0,
      "modalVideo.video.src roles must be empty (no image roles allowed)",
    );
    check(
      pfx,
      slots["modalVideo.video.src"]?.disallowedRoles?.includes("hero"),
      "modalVideo.video.src should disallow 'hero' role",
    );
    check(
      pfx,
      slots["modalVideo.video.src"]?.disallowedRoles?.includes("feature"),
      "modalVideo.video.src should disallow 'feature' role",
    );

    check(
      pfx,
      !!slots["modalVideo.image.src"],
      "mediaSlots.modalVideo.image.src missing (poster image slot)",
    );
    check(
      pfx,
      slots["modalVideo.image.src"]?.roles?.includes("video-thumbnail"),
      "modalVideo.image.src should include 'video-thumbnail' role",
    );

    check(
      pfx,
      ur.requiresSiteCapabilities?.includes("media_library"),
      "requiresSiteCapabilities missing 'media_library'",
    );
  }

  // exampleProps with absolute URLs for both image and video
  const ep = hmvs.exampleProps || {};
  check(pfx, !!ep.heading, "exampleProps.heading missing");
  check(
    pfx,
    /^https?:\/\//.test(ep.image?.src || ""),
    "exampleProps.image.src must be an absolute URL",
  );
  check(
    pfx,
    /^https?:\/\//.test(ep.modalVideo?.image?.src || ""),
    "exampleProps.modalVideo.image.src must be an absolute URL",
  );
  check(
    pfx,
    /^https?:\/\//.test(ep.modalVideo?.video?.src || ""),
    "exampleProps.modalVideo.video.src must be an absolute URL",
  );

  // Code field safety: example demo code must not reference placeholder
  // media variables, must use the new modalVideo prop shape, and must not
  // use the legacy videoUrl/videoThumbnail props.
  const code = hmvs.code || "";
  check(
    pfx,
    !/imagePlaceholders/.test(code),
    "code must not import/use 'imagePlaceholders'",
  );
  check(
    pfx,
    !/videoPlaceholders/.test(code),
    "code must not import/use 'videoPlaceholders'",
  );
  check(
    pfx,
    !/["']\/images\//.test(code),
    "code must not use relative '/images/' paths",
  );
  check(
    pfx,
    /modalVideo/.test(code),
    "code must use the 'modalVideo' prop shape",
  );
  check(
    pfx,
    !/\bvideoUrl=/.test(code),
    "code must not use legacy 'videoUrl' prop",
  );
  check(
    pfx,
    !/\bvideoThumbnail=/.test(code),
    "code must not use legacy 'videoThumbnail' prop",
  );
  check(
    pfx,
    /https?:\/\//.test(code),
    "code must reference absolute media URLs",
  );

  // propsSchema projection: image gets media hints, mediaHints distinguish video slot
  const enriched = enrichPropsSchemaWithConstraints(
    hmvs.propsSchema || {},
    hmvs.usageRequirements,
  );
  check(pfx, enriched.image?.required === true, "enriched image.required != true");
  check(pfx, enriched.heading?.maxLength === 60, "enriched heading.maxLength != 60");
  check(
    pfx,
    enriched.image?.mediaHints?.disallowedRoles?.includes("video-thumbnail"),
    "enriched image.mediaHints should disallow 'video-thumbnail'",
  );
}

// ---------- advanced + integrations embed blocks ----------
// These four blocks are republished by octane as the AI agent's canonical
// worked example (context_adapters.example_code), so the generated `code`
// field has to survive octane's extractor intact. The assertions below mirror
// octane/src/services/component_registry.rs:
//   - sanitize_showcase_example_code(): slice after the FIRST "return (",
//     cut at the FIRST ");" pair, cap at MAX_EXAMPLE_CODE_CHARS = 1400.
//   - example_code_has_unsafe_media_markers(): drop the field entirely when
//     demo-only placeholder media is referenced.
const MAX_EXAMPLE_CODE_CHARS = 1400;
const RETURN_MARKER = "return (";
const EXAMPLE_CUT_MARKER = ");";

const EMBED_BLOCK_CATEGORIES = {
  "iframe-embed": "advanced",
  "script-embed": "advanced",
  "free-form-design": "advanced",
  "tripleseat-form": "integrations",
};

/** Mirror of octane's sanitize_showcase_example_code. */
function sanitizeExampleCode(code) {
  const raw = (code || "").trim();
  if (!raw) return null;
  const markerIndex = raw.indexOf(RETURN_MARKER);
  let body =
    markerIndex === -1 ? raw : raw.slice(markerIndex + RETURN_MARKER.length);
  const cutIndex = body.indexOf(EXAMPLE_CUT_MARKER);
  if (cutIndex !== -1) body = body.slice(0, cutIndex);
  const trimmed = body.trim();
  if (!trimmed) return null;
  const chars = [...trimmed];
  if (chars.length <= MAX_EXAMPLE_CODE_CHARS) {
    return { excerpt: trimmed, chars: chars.length, truncated: false };
  }
  return {
    excerpt: chars.slice(0, MAX_EXAMPLE_CODE_CHARS).join(""),
    chars: chars.length,
    truncated: true,
  };
}

/** Mirror of octane's example_code_has_unsafe_media_markers. */
function hasUnsafeMediaMarkers(code) {
  if (/imagePlaceholders|videoPlaceholders|brandLogoPlaceholders/.test(code)) {
    return true;
  }
  return /["'](?:\/images\/|\/videos\/|\/img\/|\/media\/)/.test(code);
}

/** Top-level JSX prop names written on their own line in the demo source. */
function jsxPropNames(code) {
  return [...code.matchAll(/\n\s+([A-Za-z][A-Za-z0-9]*)=[{"]/g)].map(
    (m) => m[1],
  );
}

function classTokens(value) {
  return new Set((value || "").split(/\s+/).filter(Boolean));
}

for (const [id, expectedCategory] of Object.entries(EMBED_BLOCK_CATEGORIES)) {
  const block = findBlock(id);
  if (!block) continue;

  const code = block.code || "";

  check(
    id,
    block.categorySlug === expectedCategory,
    `categorySlug should be '${expectedCategory}', got '${block.categorySlug}'`,
  );
  check(id, code.trim().length > 0, "generated 'code' must not be empty");
  check(
    id,
    !!block.propsSchema && Object.keys(block.propsSchema).length > 0,
    "propsSchema missing or empty",
  );
  check(
    id,
    !!block.exampleProps && Object.keys(block.exampleProps).length > 0,
    "exampleProps missing or empty",
  );
  check(
    id,
    !("defaultProps" in block),
    "legacy defaultProps key must not be present",
  );
  check(
    id,
    typeof block.importantUsageNotes === "string" &&
      block.importantUsageNotes.trim().length > 0,
    "importantUsageNotes missing or empty",
  );
  check(
    id,
    !hasUnsafeMediaMarkers(code),
    "code contains demo-only media markers — octane would drop example_code",
  );
  check(
    id,
    !/["']http:\/\//.test(code),
    "code must only reference https:// URLs",
  );

  // The extraction marker must appear exactly once, otherwise the excerpt
  // starts inside a comment that merely mentions it.
  check(
    id,
    code.split(RETURN_MARKER).length === 2,
    `code must contain the '${RETURN_MARKER}' extraction marker exactly once`,
  );

  const sanitized = sanitizeExampleCode(code);
  check(id, !!sanitized, "sanitized example excerpt is empty");
  if (!sanitized) continue;

  check(
    id,
    !sanitized.truncated,
    `sanitized example excerpt is ${sanitized.chars} chars, over octane's ${MAX_EXAMPLE_CODE_CHARS}-char cap`,
  );
  check(
    id,
    sanitized.excerpt.includes("/>"),
    "sanitized example excerpt is severed before the component's closing '/>' " +
      `(a '${EXAMPLE_CUT_MARKER}' pair appears inside the demo JSX)`,
  );
  check(
    id,
    (sanitized.excerpt.match(/\{/g) || []).length ===
      (sanitized.excerpt.match(/\}/g) || []).length,
    "sanitized example excerpt has unbalanced braces — it was cut mid-prop",
  );

  for (const propName of jsxPropNames(code)) {
    check(
      id,
      sanitized.excerpt.includes(`${propName}=`),
      `prop '${propName}' is dropped from the sanitized example excerpt`,
    );
  }
}

// free-form-design: `className` is a class MANIFEST, and the live-site safelist
// compiler only scans that one prop. It must therefore list every token used in
// designTree plus sectionClassName/containerClassName.
const freeForm = findBlock("free-form-design");
if (freeForm) {
  const code = freeForm.code || "";
  // The manifest is either an inline string literal on the className prop, or
  // a `className={IDENT}` reference to a single static string const declared
  // in the demo (rich demos can't inline 1500+ manifest chars inside the JSX
  // without blowing octane's 1400-char example_code cap checked above). Both
  // forms resolve statically — dynamic expressions still fail the check.
  let manifestValue = null;
  const inlineMatch = /\n\s+className="([^"]*)"/.exec(code);
  if (inlineMatch) {
    manifestValue = inlineMatch[1];
  } else {
    const refMatch = /\n\s+className=\{([A-Za-z_$][\w$]*)\}/.exec(code);
    if (refMatch) {
      const constMatch = new RegExp(
        `const\\s+${refMatch[1]}\\s*=\\s*"([^"]*)";`,
      ).exec(code);
      if (constMatch) manifestValue = constMatch[1];
    }
  }
  check(
    "free-form-design",
    manifestValue !== null,
    "demo must set the className manifest prop (inline literal, or a static " +
      "string const referenced as className={IDENT})",
  );
  if (manifestValue !== null) {
    const manifest = classTokens(manifestValue);
    const section = (/sectionClassName="([^"]*)"/.exec(code) || ["", ""])[1];
    const container = (/containerClassName="([^"]*)"/.exec(code) || ["", ""])[1];
    const tree = [...code.matchAll(/className:\s*"([^"]*)"/g)]
      .map((m) => m[1])
      .join(" ");
    const expected = classTokens(`${section} ${container} ${tree}`);

    const missing = [...expected].filter((t) => !manifest.has(t));
    const extra = [...manifest].filter((t) => !expected.has(t));
    check(
      "free-form-design",
      missing.length === 0,
      `className manifest is missing tokens used in the tree/section: ${missing.join(", ")}`,
    );
    check(
      "free-form-design",
      extra.length === 0,
      `className manifest lists tokens used nowhere in the block: ${extra.join(", ")}`,
    );
  }
}

// ---------- componentLoaders <-> block id agreement ----------
const componentRegistrySource = fs.readFileSync(
  path.join(repoRoot, "src", "lib", "component-registry.ts"),
  "utf-8",
);
const loaderKeys = [
  ...componentRegistrySource.matchAll(
    /^\s{2}"([A-Za-z0-9-]+)":\s*\(\)\s*=>/gm,
  ),
].map((m) => m[1]);
const registryIds = new Set(registry.blocks.map((b) => b.id));
const orphanLoaders = loaderKeys.filter((k) => !registryIds.has(k));
if (orphanLoaders.length > 0) {
  record(
    `componentLoaders has ${orphanLoaders.length} key(s) with no matching block id (loadComponent would silently return null): ${orphanLoaders.slice(0, 5).join(", ")}`,
  );
}
for (const id of Object.keys(EMBED_BLOCK_CATEGORIES)) {
  check(id, loaderKeys.includes(id), "missing a componentLoaders entry");
}

// ---------- Schema-wide invariants ----------
const stillUsingDefaultProps = registry.blocks.filter(
  (b) => "defaultProps" in b,
);
if (stillUsingDefaultProps.length > 0) {
  record(
    `registry.generated.json still emits legacy 'defaultProps' on ${stillUsingDefaultProps.length} blocks (e.g. ${stillUsingDefaultProps
      .slice(0, 3)
      .map((b) => b.id)
      .join(", ")}). The post-#88 contract uses 'exampleProps'.`,
  );
}

if (failures.length > 0) {
  console.error("registry contract verification FAILED:");
  for (const f of failures) console.error(" - " + f);
  process.exit(1);
}

console.log(
  "registry contract verification OK (about/article generated code safety; hero-mental-health-team + hero-mentorship-video-split usageRequirements, mediaSlots, exampleProps absolute URLs, propsSchema projection; iframe-embed/script-embed/free-form-design/tripleseat-form example-code extraction survival, https-only media, propsSchema + exampleProps present, free-form className manifest completeness; componentLoaders/block-id agreement; no legacy defaultProps remain).",
);
