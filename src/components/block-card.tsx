/**
 * BlockCard Component
 * Display a block in a grid card format with thumbnail and metadata
 */

import Link from "next/link";
import type { Block } from "@/types/blocks";
import { cn, encodeBlockId } from "@/lib/utils";
import { Img } from "@page-speed/img";
import { geometricPlaceholderImgs, optixFlowApiKey } from "@/lib/media";

interface BlockCardProps {
  block: Block;
  className?: string;
}

export function BlockCard({ block, className }: BlockCardProps) {
  return (
    <Link
      href={`/blocks/${encodeBlockId(block.id)}`}
      className={cn(
        "group block rounded-lg border border-border bg-card overflow-hidden transition-all duration-200",
        "hover:border-accent hover:shadow-lg",
        className,
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Img
          src={block.thumbnail.desktop || geometricPlaceholderImgs.one.desktop}
          alt={block.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          optixFlowConfig={{ apiKey: optixFlowApiKey }}
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Category Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
            {block.category}
          </span>
        </div>

        {/* Title */}
        <div className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
          {block.title}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {block.description}
        </p>

        {/* Tags */}
        {block.tags && block.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-2">
            {block.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
            {block.tags.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{block.tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
