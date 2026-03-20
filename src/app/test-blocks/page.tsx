"use client";

import { EnhancedBlocksRenderer } from "@page-speed/blocks";
import type { Block } from "@page-speed/blocks/types";

const testBlocks: Block[] = [
  {
    _id: "container-1",
    _type: "Box",
    _parent: null,
    styles: "max-w-4xl mx-auto p-8 space-y-8",
    tag: "div",
  },
  {
    _id: "heading-1",
    _type: "Heading",
    _parent: "container-1",
    tag: "h1",
    styles: "text-4xl font-bold mb-6",
    content: "Testing @page-speed/blocks Button Styling",
  },
  {
    _id: "section-buttons",
    _type: "Box",
    _parent: "container-1",
    tag: "div",
    styles: "space-y-4",
  },
  {
    _id: "label-1",
    _type: "Heading",
    _parent: "section-buttons",
    tag: "h2",
    styles: "text-2xl font-semibold mb-4",
    content: "Button Variants",
  },
  {
    _id: "button-row-1",
    _type: "Box",
    _parent: "section-buttons",
    tag: "div",
    styles: "flex gap-4 flex-wrap items-center",
  },
  {
    _id: "btn-default",
    _type: "Button",
    _parent: "button-row-1",
    props: {
      variant: "default",
      size: "default",
      onClick: () => console.log("Default button clicked"),
    },
    content: "Default Button",
  },
  {
    _id: "btn-secondary",
    _type: "Button",
    _parent: "button-row-1",
    props: {
      variant: "secondary",
      size: "default",
      onClick: () => console.log("Secondary button clicked"),
    },
    content: "Secondary Button",
  },
  {
    _id: "btn-destructive",
    _type: "Button",
    _parent: "button-row-1",
    props: {
      variant: "destructive",
      size: "default",
      onClick: () => console.log("Destructive button clicked"),
    },
    content: "Destructive Button",
  },
  {
    _id: "btn-outline",
    _type: "Button",
    _parent: "button-row-1",
    props: {
      variant: "outline",
      size: "default",
      onClick: () => console.log("Outline button clicked"),
    },
    content: "Outline Button",
  },
  {
    _id: "btn-ghost",
    _type: "Button",
    _parent: "button-row-1",
    props: {
      variant: "ghost",
      size: "default",
      onClick: () => console.log("Ghost button clicked"),
    },
    content: "Ghost Button",
  },
  {
    _id: "section-sizes",
    _type: "Box",
    _parent: "container-1",
    tag: "div",
    styles: "space-y-4",
  },
  {
    _id: "label-2",
    _type: "Heading",
    _parent: "section-sizes",
    tag: "h2",
    styles: "text-2xl font-semibold mb-4",
    content: "Button Sizes",
  },
  {
    _id: "button-row-2",
    _type: "Box",
    _parent: "section-sizes",
    tag: "div",
    styles: "flex gap-4 flex-wrap items-center",
  },
  {
    _id: "btn-sm",
    _type: "Button",
    _parent: "button-row-2",
    props: {
      variant: "default",
      size: "sm",
      onClick: () => console.log("Small button clicked"),
    },
    content: "Small",
  },
  {
    _id: "btn-md",
    _type: "Button",
    _parent: "button-row-2",
    props: {
      variant: "default",
      size: "default",
      onClick: () => console.log("Default size button clicked"),
    },
    content: "Default",
  },
  {
    _id: "btn-lg",
    _type: "Button",
    _parent: "button-row-2",
    props: {
      variant: "default",
      size: "lg",
      onClick: () => console.log("Large button clicked"),
    },
    content: "Large",
  },
  {
    _id: "section-links",
    _type: "Box",
    _parent: "container-1",
    tag: "div",
    styles: "space-y-4",
  },
  {
    _id: "label-3",
    _type: "Heading",
    _parent: "section-links",
    tag: "h2",
    styles: "text-2xl font-semibold mb-4",
    content: "Links (Using Pressable)",
  },
  {
    _id: "link-row",
    _type: "Box",
    _parent: "section-links",
    tag: "div",
    styles: "flex gap-6 flex-wrap items-center",
  },
  {
    _id: "link-1",
    _type: "Link",
    _parent: "link-row",
    props: {
      href: "/categories",
      variant: "link",
    },
    content: "Link Style",
  },
  {
    _id: "link-2",
    _type: "Link",
    _parent: "link-row",
    props: {
      href: "/patterns",
      variant: "default",
      size: "default",
    },
    content: "Button-styled Link",
  },
  {
    _id: "link-3",
    _type: "Link",
    _parent: "link-row",
    props: {
      href: "https://google.com",
      variant: "outline",
      size: "default",
    },
    content: "External Link",
  },
  {
    _id: "section-pressable",
    _type: "Box",
    _parent: "container-1",
    tag: "div",
    styles: "space-y-4",
  },
  {
    _id: "label-4",
    _type: "Heading",
    _parent: "section-pressable",
    tag: "h2",
    styles: "text-2xl font-semibold mb-4",
    content: "Direct Pressable Components",
  },
  {
    _id: "pressable-row",
    _type: "Box",
    _parent: "section-pressable",
    tag: "div",
    styles: "flex gap-4 flex-wrap items-center",
  },
  {
    _id: "pressable-1",
    _type: "Pressable",
    _parent: "pressable-row",
    props: {
      href: "/about",
      variant: "default",
      size: "lg",
      asButton: true,
    },
    content: "Pressable as Button",
  },
  {
    _id: "pressable-2",
    _type: "PressableLink",
    _parent: "pressable-row",
    props: {
      href: "/contact",
      variant: "secondary",
      size: "default",
    },
    content: "Pressable Link",
  },
  {
    _id: "pressable-3",
    _type: "CTAButton",
    _parent: "pressable-row",
    props: {
      onClick: () => alert("CTA clicked!"),
      variant: "destructive",
      size: "lg",
    },
    content: "CTA Button",
  },
];

export default function TestBlocksPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            This page tests the @page-speed/blocks library with EnhancedBlocksRenderer.
            All buttons should have proper styling with RouterProvider integration.
          </p>
        </div>

        <EnhancedBlocksRenderer blocks={testBlocks} />

        <div className="mt-12 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Expected Results:</h3>
          <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
            <li>All buttons should have proper background colors matching their variants</li>
            <li>Hover states should work (darker backgrounds)</li>
            <li>Different sizes should be visually distinct</li>
            <li>Links should navigate properly (internal via router, external in new tab)</li>
            <li>Click handlers should log to console</li>
          </ul>
        </div>
      </div>
    </div>
  );
}