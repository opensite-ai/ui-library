/**
 * CategoryGrid Component
 * Display categories in a grid layout
 */

import Link from "next/link";
import type { Category } from "@/types/blocks";
import { cn } from "@/lib/utils";
import { Badge, DynamicIcon } from "@opensite/ui";

interface CategoryGridProps {
  categories: Category[];
  className?: string;
}

export function CategoryGrid({ categories, className }: CategoryGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/categories/${category.slug}`}
          className={cn(
            "group block p-4 rounded-md border border-border bg-card",
            "hover:border-accent hover:shadow-lg",
            "transition-all duration-200",
          )}
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-md mb-2 font-semibold text-foreground group-hover:text-accent transition-colors">
                {category.name}
              </div>

              <Badge variant="default" className="rounded-xl!">
                {category.blockCount}{" "}
                {category.blockCount === 1 ? "block" : "blocks"}
              </Badge>
            </div>
            <DynamicIcon
              name="lucide/arrow-up-right"
              className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
