/**
 * GET /api/categories
 * Returns all block categories with metadata
 */

import { NextResponse } from "next/server";
import { getAllCategories } from "@/lib/registry";
import type { ApiResponse, CategoriesResponseData } from "@/types/blocks";

export async function GET() {
  try {
    const categories = getAllCategories();

    const response: ApiResponse<CategoriesResponseData> = {
      success: true,
      data: {
        categories,
      },
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    const errorResponse: ApiResponse<CategoriesResponseData> = {
      success: false,
      data: {
        categories: [],
      },
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Failed to fetch categories",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
