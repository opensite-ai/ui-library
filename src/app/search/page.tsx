/**
 * Search Results Page
 * Display search results for blocks
 */

import { searchBlocks } from "@/lib/registry";
import { BlockCard } from "@/components/block-card";
import { SearchBar } from "@/components/search-bar";
import { Breadcrumb } from "@/components/breadcrumb";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  return {
    title: q ? `Search: ${q} - OpenSite UI` : "Search - OpenSite UI",
    description: "Search for UI components and blocks in the OpenSite library.",
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query ? searchBlocks(query) : [];

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Search" },
        ]}
      />

      {/* Search Header */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Search Components</h1>
        <div className="max-w-2xl">
          <SearchBar defaultValue={query} placeholder="Search for components..." />
        </div>
      </div>

      {/* Results */}
      {query ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              {results.length > 0
                ? `${results.length} ${results.length === 1 ? "result" : "results"} for "${query}"`
                : `No results for "${query}"`}
            </h2>
          </div>

          {results.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((block) => (
                <BlockCard key={block.id} block={block} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 space-y-4">
              <p className="text-muted-foreground">
                No components found matching your search.
              </p>
              <p className="text-sm text-muted-foreground">
                Try different keywords or browse by category.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Enter a search term to find components.
          </p>
        </div>
      )}
    </div>
  );
}
