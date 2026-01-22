/**
 * BlockPreview Component
 * Display a live preview of a block with responsive toggle
 */

"use client";

import { useState } from "react";
import type { Block } from "@/types/blocks";
import { ResponsiveToggle, type ViewMode } from "./responsive-toggle";
import { cn } from "@/lib/utils";
import { Img } from "@page-speed/img";
import { optixFlowApiKey } from "@/lib/media";

interface BlockPreviewProps {
  block: Block;
  className?: string;
}

export function BlockPreview({ block, className }: BlockPreviewProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");

  const thumbnailUrl =
    viewMode === "desktop" ? block.thumbnail.desktop : block.thumbnail.mobile;

  return (
    <div className={cn("space-y-4", className)}>
      {/* Controls */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Preview</h3>
        <ResponsiveToggle value={viewMode} onChange={setViewMode} />
      </div>

      {/* Preview Container */}
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border border-border bg-muted/30",
          "transition-all duration-300",
          viewMode === "mobile" ? "mx-auto max-w-sm" : "w-full",
        )}
      >
        {/* Aspect Ratio Container */}
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Img
            src={thumbnailUrl}
            alt={`${block.title} ${viewMode} preview`}
            className="object-cover object-top"
            optixFlowConfig={{ apiKey: optixFlowApiKey }}
          />
        </div>

        {/* View Mode Label */}
        <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs font-medium">
          {viewMode === "desktop" ? "1920×1080" : "375×667"}
        </div>
      </div>

      {/* Preview Info */}
      <div className="text-sm text-muted-foreground">
        <p>
          Showing {viewMode} view of{" "}
          <span className="font-medium text-foreground">{block.title}</span>
        </p>
      </div>
    </div>
  );
}
