/**
 * Breadcrumb Component
 * Navigation breadcrumb trail
 */

import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  current?: boolean;
  className?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const hasExplicitCurrent = items.some((item) => item.current === true);

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-2 text-sm", className)}
    >
      <ol className="flex items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent =
            item.current ?? (!hasExplicitCurrent && index === items.length - 1);
          const linkClassName = cn(
            "text-muted-foreground hover:text-foreground transition-colors",
            item.className,
          );
          const textClassName = cn(
            isCurrent ? "text-foreground font-medium" : "text-muted-foreground",
            item.className,
          );

          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}

              {item.href && !isCurrent ? (
                <Link href={item.href} className={linkClassName}>
                  {item.label}
                </Link>
              ) : (
                <span
                  className={textClassName}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
