/**
 * BlockPreview Component
 * Display a live preview of a block with responsive toggle
 * Renders component in isolated iframe without layout
 */

"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import type { Block } from "@/types/blocks";
import { ResponsiveToggle, type ViewMode } from "./responsive-toggle";
import { cn } from "@/lib/utils";
import { getComponent } from "@/lib/component-registry";

interface BlockPreviewProps {
  block: Block;
  className?: string;
}

export function BlockPreview({ block, className }: BlockPreviewProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const [captureHeight, setCaptureHeight] = useState<number | null>(null);

  const PreviewComponent = useMemo(() => getComponent(block.id), [block.id]);
  const error = PreviewComponent ? null : "Component not registered";
  const isLoading = !mountNode;

  const iframeSrcDoc = useMemo(
    () => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div id="preview-root"></div>
  </body>
</html>`,
    [],
  );

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) {
      return;
    }

    const buildCssText = () => {
      let cssText = "";
      for (const sheet of Array.from(document.styleSheets)) {
        try {
          const rules = sheet.cssRules;
          if (!rules) {
            continue;
          }
          for (const rule of Array.from(rules)) {
            cssText += `${rule.cssText}\n`;
          }
        } catch {
          // Ignore cross-origin stylesheets; they'll be handled by fallback cloning.
        }
      }

      return cssText;
    };

    const handleLoad = () => {
      const doc = iframe.contentDocument;
      if (!doc) {
        return;
      }

      if (!doc.head.querySelector("style[data-preview-styles]")) {
        const styleTag = doc.createElement("style");
        styleTag.setAttribute("data-preview-styles", "true");
        styleTag.textContent = buildCssText();
        doc.head.appendChild(styleTag);

        if (!styleTag.textContent?.trim()) {
          document
            .querySelectorAll('style, link[rel="stylesheet"]')
            .forEach((node) => {
              doc.head.appendChild(node.cloneNode(true));
            });
        }
      }

      const root = doc.getElementById("preview-root");
      if (root) {
        setMountNode(root);
      }
    };

    iframe.addEventListener("load", handleLoad);

    if (iframe.contentDocument?.readyState === "complete") {
      handleLoad();
    }

    return () => {
      iframe.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    if (!doc) {
      return;
    }

    if (viewMode === "mobile") {
      doc.body.style.maxWidth = "375px";
      doc.body.style.margin = "0 auto";
    } else {
      doc.body.style.maxWidth = "none";
      doc.body.style.margin = "0";
    }
  }, [viewMode, mountNode]);

  useEffect(() => {
    if (viewMode !== "capture") {
      setCaptureHeight(null);
      return;
    }

    const doc = iframeRef.current?.contentDocument;
    if (!doc) {
      return;
    }

    const updateHeight = () => {
      const nextHeight = Math.max(
        doc.documentElement.scrollHeight,
        doc.body.scrollHeight,
      );
      setCaptureHeight(nextHeight);
    };

    updateHeight();

    if (typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(() => {
      updateHeight();
    });
    observer.observe(doc.body);

    return () => {
      observer.disconnect();
    };
  }, [viewMode, mountNode]);

  const containerStyle = useMemo(() => {
    const isMobile = viewMode === "mobile";
    const isCapture = viewMode === "capture";

    return {
      width: isMobile ? "375px" : "100%",
      maxWidth: isMobile ? "375px" : "1920px",
      maxHeight: isCapture ? undefined : isMobile ? "667px" : "1080px",
      aspectRatio: isCapture ? undefined : isMobile ? "9/16" : "16/9",
      height: isCapture
        ? captureHeight
          ? `${captureHeight}px`
          : "600px"
        : undefined,
    } as CSSProperties;
  }, [viewMode, captureHeight]);

  const viewLabel = viewMode === "capture" ? "desktop (fit)" : viewMode;

  return (
    <div className={cn("space-y-4", className)}>
      {/* Controls */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Live Preview</h3>
        <ResponsiveToggle value={viewMode} onChange={setViewMode} />
      </div>

      {/* Preview Container */}
      <div
        className={cn(
          "relative rounded-lg border border-border bg-white",
          "transition-all duration-300",
          viewMode === "mobile" ? "mx-auto" : "w-full",
          viewMode === "capture" ? "overflow-hidden" : "overflow-auto",
        )}
        style={containerStyle}
      >
        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-10">
            <div className="text-center space-y-2">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-300 border-r-gray-900" />
              <p className="text-sm text-muted-foreground">
                Loading preview...
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-10">
            <div className="text-center space-y-2 max-w-xs">
              <p className="text-sm font-medium text-red-600">Preview Error</p>
              <p className="text-xs text-muted-foreground">{error}</p>
            </div>
          </div>
        )}

        {/* Iframe with isolated document */}
        <iframe
          ref={iframeRef}
          srcDoc={iframeSrcDoc}
          title={`Live preview of ${block.title}`}
          sandbox="allow-scripts allow-same-origin"
          className="w-full h-full border-0 min-h-full bg-white"
          loading="lazy"
          style={
            viewMode === "capture"
              ? { height: captureHeight ? `${captureHeight}px` : "600px" }
              : undefined
          }
        />

        {mountNode &&
          PreviewComponent &&
          createPortal(<PreviewComponent />, mountNode)}
      </div>

      {/* Preview Info */}
      <div className="text-sm text-muted-foreground">
        <p>
          Showing live {viewLabel} render of{" "}
          <span className="font-medium text-foreground">{block.title}</span> —
          rendered in an isolated iframe environment.
        </p>
      </div>
    </div>
  );
}
