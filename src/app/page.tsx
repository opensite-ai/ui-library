/**
 * Home Page
 * Main landing page with hero, stats, and category grid
 */

import type { Metadata } from "next";
import { getAllCategories, getBlockStats } from "@/lib/registry";
import { CategoryGrid } from "@/components/category-grid";
import { openGraphImgUrl } from "@/lib/media";
import { DynamicIcon, Pressable, Section } from "@opensite/ui";
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

      <Section background="gray" className="border-b border-t border-muted">
        <div className="text-center space-y-4 pb-12">
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
      <Section
        className="text-center space-y-6 "
        spacing="xl"
        pattern="dashedGridBasic"
      >
        <h2 className="text-3xl! md:text-5xl! font-bold pb-4">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          Start using OpenSite UI components in your next project and create
          stunning websites in minutes.
        </p>
        <div className="flex flex-wrap gap-4 pt-8 justify-center">
          <Pressable
            href="https://github.com/opensite-ai"
            target="_blank"
            rel="noopener noreferrer"
            componentType="a"
            variant="default"
            size="lg"
          >
            OpenSite Open Source on GitHub
            <DynamicIcon name="line-md/github-loop" />
          </Pressable>
        </div>
      </Section>
    </div>
  );
}
