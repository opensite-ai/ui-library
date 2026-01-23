import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Encode a block ID for use in URLs
 * Replaces "/" with "--" to make it URL-safe for single-segment routes
 * Example: "hero-floating-images" -> "hero-floating-images"
 */
export function encodeBlockId(id: string): string {
  return id.replace(/\//g, "--");
}

/**
 * Decode a block ID from URL format back to registry format
 * Replaces "--" with "/" to match the registry structure
 * Example: "hero-floating-images" -> "hero-floating-images"
 */
export function decodeBlockId(encodedId: string): string {
  return encodedId.replace(/--/g, "/");
}
