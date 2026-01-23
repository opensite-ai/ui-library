/**
 * POST /api/blocks/:id/usage
 * Track when blocks are used (analytics)
 */

import { NextResponse } from "next/server";
import { getBlockById } from "@/lib/registry";
import type { ApiResponse, UsageResponseData } from "@/types/blocks";
import { decodeBlockId } from "@/lib/utils";

// In-memory usage tracking (replace with database in production)
const usageTracker = new Map<string, number>();

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blockId = decodeBlockId(id);
    const block = getBlockById(blockId);

    if (!block) {
      const errorResponse: ApiResponse<UsageResponseData> = {
        success: false,
        data: {
          blockId: blockId,
          usageCount: 0,
          timestamp: new Date().toISOString(),
        },
        timestamp: new Date().toISOString(),
        error: `Block '${blockId}' not found`,
      };

      return NextResponse.json(errorResponse, { status: 404 });
    }

    // Increment usage count
    const currentCount = usageTracker.get(blockId) || 0;
    const newCount = currentCount + 1;
    usageTracker.set(blockId, newCount);

    const response: ApiResponse<UsageResponseData> = {
      success: true,
      data: {
        blockId: blockId,
        usageCount: newCount,
        timestamp: new Date().toISOString(),
      },
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    const errorResponse: ApiResponse<UsageResponseData> = {
      success: false,
      data: {
        blockId: "",
        usageCount: 0,
        timestamp: new Date().toISOString(),
      },
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Failed to track usage",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
