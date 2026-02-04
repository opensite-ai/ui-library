/**
 * Block Detail Page
 * Display full details for a single block with preview and code
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlockById } from "@/lib/registry";
import { Breadcrumb } from "@/components/breadcrumb";
import { BlockDetailTabs } from "@/components/block-detail-tabs";
import { openGraphImgUrl } from "@/lib/media";
import { decodeBlockId, encodeBlockId } from "@/lib/utils";
import { DynamicIcon, Pressable } from "@opensite/ui";

interface BlockPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlockPageProps): Promise<Metadata> {
  const { id } = await params;
  const block = getBlockById(decodeBlockId(id));

  if (!block) {
    return {
      title: "Block Not Found",
    };
  }

  return {
    title: `${block.title} - ${block.category} Component`,
    description: `${block.description} Explore the ${block.title} component with live preview, source code, and props documentation.`,
    openGraph: {
      title: `${block.title} - ${block.category} Component`,
      description: block.description,
      images: [block.thumbnail.desktop || openGraphImgUrl],
    },
  };
}

export default async function BlockPage({ params }: BlockPageProps) {
  const { id } = await params;
  const block = getBlockById(decodeBlockId(id));

  if (!block) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-4">
      {/* Breadcrumb */}
      <div className="flex items-start justify-between gap-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            {
              label: block.category,
              href: `/categories/${block.categorySlug}`,
            },
            { label: block.title },
          ]}
        />

        <Pressable
          href={`/api/blocks/${encodeBlockId(block.id)}`}
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

      {/* Tabs */}
      <BlockDetailTabs block={block} />

      <div className="mt-8 p-6 rounded-lg bg-muted/30 border border-border space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Block Summary</h3>
          <p className="text-xl text-muted-foreground">{block.description}</p>
        </div>

        {/* Metadata */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Tags</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            {block.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-accent/10 px-3 py-1 text-accent font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {block.performance?.bundleSize ||
          (block.performance?.renderTime && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Performance Metrics
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {block.performance.bundleSize && (
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Bundle Size
                    </div>
                    <div className="text-xl font-semibold">
                      {block.performance.bundleSize}
                    </div>
                  </div>
                )}
                {block.performance.renderTime && (
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Render Time
                    </div>
                    <div className="text-xl font-semibold">
                      {block.performance.renderTime}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
