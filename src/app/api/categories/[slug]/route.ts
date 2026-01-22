/**
 * GET /api/categories/:slug
 * Returns all blocks in a specific category
 */

import { NextResponse } from "next/server";
import { getCategoryBySlug, getBlocksByCategory } from "@/lib/registry";
import type { ApiResponse, CategoryBlocksResponseData } from "@/types/blocks";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
      const errorResponse: ApiResponse<CategoryBlocksResponseData> = {
        success: false,
        data: {
          category: {
            slug,
            name: "",
            description: "",
          },
          blocks: [],
        },
        timestamp: new Date().toISOString(),
        error: `Category '${slug}' not found`,
      };

      return NextResponse.json(errorResponse, { status: 404 });
    }

    const blocks = getBlocksByCategory(slug);

    const response: ApiResponse<CategoryBlocksResponseData> = {
      success: true,
      data: {
        category: {
          slug: category.slug,
          name: category.name,
          description: category.description,
        },
        blocks,
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
    const errorResponse: ApiResponse<CategoryBlocksResponseData> = {
      success: false,
      data: {
        category: {
          slug: "",
          name: "",
          description: "",
        },
        blocks: [],
      },
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Failed to fetch category blocks",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
