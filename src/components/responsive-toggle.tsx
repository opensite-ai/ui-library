/**
 * ResponsiveToggle Component
 * Toggle between mobile and desktop preview modes
 */

"use client";

import { Monitor, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

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
        className
      )}
      role="group"
      aria-label="View mode toggle"
    >
      <button
        onClick={() => onChange("desktop")}
        className={cn(
          "inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all",
          value === "desktop"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Desktop view"
        aria-pressed={value === "desktop"}
      >
        <Monitor className="h-4 w-4" />
        <span className="hidden sm:inline">Desktop</span>
      </button>

      <button
        onClick={() => onChange("mobile")}
        className={cn(
          "inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all",
          value === "mobile"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Mobile view"
        aria-pressed={value === "mobile"}
      >
        <Smartphone className="h-4 w-4" />
        <span className="hidden sm:inline">Mobile</span>
      </button>
    </div>
  );
}
