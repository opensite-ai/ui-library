/**
 * Search Results Page
 * Display search results for blocks
 */

import { searchBlocks } from "@/lib/registry";
import { BlockCard } from "@/components/block-card";
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
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Search" }]} />

      {/* Results */}
      {query ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold">
              {results.length > 0
                ? `${results.length} ${results.length === 1 ? "result" : "results"} for "${query}"`
                : `No results for "${query}"`}
            </div>
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
