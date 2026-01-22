/**
 * Block Detail Page
 * Display full details for a single block with preview and code
 */

"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { getBlockById } from "@/lib/registry";
import { BlockPreview } from "@/components/block-preview";
import { CodeDisplay } from "@/components/code-display";
import { Breadcrumb } from "@/components/breadcrumb";
import { cn } from "@/lib/utils";

interface BlockPageProps {
  params: Promise<{
    id: string;
  }>;
}

type TabType = "preview" | "code" | "props";

export default function BlockPage({ params }: BlockPageProps) {
  const { id } = use(params);
  const block = getBlockById(id);
  const [activeTab, setActiveTab] = useState<TabType>("preview");

  if (!block) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: block.category, href: `/categories/${block.categorySlug}` },
          { label: block.title },
        ]}
      />

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">{block.title}</h1>
            <p className="text-xl text-muted-foreground">{block.description}</p>
          </div>
          <a
            href={`/api/blocks/${block.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            View API
          </a>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="inline-flex items-center rounded-md bg-accent/10 px-3 py-1 font-medium text-accent">
            {block.category}
          </span>
          {block.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2",
              activeTab === "preview"
                ? "border-accent text-accent"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2",
              activeTab === "code"
                ? "border-accent text-accent"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Code
          </button>
          <button
            onClick={() => setActiveTab("props")}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2",
              activeTab === "props"
                ? "border-accent text-accent"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Props
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-4">
        {activeTab === "preview" && <BlockPreview block={block} />}

        {activeTab === "code" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Component Code</h3>
              <p className="text-sm text-muted-foreground">
                Path: {block.componentPath}
              </p>
            </div>
            <CodeDisplay code={block.code} language="tsx" />
            {block.dependencies && block.dependencies.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Dependencies</h4>
                <div className="flex flex-wrap gap-2">
                  {block.dependencies.map((dep) => (
                    <code
                      key={dep}
                      className="px-2 py-1 rounded bg-muted text-sm"
                    >
                      {dep}
                    </code>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "props" && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Component Props</h3>
            {block.propsSchema && Object.keys(block.propsSchema).length > 0 ? (
              <div className="border border-border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Prop
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Required
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {Object.entries(block.propsSchema).map(([propName, schema]) => (
                      <tr key={propName}>
                        <td className="px-4 py-3 text-sm font-mono font-semibold">
                          {propName}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <code className="px-2 py-1 rounded bg-muted">
                            {schema.type}
                          </code>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {schema.required ? (
                            <span className="text-destructive font-medium">Yes</span>
                          ) : (
                            <span className="text-muted-foreground">No</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">
                          {schema.description}
                          {schema.default !== undefined && (
                            <span className="block mt-1 text-xs">
                              Default: <code>{String(schema.default)}</code>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-muted-foreground">
                No props schema available for this component.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Performance Info */}
      {block.performance && (
        <div className="mt-8 p-6 rounded-lg bg-muted/30 border border-border">
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {block.performance.bundleSize && (
              <div>
                <div className="text-sm text-muted-foreground">Bundle Size</div>
                <div className="text-xl font-semibold">{block.performance.bundleSize}</div>
              </div>
            )}
            {block.performance.renderTime && (
              <div>
                <div className="text-sm text-muted-foreground">Render Time</div>
                <div className="text-xl font-semibold">{block.performance.renderTime}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
