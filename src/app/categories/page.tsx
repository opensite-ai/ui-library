/**
 * Categories Index Page
 * Display all available categories
 */

import { getAllCategories } from "@/lib/registry";
import { CategoryGrid } from "@/components/category-grid";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata = {
  title: "Browse Categories - OpenSite UI",
  description: "Browse all component categories in the OpenSite UI library.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Categories" },
        ]}
      />

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">All Categories</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Browse our complete collection of {categories.length} component categories.
        </p>
      </div>

      {/* Categories Grid */}
      <CategoryGrid categories={categories} />
    </div>
  );
}
