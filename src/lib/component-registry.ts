/**
 * Component Registry
 * Maps block IDs to their showcase component implementations
 * This is necessary for dynamic imports to work with Turbopack
 */

import type { ComponentType } from "react";
import dynamic from "next/dynamic";

type ComponentLoader = () => Promise<{ default: ComponentType<any> }>;

export const componentLoaders: Record<string, ComponentLoader> = {
  // Hero blocks
  "hero-floating-images": () =>
    import("@/blocks/hero/hero-floating-images"),

  // Stats blocks
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

  // About blocks
  "about-company-profile": () =>
    import("@/blocks/about/about-company-profile"),
  "about-culture-tabs": () =>
    import("@/blocks/about/about-culture-tabs"),
  "about-developer-profile": () =>
    import("@/blocks/about/about-developer-profile"),
  "about-developer-story": () =>
    import("@/blocks/about/about-developer-story"),
  "about-expandable-values": () =>
    import("@/blocks/about/about-expandable-values"),
  "about-interactive-tabs": () =>
    import("@/blocks/about/about-interactive-tabs"),
  "about-location-info-hero": () =>
    import("@/blocks/about/about-location-info-hero"),
  "about-minimal-story": () =>
    import("@/blocks/about/about-minimal-story"),
  "about-mission-dual-image": () =>
    import("@/blocks/about/about-mission-dual-image"),
  "about-mission-features": () =>
    import("@/blocks/about/about-mission-features"),
  "about-mission-principles": () =>
    import("@/blocks/about/about-mission-principles"),
  "about-network-spotlight": () =>
    import("@/blocks/about/about-network-spotlight"),
  "about-split-hero": () =>
    import("@/blocks/about/about-split-hero"),
  "about-startup-team": () =>
    import("@/blocks/about/about-startup-team"),
  "about-stats-showcase": () =>
    import("@/blocks/about/about-stats-showcase"),
  "about-stats-sidebar": () =>
    import("@/blocks/about/about-stats-sidebar"),
  "about-story-expertise": () =>
    import("@/blocks/about/about-story-expertise"),
  "about-story-gallery": () =>
    import("@/blocks/about/about-story-gallery"),
  "about-story-hero": () =>
    import("@/blocks/about/about-story-hero"),
  "about-streamline-team": () =>
    import("@/blocks/about/about-streamline-team"),
  "about-vision-gallery": () =>
    import("@/blocks/about/about-vision-gallery"),
  "alternating-blocks": () =>
    import("@/blocks/about/alternating-blocks"),
  "community-initiatives": () =>
    import("@/blocks/about/community-initiatives"),
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
