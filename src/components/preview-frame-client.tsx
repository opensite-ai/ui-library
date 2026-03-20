"use client";

import { componentRegistry } from "@/lib/component-registry";

interface PreviewFrameClientProps {
  blockId: string;
  blockTitle: string;
}

export function PreviewFrameClient({
  blockId,
  blockTitle,
}: PreviewFrameClientProps) {
  const Component = componentRegistry[blockId] ?? null;

  if (!Component) {
    return (
      <div style={{ padding: "20px", fontFamily: "monospace" }}>
        <h1>Component Not Found</h1>
        <p>
          The component for &quot;{blockTitle}&quot; is not registered in the
          component registry.
        </p>
        <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#666" }}>
          Block ID: <code>{blockId}</code>
        </p>
      </div>
    );
  }

  return <Component />;
}
