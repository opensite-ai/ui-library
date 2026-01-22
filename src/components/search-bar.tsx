/**
 * SearchBar Component
 * Global search bar for finding blocks
 */

"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  defaultValue?: string;
  className?: string;
  placeholder?: string;
}

export function SearchBar({
  defaultValue = "",
  className,
  placeholder = "Search blocks...",
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      }
    },
    [query, router]
  );

  const handleClear = useCallback(() => {
    setQuery("");
  }, []);

  return (
    <form onSubmit={handleSubmit} className={cn("relative w-full", className)}>
      {/* Search Icon */}
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />

      {/* Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full pl-10 pr-10 py-2.5 rounded-lg",
          "bg-background border border-border",
          "text-foreground placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
          "transition-all"
        )}
        aria-label="Search blocks"
      />

      {/* Clear Button */}
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2",
            "p-1 rounded-md",
            "text-muted-foreground hover:text-foreground",
            "hover:bg-muted transition-colors"
          )}
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </form>
  );
}
