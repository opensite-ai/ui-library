/**
 * Core type definitions for the OpenSite UI Component Library showcase
 * Defines the structure of blocks, categories, and API responses
 */

/**
 * Thumbnail URLs for a block (desktop and mobile views)
 */
export interface BlockThumbnail {
  desktop: string;
  mobile: string;
}

/**
 * Schema definition for a single prop
 */
export interface PropSchema {
  type: "string" | "number" | "boolean" | "array" | "object";
  description: string;
  required?: boolean;
  default?: unknown;
}

/**
 * Props schema mapping prop names to their definitions
 */
export interface PropsSchema {
  [propName: string]: PropSchema;
}

/**
 * Performance metrics for a block
 */
export interface BlockPerformance {
  bundleSize?: string;
  renderTime?: string;
}

/**
 * Complete block definition
 */
export interface Block {
  id: string;
  name: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  thumbnail: BlockThumbnail;
  preview?: BlockThumbnail; // Alternative field name from registry
  componentPath: string;
  code: string;
  propsSchema?: PropsSchema;
  defaultProps?: Record<string, unknown>;
  dependencies?: string[];
  tags?: string[];
  performance?: BlockPerformance;
}

/**
 * Category metadata
 */
export interface Category {
  slug: string;
  name: string;
  description: string;
  blockCount: number;
  order: number;
}

/**
 * Registry structure from @opensite/ui
 */
export interface BlocksRegistry {
  blocks: Block[];
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
  error?: string;
}

/**
 * Categories API response data
 */
export interface CategoriesResponseData {
  categories: Category[];
}

/**
 * Category blocks API response data
 */
export interface CategoryBlocksResponseData {
  category: {
    slug: string;
    name: string;
    description: string;
  };
  blocks: Block[];
}

/**
 * Single block API response data
 */
export interface BlockResponseData {
  block: Block;
}

/**
 * Search results API response data
 */
export interface SearchResultsResponseData {
  query: string;
  results: Block[];
  totalResults: number;
}

/**
 * Usage tracking API response data
 */
export interface UsageResponseData {
  blockId: string;
  usageCount: number;
  timestamp: string;
}

/**
 * Search result with relevance score
 */
export interface SearchResult extends Block {
  relevance?: number;
}
