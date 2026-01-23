/**
 * CodeDisplay Component
 * Display syntax-highlighted code with copy functionality
 */

"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeDisplayProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeDisplay({
  code,
  language = "tsx",
  className,
}: CodeDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className={cn(
          "absolute top-3 right-3 p-2 rounded-md transition-all",
          "bg-muted hover:bg-accent hover:text-accent-foreground",
          "opacity-0 group-hover:opacity-100",
          "focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring",
        )}
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>

      {/* Code Block */}
      <pre
        className={cn(
          "overflow-x-auto pt-12! p-4 rounded-lg",
          "bg-muted text-foreground",
          "border border-border",
          "text-sm leading-relaxed",
        )}
      >
        <code className="font-mono">{code}</code>
      </pre>

      {/* Language Badge */}
      {language && (
        <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-accent/10 text-accent text-xs font-medium">
          {language.toUpperCase()}
        </div>
      )}
    </div>
  );
}
