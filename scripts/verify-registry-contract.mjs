/**
 * Verify the generated registry contract for blocks consumed by the
 * downstream Octane sync. Run with `node scripts/verify-registry-contract.mjs`.
 * Exits non-zero on contract regression.
 *
 * Today this targets hero-mental-health-team, the canonical block used to
 * validate the structured usageRequirements/mediaSlots/defaultProps fields
 * added in opensite-ui PR #87.
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
const block = registry.blocks.find((b) => b.id === "hero-mental-health-team");

if (!block) {
  console.error("hero-mental-health-team missing from registry.generated.json");
  process.exit(1);
}

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
  if (!(field in block)) record(`missing legacy field ${field}`);
}

// featuredImage typo must be gone
if (/featuredImage/.test(block.importantUsageNotes || "")) {
  record("importantUsageNotes still contains 'featuredImage' typo");
}
if (!/featureImage/.test(block.importantUsageNotes || "")) {
  record("importantUsageNotes does not reference 'featureImage'");
}

// usageRequirements structure
const ur = block.usageRequirements;
if (!ur) {
  record("usageRequirements missing");
} else {
  if (!Array.isArray(ur.requiredProps)) record("requiredProps not an array");
  for (const req of ["heading", "smallImages", "featureImage", "testimonial"]) {
    if (!ur.requiredProps?.includes(req))
      record(`requiredProps missing '${req}'`);
  }

  const pc = ur.propConstraints || {};
  if (pc.heading?.maxLength !== 40) record("heading.maxLength != 40");
  if (pc.description?.maxLength !== 130) record("description.maxLength != 130");
  if (pc.smallImages?.count !== 2) record("smallImages.count != 2");
  if (pc.smallImages?.minItems !== 2) record("smallImages.minItems != 2");
  if (pc.smallImages?.maxItems !== 2) record("smallImages.maxItems != 2");
  if (pc.actions?.pinnedValues?.["0.variant"] !== "default")
    record("actions[0].variant pin != default");
  if (pc.actions?.pinnedValues?.["1.variant"] !== "outline")
    record("actions[1].variant pin != outline");

  const slots = ur.mediaSlots || {};
  if (!slots.featureImage) record("mediaSlots.featureImage missing");
  if (slots.featureImage?.path !== "featureImage")
    record("featureImage slot path mismatch");
  if (!slots.featureImage?.roles?.includes("feature"))
    record("featureImage slot missing 'feature' role");
  if (!slots.featureImage?.disallowedRoles?.includes("logo"))
    record("featureImage slot should disallow 'logo'");

  if (!slots["smallImages[]"]) record("mediaSlots.smallImages[] missing");
  if (!slots["testimonial.avatarSrc"])
    record("mediaSlots.testimonial.avatarSrc missing");

  if (!ur.requiresSiteCapabilities?.includes("reviews_or_testimonials"))
    record("requiresSiteCapabilities missing 'reviews_or_testimonials'");
  if (!ur.requiresSiteCapabilities?.includes("media_library"))
    record("requiresSiteCapabilities missing 'media_library'");
}

// defaultProps canonical example present
const dp = block.defaultProps || {};
if (!dp.heading) record("defaultProps.heading missing");
if (!Array.isArray(dp.smallImages) || dp.smallImages.length !== 2)
  record("defaultProps.smallImages should have 2 entries");
if (!dp.featureImage?.src) record("defaultProps.featureImage.src missing");
if (!dp.testimonial?.author) record("defaultProps.testimonial.author missing");
if (!Array.isArray(dp.actions) || dp.actions.length !== 2)
  record("defaultProps.actions should have 2 entries");
if (dp.actions?.[0]?.variant !== "default")
  record("defaultProps.actions[0].variant != default");
if (dp.actions?.[1]?.variant !== "outline")
  record("defaultProps.actions[1].variant != outline");

// Simulate normalizeBlock's propsSchema enrichment so we catch regressions
// in the API projection (required / minItems / maxItems / maxLength /
// mediaHints) without booting Next.js.
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

const enriched = enrichPropsSchemaWithConstraints(
  block.propsSchema || {},
  block.usageRequirements,
);
if (enriched.smallImages?.minItems !== 2)
  record("enriched smallImages.minItems != 2");
if (enriched.smallImages?.maxItems !== 2)
  record("enriched smallImages.maxItems != 2");
if (enriched.smallImages?.required !== true)
  record("enriched smallImages.required != true");
if (enriched.heading?.maxLength !== 40)
  record("enriched heading.maxLength != 40");
if (enriched.description?.maxLength !== 130)
  record("enriched description.maxLength != 130");
if (enriched.featureImage?.required !== true)
  record("enriched featureImage.required != true");
if (!enriched.featureImage?.mediaHints?.roles?.includes("feature"))
  record("enriched featureImage.mediaHints missing 'feature' role");
if (!enriched.smallImages?.mediaHints?.roles?.includes("thumbnail"))
  record("enriched smallImages.mediaHints missing 'thumbnail' role");

if (failures.length > 0) {
  console.error("registry contract verification FAILED:");
  for (const f of failures) console.error(" - " + f);
  process.exit(1);
}

console.log(
  "registry contract verification OK (hero-mental-health-team: usageRequirements, mediaSlots, defaultProps, featureImage, propsSchema enrichment)",
);
