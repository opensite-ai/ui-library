/**
 * Registry parser and data access layer
 * Loads blocks from @opensite/ui and provides utility functions
 */

import type {
  Block,
  Category,
  BlocksRegistry,
} from "@/types/blocks";

/**
 * Mock registry data
 * TODO: Replace with actual @opensite/ui registry import when available
 * For now, we'll use a placeholder structure that matches the expected format
 */
const mockRegistry: BlocksRegistry = {
  blocks: [],
};

/**
 * Load the blocks registry
 * In production, this would import from @opensite/ui
 */
function loadRegistry(): BlocksRegistry {
  try {
    // TODO: Import actual registry from @opensite/ui
    // const registry = require('@opensite/ui/registry.json');
    // return registry;

    return mockRegistry;
  } catch (error) {
    console.error("Failed to load blocks registry:", error);
    return { blocks: [] };
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
    categorySlug: rawBlock.categorySlug || rawBlock.category?.toLowerCase().replace(/\s+/g, "-") || "uncategorized",
    description: rawBlock.description || "",
    thumbnail: rawBlock.thumbnail || rawBlock.preview || {
      desktop: "/placeholder-desktop.png",
      mobile: "/placeholder-mobile.png",
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
 * Get all blocks from the registry
 */
export function getAllBlocks(): Block[] {
  const registry = loadRegistry();
  return registry.blocks.map(normalizeBlock);
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

  blocks.forEach((block, index) => {
    const slug = block.categorySlug;
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

  return Array.from(categoryMap.values()).sort((a, b) => a.order - b.order);
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
    const descMatch = block.description.toLowerCase().includes(lowerQuery);
    const categoryMatch = block.category.toLowerCase().includes(lowerQuery);
    const tagsMatch = block.tags?.some((tag) =>
      tag.toLowerCase().includes(lowerQuery)
    );

    return titleMatch || descMatch || categoryMatch || tagsMatch;
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
