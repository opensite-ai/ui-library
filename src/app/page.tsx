/**
 * Home Page
 * Main landing page with hero, stats, and category grid
 */

import type { Metadata } from "next";
import { getAllCategories, getBlockStats } from "@/lib/registry";
import { CategoryGrid } from "@/components/category-grid";
import { SearchBar } from "@/components/search-bar";
import { openGraphImgUrl } from "@/lib/media";
import { Badge, Section } from "@opensite/ui";
import { HomepageHero } from "@/components/homepage-hero";

export const metadata: Metadata = {
  title: "OpenSite UI Component Library - 600+ Production-Ready Blocks",
  description:
    "Discover 600+ beautiful, production-ready UI components and blocks for building modern websites. Browse headers, footers, CTAs, testimonials, forms, and more. Built for OpenSite AI.",
  openGraph: {
    title: "OpenSite UI Component Library - 600+ Production-Ready Blocks",
    description:
      "Discover 600+ beautiful, production-ready UI components and blocks for building modern websites.",
    images: [openGraphImgUrl],
  },
};

export default function HomePage() {
  const categories = getAllCategories();
  const stats = getBlockStats();

  return (
    <div className="">
      <HomepageHero />

      <Section className="space-y-8">
        <div className="text-center space-y-4">
          <div className="text-3xl md:text-4xl font-bold">
            Browse by Category
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our organized collection of components across{" "}
            {stats.totalCategories} categories
          </p>
        </div>
        <CategoryGrid categories={categories} />
      </Section>

      {/* CTA */}
      <section className="text-center space-y-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Start using OpenSite UI components in your next project and create
          stunning websites in minutes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://docs.opensite.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
          >
            View Documentation
          </a>
          <a
            href="https://github.com/opensite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
