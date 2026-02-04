/**
 * Header Component
 * Main navigation header
 */

import Link from "next/link";
import { Suspense } from "react";
import { SearchBar } from "./search-bar";
import { logoPlaceholders, optixFlowApiKey } from "@/lib/media";
import { Img } from "@page-speed/img";
import { DynamicIcon } from "@opensite/ui";

export function Header() {
  const searchFallback = (
    <div
      className="h-[42px] w-full rounded-lg border border-border bg-muted/40"
      aria-hidden="true"
    />
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted shadow-xs bg-white backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Img
              src={logoPlaceholders.darkHorizontalLogo}
              alt="OpenSite Logo"
              className="h-10 object-contain w-auto"
              optixFlowConfig={{ apiKey: optixFlowApiKey as string }}
            />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-md">
            <Suspense fallback={searchFallback}>
              <SearchBar placeholder="Search library..." />
            </Suspense>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            <Link
              href="/categories"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/patterns"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Patterns
            </Link>
            <a
              href="https://github.com/opensite-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <DynamicIcon name="line-md/github-loop" className="h-5 w-5" />
            </a>
          </nav>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden pb-4">
          <Suspense fallback={searchFallback}>
            <SearchBar placeholder="Search blocks..." />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
