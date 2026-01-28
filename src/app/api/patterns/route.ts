/**
 * GET /api/patterns
 * Returns all available pattern names from the UI library
 */

import { NextResponse } from "next/server";

// Pattern names from @opensite/ui/components/ui/pattern-background.tsx
const patternSvgs = [
  "squareAltGrid",
  "grid1",
  "noise",
  "dots",
  "dotPattern",
  "dotPattern2",
  "circles",
  "waves",
  "crossPattern",
  "architect",
  "tinyCheckers",
  "p6",
] as const;

const patternOverlays = [
  "circuitBoardBasic",
  "circuitBoardFadeTop",
  "circuitBoardFadeBottom",
  "circuitBoardFadeCenter",
  "circuitBoardFadeTopLeft",
  "circuitBoardFadeTopRight",
  "circuitBoardFadeBottomLeft",
  "circuitBoardFadeBottomRight",
  "dashedGridBasic",
  "dashedGridFadeTop",
  "dashedGridFadeBottom",
  "dashedGridFadeCenter",
  "dashedGridFadeTopLeft",
  "dashedGridFadeTopRight",
  "dashedGridFadeBottomLeft",
  "dashedGridFadeBottomRight",
  "diagonalCrossBasic",
  "diagonalCrossFadeTop",
  "diagonalCrossFadeBottom",
  "diagonalCrossFadeCenter",
  "diagonalCrossFadeTopLeft",
  "diagonalCrossFadeTopRight",
  "diagonalCrossFadeBottomLeft",
  "diagonalCrossFadeBottomRight",
  "gridBasic",
  "gridFadeTop",
  "gridFadeBottom",
  "gridFadeCenter",
  "gridFadeTopLeft",
  "gridFadeTopRight",
  "gridFadeBottomLeft",
  "gridFadeBottomRight",
  "gridDotsBasic",
  "gridDotsFadeCenter",
  "gradientGlowTop",
  "gradientGlowBottom",
  "spotlightLeft",
  "spotlightRight",
] as const;

const inlinePatternStyles = [
  "radialGradientTop",
  "radialGradientBottom",
] as const;

export type PatternName =
  | typeof patternSvgs[number]
  | typeof patternOverlays[number]
  | typeof inlinePatternStyles[number];

export interface PatternsResponseData {
  patterns: PatternName[];
  categories: {
    svgPatterns: typeof patternSvgs[number][];
    overlayPatterns: typeof patternOverlays[number][];
    inlinePatterns: typeof inlinePatternStyles[number][];
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
  error?: string;
}

export async function GET() {
  try {
    const allPatterns = [
      ...patternSvgs,
      ...patternOverlays,
      ...inlinePatternStyles,
    ] as PatternName[];

    const response: ApiResponse<PatternsResponseData> = {
      success: true,
      data: {
        patterns: allPatterns,
        categories: {
          svgPatterns: [...patternSvgs],
          overlayPatterns: [...patternOverlays],
          inlinePatterns: [...inlinePatternStyles],
        },
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
    const errorResponse: ApiResponse<PatternsResponseData> = {
      success: false,
      data: {
        patterns: [],
        categories: {
          svgPatterns: [],
          overlayPatterns: [],
          inlinePatterns: [],
        },
      },
      timestamp: new Date().toISOString(),
      error:
        error instanceof Error ? error.message : "Failed to fetch patterns",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
