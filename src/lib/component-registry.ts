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
  // Add more components here as they are created
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
