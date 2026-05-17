/**
 * Core type definitions for the OpenSite UI Component Library showcase
 * Defines the structure of blocks, categories, and API responses
 */

import { PageSpeedFormConfig } from "@opensite/ui";

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
  typeLabel?: string;
  description: string;
  required?: boolean;
  default?: unknown;
  items?: PropSchema;
  fields?: Record<string, PropSchema>;
  /**
   * Optional constraint hints derived from the block's structured
   * usageRequirements.propConstraints. Surfaced here so existing
   * propsSchema consumers can render validation hints without having
   * to inspect usageRequirements separately.
   */
  maxLength?: number;
  minItems?: number;
  maxItems?: number;
  count?: number;
  pinnedValues?: Record<string, unknown>;
  mediaHints?: BlockMediaSlot;
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
 * Media slot semantic hints from the @opensite/ui registry contract.
 * Describes what kind of media is allowed/expected in a given prop path
 * so consumers (AI agents, builders) can pick appropriate media.
 */
export type MediaRole =
  | "feature"
  | "hero"
  | "thumbnail"
  | "profile"
  | "avatar"
  | "logo"
  | "favicon"
  | "background"
  | string;

export type MediaPixelClass = "tiny" | "small" | "medium" | "large" | string;

export interface BlockMediaSlot {
  path: string;
  roles?: MediaRole[];
  disallowedRoles?: MediaRole[];
  minPixelClass?: MediaPixelClass;
  preferredAspect?: string;
  required?: boolean;
  note?: string;
}

/**
 * Per-prop constraints from the @opensite/ui registry contract.
 * Additive to propsSchema — propsSchema describes the *type* of a prop,
 * BlockPropConstraint describes runtime validation/semantic rules.
 */
export interface BlockPropConstraint {
  required?: boolean;
  maxLength?: number;
  count?: number;
  minItems?: number;
  maxItems?: number;
  pinnedValues?: Record<string, unknown>;
  note?: string;
}

export type SiteCapability =
  | "reviews_or_testimonials"
  | "media_library"
  | string;

/**
 * Structured usage requirements for a block. Mirrors the
 * `usageRequirements` contract emitted by @opensite/ui's BlockRegistryEntry.
 * Additive to (and intended to coexist with) the prose `importantUsageNotes`.
 */
export interface BlockUsageRequirements {
  requiredProps?: string[];
  propConstraints?: Record<string, BlockPropConstraint>;
  mediaSlots?: Record<string, BlockMediaSlot>;
  requiresSiteCapabilities?: SiteCapability[];
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
  componentPath: string;
  code: string;
  propsSchema?: PropsSchema;
  defaultProps?: Record<string, unknown>;
  dependencies?: string[];
  tags?: string[];
  performance?: BlockPerformance;
  importantUsageNotes?: string;
  /**
   * Structured usage requirements from @opensite/ui registry contract.
   * Sibling to importantUsageNotes prose. Additive — older consumers
   * can ignore this field.
   */
  usageRequirements?: BlockUsageRequirements;
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
export interface RegistryMetadata {
  exportedAt?: string;
  syncedAt?: string;
  totalBlocks?: number;
  version?: string;
  source?: string;
}

export interface BlocksRegistry {
  metadata?: RegistryMetadata;
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

// TODO add to opensite-ui
export interface FormConfig extends PageSpeedFormConfig {
  formLayout: "button-group";
  buttonGroupSize: "lg";
}
