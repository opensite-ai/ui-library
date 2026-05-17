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
  "registry contract verification OK (about/article generated code safety; hero-mental-health-team + hero-mentorship-video-split usageRequirements, mediaSlots, exampleProps absolute URLs, propsSchema projection; no legacy defaultProps remain).",
);
