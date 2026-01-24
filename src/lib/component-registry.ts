/**
 * Component Registry
 * Maps block IDs to their showcase component implementations
 * This is necessary for dynamic imports to work with Turbopack
 */

import type { ComponentType } from "react";
import dynamic from "next/dynamic";

type ComponentLoader = () => Promise<{ default: ComponentType<any> }>;

export const componentLoaders: Record<string, ComponentLoader> = {
  "hero-floating-images": () =>
    import("@/blocks/hero/hero-floating-images"),
  "stats-impact-grid": () =>
    import("@/blocks/stats/stats-impact-grid"),
  "stats-simple-grid": () =>
    import("@/blocks/stats/stats-simple-grid"),
  "stats-icon-cards": () =>
    import("@/blocks/stats/stats-icon-cards"),
  "stats-timeline-tabs": () =>
    import("@/blocks/stats/stats-timeline-tabs"),
  "stats-primary-secondary": () =>
    import("@/blocks/stats/stats-primary-secondary"),
  "stats-growth-timeline": () =>
    import("@/blocks/stats/stats-growth-timeline"),
  "stats-circular-progress": () =>
    import("@/blocks/stats/stats-circular-progress"),
  "stats-card-group": () =>
    import("@/blocks/stats/stats-card-group"),
  "stats-animated-counter": () =>
    import("@/blocks/stats/stats-animated-counter"),
  "stats-number-ticker": () =>
    import("@/blocks/stats/stats-number-ticker"),
  "stats-milestone-sidebar": () =>
    import("@/blocks/stats/stats-milestone-sidebar"),
  "stats-bar-comparison": () =>
    import("@/blocks/stats/stats-bar-comparison"),
};

export const componentRegistry = Object.fromEntries(
  Object.entries(componentLoaders).map(([blockId, loader]) => [
    blockId,
    dynamic(loader),
  ])
) as Record<string, ComponentType<any>>;

/**
 * Get a component by its block ID (client-friendly dynamic component).
 */
export function getComponent(blockId: string): ComponentType<any> | null {
  return componentRegistry[blockId] || null;
}

/**
 * Load a component by its block ID for server-side rendering.
 */
export async function loadComponent(
  blockId: string
): Promise<ComponentType<any> | null> {
  const loader = componentLoaders[blockId];
  if (!loader) {
    return null;
  }

  const module = await loader();
  return module.default ?? null;
}
