/**
 * GET /api/blocks/search?q=query
 * Full-text search across all blocks
 */

import { NextResponse } from "next/server";
import { searchBlocks } from "@/lib/registry";
import type { ApiResponse, SearchResultsResponseData } from "@/types/blocks";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";

    if (!query || query.trim().length === 0) {
      const errorResponse: ApiResponse<SearchResultsResponseData> = {
        success: false,
        data: {
          query: "",
          results: [],
          totalResults: 0,
        },
        timestamp: new Date().toISOString(),
        error: "Search query is required",
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    const results = searchBlocks(query);

    const response: ApiResponse<SearchResultsResponseData> = {
      success: true,
      data: {
        query,
        results,
        totalResults: results.length,
      },
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    const errorResponse: ApiResponse<SearchResultsResponseData> = {
      success: false,
      data: {
        query: "",
        results: [],
        totalResults: 0,
      },
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Failed to search blocks",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
