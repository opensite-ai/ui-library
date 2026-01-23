/**
 * Block Detail Tabs Component
 * Client component for tab switching functionality
 */

"use client";

import { useEffect, useState } from "react";
import { BlockPreview } from "@/components/block-preview";
import { CodeDisplay } from "@/components/code-display";
import { cn } from "@/lib/utils";
import type { Block, PropSchema } from "@/types/blocks";

type TabType = "preview" | "code" | "props";

interface BlockDetailTabsProps {
  block: Block;
}

export function BlockDetailTabs({ block }: BlockDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("preview");
  const [registryStatus, setRegistryStatus] = useState<{
    metadata?: {
      exportedAt?: string;
      syncedAt?: string;
      version?: string;
      totalBlocks?: number;
      source?: string;
    } | null;
    localVersion?: string | null;
    localVersionRaw?: string | null;
  } | null>(null);
  const [syncing, setSyncing] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);

  const fetchRegistryStatus = async () => {
    try {
      const response = await fetch("/api/admin/registry");
      if (!response.ok) {
        throw new Error("Unable to load registry status.");
      }
      const data = await response.json();
      setRegistryStatus(data);
    } catch (error) {
      setSyncError(
        error instanceof Error ? error.message : "Unable to load registry status."
      );
    }
  };

  useEffect(() => {
    fetchRegistryStatus();
  }, []);

  const handleSync = async () => {
    try {
      setSyncError(null);
      setSyncing(true);
      const response = await fetch("/api/admin/registry", { method: "POST" });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Registry sync failed.");
      }
      setRegistryStatus(data);
    } catch (error) {
      setSyncError(
        error instanceof Error ? error.message : "Registry sync failed."
      );
    } finally {
      setSyncing(false);
    }
  };

  const renderSchemaTypeLabel = (schema: PropSchema) => {
    if (schema.typeLabel) {
      return schema.typeLabel;
    }

    if (schema.type === "array" && schema.items?.typeLabel) {
      return `${schema.items.typeLabel}[]`;
    }

    return schema.type;
  };

  const renderSchemaFields = (fields: Record<string, PropSchema>) => {
    if (Object.keys(fields).length === 0) {
      return null;
    }

    return (
      <div className="mt-2 rounded-md border border-border bg-background">
        <table className="w-full text-xs">
          <thead className="bg-muted/60">
            <tr>
              <th className="px-2 py-1 text-left font-semibold">Field</th>
              <th className="px-2 py-1 text-left font-semibold">Type</th>
              <th className="px-2 py-1 text-left font-semibold">Required</th>
              <th className="px-2 py-1 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {Object.entries(fields).map(([fieldName, fieldSchema]) => (
              <tr key={fieldName}>
                <td className="px-2 py-1 font-mono">{fieldName}</td>
                <td className="px-2 py-1">
                  <code className="rounded bg-muted px-1.5 py-0.5">
                    {renderSchemaTypeLabel(fieldSchema)}
                  </code>
                </td>
                <td className="px-2 py-1">
                  {fieldSchema.required ? "Yes" : "No"}
                </td>
                <td className="px-2 py-1 text-muted-foreground">
                  {fieldSchema.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderSchemaDetails = (schema: PropSchema) => {
    if (schema.type === "object" && schema.fields) {
      return renderSchemaFields(schema.fields);
    }

    if (schema.type === "array" && schema.items) {
      if (schema.items.type === "object" && schema.items.fields) {
        return (
          <div className="mt-2">
            <div className="text-xs font-semibold text-muted-foreground">
              Items
            </div>
            {renderSchemaFields(schema.items.fields)}
          </div>
        );
      }

      return (
        <div className="mt-2 text-xs text-muted-foreground">
          Items:{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">
            {renderSchemaTypeLabel(schema.items)}
          </code>
        </div>
      );
    }

    return null;
  };

  const registryVersion = registryStatus?.metadata?.version ?? null;
  const localVersion = registryStatus?.localVersion ?? null;
  const versionMismatch =
    registryVersion && localVersion && registryVersion !== localVersion;
  const syncedAt = registryStatus?.metadata?.syncedAt;
  const exportedAt = registryStatus?.metadata?.exportedAt;

  const formatTimestamp = (value?: string) => {
    if (!value) return null;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString();
  };

  const syncTimestamp = formatTimestamp(syncedAt) ?? "Not synced yet";
  const exportTimestamp = formatTimestamp(exportedAt);

  return (
    <>
      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2",
              activeTab === "preview"
                ? "border-accent text-accent"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2",
              activeTab === "code"
                ? "border-accent text-accent"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Code
          </button>
          <button
            onClick={() => setActiveTab("props")}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2",
              activeTab === "props"
                ? "border-accent text-accent"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Props
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-4">
        {activeTab === "preview" && <BlockPreview block={block} />}

        {activeTab === "code" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Component Code</h3>
              <p className="text-sm text-muted-foreground">
                Path: {block.componentPath}
              </p>
            </div>
            <CodeDisplay code={block.code} language="tsx" />
            {block.dependencies && block.dependencies.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Dependencies</h4>
                <div className="flex flex-wrap gap-2">
                  {block.dependencies.map((dep) => (
                    <code
                      key={dep}
                      className="px-2 py-1 rounded bg-muted text-sm"
                    >
                      {dep}
                    </code>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "props" && (
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Component Props</h3>
                <div className="text-xs text-muted-foreground">
                  Synced: {syncTimestamp}
                  {registryVersion && (
                    <span className="ml-2">
                      · Registry v{registryVersion}
                    </span>
                  )}
                  {exportTimestamp && (
                    <span className="ml-2">· Exported {exportTimestamp}</span>
                  )}
                </div>
                {versionMismatch && (
                  <div className="text-xs text-warning">
                    Registry version differs from local package ({localVersion}).
                  </div>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.npmjs.com/package/@opensite/ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <img
                    alt="npm version"
                    src="https://img.shields.io/npm/v/@opensite/ui?style=flat-square"
                  />
                </a>
                <button
                  type="button"
                  onClick={handleSync}
                  disabled={syncing}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-semibold",
                    syncing
                      ? "bg-muted text-muted-foreground"
                      : "bg-accent text-accent-foreground hover:bg-accent/90"
                  )}
                >
                  {syncing ? "Syncing..." : "Sync Registry"}
                </button>
              </div>
            </div>
            {syncError && (
              <div className="text-xs text-destructive">{syncError}</div>
            )}
            {block.propsSchema && Object.keys(block.propsSchema).length > 0 ? (
              <div className="border border-border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Prop
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Required
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {Object.entries(block.propsSchema).map(
                      ([propName, schema]) => (
                        <tr key={propName}>
                          <td className="px-4 py-3 text-sm font-mono font-semibold">
                            {propName}
                          </td>
                          <td className="px-4 py-3 text-sm align-top">
                            <code className="px-2 py-1 rounded bg-muted">
                              {renderSchemaTypeLabel(schema)}
                            </code>
                            {renderSchemaDetails(schema)}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {schema.required ? (
                              <span className="text-destructive font-medium">
                                Yes
                              </span>
                            ) : (
                              <span className="text-muted-foreground">No</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-sm text-muted-foreground">
                            {schema.description}
                            {schema.default !== undefined && (
                              <span className="block mt-1 text-xs">
                                Default: <code>{String(schema.default)}</code>
                              </span>
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-muted-foreground">
                No props schema available for this component.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
