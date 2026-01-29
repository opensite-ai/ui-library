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
  "hero-ad-campaign-expert": () =>
    import("@/blocks/hero/hero-ad-campaign-expert"),
  "hero-adaptable-product-grid": () =>
    import("@/blocks/hero/hero-adaptable-product-grid"),
  "hero-agency-animated-images": () =>
    import("@/blocks/hero/hero-agency-animated-images"),
  "hero-ai-powered-carousel": () =>
    import("@/blocks/hero/hero-ai-powered-carousel"),
  "hero-announcement-badge": () =>
    import("@/blocks/hero/hero-announcement-badge"),
  "hero-architecture-fullscreen": () =>
    import("@/blocks/hero/hero-architecture-fullscreen"),
  "hero-badge-image-split": () =>
    import("@/blocks/hero/hero-badge-image-split"),
  "hero-badge-shadow-overlay": () =>
    import("@/blocks/hero/hero-badge-shadow-overlay"),
  "hero-billing-platform-logos": () =>
    import("@/blocks/hero/hero-billing-platform-logos"),
  "hero-business-carousel-dots": () =>
    import("@/blocks/hero/hero-business-carousel-dots"),
  "hero-business-operations-mosaic": () =>
    import("@/blocks/hero/hero-business-operations-mosaic"),
  "hero-centered-gradient-cta": () =>
    import("@/blocks/hero/hero-centered-gradient-cta"),
  "hero-centered-image-grid": () =>
    import("@/blocks/hero/hero-centered-image-grid"),
  "hero-centered-screenshot": () =>
    import("@/blocks/hero/hero-centered-screenshot"),
  "hero-coming-soon-countdown": () =>
    import("@/blocks/hero/hero-coming-soon-countdown"),
  "hero-community-survey-cta": () =>
    import("@/blocks/hero/hero-community-survey-cta"),
  "hero-conversation-intelligence": () =>
    import("@/blocks/hero/hero-conversation-intelligence"),
  "hero-conversion-video-play": () =>
    import("@/blocks/hero/hero-conversion-video-play"),
  "hero-creative-studio-stacked": () =>
    import("@/blocks/hero/hero-creative-studio-stacked"),
  "hero-crm-streamlined": () =>
    import("@/blocks/hero/hero-crm-streamlined"),
  "hero-customer-support-layered": () =>
    import("@/blocks/hero/hero-customer-support-layered"),
  "hero-dashed-border-features": () =>
    import("@/blocks/hero/hero-dashed-border-features"),
  "hero-design-carousel-portfolio": () =>
    import("@/blocks/hero/hero-design-carousel-portfolio"),
  "hero-design-showcase-logos": () =>
    import("@/blocks/hero/hero-design-showcase-logos"),
  "hero-design-system-3d": () =>
    import("@/blocks/hero/hero-design-system-3d"),
  "hero-developer-tools-code": () =>
    import("@/blocks/hero/hero-developer-tools-code"),
  "hero-digital-agency-fullscreen": () =>
    import("@/blocks/hero/hero-digital-agency-fullscreen"),
  "hero-ecommerce-product-showcase": () =>
    import("@/blocks/hero/hero-ecommerce-product-showcase"),
  "hero-enterprise-security": () =>
    import("@/blocks/hero/hero-enterprise-security"),
  "hero-event-registration": () =>
    import("@/blocks/hero/hero-event-registration"),
  "hero-feature-cards-grid": () =>
    import("@/blocks/hero/hero-feature-cards-grid"),
  "hero-floating-images": () =>
    import("@/blocks/hero/hero-floating-images"),
  "hero-fullscreen-background-image": () =>
    import("@/blocks/hero/hero-fullscreen-background-image"),
  "hero-fullscreen-logo-cta": () =>
    import("@/blocks/hero/hero-fullscreen-logo-cta"),
  "hero-gradient-avatars-rating": () =>
    import("@/blocks/hero/hero-gradient-avatars-rating"),
  "hero-gradient-client-focused": () =>
    import("@/blocks/hero/hero-gradient-client-focused"),
  "hero-grid-pattern-efficiency": () =>
    import("@/blocks/hero/hero-grid-pattern-efficiency"),
  "hero-grid-pattern-solutions": () =>
    import("@/blocks/hero/hero-grid-pattern-solutions"),
  "hero-hiring-animated-text": () =>
    import("@/blocks/hero/hero-hiring-animated-text"),
  "hero-image-left-content": () =>
    import("@/blocks/hero/hero-image-left-content"),
  "hero-image-slider": () =>
    import("@/blocks/hero/hero-image-slider"),
  "hero-innovation-image-grid": () =>
    import("@/blocks/hero/hero-innovation-image-grid"),
  "hero-logo-centered-screenshot": () =>
    import("@/blocks/hero/hero-logo-centered-screenshot"),
  "hero-marketplace-scattered-images": () =>
    import("@/blocks/hero/hero-marketplace-scattered-images"),
  "hero-mental-health-team": () =>
    import("@/blocks/hero/hero-mental-health-team"),
  "hero-mentorship-video-split": () =>
    import("@/blocks/hero/hero-mentorship-video-split"),
  "hero-minimal-centered-dark": () =>
    import("@/blocks/hero/hero-minimal-centered-dark"),
  "hero-mobile-app-download": () =>
    import("@/blocks/hero/hero-mobile-app-download"),
  "hero-newsletter-minimal": () =>
    import("@/blocks/hero/hero-newsletter-minimal"),
  "hero-overlay-cta-grid": () =>
    import("@/blocks/hero/hero-overlay-cta-grid"),
  "hero-pattern-badge-logos": () =>
    import("@/blocks/hero/hero-pattern-badge-logos"),
  "hero-pattern-logo-tech-stack": () =>
    import("@/blocks/hero/hero-pattern-logo-tech-stack"),
  "hero-platform-features-grid": () =>
    import("@/blocks/hero/hero-platform-features-grid"),
  "hero-portfolio-creative": () =>
    import("@/blocks/hero/hero-portfolio-creative"),
  "hero-premium-split-avatars": () =>
    import("@/blocks/hero/hero-premium-split-avatars"),
  "hero-presentation-platform-video": () =>
    import("@/blocks/hero/hero-presentation-platform-video"),
  "hero-pricing-comparison": () =>
    import("@/blocks/hero/hero-pricing-comparison"),
  "hero-product-showcase-floating": () =>
    import("@/blocks/hero/hero-product-showcase-floating"),
  "hero-productivity-launcher-video": () =>
    import("@/blocks/hero/hero-productivity-launcher-video"),
  "hero-saas-dashboard-preview": () =>
    import("@/blocks/hero/hero-saas-dashboard-preview"),
  "hero-shared-inbox-layered": () =>
    import("@/blocks/hero/hero-shared-inbox-layered"),
  "hero-simple-centered-image": () =>
    import("@/blocks/hero/hero-simple-centered-image"),
  "hero-software-growth-video-dialog": () =>
    import("@/blocks/hero/hero-software-growth-video-dialog"),
  "hero-spiral-pattern-cards": () =>
    import("@/blocks/hero/hero-spiral-pattern-cards"),
  "hero-split-geometric-shapes": () =>
    import("@/blocks/hero/hero-split-geometric-shapes"),
  "hero-split-icon-cards": () =>
    import("@/blocks/hero/hero-split-icon-cards"),
  "hero-split-image-newsletter": () =>
    import("@/blocks/hero/hero-split-image-newsletter"),
  "hero-split-spiral-shapes": () =>
    import("@/blocks/hero/hero-split-spiral-shapes"),
  "hero-startup-launch-cta": () =>
    import("@/blocks/hero/hero-startup-launch-cta"),
  "hero-stats-social-proof": () =>
    import("@/blocks/hero/hero-stats-social-proof"),
  "hero-task-timer-animated": () =>
    import("@/blocks/hero/hero-task-timer-animated"),
  "hero-tech-carousel": () =>
    import("@/blocks/hero/hero-tech-carousel"),
  "hero-testimonial-image-grid": () =>
    import("@/blocks/hero/hero-testimonial-image-grid"),
  "hero-therapy-testimonial-grid": () =>
    import("@/blocks/hero/hero-therapy-testimonial-grid"),
  "hero-ui-library-showcase": () =>
    import("@/blocks/hero/hero-ui-library-showcase"),
  "hero-video-background-dark": () =>
    import("@/blocks/hero/hero-video-background-dark"),
  "hero-video-dialog-gradient": () =>
    import("@/blocks/hero/hero-video-dialog-gradient"),
  "hero-video-overlay-stars": () =>
    import("@/blocks/hero/hero-video-overlay-stars"),
  "hero-welcome-asymmetric-images": () =>
    import("@/blocks/hero/hero-welcome-asymmetric-images"),

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

  // FAQ blocks
  "faq-simple-accordion": () =>
    import("@/blocks/faq/faq-simple-accordion"),
  "faq-static-list": () =>
    import("@/blocks/faq/faq-static-list"),
  "faq-centered-accordion": () =>
    import("@/blocks/faq/faq-centered-accordion"),
  "faq-badge-support": () =>
    import("@/blocks/faq/faq-badge-support"),
  "faq-numbered-list": () =>
    import("@/blocks/faq/faq-numbered-list"),
  "faq-numbered-grid": () =>
    import("@/blocks/faq/faq-numbered-grid"),
  "faq-split-help": () =>
    import("@/blocks/faq/faq-split-help"),
  "faq-categorized-sections": () =>
    import("@/blocks/faq/faq-categorized-sections"),
  "faq-muted-cards": () =>
    import("@/blocks/faq/faq-muted-cards"),
  "faq-bordered-badge": () =>
    import("@/blocks/faq/faq-bordered-badge"),
  "faq-gradient-categories": () =>
    import("@/blocks/faq/faq-gradient-categories"),
  "faq-sidebar-navigation": () =>
    import("@/blocks/faq/faq-sidebar-navigation"),
  "faq-card-categories": () =>
    import("@/blocks/faq/faq-card-categories"),
  "faq-icon-benefits": () =>
    import("@/blocks/faq/faq-icon-benefits"),
  "faq-rounded-cards": () =>
    import("@/blocks/faq/faq-rounded-cards"),
  "faq-profile-sidebar": () =>
    import("@/blocks/faq/faq-profile-sidebar"),
  "faq-split-hero": () =>
    import("@/blocks/faq/faq-split-hero"),

  // Process blocks
  "process-expandable-timeline": () =>
    import("@/blocks/process/process-expandable-timeline"),
  "process-hover-cards": () =>
    import("@/blocks/process/process-hover-cards"),
  "process-icon-timeline": () =>
    import("@/blocks/process/process-icon-timeline"),
  "process-mission-principles": () =>
    import("@/blocks/process/process-mission-principles"),
  "process-numbered-services": () =>
    import("@/blocks/process/process-numbered-services"),
  "process-roadmap-timeline": () =>
    import("@/blocks/process/process-roadmap-timeline"),
  "process-scroll-image": () =>
    import("@/blocks/process/process-scroll-image"),
  "process-steps-grid": () =>
    import("@/blocks/process/process-steps-grid"),
  "process-sticky-steps": () =>
    import("@/blocks/process/process-sticky-steps"),
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
