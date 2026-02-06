/**
 * GET /api/ai-config
 * Returns component filtering configuration for AI agent consumption
 *
 * This endpoint provides the same filtering rules used by the UI showcase,
 * ensuring both the visual interface and AI agent operate on the same
 * set of production-ready components.
 *
 * Used by: octane Rust service (https://octane.buzz)
 * Cached: 5 minutes on AI agent side
 */

import { NextResponse } from "next/server";
import { componentFilterConfig } from "@/lib/registry";
import type { ApiResponse } from "@/types/blocks";

interface AIConfigData {
  mode: "whitelist" | "blacklist";
  blockedCategories: string[];
  blockedSlugs: string[];
  allowedSlugs: string[];
}

export async function GET() {
  try {
    const response: ApiResponse<AIConfigData> = {
      success: true,
      data: componentFilterConfig,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        // Cache for 5 minutes on CDN, serve stale for up to 1 hour
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
        // Allow Rust octane service to call this endpoint
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    const errorResponse: ApiResponse<AIConfigData> = {
      success: false,
      data: {
        mode: "blacklist",
        blockedCategories: [],
        blockedSlugs: [],
        allowedSlugs: [],
      },
      timestamp: new Date().toISOString(),
      error:
        error instanceof Error ? error.message : "Failed to fetch AI config",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
