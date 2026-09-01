# AGENTS.md — opensite-ui-showcase

Instructions for **AI coding agents** working in this repo: the showcase and
documentation platform for the `@opensite/ui` component library. This app is the
**source of truth** for block/category metadata that the rest of the DashTrack
ecosystem consumes. It is deployed to **`https://ui.opensite.dev`** (Vercel).

When in doubt, favor: **(1) registry contract correctness, (2) not breaking the
API surface other repos depend on, (3) preview fidelity**, in that order.

---

## 1. Quick mental model

- **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4**.
  `packageManager` pinned to **pnpm@10.28.0**, Node 24 (`engines.node`).
- Every block in `src/blocks/[category]/[block].tsx` is a **thin showcase demo**
  that imports and renders the real component from **`@opensite/ui`** (pinned
  `3.17.3`) plus the `@page-speed/*` runtime packages.
- The registry metadata (`src/lib/registry.ts` + `src/data/registry.generated.json`)
  is **not** hand-authored per-block — it is generated from `@opensite/ui`'s
  registry contract and synced via `scripts/sync-registry.mjs`.
- This app exposes a public JSON API that **other services consume**:
  - **octane** (Rust) syncs blocks/categories from `ui.opensite.dev` into the
    `ai_semantic_components` table (`POST /api/v1/components/sync`).
  - **dt-cms** (client portal) and the Rails `toastability-service` consume the
    same component data downstream.

---

## 2. GOLDEN RULES

1. **Do not hand-edit `src/data/registry.generated.json`.** It is produced by
   `pnpm sync:registry` (which reads `@opensite/ui`'s registry export). Manual
   edits are overwritten on the next sync. Overrides belong in
   `src/data/registry-overrides.json`.
2. **Keep the public API contract stable.** `octane` and `dt-cms` depend on the
   shape of `/api/categories`, `/api/categories/[slug]`, `/api/blocks/*`, and
   `/api/ai-config`. Renaming/removing a field (e.g. `exampleProps` vs the
   legacy `defaultProps`, `usageRequirements`, `categorySlug`) breaks the Rust
   deserializer in `octane/src/services/component_registry.rs` and the
   TypeScript types in `dt-cms/src/types/component-registry.ts`.
3. **Run `pnpm verify:registry-contract`** after any change to the registry
   shape or the `@opensite/ui` dependency bump. It is the contract gate.
4. **`componentFilterConfig` (in `src/lib/registry.ts`) is the production
   gate.** It is a `blacklist` of not-ready categories/slugs that both the UI
   and the AI agent (`/api/ai-config`) honor. Do not add a blocked category to
   the "ready" surface without updating this config.
5. **Adding a block touches exactly three files** (see §4). Missing any one of
   them produces a block that either doesn't render or isn't discoverable.

---

## 3. Key directories

- `src/blocks/[category]/[block].tsx` — showcase demos (import the real
  `@opensite/ui` component).
- `src/lib/registry.ts` — `productionBlocks` array + `componentFilterConfig`.
- `src/lib/component-registry.ts` — `componentLoaders` map (dynamic imports for
  Turbopack live preview).
- `src/types/blocks.ts` — the `Block`, `Category`, `PropsSchema`,
  `BlockUsageRequirements` contract types (mirror `@opensite/ui`'s registry).
- `src/data/registry.generated.json` — generated registry (DO NOT EDIT).
- `src/data/registry-overrides.json` — manual overrides applied on sync.
- `src/app/api/*` — the public API (see §5).
- `scripts/sync-registry.mjs`, `scripts/sync-free-form-manifest.mjs`,
  `scripts/verify-registry-contract.mjs` — registry sync + contract gate.
- `dev-docs/*` — ecosystem guidelines, semantic site builder, build
  instructions (human-facing design docs).

---

## 4. Adding a new block (three files)

1. **Showcase demo** — `src/blocks/[category]/[block].tsx`:

   ```tsx
   import { YourComponent } from "@opensite/ui/blocks/category/your-component";
   import { imagePlaceholders, optixFlowApiKey } from "@/lib/media";

   export default function Demo() {
     return (
       <YourComponent
         optixFlowConfig={{ apiKey: optixFlowApiKey as string }}
       />
     );
   }
   ```

2. **Registry metadata** — add an entry to `productionBlocks` in
   `src/lib/registry.ts` (id, name, title, category, categorySlug, description,
   thumbnail, componentPath, code, dependencies, tags, propsSchema).

3. **Live preview** — add a `dynamic(() => import("@/blocks/..."))` entry to
   `componentLoaders` in `src/lib/component-registry.ts`.

Then run `pnpm sync:registry && pnpm verify:registry-contract`.

---

## 5. Public API (consumed by other repos)

| Route | Purpose | Consumer |
|---|---|---|
| `GET /api/categories` | All categories + `blockCount` | octane sync |
| `GET /api/categories/[slug]` | Blocks for one category | octane sync |
| `GET /api/blocks/search` | Block search | dt-cms / tooling |
| `GET /api/blocks/[id]` | Single block detail | dt-cms / tooling |
| `GET /api/blocks/[id]/usage` | Usage tracking | tooling |
| `GET /api/ai-config` | `componentFilterConfig` (whitelist/blacklist) | octane (5-min cache) |
| `GET /api/patterns` | Composable patterns | tooling |
| `GET /api/admin/registry` | Admin registry view | internal |

Response envelope is `{ success, data, timestamp, error? }` (see
`src/types/blocks.ts` `ApiResponse<T>`).

---

## 6. Registry contract notes (load-bearing)

- `Block.exampleProps` **replaced** `defaultProps` upstream
  (`opensite-ai/opensite-ui#88`). It is **reference/preview data only — never a
  runtime fallback** for missing client content. octane keeps a legacy
  `defaultProps` field for backwards compatibility during migration.
- `Block.usageRequirements` is the **structured** sibling to the prose
  `importantUsageNotes`: `requiredProps`, `propConstraints`, `mediaSlots`,
  `requiresSiteCapabilities`. octane prefers it over parsing the prose.
- `PropsSchema` entries carry an `enum` for closed literal unions and
  constraint hints (`maxLength`, `minItems`, `maxItems`, `pinnedValues`,
  `mediaHints`) projected from `usageRequirements.propConstraints`.

---

## 7. Verification

```bash
pnpm install --frozen-lockfile
pnpm sync:registry                 # regenerate registry from @opensite/ui
pnpm verify:registry-contract      # contract gate (run after registry/shape changes)
pnpm build                         # next build — the real gate
pnpm lint
```

- `pnpm build` must pass before claiming a build-affecting change works.
- The Vercel preview deploy is the production build gate (no full CI build).

---

## 8. Cross-repo relationship (read before touching the contract)

- **`@opensite/ui`** (`utility-modules/opensite-ui`) owns the registry contract
  (`src/registry/blocks.ts`, `builder-contract.ts`) and the actual components.
  Bump its version here only alongside a contract review.
- **`octane`** (`../octane`) syncs this app's `/api/categories` + `/api/ai-config`
  into `ai_semantic_components` (see `octane/src/services/component_registry.rs`
  and `octane/docs/COMPONENT_REGISTRY_QUICK_REF.md`). The `ShowcaseBlock` Rust
  struct mirrors `Block` here — keep them in lockstep.
- **`dt-cms`** (`../dt-cms/Source`) consumes the synced component data through
  the Rails `/api/v1/components/*` API (`src/hooks/useComponentRegistry.ts`,
  `src/types/component-registry.ts`). It never fetches `ui.opensite.dev`
  directly (no CORS).
