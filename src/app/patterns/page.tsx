/**
 * Patterns Page
 * Preview all available background patterns with customizable settings
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pattern Library - OpenSite UI Showcase",
  description:
    "Preview all available background patterns with customizable settings. Test different backgrounds and opacity values.",
};

export default function PatternsPage() {
  return <PatternsPageClient />;
}

"use client";

import { useEffect, useState } from "react";
import { Section } from "@opensite/ui";
import type { PatternName } from "@opensite/ui/components/ui/pattern-background";
import type { SectionBackground } from "@opensite/ui/types";

interface PatternPreviewProps {
  pattern: PatternName;
  background: SectionBackground;
  patternOpacity: number;
  onBackgroundChange: (background: SectionBackground) => void;
  onOpacityChange: (opacity: number) => void;
}

function PatternPreview({
  pattern,
  background,
  patternOpacity,
  onBackgroundChange,
  onOpacityChange,
}: PatternPreviewProps) {
  const backgroundOptions: SectionBackground[] = [
    "default",
    "white",
    "gray",
    "dark",
    "gradient",
  ];

  return (
    <div className="space-y-4 rounded-lg border border-border bg-card p-4">
      {/* Pattern Name */}
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-sm font-semibold">{pattern}</h3>
        <button
          onClick={() => {
            navigator.clipboard.writeText(pattern);
          }}
          className="rounded px-2 py-1 text-xs hover:bg-muted"
          title="Copy pattern name"
        >
          Copy
        </button>
      </div>

      {/* Pattern Preview with 19:6 aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: "19 / 6" }}>
        <Section
          background={background}
          pattern={pattern}
          patternOpacity={patternOpacity}
          spacing="none"
          className="h-full w-full overflow-hidden rounded-md border border-border"
        >
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-xs opacity-50">
              {pattern}
            </span>
          </div>
        </Section>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Background Select */}
        <div className="space-y-1.5">
          <label
            htmlFor={`background-${pattern}`}
            className="text-xs font-medium text-muted-foreground"
          >
            Background
          </label>
          <select
            id={`background-${pattern}`}
            value={background}
            onChange={(e) =>
              onBackgroundChange(e.target.value as SectionBackground)
            }
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {backgroundOptions.map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>
        </div>

        {/* Opacity Input */}
        <div className="space-y-1.5">
          <label
            htmlFor={`opacity-${pattern}`}
            className="text-xs font-medium text-muted-foreground"
          >
            Pattern Opacity
          </label>
          <input
            id={`opacity-${pattern}`}
            type="number"
            min="0"
            max="1"
            step="0.01"
            value={patternOpacity}
            onChange={(e) => onOpacityChange(parseFloat(e.target.value))}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
      </div>

      {/* Usage Code */}
      <div className="rounded-md bg-muted p-3">
        <pre className="text-xs">
          <code>{`pattern="${pattern}"\npatternOpacity={${patternOpacity}}\nbackground="${background}"`}</code>
        </pre>
      </div>
    </div>
  );
}

function PatternsPageClient() {
  const [patterns, setPatterns] = useState<PatternName[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Global settings that apply to all patterns
  const [globalBackground, setGlobalBackground] =
    useState<SectionBackground>("dark");
  const [globalOpacity, setGlobalOpacity] = useState(0.08);

  // Individual pattern settings (override global if set)
  const [patternSettings, setPatternSettings] = useState<
    Record<string, { background?: SectionBackground; opacity?: number }>
  >({});

  useEffect(() => {
    async function fetchPatterns() {
      try {
        const response = await fetch("/api/patterns");
        const data = await response.json();

        if (data.success) {
          setPatterns(data.data.patterns);
        } else {
          setError(data.error || "Failed to load patterns");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load patterns");
      } finally {
        setLoading(false);
      }
    }

    fetchPatterns();
  }, []);

  const getPatternBackground = (pattern: PatternName): SectionBackground => {
    return patternSettings[pattern]?.background ?? globalBackground;
  };

  const getPatternOpacity = (pattern: PatternName): number => {
    return patternSettings[pattern]?.opacity ?? globalOpacity;
  };

  const updatePatternSetting = (
    pattern: PatternName,
    key: "background" | "opacity",
    value: SectionBackground | number
  ) => {
    setPatternSettings((prev) => ({
      ...prev,
      [pattern]: {
        ...prev[pattern],
        [key]: value,
      },
    }));
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="text-lg">Loading patterns...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="rounded-lg border border-red-500 bg-red-50 p-4 text-center text-red-700">
          <div className="font-semibold">Error loading patterns</div>
          <div className="text-sm">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Section spacing="lg" className="border-b border-border">
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">
              Pattern Library
            </h1>
            <p className="mt-2 text-muted-foreground">
              Preview all {patterns.length} available background patterns with
              customizable settings
            </p>
          </div>

          {/* Global Controls */}
          <div className="rounded-lg border border-border bg-card p-4">
            <h2 className="mb-3 text-sm font-semibold">Global Settings</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-1.5">
                <label
                  htmlFor="global-background"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Default Background
                </label>
                <select
                  id="global-background"
                  value={globalBackground}
                  onChange={(e) =>
                    setGlobalBackground(e.target.value as SectionBackground)
                  }
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="default">default</option>
                  <option value="white">white</option>
                  <option value="gray">gray</option>
                  <option value="dark">dark</option>
                  <option value="gradient">gradient</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="global-opacity"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Default Opacity
                </label>
                <input
                  id="global-opacity"
                  type="number"
                  min="0"
                  max="1"
                  step="0.01"
                  value={globalOpacity}
                  onChange={(e) =>
                    setGlobalOpacity(parseFloat(e.target.value))
                  }
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => setPatternSettings({})}
                  className="h-[42px] rounded-md bg-muted px-4 text-sm hover:bg-muted/80"
                >
                  Reset All Patterns
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Patterns Grid */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {patterns.map((pattern) => (
            <PatternPreview
              key={pattern}
              pattern={pattern}
              background={getPatternBackground(pattern)}
              patternOpacity={getPatternOpacity(pattern)}
              onBackgroundChange={(bg) =>
                updatePatternSetting(pattern, "background", bg)
              }
              onOpacityChange={(opacity) =>
                updatePatternSetting(pattern, "opacity", opacity)
              }
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
