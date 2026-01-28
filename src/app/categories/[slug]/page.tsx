/**
 * Category Page
 * Display all blocks in a specific category
 */

import { notFound } from "next/navigation";
import { getCategoryBySlug, getBlocksByCategory } from "@/lib/registry";
import { BlockCard } from "@/components/block-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { Badge, DynamicIcon, Pressable } from "@opensite/ui";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Components - OpenSite UI`,
    description: `Browse ${category.blockCount} ${category.name.toLowerCase()} components and blocks for building modern websites.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const blocks = getBlocksByCategory(slug);

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="flex items-start justify-between gap-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Categories", href: "/categories" },
            { label: category.name },
          ]}
        />

        <Pressable
          href={`/api/categories/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          componentType="button"
          variant="default"
          color="primary"
          className=""
          size="lg"
        >
          View API
          <DynamicIcon className="" name="mynaui/api-solid" />
        </Pressable>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <Badge variant="default" className="px-4!">
          {category.blockCount}{" "}
          {category.blockCount === 1 ? "component" : "components"}
        </Badge>
        <h1 className="text-4xl!">{category.name}</h1>
      </div>

      {/* Blocks Grid */}
      {blocks.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <BlockCard key={block.id} block={block} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No components found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
