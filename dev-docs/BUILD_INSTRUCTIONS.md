# OpenSite UI Component Library Showcase + API Builder
## Step-by-Step Build Instructions for AI Agent

**Document Version**: 1.0  
**Target Audience**: AI Assistant building a production-ready Next.js application  
**Estimated Build Time**: 8-12 hours for AI implementation | 4-6 hours manual review  
**Deployment Target**: Vercel (production-ready)

---

## Executive Summary

You are building a **dual-interface component showcase application** for the @opensite/ui library:

1. **Visual Interface**: Beautiful Next.js web application similar to shadcn.io/blocks
2. **API Layer**: RESTful endpoints for programmatic access to 600+ blocks
3. **CMS Integration**: Your Semantic UI builder fetches blocks via API

The application will organize blocks by semantic categories (About, Navbars, Footers, etc.) with live previews, responsive testing, and code viewing capabilities.

---

## Part 1: Project Setup & Architecture

### Step 1.1: Initialize Next.js Project

```bash
# Create new Next.js 15 project
npx create-next-app@latest opensite-ui-showcase \
  --typescript \
  --tailwind \
  --app \
  --eslint \
  --src-dir \
  --import-alias

cd opensite-ui-showcase
```

**Configuration Choices**:
- ✅ Use TypeScript
- ✅ Use Tailwind CSS
- ✅ Use App Router
- ✅ Use ESLint
- ✅ Import alias: `@/*`

### Step 1.2: Install Dependencies

```bash
npm install --save-dev \
  @types/node@latest \
  @types/react@latest \
  @shadcn/ui \
  lucide-react \
  clsx \
  tailwind-merge \
  shiki \
  next-themes \
  zustand \
  swr

npm install @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-scroll-area
```

**Dependency Breakdown**:
- `@shadcn/ui`: Pre-built components (Button, Card, Tabs, etc.)
- `lucide-react`: Icon library for navigation and UI
- `shiki`: Syntax highlighting for code blocks
- `next-themes`: Dark mode support
- `zustand`: Lightweight state management
- `swr`: Data fetching with caching and revalidation

### Step 1.3: Create Environment Variables

**File: `.env.local`**
```env
# Block registry location (from your @opensite/ui library)
NEXT_PUBLIC_BLOCKS_REGISTRY_PATH=../path-to-your/opensite-ui/dist/registry.json

# Optional: For image CDN
NEXT_PUBLIC_BLOCK_THUMBNAILS_CDN=https://your-cdn.example.com/blocks

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-vercel-analytics-id
```

### Step 1.4: Define Application Structure

```
opensite-ui-showcase/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── blocks/
│   │   │   │   ├── route.ts              # GET /api/blocks (all blocks)
│   │   │   │   ├── search/route.ts       # GET /api/blocks/search
│   │   │   │   └── [id]/
│   │   │   │       ├── route.ts          # GET /api/blocks/[id]
│   │   │   │       └── usage/route.ts    # POST track usage
│   │   │   ├── categories/
│   │   │   │   └── route.ts              # GET /api/categories
│   │   │   └── categories/
│   │   │       └── [slug]/route.ts       # GET /api/categories/[slug]
│   │   ├── (public)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                  # Home/Index
│   │   │   ├── categories/
│   │   │   │   └── [slug]/page.tsx       # Category detail
│   │   │   └── blocks/
│   │   │       └── [id]/page.tsx         # Block detail
│   │   ├── layout.tsx                    # Root layout
│   │   ├── globals.css
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/                           # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── input.tsx
│   │   │   └── ... (see shadcn/ui docs)
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── blocks/
│   │   │   ├── BlockCard.tsx             # Grid card for block listing
│   │   │   ├── BlockPreview.tsx          # Live preview component
│   │   │   ├── CodeDisplay.tsx           # Syntax highlighted code
│   │   │   ├── ResponsiveToggle.tsx      # Mobile/Desktop toggle
│   │   │   └── BlockDetails.tsx          # Full block page
│   │   └── common/
│   │       ├── SearchBar.tsx
│   │       ├── CategoryGrid.tsx
│   │       └── Breadcrumb.tsx
│   ├── lib/
│   │   ├── blocks.ts                     # Block data fetching
│   │   ├── registry.ts                   # Parse registry.json
│   │   ├── api-client.ts                 # API helper functions
│   │   ├── hooks.ts                      # Custom React hooks
│   │   └── utils.ts                      # Utility functions
│   ├── types/
│   │   ├── blocks.ts                     # TypeScript interfaces
│   │   ├── registry.ts
│   │   └── api.ts
│   └── config/
│       └── site-config.ts                # Site metadata
├── public/
│   ├── blocks/                           # Block thumbnails (if local)
│   └── favicons/
├── .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Part 2: Type Definitions & Data Models

### Step 2.1: Create TypeScript Interfaces

**File: `src/types/blocks.ts`**
```typescript
export interface BlockMetadata {
  id: string
  title: string
  description: string
  category: string
  categorySlug: string
  componentPath: string
  
  // Thumbnails for preview
  thumbnail: {
    desktop: string
    mobile: string
  }
  
  // Component code
  code: string
  
  // Props interface
  propsSchema: Record<string, PropDefinition>
  defaultProps?: Record<string, unknown>
  
  // Dependencies
  dependencies: string[]
  
  // Metadata
  tags: string[]
  performance?: {
    bundleSize?: string
    renderTime?: string
  }
  
  // Usage tracking
  usage?: {
    timesUsed?: number
    lastUsed?: string
  }
}

export interface PropDefinition {
  type: string
  description?: string
  default?: unknown
  required?: boolean
  enum?: unknown[]
}

export interface BlockCategory {
  slug: string
  name: string
  description: string
  icon?: string
  blockCount: number
  order?: number
}

export interface BlockSearchResult {
  id: string
  title: string
  category: string
  relevance: number
}
```

**File: `src/types/api.ts`**
```typescript
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  timestamp: string
}

export interface CategoriesResponse {
  categories: BlockCategory[]
}

export interface CategoryBlocksResponse {
  category: {
    slug: string
    name: string
  }
  blocks: BlockMetadata[]
}

export interface BlockDetailsResponse {
  block: BlockMetadata
}

export interface SearchResponse {
  query: string
  results: BlockSearchResult[]
  totalResults: number
}
```

### Step 2.2: Create Registry Parser

**File: `src/lib/registry.ts`**
```typescript
import { BlockMetadata, BlockCategory } from "@/types/blocks"

let cachedBlocks: BlockMetadata[] | null = null
let cachedCategories: BlockCategory[] | null = null

/**
 * Parse registry.json from @opensite/ui
 * Called at build time and cached
 */
export async function loadBlockRegistry(): Promise<BlockMetadata[]> {
  if (cachedBlocks) return cachedBlocks

  try {
    // In production, fetch from your @opensite/ui package
    // For development, load from local JSON
    const registryPath = process.env.NEXT_PUBLIC_BLOCKS_REGISTRY_PATH
    
    // Dynamically import registry
    const registry = await import("../../../opensite-ui/dist/registry.json")
    
    // Transform registry format to BlockMetadata
    const blocks: BlockMetadata[] = registry.blocks.map((block: any) => ({
      id: block.id,
      title: block.name || block.id,
      description: block.description || "",
      category: block.category,
      categorySlug: block.categorySlug || block.category.toLowerCase().replace(/\s+/g, "-"),
      componentPath: block.componentPath || block.path,
      thumbnail: block.preview || {
        desktop: `/blocks/${block.id}-desktop.png`,
        mobile: `/blocks/${block.id}-mobile.png`,
      },
      code: block.code || "",
      propsSchema: block.propsSchema || {},
      defaultProps: block.defaultProps || {},
      dependencies: block.dependencies || ["react"],
      tags: block.tags || [],
      performance: block.performance || {},
    }))

    cachedBlocks = blocks
    return blocks
  } catch (error) {
    console.error("Failed to load block registry:", error)
    return []
  }
}

/**
 * Extract unique categories from blocks
 */
export async function loadCategories(): Promise<BlockCategory[]> {
  if (cachedCategories) return cachedCategories

  const blocks = await loadBlockRegistry()
  const categoryMap = new Map<string, BlockCategory>()

  blocks.forEach((block) => {
    if (!categoryMap.has(block.categorySlug)) {
      categoryMap.set(block.categorySlug, {
        slug: block.categorySlug,
        name: block.category,
        description: `${block.category} components and blocks`,
        blockCount: 0,
        order: 999,
      })
    }
    const category = categoryMap.get(block.categorySlug)!
    category.blockCount += 1
  })

  const categories = Array.from(categoryMap.values()).sort((a, b) => a.order - b.order)
  cachedCategories = categories
  return categories
}

/**
 * Get blocks by category slug
 */
export async function getBlocksByCategory(slug: string): Promise<BlockMetadata[]> {
  const blocks = await loadBlockRegistry()
  return blocks.filter(
    (block) => block.categorySlug === slug.toLowerCase().replace(/\s+/g, "-")
  )
}

/**
 * Get single block by ID
 */
export async function getBlockById(id: string): Promise<BlockMetadata | null> {
  const blocks = await loadBlockRegistry()
  return blocks.find((block) => block.id === id) || null
}

/**
 * Search blocks (simple client-side for MVP, upgrade to full-text search later)
 */
export async function searchBlocks(query: string): Promise<BlockMetadata[]> {
  const blocks = await loadBlockRegistry()
  const lowerQuery = query.toLowerCase()

  return blocks.filter(
    (block) =>
      block.title.toLowerCase().includes(lowerQuery) ||
      block.description.toLowerCase().includes(lowerQuery) ||
      block.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      block.category.toLowerCase().includes(lowerQuery)
  )
}
```

---

## Part 3: API Routes

### Step 3.1: Implement GET /api/categories

**File: `src/app/api/categories/route.ts`**
```typescript
import { loadCategories } from "@/lib/registry"
import { NextResponse } from "next/server"

export const revalidate = 3600 // Cache for 1 hour

export async function GET() {
  try {
    const categories = await loadCategories()

    return NextResponse.json({
      success: true,
      data: {
        categories,
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to load categories",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
```

### Step 3.2: Implement GET /api/categories/:slug

**File: `src/app/api/categories/[slug]/route.ts`**
```typescript
import { getBlocksByCategory } from "@/lib/registry"
import { NextResponse } from "next/server"

export const revalidate = 3600

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug
    const blocks = await getBlocksByCategory(slug)

    if (blocks.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Category '${slug}' not found`,
          timestamp: new Date().toISOString(),
        },
        { status: 404 }
      )
    }

    const categoryName = blocks[0].category

    return NextResponse.json({
      success: true,
      data: {
        category: {
          slug,
          name: categoryName,
        },
        blocks: blocks.map((block) => ({
          id: block.id,
          title: block.title,
          description: block.description,
          category: block.category,
          thumbnail: block.thumbnail,
          componentPath: block.componentPath,
        })),
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to load blocks",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
```

### Step 3.3: Implement GET /api/blocks (All Blocks)

**File: `src/app/api/blocks/route.ts`**
```typescript
import { loadBlockRegistry } from "@/lib/registry"
import { NextRequest, NextResponse } from "next/server"

export const revalidate = 3600

export async function GET(request: NextRequest) {
  try {
    const blocks = await loadBlockRegistry()

    // Optional: pagination support
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "50")
    const skip = (page - 1) * limit

    const paginatedBlocks = blocks.slice(skip, skip + limit)

    return NextResponse.json({
      success: true,
      data: {
        blocks: paginatedBlocks,
        pagination: {
          page,
          limit,
          total: blocks.length,
          pages: Math.ceil(blocks.length / limit),
        },
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to load blocks",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
```

### Step 3.4: Implement GET /api/blocks/:id

**File: `src/app/api/blocks/[id]/route.ts`**
```typescript
import { getBlockById } from "@/lib/registry"
import { NextResponse } from "next/server"

export const revalidate = 3600

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const block = await getBlockById(params.id)

    if (!block) {
      return NextResponse.json(
        {
          success: false,
          error: `Block '${params.id}' not found`,
          timestamp: new Date().toISOString(),
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: { block },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to load block",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
```

### Step 3.5: Implement GET /api/blocks/search

**File: `src/app/api/blocks/search/route.ts`**
```typescript
import { searchBlocks } from "@/lib/registry"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams.get("q")

    if (!query || query.length < 2) {
      return NextResponse.json(
        {
          success: false,
          error: "Query must be at least 2 characters",
          timestamp: new Date().toISOString(),
        },
        { status: 400 }
      )
    }

    const results = await searchBlocks(query)

    return NextResponse.json({
      success: true,
      data: {
        query,
        results: results.map((block) => ({
          id: block.id,
          title: block.title,
          description: block.description,
          category: block.category,
          thumbnail: block.thumbnail,
          relevance: 1, // Upgrade to ranking algorithm later
        })),
        totalResults: results.length,
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Search failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
```

### Step 3.6: Implement POST /api/blocks/:id/usage (Usage Tracking)

**File: `src/app/api/blocks/[id]/usage/route.ts`**
```typescript
import { getBlockById } from "@/lib/registry"
import { NextRequest, NextResponse } from "next/server"

// In production, persist to database
// For MVP, use in-memory map (resets on deploy)
const usageMap = new Map<string, number>()

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const block = await getBlockById(params.id)

    if (!block) {
      return NextResponse.json(
        {
          success: false,
          error: `Block '${params.id}' not found`,
          timestamp: new Date().toISOString(),
        },
        { status: 404 }
      )
    }

    // Increment usage counter
    const currentUsage = usageMap.get(params.id) || 0
    usageMap.set(params.id, currentUsage + 1)

    return NextResponse.json({
      success: true,
      data: {
        blockId: params.id,
        usageCount: currentUsage + 1,
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to track usage",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
```

---

## Part 4: Frontend Components

### Step 4.1: Install shadcn/ui Components

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add scroll-area
npx shadcn-ui@latest add badge
```

### Step 4.2: Create Block Card Component

**File: `src/components/blocks/BlockCard.tsx`**
```typescript
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BlockMetadata } from "@/types/blocks"

interface BlockCardProps {
  block: BlockMetadata
}

export function BlockCard({ block }: BlockCardProps) {
  return (
    <Link href={`/blocks/${block.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
        {/* Thumbnail Preview */}
        <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-900 overflow-hidden rounded-t-lg">
          <Image
            src={block.thumbnail.desktop}
            alt={block.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Card Body */}
        <CardHeader className="pb-3">
          <CardTitle className="text-base line-clamp-1">{block.title}</CardTitle>
          <CardDescription className="line-clamp-2">{block.description}</CardDescription>
        </CardHeader>

        <CardContent>
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {block.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
```

### Step 4.3: Create Responsive Preview Component

**File: `src/components/blocks/ResponsiveToggle.tsx`**
```typescript
"use client"

import { useState } from "react"
import { Monitor, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface ResponsiveToggleProps {
  onViewportChange: (viewport: "mobile" | "desktop") => void
  defaultViewport?: "mobile" | "desktop"
}

export function ResponsiveToggle({
  onViewportChange,
  defaultViewport = "desktop",
}: ResponsiveToggleProps) {
  const [viewport, setViewport] = useState<"mobile" | "desktop">(defaultViewport)

  const handleChange = (value: string) => {
    if (value === "mobile" || value === "desktop") {
      setViewport(value)
      onViewportChange(value)
    }
  }

  return (
    <ToggleGroup
      type="single"
      value={viewport}
      onValueChange={handleChange}
      className="border rounded-lg p-1"
    >
      <ToggleGroupItem value="mobile" aria-label="Mobile view">
        <Smartphone className="h-4 w-4 mr-2" />
        Mobile
      </ToggleGroupItem>
      <ToggleGroupItem value="desktop" aria-label="Desktop view">
        <Monitor className="h-4 w-4 mr-2" />
        Desktop
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

### Step 4.4: Create Code Display Component

**File: `src/components/blocks/CodeDisplay.tsx`**
```typescript
"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { codeToHtml } from "shiki"
import { useEffect } from "react"

interface CodeDisplayProps {
  code: string
  language?: string
  filename?: string
}

export function CodeDisplay({
  code,
  language = "typescript",
  filename,
}: CodeDisplayProps) {
  const [copied, setCopied] = useState(false)
  const [html, setHtml] = useState<string>("")

  useEffect(() => {
    async function highlight() {
      const highlighted = await codeToHtml(code, {
        lang: language,
        theme: "github-dark",
      })
      setHtml(highlighted)
    }
    highlight()
  }, [code, language])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      {filename && (
        <div className="bg-slate-800 px-4 py-2 text-sm text-slate-300 font-mono rounded-t-lg">
          {filename}
        </div>
      )}

      <div
        className="overflow-x-auto bg-slate-900 p-4 rounded-lg font-mono text-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <Button
        size="sm"
        variant="outline"
        className="absolute top-2 right-2"
        onClick={handleCopy}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" />
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            Copy
          </>
        )}
      </Button>
    </div>
  )
}
```

### Step 4.5: Create Block Preview Component

**File: `src/components/blocks/BlockPreview.tsx`**
```typescript
"use client"

import { BlockMetadata } from "@/types/blocks"
import Image from "next/image"

interface BlockPreviewProps {
  block: BlockMetadata
  viewport: "mobile" | "desktop"
}

export function BlockPreview({ block, viewport }: BlockPreviewProps) {
  const thumbnailUrl =
    viewport === "mobile" ? block.thumbnail.mobile : block.thumbnail.desktop

  const containerWidth = viewport === "mobile" ? "375px" : "1280px"

  return (
    <div className="border rounded-lg bg-white dark:bg-slate-950 overflow-hidden">
      <div
        className="mx-auto bg-slate-50 dark:bg-slate-900 flex items-center justify-center overflow-auto"
        style={{
          width: containerWidth,
          maxWidth: "100%",
          minHeight: "400px",
        }}
      >
        <Image
          src={thumbnailUrl}
          alt={block.title}
          width={viewport === "mobile" ? 375 : 1280}
          height={viewport === "mobile" ? 812 : 600}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  )
}
```

### Step 4.6: Create Block Details Page Component

**File: `src/components/blocks/BlockDetails.tsx`**
```typescript
"use client"

import { BlockMetadata } from "@/types/blocks"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BlockPreview } from "./BlockPreview"
import { CodeDisplay } from "./CodeDisplay"
import { ResponsiveToggle } from "./ResponsiveToggle"
import { Badge } from "@/components/ui/badge"

interface BlockDetailsProps {
  block: BlockMetadata
}

export function BlockDetails({ block }: BlockDetailsProps) {
  const [viewport, setViewport] = useState<"mobile" | "desktop">("desktop")

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Preview Section */}
      <div className="lg:col-span-2 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Preview</h2>
          <ResponsiveToggle onViewportChange={setViewport} />
        </div>
        <BlockPreview block={block} viewport={viewport} />
      </div>

      {/* Details Section */}
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{block.title}</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-4">{block.description}</p>

          <div className="flex gap-2 flex-wrap">
            {block.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>

        {/* Meta Information */}
        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-slate-500">Category</p>
            <p className="text-base">{block.category}</p>
          </div>

          {block.performance?.bundleSize && (
            <div>
              <p className="text-sm font-semibold text-slate-500">Bundle Size</p>
              <p className="text-base">{block.performance.bundleSize}</p>
            </div>
          )}

          <div>
            <p className="text-sm font-semibold text-slate-500">Component Path</p>
            <p className="text-xs font-mono bg-slate-100 dark:bg-slate-900 p-2 rounded">
              {block.componentPath}
            </p>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="code" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="props">Props</TabsTrigger>
          </TabsList>

          <TabsContent value="code" className="space-y-4">
            <CodeDisplay code={block.code} language="typescript" filename={`${block.id}.tsx`} />
          </TabsContent>

          <TabsContent value="props" className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Prop</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(block.propsSchema).map(([key, value]: [string, any]) => (
                    <tr key={key} className="border-b">
                      <td className="p-2 font-mono text-xs">{key}</td>
                      <td className="p-2 text-xs">{value.type}</td>
                      <td className="p-2 text-xs text-slate-600">{value.description || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
```

---

## Part 5: Pages Implementation

### Step 5.1: Create Home Page

**File: `src/app/(public)/page.tsx`**
```typescript
import { loadCategories, loadBlockRegistry } from "@/lib/registry"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/common/SearchBar"
import { CategoryGrid } from "@/components/common/CategoryGrid"
import Link from "next/link"

export default async function HomePage() {
  const categories = await loadCategories()
  const blocks = await loadBlockRegistry()

  return (
    <main className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">OpenSite UI Blocks</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          {blocks.length}+ production-ready components for your next project
        </p>

        {/* Search Bar */}
        <div className="pt-6">
          <SearchBar />
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
        <div>
          <p className="text-3xl font-bold">{blocks.length}</p>
          <p className="text-sm text-slate-600">Components</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{categories.length}</p>
          <p className="text-sm text-slate-600">Categories</p>
        </div>
        <div>
          <p className="text-3xl font-bold">100%</p>
          <p className="text-sm text-slate-600">Open Source</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Browse by Category</h2>
        </div>
        <CategoryGrid categories={categories} />
      </section>
    </main>
  )
}
```

### Step 5.2: Create Category Page

**File: `src/app/(public)/categories/[slug]/page.tsx`**
```typescript
import { getBlocksByCategory, loadCategories } from "@/lib/registry"
import { BlockCard } from "@/components/blocks/BlockCard"
import { Breadcrumb } from "@/components/common/Breadcrumb"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const categories = await loadCategories()
  return categories.map((cat) => ({ slug: cat.slug }))
}

export default async function CategoryPage({ params }: PageProps) {
  const blocks = await getBlocksByCategory(params.slug)

  if (blocks.length === 0) {
    notFound()
  }

  const categoryName = blocks[0].category

  return (
    <main className="space-y-8 py-12">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: categoryName, href: `/categories/${params.slug}`, active: true },
        ]}
      />

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">{categoryName}</h1>
        <p className="text-lg text-slate-600">{blocks.length} components available</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blocks.map((block) => (
          <BlockCard key={block.id} block={block} />
        ))}
      </div>
    </main>
  )
}
```

### Step 5.3: Create Block Detail Page

**File: `src/app/(public)/blocks/[id]/page.tsx`**
```typescript
import { getBlockById, loadBlockRegistry } from "@/lib/registry"
import { BlockDetails } from "@/components/blocks/BlockDetails"
import { Breadcrumb } from "@/components/common/Breadcrumb"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const blocks = await loadBlockRegistry()
  return blocks.map((block) => ({ id: block.id }))
}

export default async function BlockPage({ params }: PageProps) {
  const block = await getBlockById(params.id)

  if (!block) {
    notFound()
  }

  return (
    <main className="space-y-8 py-12">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: block.category, href: `/categories/${block.categorySlug}` },
          { label: block.title, href: `/blocks/${block.id}`, active: true },
        ]}
      />

      {/* Block Details */}
      <BlockDetails block={block} />
    </main>
  )
}
```

---

## Part 6: Layout & Common Components

### Step 6.1: Create Root Layout

**File: `src/app/layout.tsx`**
```typescript
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OpenSite UI Blocks",
  description: "600+ production-ready React components for your next project",
  keywords: ["react", "components", "blocks", "shadcn", "tailwind"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Step 6.2: Create Header Component

**File: `src/components/layout/Header.tsx`**
```typescript
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { ModeToggle } from "@/components/common/ModeToggle"

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
          <span className="font-bold text-lg">OpenSite UI</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600">
            Browse
          </Link>
          <a
            href="https://github.com/opensite-ai/opensite-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-blue-600"
          >
            Docs
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/opensite-ai/opensite-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
```

### Step 6.3: Create Footer Component

**File: `src/components/layout/Footer.tsx`**
```typescript
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-950 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Blocks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Docs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex justify-between items-center">
          <p className="text-sm text-slate-600">© 2025 OpenSite AI. All rights reserved.</p>
          <p className="text-sm text-slate-600">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
```

### Step 6.4: Create Common Components

**File: `src/components/common/SearchBar.tsx`**
```typescript
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md mx-auto">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Search blocks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-10"
        />
        <Button type="submit" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
```

**File: `src/components/common/CategoryGrid.tsx`**
```typescript
import { BlockCategory } from "@/types/blocks"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface CategoryGridProps {
  categories: BlockCategory[]
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link key={category.slug} href={`/categories/${category.slug}`}>
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-semibold text-blue-600">{category.blockCount} blocks</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
```

---

## Part 7: Configuration Files

### Step 7.1: Update next.config.ts

**File: `next.config.ts`**
```typescript
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Pre-generate static pages at build time
  experimental: {
    staticGeneration: {
      preferredRegion: ["auto"],
    },
  },
}

export default nextConfig
```

### Step 7.2: Update tailwind.config.ts

```typescript
import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

---

## Part 8: Build, Test & Deploy

### Step 8.1: Development Build

```bash
# Install all dependencies
npm install

# Run development server
npm run dev

# Navigate to http://localhost:3000
```

### Step 8.2: Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm run start

# Should see "ready - started server on 0.0.0.0:3000"
```

### Step 8.3: Test API Endpoints

```bash
# Test categories endpoint
curl http://localhost:3000/api/categories

# Test category blocks
curl http://localhost:3000/api/categories/about

# Test single block
curl http://localhost:3000/api/blocks/about-animated-preview

# Test search
curl http://localhost:3000/api/blocks/search?q=hero
```

### Step 8.4: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Set environment variables in Vercel dashboard
# NEXT_PUBLIC_BLOCKS_REGISTRY_PATH
```

---

## Part 9: Integration with Your Semantic UI CMS

Your Semantic UI builder can now call this API:

```typescript
// In your CMS (e.g., dt-cms/Source)

// Fetch all categories
const categories = await fetch('https://opensite-ui-showcase.vercel.app/api/categories')
  .then(r => r.json())

// Fetch blocks for a category
const blocks = await fetch('https://opensite-ui-showcase.vercel.app/api/categories/about')
  .then(r => r.json())

// Get full block details
const block = await fetch('https://opensite-ui-showcase.vercel.app/api/blocks/about-animated-preview')
  .then(r => r.json())

// Track usage
await fetch('https://opensite-ui-showcase.vercel.app/api/blocks/about-animated-preview/usage', {
  method: 'POST'
})
```

---

## Part 10: Performance Optimization

### Image Optimization
- Use `next/image` for automatic optimization
- Generate thumbnails at build time
- Use AVIF/WebP formats

### Caching
- Static page generation (ISR)
- API response caching (revalidate: 3600)
- Client-side SWR for search results

### Code Splitting
- Next.js automatically splits code by route
- Use dynamic imports for heavy components

### Monitoring
- Enable Vercel Analytics
- Monitor Core Web Vitals
- Set up error tracking

---

## Summary

This document provides everything an AI agent needs to build a production-ready component showcase with API integration. The system includes:

✅ **Architecture**: Next.js 15 with TypeScript  
✅ **Frontend**: shadcn/ui components with Tailwind CSS  
✅ **API**: RESTful endpoints for block discovery  
✅ **UI/UX**: Category browsing, block detail pages, responsive previews  
✅ **Deployment**: Vercel-ready with static generation  
✅ **Integration**: Ready for your Semantic UI CMS  
✅ **Scalability**: Supports 600+ blocks without degradation

**Next Steps After Build**:
1. Deploy to Vercel
2. Configure custom domain
3. Set up monitoring and analytics
4. Integrate API into your CMS
5. Add usage tracking database (PostgreSQL)
6. Implement advanced search (Meilisearch/Algolia)
7. Add version history and component deprecation system
