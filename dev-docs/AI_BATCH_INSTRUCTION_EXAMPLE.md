*Below is a file that we built out and provide to the AI Batch agent platform that has been working very well and they've done a great job when we've provided it as a mdoel to follow*


# Poorly Implemented Block for the blocks/stats/stats-impact-grid

## Key Issues

1. All of the default props it shows need to be removed - if this was allowed on production it would result in a client's site rendering a list of random, completely made-up stats! All of the defaults below need to be removed:

```tsx
comparisonHeading = "How Does This Compare?",
comparisonDescription = "Our platform delivers results that are 4x better than industry averages across all key performance indicators.",
industryAverage = "24%",
platformValue = "89%",
ctaHeading = "Ready to See These Results in Your Business?",
background = "white",
spacing = "lg",
```

1. Then you need to confirm that each of the props listed above have null guards in place, e.g. if no comparisonHeading is given, it shouldn't render an empty heading tag.
2. **IMPORTANT** Nearly EVERY component in this entire library is going to have to get refactored due to this issue. Analyze our ECOSYSTEM_GUIDELINES doc that we share constantly and you will instantly know that our platform's top priority is performance. But nearly every block in in the 'components/blocks/' directories have the following glaring performance issues:

- Pretty much every component for some reason are using functions to render EVERYTHING: logos, buttons, links, lists, et al. Ultra basic React knowledge knows that components like this will have constant performance issues, memory leaks, re-renders, etc. Pretty much 100% of the functions in the components in every block in this library should be refactored and follow a pretty straightforward approach that should have been what was used from the beginning:
  - Convert functions that don't take in any arguments to `useMemo` hooks and then update how they're called from the components to remove the `()` function call parans.
  - Convert functions that take arguments to use `useCallback` hooks
  - Ensure that the dependency array that the `useMemo` and `useCallback` hooks include the list of values needed so that the values will be updated when needed.
  
1. Prop names that hard code usage such as `industry`, `platform`, et al need to be completely replaced with abstract/re-useable words - this component library is going to be used for websites in countless sectors and the props for all components need to provide flexible interfaces and not hard code/limit usage:

```tsx
/**
 * Industry average value
 */
industryAverage?: React.ReactNode;
/**
 * Platform value
 */
platformValue?: React.ReactNode;
 ```

1. Similar to (4), the same goes for the comments. For the below example, the prop names of `comparisonHeading` and `comparisonDescription` are perfectly fine and abstract/re-useable and declarative for the use case. However the comments/instructions of: `Industry comparison section heading` and `Industry comparison description` technically are causing the same issues as a bad/hard coded prop name. Our Semantic UI AI Page Builder Agent converts the code AND comments from every block into an embedding knowledge engine, so comments like this will result in the AI agent thinking that a component like this can't be used unless the content is related to stats for industries - when in actuality this block should be able to be used for a myriad of use cases.

```tsx
/**
 * Industry comparison section heading
 */
comparisonHeading?: React.ReactNode;
/**
 * Industry comparison description
 */
comparisonDescription?: React.ReactNode;
 ```

1. **Registry metadata must be updated when a block changes.**
   - If you refactor or redesign a block, update its registry entry in
     `src/registry/blocks.ts` (name/description/semanticTags/exampleUsage)
     so the JSON registry stays accurate for downstream tools.

```tsx
"use client";

import * as React from "react";
import { cn } from "../../../lib/utils";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";
import { DynamicIcon } from "../../ui/dynamic-icon";
import { Pressable } from "../../../lib/Pressable";
import { Section } from "../../ui/section";
import type {
  SectionBackground,
  SectionSpacing,
  ActionConfig,
} from "../../../src/types";
import type { PatternName } from "../../ui/pattern-background";

/**
 * An impact stat with icon, value, label, and description
 */
export interface ImpactStat {
  /**
   * Unique identifier for the stat
   */
  id: string;
  /**
   * The stat value (e.g., "437", "2.4", "89")
   */
  value: React.ReactNode;
  /**
   * Prefix for the value (e.g., "$")
   */
  prefix?: React.ReactNode;
  /**
   * Suffix for the value (e.g., "%", "B+", "x")
   */
  suffix?: React.ReactNode;
  /**
   * The label for the stat
   */
  label: React.ReactNode;
  /**
   * Description of the stat
   */
  description: React.ReactNode;
  /**
   * Icon name in format: prefix/name (e.g., "lucide/line-chart")
   */
  icon?: string;
  /**
   * Custom slot for icon (overrides icon prop)
   */
  iconSlot?: React.ReactNode;
  /**
   * Icon color class (e.g., "text-primary", "text-emerald-500")
   */
  iconColor?: string;
  /**
   * Additional CSS classes for the stat card
   */
  className?: string;
}

/**
 * Props for the StatsImpactGrid component
 */
export interface StatsImpactGridProps {
  /**
   * Badge content above the heading
   */
  badge?: React.ReactNode;
  /**
   * Custom slot for badge (overrides badge prop)
   */
  badgeSlot?: React.ReactNode;
  /**
   * Main heading content
   */
  heading?: React.ReactNode;
  /**
   * Description content below the heading
   */
  description?: React.ReactNode;
  /**
   * Array of impact stats to display
   */
  stats?: ImpactStat[];
  /**
   * Custom slot for stats grid (overrides stats array)
   */
  statsSlot?: React.ReactNode;
  /**
   * Industry comparison section heading
   */
  comparisonHeading?: React.ReactNode;
  /**
   * Industry comparison description
   */
  comparisonDescription?: React.ReactNode;
  /**
   * Industry average value
   */
  industryAverage?: React.ReactNode;
  /**
   * Platform value
   */
  platformValue?: React.ReactNode;
  /**
   * Custom slot for comparison section (overrides comparison props)
   */
  comparisonSlot?: React.ReactNode;
  /**
   * CTA heading
   */
  ctaHeading?: React.ReactNode;
  /**
   * Array of action buttons
   */
  actions?: ActionConfig[];
  /**
   * Custom slot for CTA section (overrides ctaHeading and actions)
   */
  ctaSlot?: React.ReactNode;
  /**
   * Background style for the section
   */
  background?: SectionBackground;
  /**
   * Vertical spacing for the section
   */
  spacing?: SectionSpacing;
  /**
   * Background pattern
   */
  pattern?: PatternName;
  /**
   * Pattern opacity (0-1)
   */
  patternOpacity?: number;
  /**
   * Additional CSS classes for the pattern
   */
  patternClassName?: string;
  /**
   * Additional CSS classes for the section
   */
  className?: string;
  /**
   * Additional CSS classes for the container
   */
  containerClassName?: string;
  /**
   * Additional CSS classes for the header
   */
  headerClassName?: string;
  /**
   * Additional CSS classes for the badge
   */
  badgeClassName?: string;
  /**
   * Additional CSS classes for the heading
   */
  headingClassName?: string;
  /**
   * Additional CSS classes for the description
   */
  descriptionClassName?: string;
  /**
   * Additional CSS classes for the stats grid
   */
  statsGridClassName?: string;
  /**
   * Additional CSS classes for stat cards
   */
  statCardClassName?: string;
  /**
   * Additional CSS classes for the comparison section
   */
  comparisonClassName?: string;
  /**
   * Additional CSS classes for the CTA section
   */
  ctaClassName?: string;
}

/**
 * StatsImpactGrid - A comprehensive stats section featuring a grid of impact metrics
 * with icons, an industry comparison bar chart, and a call-to-action. Each stat card
 * displays an icon, large value with prefix/suffix, label, and description. Includes
 * a visual comparison between industry average and platform performance. Ideal for
 * showcasing ROI, business impact, or platform benefits with social proof.
 *
 * @example
 * ```tsx
 * <StatsImpactGrid
 *   badge="Proven Results"
 *   heading="Transforming Businesses With Real Numbers"
 *   stats={[
 *     { id: "roi", value: "437", suffix: "%", label: "Average ROI", ... },
 *   ]}
 * />
 * ```
 */
export function StatsImpactGrid({
  badge,
  badgeSlot,
  heading,
  description,
  stats,
  statsSlot,
  comparisonHeading = "How Does This Compare?",
  comparisonDescription = "Our platform delivers results that are 4x better than industry averages across all key performance indicators.",
  industryAverage = "24%",
  platformValue = "89%",
  comparisonSlot,
  ctaHeading = "Ready to See These Results in Your Business?",
  actions,
  ctaSlot,
  background = "white",
  spacing = "lg",
  pattern,
  patternOpacity,
  patternClassName,
  className,
  containerClassName,
  headerClassName,
  badgeClassName,
  headingClassName,
  descriptionClassName,
  statsGridClassName,
  statCardClassName,
  comparisonClassName,
  ctaClassName,
}: StatsImpactGridProps) {
  const renderBadge = () => {
    if (badgeSlot) return badgeSlot;
    if (!badge) return null;
    return <Badge className={cn("mb-4", badgeClassName)}>{badge}</Badge>;
  };

  const renderStatIcon = (stat: ImpactStat) => {
    if (stat.iconSlot) return stat.iconSlot;
    if (!stat.icon) return null;
    return (
      <div className="mb-6">
        <DynamicIcon
          name={stat.icon}
          size={32}
          className={stat.iconColor || "text-primary"}
        />
      </div>
    );
  };

  const renderStats = () => {
    if (statsSlot) return statsSlot;
    if (!stats || stats.length === 0) return null;

    return (
      <div
        className={cn(
          "mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
          statsGridClassName,
        )}
      >
        {stats.map((stat) => (
          <Card
            key={stat.id}
            className={cn(
              "overflow-hidden border p-0",
              stat.className,
              statCardClassName,
            )}
          >
            <CardContent className="p-6 md:p-8">
              {renderStatIcon(stat)}

              <div className="mb-2 flex items-end">
                {stat.prefix && (
                  <span className="mb-1 mr-1 text-2xl font-bold">
                    {stat.prefix}
                  </span>
                )}
                <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
                  {stat.value}
                </h3>
                {stat.suffix && (
                  <span className="mb-1 ml-1 text-2xl font-bold">
                    {stat.suffix}
                  </span>
                )}
              </div>

              <div className="mb-4 text-xl font-semibold">{stat.label}</div>
              {stat.description &&
                (typeof stat.description === "string" ? (
                  <p className="text-muted-foreground">{stat.description}</p>
                ) : (
                  <div className="text-muted-foreground">
                    {stat.description}
                  </div>
                ))}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderComparison = () => {
    if (comparisonSlot) return comparisonSlot;
    if (
      !comparisonHeading &&
      !comparisonDescription &&
      !industryAverage &&
      !platformValue
    )
      return null;

    return (
      <div className={cn("mb-16 rounded-xl bg-muted p-8", comparisonClassName)}>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
          <div>
            {comparisonHeading &&
              (typeof comparisonHeading === "string" ? (
                <h3 className="mb-4 text-2xl font-bold">{comparisonHeading}</h3>
              ) : (
                <div className="mb-4">{comparisonHeading}</div>
              ))}
            {comparisonDescription &&
              (typeof comparisonDescription === "string" ? (
                <p className="mb-6 text-muted-foreground">
                  {comparisonDescription}
                </p>
              ) : (
                <div className="mb-6">{comparisonDescription}</div>
              ))}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted-foreground/20">
                  <div className="h-full w-[24%] bg-muted-foreground" />
                </div>
                <span className="min-w-[60px] text-sm font-medium">
                  Industry
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                  <div className="h-full w-[89%] bg-primary" />
                </div>
                <span className="min-w-[60px] text-sm font-medium">
                  Our Platform
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center md:border-l md:pl-16 md:text-left">
            <div>
              <div className="text-sm text-muted-foreground">
                INDUSTRY AVERAGE
              </div>
              <div className="text-3xl font-bold">{industryAverage}</div>
            </div>
            <div className="flex h-12 items-center justify-center md:justify-start">
              <DynamicIcon
                name="lucide/arrow-up-right"
                size={32}
                className="text-primary"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-primary">
                OUR PLATFORM
              </div>
              <div className="text-4xl font-bold text-primary">
                {platformValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderActions = () => {
    if (!actions || actions.length === 0) return null;

    return (
      <div className="flex flex-wrap justify-center gap-4">
        {actions.map((action, index) => (
          <Pressable
            key={index}
            href={action.href}
            onClick={action.onClick}
            variant={action.variant || "default"}
            size="lg"
            asButton
            className={
              index === 0
                ? "inline-flex items-center justify-center gap-2"
                : undefined
            }
          >
            {action.label}
            {index === 0 && <DynamicIcon name="lucide/arrow-right" size={16} />}
          </Pressable>
        ))}
      </div>
    );
  };

  const renderCta = () => {
    if (ctaSlot) return ctaSlot;
    if (!ctaHeading && (!actions || actions.length === 0)) return null;

    return (
      <div className={cn("text-center", ctaClassName)}>
        {ctaHeading &&
          (typeof ctaHeading === "string" ? (
            <h3 className="mb-6 text-2xl font-bold">{ctaHeading}</h3>
          ) : (
            <div className="mb-6">{ctaHeading}</div>
          ))}
        {renderActions()}
      </div>
    );
  };

  return (
    <Section
      background={background}
      spacing={spacing}
      pattern={pattern}
      patternOpacity={patternOpacity}
      patternClassName={patternClassName}
      className={cn("relative overflow-hidden", className)}
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 to-background" />

      <div className={cn("relative mx-auto max-w-5xl", containerClassName)}>
        <div className={cn("mb-12 text-center", headerClassName)}>
          {renderBadge()}
          {heading &&
            (typeof heading === "string" ? (
              <h2
                className={cn(
                  "mb-4 text-3xl font-bold md:text-5xl",
                  headingClassName,
                )}
              >
                {heading}
              </h2>
            ) : (
              <div className={cn("mb-4", headingClassName)}>{heading}</div>
            ))}
          {description &&
            (typeof description === "string" ? (
              <p
                className={cn(
                  "mx-auto max-w-3xl text-lg text-muted-foreground",
                  descriptionClassName,
                )}
              >
                {description}
              </p>
            ) : (
              <div className={cn("mx-auto max-w-3xl", descriptionClassName)}>
                {description}
              </div>
            ))}
        </div>

        {renderStats()}
        {renderComparison()}
        {renderCta()}
      </div>
    </Section>
  );
}
```

---

# Critical Setup Steps When Adding New Block Categories

When adding a new category of blocks to the UI Showcase application, you **MUST** complete ALL of the following steps in order. Skipping any step will result in broken previews and wasted time.

## Step 1: Verify Component Exports in @opensite/ui Library

**Location**: `/Users/jordanhudgens/code/dashtrack/utility-modules/opensite-ui/`

Before creating showcase files, verify that all components are properly exported from the `@opensite/ui` npm module.

### Check 1: Verify barrel export files exist

Each block component needs a corresponding barrel export file in the `src/` directory.

**Example**: For `feature-animated-carousel` component located at:
```
components/blocks/features/feature-animated-carousel.tsx
```

There MUST be a corresponding barrel export file at:
```
src/feature-animated-carousel.ts
```

**Barrel export file format**:
```typescript
/**
 * FeatureAnimatedCarousel - Individual export for tree-shaking
 *
 * @example
 * ```ts
 * import { FeatureAnimatedCarousel } from "@opensite/ui/blocks/features/feature-animated-carousel";
 * ```
 */

export { FeatureAnimatedCarousel } from "../components/blocks/features/feature-animated-carousel";
export type { FeatureAnimatedCarouselProps, FeatureAnimatedCarouselItem } from "../components/blocks/features/feature-animated-carousel";
```

**Action**: For each block in the category, create the barrel export file if it doesn't exist.

### Check 2: Verify tsup.config.ts entries

**Location**: `/Users/jordanhudgens/code/dashtrack/utility-modules/opensite-ui/tsup.config.ts`

Each block needs TWO entries in tsup.config.ts:

#### 2a. Add to `clientEntryNames` Set (if component uses client-side React features)

Find the `clientEntryNames` set (starting around line 6) and add your block name:

```typescript
const clientEntryNames = new Set([
  // ... existing entries ...
  "feature-animated-carousel",  // Add this
  // ... more entries ...
]);
```

**When to add**: If the component uses:
- React hooks (useState, useEffect, etc.)
- Client-side interactivity
- Browser APIs
- Event handlers

#### 2b. Add to `allEntries` Object

Find the `allEntries` object (starting around line 528) and add your block entry **in alphabetical order**:

```typescript
const allEntries = {
  // ... existing entries ...
  "feature-accordion-image": "src/feature-accordion-image.ts",
  "feature-animated-carousel": "src/feature-animated-carousel.ts",  // Add this
  "feature-badge-grid-six": "src/feature-badge-grid-six.ts",
  // ... more entries ...
};
```

### Check 3: Verify package.json exports

**Location**: `/Users/jordanhudgens/code/dashtrack/utility-modules/opensite-ui/package.json`

Each block should have an export entry in the `exports` section (this is usually auto-generated by the build scripts, but verify it exists):

```json
{
  "exports": {
    "./blocks/features/feature-animated-carousel": {
      "types": "./dist/feature-animated-carousel.d.ts",
      "import": "./dist/feature-animated-carousel.js",
      "require": "./dist/feature-animated-carousel.cjs"
    }
  }
}
```

### Step 1 Actions Summary:

```bash
cd /Users/jordanhudgens/code/dashtrack/utility-modules/opensite-ui

# 1. Create barrel export files for any missing blocks
# (see format above)

# 2. Update tsup.config.ts with clientEntryNames and allEntries

# 3. Rebuild the library to generate dist files
pnpm build

# 4. Verify dist files were created
ls dist/feature-animated-carousel.*
# Should show: feature-animated-carousel.js, feature-animated-carousel.cjs, etc.
```

## Step 2: Register Components in UI Showcase App

**Location**: `/Users/jordanhudgens/code/dashtrack/tools/opensite-ui-showcase/src/lib/component-registry.ts`

After verifying exports in Step 1, you must register all components in the showcase app's component registry.

### Add block imports to `componentLoaders` object

Find the `componentLoaders` object and add entries for ALL blocks in the category you're adding. Add them in a logical group with a comment header:

```typescript
export const componentLoaders: Record<string, ComponentLoader> = {
  // ... existing entries ...

  // Feature blocks
  "feature-icon-grid-accent": () =>
    import("@/blocks/features/feature-icon-grid-accent"),
  "feature-split-image": () =>
    import("@/blocks/features/feature-split-image"),
  "feature-split-image-reverse": () =>
    import("@/blocks/features/feature-split-image-reverse"),
  "feature-animated-carousel": () =>
    import("@/blocks/features/feature-animated-carousel"),
  // ... add ALL blocks in the category ...
};
```

**Critical**: Every single block showcase file you create MUST have a corresponding entry here. Missing even one entry will cause "Component not registered" errors for that block.

## Step 3: Create Showcase Files

**Location**: `/Users/jordanhudgens/code/dashtrack/tools/opensite-ui-showcase/src/blocks/{category}/`

Only after completing Steps 1 and 2, create showcase files for each block. Each showcase file should:

1. Import the component from `@opensite/ui`
2. Import media from `@/lib/media`
3. Use ONLY valid props (check the component's TypeScript interface)
4. Provide comprehensive, realistic examples

**Example**:
```tsx
import { imagePlaceholders } from "@/lib/media";
import { FeatureAnimatedCarousel } from "@opensite/ui/blocks/features/feature-animated-carousel";

export default function Demo() {
  return (
    <FeatureAnimatedCarousel
      features={[
        {
          title: "Lightning Fast Performance",
          description: "Optimized for speed with sub-100ms response times globally.",
          image: imagePlaceholders[51],
          imageAlt: "Performance dashboard",
        },
        // ... more items
      ]}
      spacing="xl"
    />
  );
}
```

## Step 4: Update Registry Overrides

**Location**: `/Users/jordanhudgens/code/dashtrack/tools/opensite-ui-showcase/src/data/registry-overrides.json`

Add entries for all blocks in the format:

```json
{
  "blocks": {
    "feature-animated-carousel": {
      "title": "Feature Animated Carousel",
      "componentPath": "blocks/features/feature-animated-carousel.tsx",
      "thumbnail": "",
      "preview": "",
      "dependencies": [],
      "demoPath": "blocks/features/feature-animated-carousel"
    }
  }
}
```

## Step 5: Verify and Test

After completing all steps:

```bash
cd /Users/jordanhudgens/code/dashtrack/tools/opensite-ui-showcase

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies to pick up updated @opensite/ui
pnpm install

# Run registry sync
pnpm sync:registry

# Try to build
pnpm build
```

### Common Errors and Solutions

#### Error: "Component not registered"
- **Cause**: Missing entry in `/tools/opensite-ui-showcase/src/lib/component-registry.ts`
- **Solution**: Add the component to the `componentLoaders` object (Step 2)

#### Error: "Module not found: Can't resolve '@opensite/ui/blocks/...'"
- **Cause**: Component not properly exported from `@opensite/ui` library
- **Solution**: Complete all of Step 1:
  1. Create barrel export file in `utility-modules/opensite-ui/src/`
  2. Add to `clientEntryNames` in tsup.config.ts (if needed)
  3. Add to `allEntries` in tsup.config.ts
  4. Rebuild library with `pnpm build`
  5. Clear showcase app cache and reinstall

#### Error: Type error with props
- **Cause**: Using props that don't exist on the component
- **Solution**:
  1. Read the component's TypeScript interface
  2. Check valid values for enums (e.g., `SectionBackground`, `SectionSpacing`)
  3. Remove or correct invalid props

## Valid Prop Values Reference

### SectionBackground
Valid values: `"default"`, `"white"`, `"gray"`, `"dark"`, `"gradient"`, `"primary"`, `"secondary"`, `"transparent"`, `"muted"`

### SectionSpacing
Valid values: `"none"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, or any custom string

### ActionConfig variant
Valid values: `"default"`, `"destructive"`, `"outline"`, `"secondary"`, `"ghost"`, `"link"`

## Checklist for Adding New Block Category

Use this checklist every time you add a new block category:

- [ ] **Step 1a**: Verify/create barrel export files in `utility-modules/opensite-ui/src/`
- [ ] **Step 1b**: Add blocks to `clientEntryNames` in tsup.config.ts (if using client features)
- [ ] **Step 1c**: Add blocks to `allEntries` in tsup.config.ts
- [ ] **Step 1d**: Rebuild `@opensite/ui` library with `pnpm build`
- [ ] **Step 1e**: Verify dist files exist in `utility-modules/opensite-ui/dist/`
- [ ] **Step 2**: Add ALL blocks to component-registry.ts `componentLoaders`
- [ ] **Step 3**: Create showcase files with valid props
- [ ] **Step 4**: Update registry-overrides.json
- [ ] **Step 5a**: Clear Next.js cache (`rm -rf .next`)
- [ ] **Step 5b**: Reinstall showcase dependencies (`pnpm install`)
- [ ] **Step 5c**: Run registry sync (`pnpm sync:registry`)
- [ ] **Step 5d**: Test build (`pnpm build`)

**Do not skip any steps**. Following this checklist will prevent the two most common errors and save significant time.
