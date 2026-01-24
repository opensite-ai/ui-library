/**
 * ResponsiveToggle Component
 * Toggle between mobile and desktop preview modes
 */

"use client";

import { cn } from "@/lib/utils";
import { DynamicIcon, Pressable } from "@opensite/ui";

export type ViewMode = "desktop" | "mobile" | "capture";

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
        variant={value === "desktop" ? "default" : "ghost"}
        className="rounded-md! hover:bg-black px-2.5!"
      >
        <DynamicIcon name="lucide/monitor" size={24} />
      </Pressable>

      <Pressable
        onClick={() => onChange("mobile")}
        aria-label="Mobile view"
        aria-pressed={value === "mobile"}
        componentType="button"
        variant={value === "mobile" ? "default" : "ghost"}
        className="rounded-md! hover:bg-black px-2!"
      >
        <DynamicIcon name="lucide/smartphone" size={24} />
      </Pressable>

      <Pressable
        onClick={() => onChange("capture")}
        aria-label="Capture view"
        aria-pressed={value === "capture"}
        componentType="button"
        variant={value === "capture" ? "default" : "ghost"}
        className="rounded-md! hover:bg-black  px-2!"
      >
        <DynamicIcon
          name="material-symbols/fit-page-height-outline"
          size={24}
        />
      </Pressable>
    </div>
  );
}
