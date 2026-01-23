# Deep Research: Next.js iframe Component Isolation - Solutions & Recommendations

## Problem Analysis

Your `BlockPreview` component is rendering blocks inside an iframe, but the iframe is displaying the entire Next.js application layout (header, footer, navbar) instead of just the isolated component.

**Root Cause**: When the iframe loads `/preview/[blockId]`, it's loading a full Next.js page route which includes:
- Root layout (layout.tsx)
- Navigation
- Footer
- All app-level styling and scripts
- Next.js hydration code

This happens because:
1. The iframe `src` points to a full Next.js page route
2. Next.js App Router applies the root layout to ALL routes by default
3. The iframe receives the complete HTML document with all layout components

---

## Solution Overview (4 Approaches)

### ✅ **RECOMMENDED: Approach 1 - API Route + srcdoc**
**Effort**: ⭐⭐ (Medium) | **Purity**: ⭐⭐⭐⭐⭐ (Perfect Isolation)

Use an API route that renders ONLY the component as HTML and inject it via `srcdoc` attribute.

**Advantages**:
- Complete isolation - no layout injection
- No layout.tsx applied to preview route
- Very clean solution
- Browser sandbox security built-in
- No external dependencies

**How it works**:
```
BlockPreview Component
    ↓ (calls)
/api/preview/[blockId] (API Route)
    ↓ (renders component to HTML string)
renderToReadableStream(BlockComponent)
    ↓ (returns pure HTML)
<iframe srcdoc={htmlString} />
    ↓ (renders isolated in iframe)
Just the component (no layout)
```

**Implementation**:

```typescript
// app/api/preview/[blockId]/route.ts
import { renderToReadableStream } from 'react-dom/server'
import { BlockRegistry } from '@/lib/block-registry'

export async function GET(
  req: Request,
  { params }: { params: { blockId: string } }
) {
  try {
    const { blockId } = params
    const mode = new URL(req.url).searchParams.get('mode') || 'desktop'
    
    // Get the block component
    const BlockComponent = await BlockRegistry.getComponent(blockId)
    if (!BlockComponent) {
      return new Response('Block not found', { status: 404 })
    }
    
    // Render component to stream
    const stream = await renderToReadableStream(
      <>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: white;
            color: #333;
          }
          ${mode === 'mobile' ? `
            body { max-width: 390px; margin: 0 auto; }
            @media (max-width: 390px) { body { max-width: 100vw; } }
          ` : ''}
        `}</style>
        <BlockComponent />
      </>
    )
    
    return new Response(stream, {
      headers: {
        'content-type': 'text/html; charset=utf-8',
      },
    })
  } catch (error) {
    console.error('Preview render error:', error)
    return new Response('Error rendering preview', { status: 500 })
  }
}
```

```typescript
// components/block-preview.tsx (Updated)
'use client'

import { useState, useEffect } from 'react'
import type { Block } from '@/types/blocks'
import { ResponsiveToggle } from './responsive-toggle'
import { cn, encodeBlockId } from '@/lib/utils'

interface BlockPreviewProps {
  block: Block
  className?: string
}

export function BlockPreview({ block, className }: BlockPreviewProps) {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop')
  const [isLoading, setIsLoading] = useState(true)
  const [htmlContent, setHtmlContent] = useState<string>('')

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `/api/preview/${encodeBlockId(block.id)}?mode=${viewMode}`
        )
        const html = await response.text()
        setHtmlContent(html)
      } catch (error) {
        console.error('Failed to fetch preview:', error)
        setHtmlContent('<p>Error loading preview</p>')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPreview()
  }, [block.id, viewMode])

  return (
    <div className={cn('space-y-4', className)}>
      {/* Controls */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Live Preview</h3>
        <ResponsiveToggle value={viewMode} onChange={setViewMode} />
      </div>

      {/* Preview Container */}
      <div className="relative border rounded-lg bg-white overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
            <p className="text-sm text-gray-500">Loading preview...</p>
          </div>
        )}

        {/* Using srcdoc for complete isolation */}
        <iframe
          srcDoc={htmlContent}
          title={`Preview of ${block.title}`}
          sandbox="allow-scripts allow-same-origin"
          className={cn(
            'w-full border-0',
            viewMode === 'mobile' ? 'h-[812px]' : 'h-[600px]'
          )}
        />

        {/* View Mode Label */}
        <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded pointer-events-none">
          {viewMode === 'desktop' ? '💻 Desktop' : '📱 Mobile'}
        </div>
      </div>

      {/* Preview Info */}
      <p className="text-sm text-gray-500">
        Showing live {viewMode} render of <strong>{block.title}</strong>.
        This is the actual component rendered in an isolated environment.
      </p>
    </div>
  )
}
```

---

### Alternative: Approach 2 - Layout Bypass (Route Groups)
**Effort**: ⭐⭐ (Medium) | **Purity**: ⭐⭐⭐⭐ (Very Good)

Create a separate layout group that doesn't include the main layout.

**How it works**:
```
/preview/(standalone)/[blockId]/page.tsx
    ↓ (No root layout applied)
layout.tsx only for this route group
    ↓ (minimal layout)
Just component + basic styles
```

**Structure**:
```
src/app/
├── layout.tsx (root layout - APPLIED TO EVERYTHING)
├── (preview)/
│   ├── layout.tsx (empty layout - no navbar/footer)
│   └── preview/[blockId]/
│       └── page.tsx (just the component)
└── (main)/
    ├── page.tsx
    └── blocks/
        └── [id]/
            └── page.tsx
```

**Implementation**:

```typescript
// app/(preview)/layout.tsx
// Minimal layout for preview routes - no navbar, footer, etc.
export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</> // No layout wrappers!
}
```

```typescript
// app/(preview)/preview/[blockId]/page.tsx
import { BlockRegistry } from '@/lib/block-registry'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const block = await BlockRegistry.getBlock(params.blockId)
  return { title: block?.title }
}

export default async function PreviewPage({
  params,
  searchParams,
}: {
  params: { blockId: string }
  searchParams: { mode?: string }
}) {
  const BlockComponent = await BlockRegistry.getComponent(params.blockId)
  const mode = searchParams.mode || 'desktop'

  if (!BlockComponent) {
    notFound()
  }

  return (
    <div style={{
      margin: 0,
      padding: 0,
      background: 'white',
      ...(mode === 'mobile' ? {
        maxWidth: '390px',
        marginInline: 'auto'
      } : {})
    }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: system-ui, sans-serif; }
      `}</style>
      <BlockComponent />
    </div>
  )
}
```

**⚠️ Issue with this approach**: Next.js STILL applies the root layout (layout.tsx) to route groups. This approach is less pure than Approach 1.

---

### Alternative: Approach 3 - External Preview Service
**Effort**: ⭐⭐⭐ (Hard) | **Purity**: ⭐⭐⭐⭐⭐ (Perfect)

Deploy preview server separately (not in Next.js app).

**Best for**: 
- 600+ blocks with high traffic
- Need complete isolation
- Want to scale independently

**How it works**:
```
BlockPreview Component
    ↓ (iframe src)
https://preview.opensite-ui.com/blocks/[blockId]
    ↓ (Separate Express/Fastify server)
renderToString() + serve HTML
    ↓ (iframe)
Pure component (no Next.js layout)
```

---

### Alternative: Approach 4 - Library Solution: react-frame-component
**Effort**: ⭐ (Easy) | **Purity**: ⭐⭐⭐ (Good)

Use maintained library for iframe component rendering.

```bash
npm install react-frame-component
```

```typescript
import Frame from 'react-frame-component'
import { BlockComponent } from '@/blocks/...'

export function BlockPreview({ block }) {
  return (
    <Frame
      style={{ width: '100%', height: '600px', border: 'none' }}
      initialContent={`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { font-family: system-ui; }
            </style>
          </head>
          <body><div id="root"></div></body>
        </html>
      `}
    >
      <BlockComponent />
    </Frame>
  )
}
```

**Pros**: Simplest to implement, handles React hydration
**Cons**: External dependency, less control

---

## Deep Technical Analysis

### Why Layout is Being Injected

1. **Next.js App Router Architecture**:
   ```
   Root Layout (layout.tsx)
       ↓ applies to ALL routes
       ├── /page.tsx
       ├── /blocks/[id]/page.tsx
       ├── /preview/[blockId]/page.tsx ← ALSO GETS ROOT LAYOUT
       └── /api/preview/[blockId]/route.ts (OK - no layout)
   ```

2. **What happens when iframe loads `/preview/[blockId]`**:
   ```
   Browser: GET /preview/[blockId]
       ↓
   Next.js App Router:
       ├── Applies root layout.tsx
       ├── Applies any group layouts
       ├── Applies route layout.tsx
       ├── Renders page.tsx content
       └── Combines into full HTML document
           ├── <!DOCTYPE html>
           ├── <head> (with Next.js scripts)
           ├── <body>
           │   ├── <Navbar /> (from root layout)
           │   ├── <main>
           │   │   └── <BlockComponent /> ← what you want
           │   ├── <Footer /> (from root layout)
           │   └── <NextScript /> (hydration)
           └── </body>
   ```

3. **Why `src` parameter doesn't prevent this**:
   - `src="/preview/[blockId]"` just points Next.js to a route
   - Next.js **always** applies layouts to routes
   - The layout is applied on the server before sending HTML to iframe

### srcdoc vs src Comparison

| Aspect | `src="/preview/[blockId]"` | `srcdoc="<html>...</html>"` |
|--------|---------------------------|---------------------------|
| **What it loads** | Full Next.js page route | Raw HTML string |
| **Layouts applied** | YES - root layout included | NO - just the HTML |
| **Styles** | Root styles + page styles | Only what you put in srcdoc |
| **Scripts** | Next.js hydration scripts | Only scripts you include |
| **Security** | Cross-origin risks | Sandboxed by nature |
| **Size** | Larger (full layout) | Smaller (just component) |

**Example of srcdoc**:
```html
<iframe srcdoc='<!DOCTYPE html>
<html>
  <head>
    <style>body { font-family: system-ui; }</style>
  </head>
  <body>
    <div class="hero">...</div>
  </body>
</html>' />
```

### renderToReadableStream vs renderToString

For Next.js API routes with streaming, use `renderToReadableStream`:

```typescript
// ✅ CORRECT - for Next.js App Router API routes
import { renderToReadableStream } from 'react-dom/server'

export async function GET() {
  const stream = await renderToReadableStream(<Component />)
  return new Response(stream, {
    headers: { 'content-type': 'text/html' }
  })
}
```

vs

```typescript
// ❌ OLD - deprecated in newer React versions
import { renderToString } from 'react-dom/server'
const html = renderToString(<Component />)
```

---

## Implementation Checklist

### Step 1: Create API Route for Preview
- [ ] Create `/app/api/preview/[blockId]/route.ts`
- [ ] Import `renderToReadableStream` from 'react-dom/server'
- [ ] Import BlockRegistry to get component
- [ ] Render component to stream
- [ ] Return Response with 'text/html' header
- [ ] Add error handling for missing blocks

### Step 2: Update BlockPreview Component
- [ ] Change from `src` to `srcdoc`
- [ ] Fetch HTML from `/api/preview/[blockId]`
- [ ] Store HTML in state
- [ ] Pass to `srcdoc` attribute
- [ ] Remove `sandbox="allow-same-origin"` (add only needed permissions)
- [ ] Test desktop and mobile modes

### Step 3: Test Isolation
- [ ] Inspector should show ONLY component HTML
- [ ] No `<nav>`, `<footer>`, layout elements
- [ ] No Next.js scripts in frame
- [ ] Styles should be minimal/none (your component provides)
- [ ] Both desktop and mobile work

### Step 4: Performance Optimization
- [ ] Add caching headers to API route:
  ```typescript
  export const revalidate = 3600 // 1 hour cache
  ```
- [ ] Lazy-load iframe with `loading="lazy"`
- [ ] Consider memoization for BlockComponent lookup

---

## Code Example: Complete Solution

**File: `app/api/preview/[blockId]/route.ts`**

```typescript
import { renderToReadableStream } from 'react-dom/server'
import { BlockRegistry } from '@/lib/block-registry'

export const revalidate = 3600 // Cache for 1 hour

export async function GET(
  req: Request,
  { params }: { params: { blockId: string } }
) {
  try {
    const blockId = decodeURIComponent(params.blockId)
    const mode = new URL(req.url).searchParams.get('mode') || 'desktop'

    // Get block from registry
    const block = await BlockRegistry.getBlock(blockId)
    if (!block) {
      return new Response(
        JSON.stringify({ error: 'Block not found' }),
        { status: 404, headers: { 'content-type': 'application/json' } }
      )
    }

    // Get component
    const Component = await BlockRegistry.getComponent(blockId)

    // Minimal HTML wrapper for isolated rendering
    const MIN_HTML = (children: React.ReactNode) => (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{block.title}</title>
          <style>{`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            html, body {
              width: 100%;
              height: 100%;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              color: #333;
              background: white;
            }
            ${mode === 'mobile' ? `
              body {
                max-width: 390px;
              }
            ` : ''}
          `}</style>
        </head>
        <body>
          <div id="root">{children}</div>
        </body>
      </html>
    )

    // Render component
    const stream = await renderToReadableStream(MIN_HTML(<Component />))

    return new Response(stream, {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'public, max-age=3600',
      },
    })
  } catch (error) {
    console.error('[preview] Error:', error)
    return new Response(
      `<html><body>Error rendering preview: ${error?.message}</body></html>`,
      { status: 500, headers: { 'content-type': 'text/html' } }
    )
  }
}
```

**File: `components/block-preview.tsx`**

```typescript
'use client'

import { useState, useEffect } from 'react'
import type { Block } from '@/types/blocks'
import { ResponsiveToggle, type ViewMode } from './responsive-toggle'
import { cn, encodeBlockId } from '@/lib/utils'

interface BlockPreviewProps {
  block: Block
  className?: string
}

export function BlockPreview({ block, className }: BlockPreviewProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('desktop')
  const [isLoading, setIsLoading] = useState(true)
  const [htmlContent, setHtmlContent] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        setIsLoading(true)
        setError('')
        
        const previewUrl = `/api/preview/${encodeBlockId(block.id)}?mode=${viewMode}`
        const response = await fetch(previewUrl)

        if (!response.ok) {
          throw new Error(`Failed to load preview: ${response.status}`)
        }

        const html = await response.text()
        setHtmlContent(html)
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error'
        console.error('Preview error:', message)
        setError(message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPreview()
  }, [block.id, viewMode])

  return (
    <div className={cn('space-y-4', className)}>
      {/* Header with controls */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Live Preview</h2>
        <ResponsiveToggle value={viewMode} onChange={setViewMode} />
      </div>

      {/* Preview Container */}
      <div className="relative border rounded-lg overflow-hidden bg-gray-50">
        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10 backdrop-blur-sm">
            <div className="text-center space-y-2">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto" />
              <p className="text-sm text-gray-600">Loading preview...</p>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="absolute inset-0 bg-red-50 flex items-center justify-center z-10">
            <div className="text-center space-y-2 max-w-xs">
              <p className="text-sm font-medium text-red-900">Preview Error</p>
              <p className="text-xs text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Iframe with srcdoc for isolation */}
        <iframe
          srcDoc={htmlContent}
          title={`Live preview of ${block.title}`}
          sandbox="allow-scripts allow-same-origin"
          className={cn('w-full border-0 bg-white', 
            viewMode === 'desktop' ? 'h-[600px]' : 'h-[812px]'
          )}
          loading="lazy"
        />

        {/* Mode indicator badge */}
        <div className="absolute top-3 right-3 bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full pointer-events-none">
          {viewMode === 'desktop' ? '💻 Desktop (1440px)' : '📱 Mobile (390px)'}
        </div>
      </div>

      {/* Footer info */}
      <div className="text-sm text-gray-600">
        Showing live {viewMode} render of <strong>{block.title}</strong>
        {' '}– rendered in an isolated iframe environment.
      </div>

      {/* Code tabs info */}
      <div className="bg-blue-50 border border-blue-200 rounded p-3 text-xs text-blue-900">
        💡 Switch to the <strong>Code</strong> tab above to see the component source code.
      </div>
    </div>
  )
}
```

---

## Debugging Checklist

**If layout is still appearing:**
1. ✅ Check browser DevTools → Inspector the iframe
   - Should show ONLY `<html><head>...</head><body><Component /></body></html>`
   - NO `<nav>`, `<footer>`, `<Navbar>` elements
   
2. ✅ Verify API route is being called
   - Network tab → filter for `/api/preview/`
   - Response should be HTML, NOT full page

3. ✅ Check `srcdoc` is being populated
   - Console: `document.querySelector('iframe').srcdoc`
   - Should contain component HTML only

4. ✅ Check for CSS leakage
   - Use DevTools → iframe → Styles tab
   - Shouldn't see global root styles

**If component doesn't render:**
1. ✅ Verify BlockRegistry.getComponent returns component
2. ✅ Check component has no async data fetching
3. ✅ Ensure component is properly exported

---

## Recommendation

**Use Approach 1 (API Route + srcdoc)** because:

✅ **Simplest implementation** - just one API route file
✅ **Perfect isolation** - no layout injection possible  
✅ **No dependencies** - uses standard React DOM Server
✅ **Best performance** - single API call per preview
✅ **Most maintainable** - clear separation of concerns
✅ **Future-proof** - works with any component

This is how professional component libraries (shadcn.io, Chakra UI, etc.) handle previews.

---

## Related Resources

- [Next.js API Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [React renderToReadableStream](https://react.dev/reference/react-dom/server/renderToReadableStream)
- [iframe sandbox attribute (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox)
- [iframe srcdoc attribute (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#srcdoc)
- [react-frame-component (npm)](https://www.npmjs.com/package/react-frame-component)
