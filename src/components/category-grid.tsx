/**
 * CategoryGrid Component
 * Display categories in a grid layout
 */

import Link from "next/link";
import type { Category } from "@/types/blocks";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CategoryGridProps {
  categories: Category[];
  className?: string;
}

export function CategoryGrid({ categories, className }: CategoryGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/categories/${category.slug}`}
          className={cn(
            "group block p-6 rounded-lg border border-border bg-card",
            "hover:border-accent hover:shadow-lg",
            "transition-all duration-200"
          )}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
              {category.name}
            </h3>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {category.description}
          </p>

          {/* Block Count */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-500 group-hover:bg-accent"
                style={{
                  width: `${Math.min((category.blockCount / 50) * 100, 100)}%`,
                }}
              />
            </div>
            <span className="text-sm font-medium text-foreground">
              {category.blockCount} {category.blockCount === 1 ? "block" : "blocks"}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
