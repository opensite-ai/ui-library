/**
 * Regenerates the CLASS_MANIFEST const in the free-form-design showcase demo.
 *
 * The free-form-design block is unique: its `className` prop is a class
 * MANIFEST (applied to nothing), because live customer sites compile their
 * Tailwind stylesheet from that single prop — classes that only exist inside
 * `designTree` (or in sectionClassName/containerClassName) get no CSS rule
 * on a live site unless they are mirrored into the manifest.
 *
 * Run this after ANY edit to the demo's designTree, sectionClassName or
 * containerClassName:
 *
 *   pnpm sync:free-form-manifest
 *
 * Token extraction intentionally mirrors scripts/verify-registry-contract.mjs
 * (which in turn mirrors octane's server-side manifest derivation), so a
 * freshly synced manifest always passes verification. The verifier stays the
 * source of truth — this script is a convenience writer, not a bypass: it is
 * NOT part of prepublishOnly, so a stale or hand-mangled manifest still fails
 * CI until you consciously regenerate it and review the diff (that review is
 * how typos like a misspelled class get caught).
 */

import fs from "fs";
import path from "path";

const repoRoot = process.cwd();
const demoPath = path.join(
  repoRoot,
  "src",
  "blocks",
  "advanced",
  "free-form-design.tsx",
);

const source = fs.readFileSync(demoPath, "utf-8");

// Same extraction rules as verify-registry-contract.mjs.
const section = (/sectionClassName="([^"]*)"/.exec(source) || ["", ""])[1];
const container = (/containerClassName="([^"]*)"/.exec(source) || ["", ""])[1];
const tree = [...source.matchAll(/className:\s*"([^"]*)"/g)]
  .map((m) => m[1])
  .join(" ");

const tokens = [
  ...new Set(`${section} ${container} ${tree}`.split(/\s+/).filter(Boolean)),
].sort();
const manifest = tokens.join(" ");

const constRe = /(const\s+CLASS_MANIFEST\s*=\s*)"([^"]*)";/;
const match = constRe.exec(source);
if (!match) {
  console.error(
    "sync-free-form-manifest: could not find `const CLASS_MANIFEST = \"…\";` " +
      "in the demo — the const must be a single static string literal.",
  );
  process.exit(1);
}

const previous = new Set(match[2].split(/\s+/).filter(Boolean));
const next = new Set(tokens);
const added = tokens.filter((t) => !previous.has(t));
const removed = [...previous].filter((t) => !next.has(t)).sort();

if (added.length === 0 && removed.length === 0) {
  console.log(
    `free-form manifest already in sync (${tokens.length} tokens).`,
  );
  process.exit(0);
}

fs.writeFileSync(demoPath, source.replace(constRe, `$1"${manifest}";`));

console.log(
  `free-form manifest rewritten: ${tokens.length} tokens ` +
    `(+${added.length} / -${removed.length}).`,
);
if (added.length > 0) console.log("  added:   " + added.join(", "));
if (removed.length > 0) console.log("  removed: " + removed.join(", "));
console.log(
  "Review the added tokens above — a typo'd class will happily land in the " +
    "manifest but produce no CSS anywhere.",
);
