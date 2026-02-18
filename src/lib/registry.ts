/**
 * Registry parser and data access layer
 * Loads blocks from @opensite/ui and provides utility functions
 */

import type { Block, Category, BlocksRegistry } from "@/types/blocks";
import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { geometricPlaceholderImgs } from "./media";

/**
 * Component Filter Configuration for Semantic UI Builder MVP
 *
 * Auto-generated from block status markdown files
 * Generated: 2026-02-05
 *
 * STATISTICS:
 * ============
 * Total Categories: 32
 * - Fully Ready (100%): 8 categories (122 blocks)
 * - Partially Ready: 5 categories (89 ready, 48 not ready)
 * - Not Ready (0%): 19 categories (294 blocks blocked)
 *
 * Total Blocks Ready: 211
 * Total Blocks Blocked: 342
 * Overall Completion: 38.2%
 */
export const componentFilterConfig: {
  mode: "whitelist" | "blacklist";
  blockedCategories: string[];
  blockedSlugs: string[];
  allowedSlugs: string[];
} = {
  mode: "blacklist",

  /**
   * Categories with 0% completion - block entire category
   * Total: 19 categories (294 blocks)
   */
  blockedCategories: [
    "background-pattern-hero", // permanently blocked - internal use only
    "case-studies-list",
    "case-study-detail",
    "comparison",
    "cta",
    "industries",
    "list",
    "logos",
    "offer-modal",
    "pricing",
    "project-detail",
    "project-list",
    "resource-detail",
    "resource-list",
    "service-detail",
    "services-list",
    "team",
    "testimonials",
    "timeline",
  ],

  /**
   * Individual blocks from partially-ready categories
   * Total: 48 blocks across 5 categories
   */
  blockedSlugs: ["contact-floating-banner"],

  /**
   * Used when mode is "whitelist" - not currently used
   * Switch to whitelist mode if you want to explicitly allow only specific blocks
   */
  allowedSlugs: [],
};

/**
 * Filter blocks based on MVP configuration
 * Used by both UI showcase and AI agent via API
 */
function filterBlocks(blocks: Block[]): Block[] {
  const { mode, blockedCategories, blockedSlugs, allowedSlugs } =
    componentFilterConfig;

  return blocks.filter((block) => {
    // Filter out blocked categories
    if (blockedCategories.includes(block.categorySlug)) {
      return false;
    }

    if (mode === "blacklist") {
      // Exclude blocked slugs
      return !blockedSlugs.includes(block.id);
    } else {
      // Include only allowed slugs (if list is not empty)
      return allowedSlugs.length === 0 || allowedSlugs.includes(block.id);
    }
  });
}

/**
 * Load the blocks registry
 * In production, this would import from @opensite/ui
 */
let cachedRegistry: BlocksRegistry | null = null;

function loadRegistry(): BlocksRegistry {
  if (cachedRegistry) {
    return cachedRegistry;
  }

  try {
    const generatedPath = join(
      process.cwd(),
      "src",
      "data",
      "registry.generated.json",
    );

    if (!existsSync(generatedPath)) {
      cachedRegistry = { blocks: [] };
      return cachedRegistry;
    }

    const parsedRegistry = JSON.parse(
      readFileSync(generatedPath, "utf-8"),
    ) as BlocksRegistry | null;
    cachedRegistry = parsedRegistry ?? { blocks: [] };
    return cachedRegistry;
  } catch (error) {
    console.error("Failed to load blocks registry:", error);
    cachedRegistry = { blocks: [] };
    return cachedRegistry;
  }
}

/**
 * Normalize a block from the registry into our Block type
 */
function normalizeBlock(rawBlock: any): Block {
  return {
    id: rawBlock.id || rawBlock.name?.toLowerCase().replace(/\s+/g, "-") || "",
    name: rawBlock.name || rawBlock.title || "",
    title: rawBlock.title || rawBlock.name || "",
    category: rawBlock.category || "Uncategorized",
    categorySlug:
      rawBlock.categorySlug ||
      rawBlock.category?.toLowerCase().replace(/\s+/g, "-") ||
      "uncategorized",
    description: rawBlock.description || "",
    thumbnail: rawBlock.thumbnail ||
      rawBlock.preview || {
        desktop: geometricPlaceholderImgs.one.desktop,
        mobile: geometricPlaceholderImgs.one.mobile,
      },
    preview: rawBlock.preview || rawBlock.thumbnail,
    componentPath: rawBlock.componentPath || "",
    code: rawBlock.code || "",
    propsSchema: rawBlock.propsSchema || {},
    defaultProps: rawBlock.defaultProps || {},
    dependencies: rawBlock.dependencies || [],
    tags: rawBlock.tags || [],
    performance: rawBlock.performance || {},
  };
}

/**
 * Get all blocks from the registry (with MVP filtering applied)
 */
export function getAllBlocks(): Block[] {
  const registry = loadRegistry();
  const normalizedBlocks = registry.blocks.map(normalizeBlock);
  return filterBlocks(normalizedBlocks);
}

/**
 * Get a single block by ID
 */
export function getBlockById(id: string): Block | null {
  const blocks = getAllBlocks();
  return blocks.find((block) => block.id === id) || null;
}

/**
 * Get all unique categories from blocks
 */
export function getAllCategories(): Category[] {
  const blocks = getAllBlocks();
  const categoryMap = new Map<string, Category>();

  // Use blockedCategories from componentFilterConfig
  // Note: background-pattern-hero is also blocked via blockedCategories
  const { blockedCategories } = componentFilterConfig;
  const blockedSet = new Set(blockedCategories);

  blocks.forEach((block, index) => {
    const slug = block.categorySlug;
    if (blockedSet.has(slug)) {
      return;
    }
    if (!categoryMap.has(slug)) {
      categoryMap.set(slug, {
        slug,
        name: block.category,
        description: `Collection of ${block.category.toLowerCase()} components`,
        blockCount: 0,
        order: index,
      });
    }
    const category = categoryMap.get(slug)!;
    category.blockCount += 1;
  });

  return Array.from(categoryMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
}

/**
 * Get a category by slug
 */
export function getCategoryBySlug(slug: string): Category | null {
  const categories = getAllCategories();
  return categories.find((cat) => cat.slug === slug) || null;
}

/**
 * Get all blocks in a category
 */
export function getBlocksByCategory(categorySlug: string): Block[] {
  const blocks = getAllBlocks();
  return blocks.filter((block) => block.categorySlug === categorySlug);
}

/**
 * Search blocks by query string
 * Searches in: title, description, category, tags
 */
export function searchBlocks(query: string): Block[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const blocks = getAllBlocks();
  const lowerQuery = query.toLowerCase().trim();

  return blocks.filter((block) => {
    const titleMatch = block.title.toLowerCase().includes(lowerQuery);
    const idMatch = block.id.toLowerCase().includes(lowerQuery);
    const descMatch = block.description.toLowerCase().includes(lowerQuery);
    const categoryMatch = block.category.toLowerCase().includes(lowerQuery);
    const tagsMatch = block.tags?.some((tag) =>
      tag.toLowerCase().includes(lowerQuery),
    );

    return titleMatch || idMatch || descMatch || categoryMatch || tagsMatch;
  });
}

/**
 * Get block statistics
 */
export function getBlockStats() {
  const blocks = getAllBlocks();
  const categories = getAllCategories();

  return {
    totalBlocks: blocks.length,
    totalCategories: categories.length,
    blocksPerCategory: Math.round(blocks.length / categories.length) || 0,
  };
}
