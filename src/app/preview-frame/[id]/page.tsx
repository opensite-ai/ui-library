/**
 * Preview Frame Page
 * Client-side rendering of component in minimal layout
 */

import { notFound } from "next/navigation";
import { getBlockById } from "@/lib/registry";
import { decodeBlockId } from "@/lib/utils";
import { PreviewFrameClient } from "@/components/preview-frame-client";
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
}: PreviewFramePageProps) {
  const { id } = await params;
  const blockId = decodeBlockId(id);
  const block = getBlockById(blockId);

  if (!block) {
    notFound();
  }

  return <PreviewFrameClient blockId={blockId} blockTitle={block.title} />;
}
