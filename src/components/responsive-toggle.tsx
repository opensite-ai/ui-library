/**
 * ResponsiveToggle Component
 * Toggle between mobile and desktop preview modes
 */

"use client";

import { Monitor, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Pressable } from "@opensite/ui";

export type ViewMode = "desktop" | "mobile";

interface ResponsiveToggleProps {
  value: ViewMode;
  onChange: (mode: ViewMode) => void;
  className?: string;
}

export function ResponsiveToggle({
  value,
  onChange,
  className,
}: ResponsiveToggleProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 p-1 rounded-lg bg-muted",
        className,
      )}
      role="group"
      aria-label="View mode toggle"
    >
      <Pressable
        onClick={() => onChange("desktop")}
        aria-label="Desktop view"
        aria-pressed={value === "desktop"}
        componentType="button"
        variant={value === "desktop" ? "default" : "outline"}
        className="rounded-md! px-3!"
      >
        <Monitor className="h-4 w-4" />
      </Pressable>

      <Pressable
        onClick={() => onChange("mobile")}
        aria-label="Mobile view"
        aria-pressed={value === "mobile"}
        componentType="button"
        variant={value === "mobile" ? "default" : "outline"}
        className="rounded-md! px-3!"
      >
        <Smartphone className="h-4 w-4" />
      </Pressable>
    </div>
  );
}
