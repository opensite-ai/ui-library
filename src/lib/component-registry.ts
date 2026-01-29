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

  // About blocks (17 blocks available in @opensite/ui v0.5.4)
  "about-company-profile": () =>
    import("@/blocks/about/about-company-profile"),
  "about-developer-profile": () =>
    import("@/blocks/about/about-developer-profile"),
  "about-developer-story": () =>
    import("@/blocks/about/about-developer-story"),
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
  "about-network-spotlight": () =>
    import("@/blocks/about/about-network-spotlight"),
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
  "about-culture-tabs": () =>
    import("@/blocks/about/about-culture-tabs"),
  "about-expandable-values": () =>
    import("@/blocks/about/about-expandable-values"),
  "about-mission-principles": () =>
    import("@/blocks/about/about-mission-principles"),
  "about-split-hero": () =>
    import("@/blocks/about/about-split-hero"),
  "alternating-blocks": () =>
    import("@/blocks/about/alternating-blocks"),
  "community-initiatives": () =>
    import("@/blocks/about/community-initiatives"),
  "article-breadcrumb-social": () =>
    import("@/blocks/article/article-breadcrumb-social"),
  "article-chapters-author": () =>
    import("@/blocks/article/article-chapters-author"),
  "article-compact-toc": () =>
    import("@/blocks/article/article-compact-toc"),
  "article-hero-prose": () =>
    import("@/blocks/article/article-hero-prose"),
  "article-sidebar-sticky": () =>
    import("@/blocks/article/article-sidebar-sticky"),
  "article-split-animated": () =>
    import("@/blocks/article/article-split-animated"),
  "article-toc-sidebar": () =>
    import("@/blocks/article/article-toc-sidebar"),

  // Blog blocks
  "blog-cards-read-time": () =>
    import("@/blocks/blog/blog-cards-read-time"),
  "blog-cards-tagline-cta": () =>
    import("@/blocks/blog/blog-cards-tagline-cta"),
  "blog-carousel-apple": () =>
    import("@/blocks/blog/blog-carousel-apple"),
  "blog-category-overlay": () =>
    import("@/blocks/blog/blog-category-overlay"),
  "blog-featured-popular": () =>
    import("@/blocks/blog/blog-featured-popular"),
  "blog-filtered-results": () =>
    import("@/blocks/blog/blog-filtered-results"),
  "blog-grid-author-cards": () =>
    import("@/blocks/blog/blog-grid-author-cards"),
  "blog-grid-nine-posts": () =>
    import("@/blocks/blog/blog-grid-nine-posts"),
  "blog-horizontal-cards": () =>
    import("@/blocks/blog/blog-horizontal-cards"),
  "blog-horizontal-timeline": () =>
    import("@/blocks/blog/blog-horizontal-timeline"),
  "blog-masonry-featured": () =>
    import("@/blocks/blog/blog-masonry-featured"),
  "blog-related-articles": () =>
    import("@/blocks/blog/blog-related-articles"),
  "blog-tech-insights": () =>
    import("@/blocks/blog/blog-tech-insights"),

  // Carousel blocks
  "carousel-animated-sections": () =>
    import("@/blocks/carousel/carousel-animated-sections"),
  "carousel-autoplay-progress": () =>
    import("@/blocks/carousel/carousel-autoplay-progress"),
  "carousel-auto-progress-slides": () =>
    import("@/blocks/carousel/carousel-auto-progress-slides"),
  "carousel-feature-badge": () =>
    import("@/blocks/carousel/carousel-feature-badge"),
  "carousel-fullscreen-scroll-fx": () =>
    import("@/blocks/carousel/carousel-fullscreen-scroll-fx"),
  "carousel-gallery-thumbnails": () =>
    import("@/blocks/carousel/carousel-gallery-thumbnails"),
  "carousel-horizontal-cards": () =>
    import("@/blocks/carousel/carousel-horizontal-cards"),
  "carousel-image-hero": () =>
    import("@/blocks/carousel/carousel-image-hero"),
  "carousel-multi-step-showcase": () =>
    import("@/blocks/carousel/carousel-multi-step-showcase"),
  "carousel-portfolio-hero": () =>
    import("@/blocks/carousel/carousel-portfolio-hero"),
  "carousel-product-feature-showcase": () =>
    import("@/blocks/carousel/carousel-product-feature-showcase"),
  "carousel-progress-slider": () =>
    import("@/blocks/carousel/carousel-progress-slider"),
  "carousel-scrolling-feature-showcase": () =>
    import("@/blocks/carousel/carousel-scrolling-feature-showcase"),

  // Feature blocks
  "feature-icon-grid-accent": () =>
    import("@/blocks/features/feature-icon-grid-accent"),
  "feature-split-image": () =>
    import("@/blocks/features/feature-split-image"),
  "feature-split-image-reverse": () =>
    import("@/blocks/features/feature-split-image-reverse"),
  "feature-numbered-cards": () =>
    import("@/blocks/features/feature-numbered-cards"),
  "feature-integration-cards": () =>
    import("@/blocks/features/feature-integration-cards"),
  "feature-checklist-three-column": () =>
    import("@/blocks/features/feature-checklist-three-column"),
  "feature-icon-grid-muted": () =>
    import("@/blocks/features/feature-icon-grid-muted"),
  "feature-icon-grid-bordered": () =>
    import("@/blocks/features/feature-icon-grid-bordered"),
  "feature-three-column-values": () =>
    import("@/blocks/features/feature-three-column-values"),
  "feature-capabilities-grid": () =>
    import("@/blocks/features/feature-capabilities-grid"),
  "feature-badge-grid-six": () =>
    import("@/blocks/features/feature-badge-grid-six"),
  "feature-utility-cards-grid": () =>
    import("@/blocks/features/feature-utility-cards-grid"),
  "feature-card-grid-linked": () =>
    import("@/blocks/features/feature-card-grid-linked"),
  "feature-pattern-grid-links": () =>
    import("@/blocks/features/feature-pattern-grid-links"),
  "feature-image-cards-three-column": () =>
    import("@/blocks/features/feature-image-cards-three-column"),
  "feature-category-image-cards": () =>
    import("@/blocks/features/feature-category-image-cards"),
  "feature-stats-highlight": () =>
    import("@/blocks/features/feature-stats-highlight"),
  "feature-checklist-image": () =>
    import("@/blocks/features/feature-checklist-image"),
  "feature-accordion-image": () =>
    import("@/blocks/features/feature-accordion-image"),
  "feature-icon-tabs-content": () =>
    import("@/blocks/features/feature-icon-tabs-content"),
  "feature-tabbed-content-image": () =>
    import("@/blocks/features/feature-tabbed-content-image"),
  "feature-bento-image-grid": () =>
    import("@/blocks/features/feature-bento-image-grid"),
  "feature-bento-utilities": () =>
    import("@/blocks/features/feature-bento-utilities"),
  "feature-carousel-progress": () =>
    import("@/blocks/features/feature-carousel-progress"),
  "feature-image-overlay-badge": () =>
    import("@/blocks/features/feature-image-overlay-badge"),
  "feature-animated-carousel": () =>
    import("@/blocks/features/feature-animated-carousel"),
  "feature-showcase": () =>
    import("@/blocks/features/feature-showcase"),
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
