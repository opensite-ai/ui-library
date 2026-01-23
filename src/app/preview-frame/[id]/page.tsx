/**
 * Preview Frame Page
 * Client-side rendering of component in minimal layout
 */

import { notFound } from "next/navigation";
import { getBlockById } from "@/lib/registry";
import { getComponent } from "@/lib/component-registry";
import { decodeBlockId } from "@/lib/utils";
import type { Metadata } from "next";

interface PreviewFramePageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    mode?: "desktop" | "mobile";
  }>;
}

export async function generateMetadata({
  params,
}: PreviewFramePageProps): Promise<Metadata> {
  const { id } = await params;
  const block = getBlockById(decodeBlockId(id));

  if (!block) {
    return {
      title: "Preview Not Found",
    };
  }

  return {
    title: `${block.title} Preview`,
    robots: "noindex,nofollow",
  };
}

export default async function PreviewFramePage({
  params,
  searchParams,
}: PreviewFramePageProps) {
  const { id } = await params;
  const { mode = "desktop" } = await searchParams;
  const blockId = decodeBlockId(id);
  const block = getBlockById(blockId);

  if (!block) {
    notFound();
  }

  // Get the client component
  const Component = getComponent(blockId);

  if (!Component) {
    return (
      <div style={{ padding: "20px", fontFamily: "monospace" }}>
        <h1>Component Not Found</h1>
        <p>
          The component for &quot;{block.title}&quot; is not registered in the
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
