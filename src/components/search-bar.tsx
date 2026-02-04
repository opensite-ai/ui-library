/**
 * SearchBar Component
 * Global search bar for finding blocks
 */

"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Kbd, KbdKey } from "@/components/ui/kbd";

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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      if (!event.metaKey || event.key.toLowerCase() !== "k") {
        return;
      }

      event.preventDefault();
      inputRef.current?.focus();
      inputRef.current?.select();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (pathname !== "/search") {
      setQuery("");
      return;
    }

    const nextQuery = searchParams?.get("q") ?? "";
    setQuery((prev) => (prev === nextQuery ? prev : nextQuery));
  }, [pathname, searchParams]);

  return (
    <form onSubmit={handleSubmit} className={cn("relative w-full", className)}>
      {/* Search Icon */}
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />

      {/* Input */}
      <input
        type="text"
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "w-full pl-10 pr-24 py-2.5 rounded-lg",
          "bg-background border border-border",
          "text-foreground placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
          "transition-all"
        )}
        aria-label="Search blocks"
      />

      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {!isFocused && (
          <Kbd className="text-[11px] px-2 py-1">
            <KbdKey>⌘</KbdKey>
            <KbdKey>k</KbdKey>
          </Kbd>
        )}

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className={cn(
              "p-1 rounded-md",
              "text-muted-foreground hover:text-foreground",
              "hover:bg-muted transition-colors"
            )}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </form>
  );
}
