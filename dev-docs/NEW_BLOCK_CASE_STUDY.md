# OpenSite UI Showcase — New Block Case Study + Batch Instructions

This document is the **canonical playbook** for populating blocks in the OpenSite UI Showcase. It includes:

1. **End‑to‑end instructions** for adding a new block.
2. **Guardrails** that prevent common mistakes.
3. **Completion criteria** for QA.
4. **Full case‑study examples** (code + references) for agents to follow.

---

## ✅ Scope & Goals

The goal is to **populate the showcase app** for 600+ blocks with:

- Accurate block previews (demo components)
- Complete, structured props schemas (auto‑generated)
- Correct metadata from the OpenSite UI registry export
- Minimal manual upkeep, with automation where possible

This app **does not** modify the `@opensite/ui` library itself. It only builds
its **showcase layer** and **registry metadata** on top of it.

---

## 🔗 Key Inputs & Systems

**Source of Truth (OpenSite UI registry export):**
```
https://raw.githubusercontent.com/opensite-ai/opensite-ui/refs/heads/master/registry-export.json
```

**Local OpenSite UI repo (for props + source parsing):**
```
/Users/jordanhudgens/code/dashtrack/utility-modules/opensite-ui/
```

**Showcase app root:**
```
/Users/jordanhudgens/code/dashtrack/tools/opensite-ui-showcase/
```

---

## ✅ Required Steps (for EACH new block)

### 1) Identify the block metadata
- Open `registry-export.json` and locate the block by `id`.
- Capture:
  - `id`
  - `category`
  - `name`
  - `description`
  - `semanticTags`
  - `props` name (e.g., `StatsImpactGridProps`)

This ensures the block is registered correctly and aligns with the source library.

### 2) Inspect the actual component source in OpenSite UI
Find the block component in the local repo:
```
/Users/jordanhudgens/code/dashtrack/utility-modules/opensite-ui/components/blocks/<category>/<block>.tsx
```

Confirm the **prop interface** and **slot patterns**. Pay attention to:
- Optional vs required props
- Slot overrides
- Available data types (arrays, objects, ReactNode)

### 3) Build the showcase demo component
Create a **demo file** in:
```
src/blocks/<category>/<block>.tsx
```

The demo **must**:
- Use real, meaningful content (not placeholders like “Lorem ipsum”).
- Showcase advanced props (e.g., arrays, icon slots, CTA actions).
- Avoid “random default” content that would mislead real users.
- Include enough props that the AI system can infer usage patterns.

### 4) Register the demo component
Update:
```
src/lib/component-registry.ts
```
Add a new loader entry for the block ID so previews can render.

### 5) Add registry overrides (only if needed)
Update:
```
src/data/registry-overrides.json
```
Set `componentPath` (required), `title`, and optional `thumbnail`/`preview`.

If a block does NOT have a final thumbnail, use the placeholder.

### 6) Sync registry to generate props schema + metadata
Run:
```
npm run sync:registry
```

This generates:
```
src/data/registry.generated.json
```
with full metadata + props schema (auto‑parsed from TypeScript source).

---

## ✅ Completion Criteria

A block is “done” only when:

- Demo component renders correctly in Preview tab
- Props tab shows **complete structured schema** (objects + arrays expanded)
- Registry metadata is updated (correct title, category, tags)
- Generated registry includes block `code` + `propsSchema`
- Component preview works in desktop + mobile

---

# ✅ CASE STUDY 1 — STATS IMPACT GRID

## ✅ Source Reference
OpenSite UI component:
```
/Users/jordanhudgens/code/dashtrack/utility-modules/opensite-ui/components/blocks/stats/stats-impact-grid.tsx
```

Registry export entry:
```
{
  "id": "stats-impact-grid",
  "category": "stats",
  "props": "StatsImpactGridProps"
}
```

## ✅ Showcase Demo Implementation
File:
```
src/blocks/stats/stats-impact-grid.tsx
```

```tsx
import { StatsImpactGrid } from "@opensite/ui/blocks/stats/stats-impact-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <StatsImpactGrid
      badge="Proof in the Numbers"
      heading="Impact You Can Measure"
      description="See how teams translate insight into meaningful outcomes across growth, efficiency, and retention."
      stats={[
        {
          id: "growth",
          value: "312",
          suffix: "%",
          label: "Revenue Growth",
          description: "Average year-over-year lift after launch.",
          icon: "lucide/trending-up",
        },
        {
          id: "velocity",
          value: "4.6",
          suffix: "x",
          label: "Delivery Speed",
          description: "Faster time-to-value compared to baseline.",
          icon: "lucide/rocket",
          iconColor: "text-emerald-500",
        },
        {
          id: "retention",
          prefix: "+",
          value: "29",
          suffix: "%",
          label: "Customer Retention",
          description: "Retention gains within the first 90 days.",
          icon: "lucide/user-check",
          iconColor: "text-indigo-500",
        },
      ]}
      comparisonHeading="Before vs. After"
      comparisonDescription="Track the measurable shift between your baseline and optimized performance."
      baselineLabel="Baseline"
      baselineValue="24%"
      baselinePercent={24}
      targetLabel="Optimized"
      targetValue="89%"
      targetPercent={89}
      ctaHeading="Ready to build your own impact story?"
      actions={[
        {
          label: "Start the audit",
          href: "/audit",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View case studies",
          href: "/case-studies",
          variant: "outline",
        },
      ]}
      className="flex items-center justify-center"
      spacing="xl"
    />
  );
}
```

## ✅ Component Registry Entry
File:
```
src/lib/component-registry.ts
```

```ts
"stats-impact-grid": () =>
  import("@/blocks/stats/stats-impact-grid"),
```

## ✅ Override Entry
File:
```
src/data/registry-overrides.json
```

```json
"stats-impact-grid": {
  "title": "Stats Impact Grid",
  "componentPath": "blocks/stats/stats-impact-grid.tsx",
  "dependencies": ["@opensite/ui"]
}
```

---

# ✅ CASE STUDY 2 — HERO FLOATING IMAGES

## ✅ Source Reference
```
/Users/jordanhudgens/code/dashtrack/utility-modules/opensite-ui/components/blocks/hero/hero-floating-images.tsx
```

## ✅ Showcase Demo Implementation
File:
```
src/blocks/hero/hero-floating-images.tsx
```

```tsx
import { imagePlaceholders, optixFlowApiKey } from "@/lib/media";
import { HeroFloatingImages } from "@opensite/ui/blocks/hero/hero-floating-images";
import { Badge } from "@opensite/ui/components/badge";
import { Pressable } from "@opensite/ui/components/pressable";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroFloatingImages
      images={[
        {
          src: imagePlaceholders[10],
          alt: "Floating Image 1",
          className: "rounded-lg shadow-lg",
        },
        {
          src: imagePlaceholders[15],
          alt: "Floating Image 2",
          className: "rounded-lg shadow-lg",
        },
        {
          src: imagePlaceholders[20],
          alt: "Floating Image 3",
          className: "rounded-lg shadow-lg",
        },
      ]}
      optixFlowConfig={{ apiKey: optixFlowApiKey }}
      className="flex items-center justify-center"
      spacing="xl"
    >
      <div className="flex flex-col justify-center">
        <Badge className="mb-6 w-fit" variant="secondary">
          Featured Work
        </Badge>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Build Stunning Websites with
          <br />
          <span className="text-primary">OpenSite UI</span>
        </h1>

        <p className="mb-8 max-w-lg text-lg text-muted-foreground">
          We design and build beautiful digital products that help brands
          connect with their audience. From concept to launch, we bring visions
          to life.
        </p>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <Pressable
            onClick={() => console.log("Clicked")}
            componentType="button"
            size="lg"
            variant="default"
          >
            View Portfolio
            <DynamicIcon name="lucide/arrow-right" className="h-4 w-4" />
          </Pressable>
          <Pressable
            onClick={() => console.log("Clicked")}
            size="lg"
            componentType="button"
            variant="outline"
          >
            Our Process
          </Pressable>
        </div>
      </div>
    </HeroFloatingImages>
  );
}
```

---

## ✅ Common Mistakes to Avoid (Critical)

1. **Using hardcoded default values inside the library component**
   - This must never happen. Defaults belong in demo content only.

2. **Skipping slots / advanced props**
   - The demo must show real usage of the complex props (arrays, icons, actions).

3. **Forgetting the component registry entry**
   - Without this, the preview iframe will fail.

4. **Not running sync after updates**
   - Registry won’t include props/code changes without a sync.

5. **Writing generic props comments**
   - Comments become part of the AI embedding pipeline; they must stay abstract and reusable.

---

## ✅ Final Checklist for Agents

- [ ] Found block in registry-export.json
- [ ] Opened component source in opensite-ui
- [ ] Built showcase demo component
- [ ] Registered component in component registry
- [ ] Added override entry (if needed)
- [ ] Ran `npm run sync:registry`
- [ ] Verified preview + props in UI

---

## ✅ If You’re Unsure
Ask before guessing. It is better to stop than to ship incorrect metadata that pollutes the registry.
