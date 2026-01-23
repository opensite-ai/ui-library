/**
 * GET /api/blocks/:id
 * Returns complete details for a single block including code
 */

import { NextResponse } from "next/server";
import { getBlockById } from "@/lib/registry";
import type { ApiResponse, BlockResponseData } from "@/types/blocks";
import { decodeBlockId } from "@/lib/utils";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const block = getBlockById(decodeBlockId(id));

    if (!block) {
      const errorResponse: ApiResponse<BlockResponseData> = {
        success: false,
        data: {
          block: {} as any,
        },
        timestamp: new Date().toISOString(),
        error: `Block '${id}' not found`,
      };

      return NextResponse.json(errorResponse, { status: 404 });
    }

    const response: ApiResponse<BlockResponseData> = {
      success: true,
      data: {
        block,
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
    const errorResponse: ApiResponse<BlockResponseData> = {
      success: false,
      data: {
        block: {} as any,
      },
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Failed to fetch block",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
