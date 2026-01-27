![OpenSite UI Library](https://octane.cdn.ing/api/v1/images/transform?url=https://cdn.ing/assets/i/r/287629/vjb0sf84r4uce7te4310t19di8n8/opensite-component-library-dark-hero-banner-grid.png)

# OpenSite UI Library

A comprehensive showcase and documentation platform for the `@opensite/ui` component library.

## Adding New Components

When adding a new component to the showcase, you need to update three files:

### 1. Create Showcase File

Create a showcase example in `src/blocks/[category]/[component-name].tsx` that imports and demonstrates the actual component from `@opensite/ui`:

```tsx
import { YourComponent } from "@opensite/ui/blocks/category/your-component";
import { imagePlaceholders, optixFlowApiKey } from "@/lib/media";

export default function Demo() {
  return (
    <YourComponent
      // Add example props here
      optixFlowConfig={{ apiKey: optixFlowApiKey as string }}
    />
  );
}
```

### 2. Register in Registry (`src/lib/registry.ts`)

Add the component metadata to the `productionBlocks` array:

```typescript
{
  id: "category/component-name",
  name: "ComponentName",
  title: "Display Title",
  category: "Category",
  categorySlug: "category",
  description: "Component description",
  thumbnail: {
    desktop: "url-to-thumbnail",
    mobile: "url-to-mobile-thumbnail",
  },
  componentPath: "blocks/category/component-name.tsx",
  code: getShowcaseCode("blocks/category/component-name.tsx"),
  dependencies: ["@opensite/ui", "@page-speed/img"],
  tags: ["tag1", "tag2"],
  propsSchema: {
    propName: {
      type: "string",
      required: false,
      description: "Prop description",
      default: "default value",
    },
    // Add more props
  },
}
```

### 3. Register in Component Registry (`src/lib/component-registry.ts`)

Import and register the component for live preview:

```typescript
const YourComponent = dynamic(
  () => import("@/blocks/category/component-name")
);

export const componentRegistry: Record<string, ComponentType<any>> = {
  // ... existing components
  "category/component-name": YourComponent,
};
```

## Architecture

### Preview System

The showcase uses an iframe-based preview system that renders actual components:

- **Desktop Preview**: 16:9 aspect ratio, full width
- **Mobile Preview**: 9:16 aspect ratio (375px × 667px iPhone-style viewport)
- **Live Rendering**: Components are rendered in isolation at `/preview/[id]` route
- **Viewport Simulation**: Proper viewport meta tags for mobile rendering

### URL Encoding

Block IDs contain slashes (e.g., `hero/hero-floating-images`) but Next.js routes use single segments. The system encodes IDs for URLs:

- **Registry ID**: `hero/hero-floating-images` (semantic format)
- **Encoded URL**: `hero--hero-floating-images` (URL-safe format)
- **Route**: `/blocks/hero--hero-floating-images`

Encoding/decoding utilities are provided in `src/lib/utils.ts`.

