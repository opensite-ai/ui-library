# Semantic UI AI Agent - Implementation Plan

## Executive Summary

This document outlines the comprehensive implementation plan for building the Semantic UI AI Agent system that enables intelligent, conversational page and site building. The system leverages Octane (Rust AI orchestration), @opensite/ui component library, and existing multi-stage AI workflow patterns to create context-aware, semantically structured websites.

**Timeline Estimate**: Phased rollout over multiple development cycles
**Key Technologies**: Rust/Axum, PostgreSQL, Anthropic Claude, React, TypeScript
**Target**: Production deployment to 300+ client sites via customer-sites rendering engine

---

## 1. Architecture Overview

### 1.1 System Components

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Interface Layer                     │
│  dt-cms/Source (Next.js 15) - Conversational Page Builder UI   │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                    AI Orchestration Layer                        │
│         Octane (Rust/Axum) - https://octane.buzz                │
│  • Multi-stage AI workflows (research → generation)             │
│  • Component registry and selection                             │
│  • Style guide generation                                       │
│  • SEO/Brand integration                                        │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Data & Storage Layer                         │
│  PostgreSQL (pgvector) + Redis + Tigris S3                     │
│  • website_style_guide (tailwind_css, theme_config)            │
│  • ai_semantic_components (component registry)                 │
│  • ai_tasks (long-running workflows)                           │
│  • Existing: websites, media_records, brand_guides, seo        │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Rendering Layer                              │
│  customer-sites (Rails 7) → @opensite/blocks → @opensite/ui   │
│  • IndexedDB caching                                            │
│  • Tree-shakable component loading                             │
│  • Performance-optimized media (@opensite/img, @opensite/video)│
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Data Flow - Page Generation Workflow

```
User Intent
    │
    ├─→ [Phase 1: Research & Context Gathering] (30-90s)
    │   ├─→ Fetch website context (brand_guide, style_guide, seo_config)
    │   ├─→ Query component registry (semantic tags, capabilities)
    │   ├─→ Analyze media library (available assets)
    │   └─→ Web search for industry best practices
    │
    ├─→ [Phase 2: Semantic Structure Generation] (30-60s)
    │   ├─→ AI determines semantic component types
    │   ├─→ Select compatible @opensite/ui blocks
    │   ├─→ Generate content hierarchy
    │   └─→ Create design_payload (Chai format)
    │
    ├─→ [Phase 3: Style & Theme Application] (10-30s)
    │   ├─→ Apply website_style_guide.tailwind_css
    │   ├─→ Merge website_style_guide.theme_config
    │   └─→ Validate against Core Web Vitals
    │
    └─→ [Phase 4: Rendering & Optimization] (< 5s)
        ├─→ Store design_payload in page_categories
        ├─→ customer-sites loads via @opensite/blocks
        └─→ IndexedDB caches for performance
```

---

## 2. Component Registry System

### 2.1 Database Schema - New Table

**⚠️ CRITICAL: Database Migrations**

All database schema modifications MUST be created as Rails 6 migrations in the `toastability-service` application (`/toastability-service/db/migrate/`), NOT in Octane.

**Why?**
- Octane has READ/WRITE access only to the PostgreSQL database
- toastability-service owns the database schema (300+ production client websites)
- Only Rails can safely modify schema with proper rollback support
- Octane CLAUDE.md explicitly forbids auto-migration or schema alterations

**Migration Location**: `/toastability-service/db/migrate/YYYYMMDDHHMMSS_create_ai_semantic_components.rb`

**Octane Role**: After migration is applied, Octane will:
- Read from ai_semantic_components table
- Write/update component data
- Generate and update embeddings
- Query for semantic search

---

**Table**: `ai_semantic_components`

```sql
CREATE TABLE ai_semantic_components (
  id BIGSERIAL PRIMARY KEY,

  -- Component Identification
  component_id VARCHAR(255) NOT NULL UNIQUE,  -- e.g., "alternating-blocks-01"
  npm_package VARCHAR(255) NOT NULL,          -- "@opensite/ui"
  import_path TEXT NOT NULL,                  -- "blocks/about/alternating-blocks"

  -- Semantic Classification
  semantic_type VARCHAR(100) NOT NULL,        -- "hero", "features", "testimonials", etc.
  semantic_tags TEXT[] NOT NULL,              -- ["about", "storytelling", "media-left-right"]
  category VARCHAR(100) NOT NULL,             -- "about", "cta", "features", etc.

  -- Component Metadata
  display_name VARCHAR(255) NOT NULL,
  description TEXT,
  preview_url TEXT,                           -- Screenshot/preview image

  -- Capabilities
  data_capabilities JSONB DEFAULT '{}'::jsonb,
  /* Example structure:
  {
    "accepts": ["text", "image", "video", "data-feed"],
    "layouts": ["single-column", "two-column", "alternating"],
    "responsive": true,
    "accessibility_level": "WCAG-AA"
  }
  */

  -- AI Context
  context_adapters JSONB DEFAULT '{}'::jsonb,
  /* Example structure:
  {
    "industries": ["restaurant", "hospitality", "real-estate"],
    "use_cases": ["about-us", "company-history", "team-showcase"],
    "brand_alignment": ["modern", "professional", "friendly"]
  }
  */

  -- Props Schema
  props_schema JSONB NOT NULL,
  /* TypeScript interface as JSON schema:
  {
    "type": "object",
    "properties": {
      "sections": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "content": {"type": "string"},
            "media": {"type": "string"},
            "mediaLeft": {"type": "boolean"}
          }
        }
      },
      "title": {"type": "string"},
      "background": {"enum": ["white", "gray", "accent"]}
    }
  }
  */

  -- Performance Metrics
  bundle_size_kb DECIMAL(10,2),               -- Gzipped size
  render_performance VARCHAR(50),             -- "fast", "medium", "slow"
  core_web_vitals_impact VARCHAR(50),         -- "minimal", "moderate", "significant"

  -- Usage Stats
  usage_count INTEGER DEFAULT 0,
  last_used_at TIMESTAMP,

  -- Versioning
  version VARCHAR(50) NOT NULL DEFAULT '1.0.0',
  deprecated BOOLEAN DEFAULT FALSE,
  replacement_component_id VARCHAR(255),

  -- Embeddings for semantic search
  embedding vector(1024),
  embedding_updated_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_semantic_components_type ON ai_semantic_components(semantic_type);
CREATE INDEX idx_semantic_components_category ON ai_semantic_components(category);
CREATE INDEX idx_semantic_components_tags ON ai_semantic_components USING GIN(semantic_tags);
CREATE INDEX idx_semantic_components_embedding ON ai_semantic_components USING ivfflat(embedding vector_cosine_ops);
CREATE INDEX idx_semantic_components_package ON ai_semantic_components(npm_package, import_path);
```

### 2.2 Component Registry Population Script

**Location**: `/Users/jordanhudgens/code/dashtrack/octane/scripts/populate_component_registry.sql`

This script will parse @opensite/ui registry and populate the database:

```rust
// octane/src/registry/component_sync.rs

use serde::{Deserialize, Serialize};
use std::fs;
use std::path::Path;

#[derive(Debug, Serialize, Deserialize)]
struct OpensiteBlock {
    id: String,
    category: String,
    semantic_tags: Vec<String>,
    display_name: String,
    description: Option<String>,
    import_path: String,
    props_schema: serde_json::Value,
    bundle_size_kb: Option<f32>,
}

/// Reads @opensite/ui registry and syncs to database
pub async fn sync_component_registry(
    pool: &deadpool_postgres::Pool,
) -> Result<usize, Box<dyn std::error::Error>> {
    let registry_path = Path::new("../utility-modules/opensite-ui/dist/registry.json");
    let registry_contents = fs::read_to_string(registry_path)?;
    let blocks: Vec<OpensiteBlock> = serde_json::from_str(&registry_contents)?;

    let mut conn = pool.get().await?;
    let mut synced_count = 0;

    for block in blocks {
        // Generate embedding for semantic search
        let description_text = format!(
            "{} {} {}",
            block.display_name,
            block.description.as_deref().unwrap_or(""),
            block.semantic_tags.join(" ")
        );

        let embedding = generate_voyage_embedding(&description_text).await?;

        // UPSERT with manual timestamp update
        let stmt = conn.prepare("
            INSERT INTO ai_semantic_components (
                component_id, npm_package, import_path, semantic_type, semantic_tags,
                category, display_name, description, props_schema, bundle_size_kb,
                embedding, embedding_updated_at, version, updated_at
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, CURRENT_TIMESTAMP, $12, CURRENT_TIMESTAMP)
            ON CONFLICT (component_id) DO UPDATE SET
                import_path = EXCLUDED.import_path,
                semantic_tags = EXCLUDED.semantic_tags,
                description = EXCLUDED.description,
                props_schema = EXCLUDED.props_schema,
                bundle_size_kb = EXCLUDED.bundle_size_kb,
                embedding = EXCLUDED.embedding,
                embedding_updated_at = CURRENT_TIMESTAMP,
                updated_at = CURRENT_TIMESTAMP
        ").await?;

        // Note: Using string interpolation for vector field (tokio-postgres limitation)
        let embedding_str = format_vector_for_postgres(&embedding);

        conn.execute(
            &stmt,
            &[
                &block.id,
                &"@opensite/ui",
                &block.import_path,
                &block.category, // Using category as semantic_type
                &block.semantic_tags,
                &block.category,
                &block.display_name,
                &block.description,
                &block.props_schema,
                &block.bundle_size_kb,
                &embedding_str, // Vector as string
                &"1.0.0",
            ],
        ).await?;

        synced_count += 1;
    }

    Ok(synced_count)
}

async fn generate_voyage_embedding(text: &str) -> Result<Vec<f32>, Box<dyn std::error::Error>> {
    // Use existing Voyage AI integration
    // Similar pattern to existing embed_text() function
    todo!("Integrate with existing Voyage AI service")
}

fn format_vector_for_postgres(vec: &[f32]) -> String {
    format!("[{}]", vec.iter().map(|v| v.to_string()).collect::<Vec<_>>().join(","))
}
```

### 2.3 API Endpoints - Component Discovery

**Endpoint 1**: `GET /api/v1/components/search`

Search components by semantic intent using vector similarity.

```rust
// octane/src/routes/components.rs

#[derive(Debug, Deserialize)]
pub struct ComponentSearchQuery {
    pub query: String,
    pub category: Option<String>,
    pub limit: Option<i64>,
    pub min_similarity: Option<f64>,
}

#[derive(Debug, Serialize)]
pub struct ComponentSearchResult {
    pub component_id: String,
    pub import_path: String,
    pub display_name: String,
    pub description: Option<String>,
    pub semantic_tags: Vec<String>,
    pub props_schema: serde_json::Value,
    pub similarity_score: f64,
}

pub async fn search_components(
    Query(params): Query<ComponentSearchQuery>,
    Extension(pool): Extension<deadpool_postgres::Pool>,
) -> Result<Json<Vec<ComponentSearchResult>>, StatusCode> {
    let limit = params.limit.unwrap_or(10);
    let min_similarity = params.min_similarity.unwrap_or(0.7);

    // Generate query embedding
    let query_embedding = generate_voyage_embedding(&params.query)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    let embedding_str = format_vector_for_postgres(&query_embedding);

    let conn = pool.get().await.map_err(|_| StatusCode::SERVICE_UNAVAILABLE)?;

    let query_sql = if let Some(category) = params.category {
        format!(
            "SELECT
                component_id, import_path, display_name, description,
                semantic_tags, props_schema,
                1 - (embedding <=> '{}'::vector) as similarity
            FROM ai_semantic_components
            WHERE category = $1
              AND NOT deprecated
              AND 1 - (embedding <=> '{}'::vector) >= $2
            ORDER BY similarity DESC
            LIMIT $3",
            embedding_str, embedding_str
        )
    } else {
        format!(
            "SELECT
                component_id, import_path, display_name, description,
                semantic_tags, props_schema,
                1 - (embedding <=> '{}'::vector) as similarity
            FROM ai_semantic_components
            WHERE NOT deprecated
              AND 1 - (embedding <=> '{}'::vector) >= $1
            ORDER BY similarity DESC
            LIMIT $2",
            embedding_str, embedding_str
        )
    };

    // Execute query and map results
    let rows = if let Some(_category) = params.category {
        conn.query(&query_sql, &[&_category, &min_similarity, &limit]).await
    } else {
        conn.query(&query_sql, &[&min_similarity, &limit]).await
    }
    .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    let results = rows.iter().map(|row| {
        ComponentSearchResult {
            component_id: row.get("component_id"),
            import_path: row.get("import_path"),
            display_name: row.get("display_name"),
            description: row.get("description"),
            semantic_tags: row.get("semantic_tags"),
            props_schema: row.get("props_schema"),
            similarity_score: row.get("similarity"),
        }
    }).collect();

    Ok(Json(results))
}
```

**Endpoint 2**: `GET /api/v1/components/by-category/:category`

Get all components in a specific category (hero, features, cta, etc.).

```rust
pub async fn get_components_by_category(
    Path(category): Path<String>,
    Extension(pool): Extension<deadpool_postgres::Pool>,
) -> Result<Json<Vec<ComponentSearchResult>>, StatusCode> {
    let conn = pool.get().await.map_err(|_| StatusCode::SERVICE_UNAVAILABLE)?;

    let rows = conn.query(
        "SELECT
            component_id, import_path, display_name, description,
            semantic_tags, props_schema, 1.0 as similarity
        FROM ai_semantic_components
        WHERE category = $1 AND NOT deprecated
        ORDER BY usage_count DESC, display_name ASC",
        &[&category]
    ).await.map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    let results = rows.iter().map(|row| {
        ComponentSearchResult {
            component_id: row.get("component_id"),
            import_path: row.get("import_path"),
            display_name: row.get("display_name"),
            description: row.get("description"),
            semantic_tags: row.get("semantic_tags"),
            props_schema: row.get("props_schema"),
            similarity_score: row.get("similarity"),
        }
    }).collect();

    Ok(Json(results))
}
```

**Endpoint 3**: `POST /api/v1/components/:component_id/track-usage`

Increment usage counter when a component is used.

```rust
pub async fn track_component_usage(
    Path(component_id): Path<String>,
    Extension(pool): Extension<deadpool_postgres::Pool>,
) -> Result<StatusCode, StatusCode> {
    let conn = pool.get().await.map_err(|_| StatusCode::SERVICE_UNAVAILABLE)?;

    conn.execute(
        "UPDATE ai_semantic_components
         SET usage_count = usage_count + 1,
             last_used_at = CURRENT_TIMESTAMP,
             updated_at = CURRENT_TIMESTAMP
         WHERE component_id = $1",
        &[&component_id]
    ).await.map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    Ok(StatusCode::OK)
}
```

---

## 3. AI Workflow Design - Multi-Stage Page Generation

### 3.1 Workflow Pattern (Adapting competitive_analysis.rs)

**File**: `octane/src/ai_workflows/semantic_page_builder.rs`

```rust
use crate::anthropic::AnthropicClient;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct PageGenerationRequest {
    pub website_id: i64,
    pub page_intent: String,              // "Create an about us page"
    pub page_category_slug: String,       // "about"
    pub additional_context: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PageGenerationResponse {
    pub design_payload: serde_json::Value,  // Chai format
    pub selected_components: Vec<SelectedComponent>,
    pub content_suggestions: Vec<String>,
    pub seo_metadata: SeoMetadata,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SelectedComponent {
    pub component_id: String,
    pub import_path: String,
    pub props: serde_json::Value,
    pub reasoning: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SeoMetadata {
    pub title: String,
    pub description: String,
    pub keywords: Vec<String>,
}

/// Phase 1: Research & Context Gathering (30-90s)
async fn phase_1_research(
    website_id: i64,
    page_intent: &str,
    pool: &deadpool_postgres::Pool,
    anthropic: &AnthropicClient,
) -> Result<ResearchContext, Box<dyn std::error::Error>> {

    // 1. Fetch website context
    let website_context = fetch_website_context(website_id, pool).await?;

    // 2. Query component registry for relevant blocks
    let relevant_components = query_relevant_components(page_intent, pool).await?;

    // 3. Analyze available media
    let media_library = fetch_media_library(website_id, pool).await?;

    // 4. Web search for industry best practices
    let research_prompt = format!(
        "Research best practices for creating a {} for a {} business.

        Website Context:
        - Industry: {}
        - Brand Voice: {}
        - Target Audience: {}

        Available Components: {}

        Provide insights on:
        1. Content structure and hierarchy
        2. Visual design patterns
        3. Messaging approach
        4. User experience considerations",
        page_intent,
        website_context.industry,
        website_context.industry,
        website_context.brand_voice,
        website_context.target_audience,
        serde_json::to_string_pretty(&relevant_components)?
    );

    let research_response = anthropic.create_message_with_web_search(
        "You are an expert web designer and content strategist.",
        &research_prompt,
        32000,  // Half token budget for research
        10      // Max web searches
    ).await?;

    Ok(ResearchContext {
        website_context,
        relevant_components,
        media_library,
        research_insights: research_response.content,
    })
}

/// Phase 2: Semantic Structure Generation (30-60s)
async fn phase_2_generate_structure(
    page_intent: &str,
    research_ctx: ResearchContext,
    anthropic: &AnthropicClient,
) -> Result<PageStructure, Box<dyn std::error::Error>> {

    let generation_prompt = format!(
        "Based on the research insights, create a semantic page structure for: {}

        Research Context:
        {}

        Available Components:
        {}

        Website Brand Voice: {}

        Generate a structured page design that:
        1. Uses semantic component types (hero, features, testimonials, etc.)
        2. Selects compatible @opensite/ui blocks from the available components
        3. Creates a content hierarchy that flows naturally
        4. Aligns with the brand voice and industry best practices
        5. Optimizes for Core Web Vitals (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1)

        Return a structured JSON response with:
        - Component selection and ordering
        - Props for each component
        - Content suggestions
        - SEO metadata",
        page_intent,
        research_ctx.research_insights,
        serde_json::to_string_pretty(&research_ctx.relevant_components)?,
        research_ctx.website_context.brand_voice
    );

    let page_structure_schema = serde_json::json!({
        "type": "object",
        "properties": {
            "page_title": {"type": "string"},
            "semantic_sections": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "semantic_type": {"type": "string"},
                        "component_id": {"type": "string"},
                        "props": {"type": "object"},
                        "content": {"type": "object"},
                        "reasoning": {"type": "string"}
                    }
                }
            },
            "seo_metadata": {
                "type": "object",
                "properties": {
                    "title": {"type": "string"},
                    "description": {"type": "string"},
                    "keywords": {"type": "array", "items": {"type": "string"}}
                }
            }
        }
    });

    let structure_response = anthropic.create_message_with_schema_tool(
        "You are an expert web designer specializing in semantic web design.",
        &generation_prompt,
        "generate_page_structure",
        page_structure_schema,
        64000   // Full token budget for generation
    ).await?;

    // Parse and convert to PageStructure
    Ok(parse_page_structure(&structure_response)?)
}

/// Phase 3: Design Payload Generation (10-30s)
async fn phase_3_generate_design_payload(
    page_structure: PageStructure,
    website_id: i64,
    pool: &deadpool_postgres::Pool,
) -> Result<serde_json::Value, Box<dyn std::error::Error>> {

    // Fetch style guide
    let style_guide = fetch_style_guide(website_id, pool).await?;

    // Convert semantic structure to Chai design_payload format
    let design_payload = serde_json::json!({
        "version": "1.0",
        "blocks": page_structure.semantic_sections.iter().map(|section| {
            serde_json::json!({
                "_id": generate_block_id(),
                "_type": section.component_id,
                "_name": section.semantic_type,
                "_styles": apply_style_guide(&style_guide, section),
                "_props": section.props,
                "_children": []
            })
        }).collect::<Vec<_>>()
    });

    Ok(design_payload)
}

/// Main orchestration function
pub async fn generate_semantic_page(
    request: PageGenerationRequest,
    pool: &deadpool_postgres::Pool,
    anthropic: &AnthropicClient,
) -> Result<PageGenerationResponse, Box<dyn std::error::Error>> {

    // Phase 1: Research (30-90s)
    let research_ctx = phase_1_research(
        request.website_id,
        &request.page_intent,
        pool,
        anthropic
    ).await?;

    // Phase 2: Structure Generation (30-60s)
    let page_structure = phase_2_generate_structure(
        &request.page_intent,
        research_ctx,
        anthropic
    ).await?;

    // Phase 3: Design Payload (10-30s)
    let design_payload = phase_3_generate_design_payload(
        page_structure.clone(),
        request.website_id,
        pool
    ).await?;

    // Track component usage
    for section in &page_structure.semantic_sections {
        track_component_usage(&section.component_id, pool).await?;
    }

    Ok(PageGenerationResponse {
        design_payload,
        selected_components: page_structure.semantic_sections.iter().map(|s| {
            SelectedComponent {
                component_id: s.component_id.clone(),
                import_path: s.import_path.clone(),
                props: s.props.clone(),
                reasoning: s.reasoning.clone(),
            }
        }).collect(),
        content_suggestions: page_structure.content_suggestions,
        seo_metadata: page_structure.seo_metadata,
    })
}
```

### 3.2 API Endpoint - Page Generation

**Endpoint**: `POST /api/v1/websites/:website_id/pages/generate`

```rust
// octane/src/routes/semantic_pages.rs

#[derive(Debug, Deserialize)]
pub struct GeneratePageRequest {
    pub page_intent: String,
    pub page_category_slug: String,
    pub additional_context: Option<String>,
    pub webhook_url: Option<String>,  // For async completion notification
}

pub async fn generate_page(
    Path(website_id): Path<i64>,
    Json(payload): Json<GeneratePageRequest>,
    Extension(pool): Extension<deadpool_postgres::Pool>,
    Extension(anthropic): Extension<Arc<AnthropicClient>>,
) -> Result<Json<serde_json::Value>, StatusCode> {

    // Create ai_task record for long-running workflow
    let task_id = create_ai_task(
        &pool,
        "semantic_page_generation",
        website_id,
        &payload
    ).await.map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    // Spawn async task
    tokio::spawn(async move {
        let request = PageGenerationRequest {
            website_id,
            page_intent: payload.page_intent,
            page_category_slug: payload.page_category_slug,
            additional_context: payload.additional_context,
        };

        match generate_semantic_page(request, &pool, &anthropic).await {
            Ok(response) => {
                // Update ai_task with success
                update_ai_task_success(&pool, task_id, &response).await;

                // Store design_payload in page_categories table
                store_design_payload(&pool, website_id, &response).await;

                // Send webhook notification if provided
                if let Some(webhook_url) = payload.webhook_url {
                    send_webhook_notification(&webhook_url, task_id, &response).await;
                }
            },
            Err(err) => {
                // Update ai_task with error
                update_ai_task_error(&pool, task_id, &err.to_string()).await;
            }
        }
    });

    Ok(Json(serde_json::json!({
        "task_id": task_id,
        "status": "processing",
        "estimated_duration_seconds": 120,
        "message": "Page generation started. Use GET /api/v1/tasks/{task_id} to check status."
    })))
}
```

---

## 4. Style Guide Integration

### 4.1 Database Operations

**Table**: `website_style_guide` (existing)

Columns to work with:
- `tailwind_css` (TEXT) - Generated Tailwind CSS
- `theme_config` (JSONB) - Theme configuration object

**Update Pattern** (following Octane JSONB merge conventions):

```rust
// octane/src/services/style_guide.rs

pub async fn update_style_guide(
    pool: &deadpool_postgres::Pool,
    website_id: i64,
    tailwind_css: Option<String>,
    theme_config_updates: Option<serde_json::Value>,
) -> Result<(), Box<dyn std::error::Error>> {
    let conn = pool.get().await?;

    if let Some(css) = tailwind_css {
        conn.execute(
            "UPDATE website_style_guide
             SET tailwind_css = $1, updated_at = CURRENT_TIMESTAMP
             WHERE website_id = $2",
            &[&css, &website_id]
        ).await?;
    }

    if let Some(updates) = theme_config_updates {
        // Use COALESCE and || operator for JSONB merge
        conn.execute(
            "UPDATE website_style_guide
             SET theme_config = COALESCE(theme_config, '{}'::jsonb) || $1::jsonb,
                 updated_at = CURRENT_TIMESTAMP
             WHERE website_id = $2",
            &[&updates, &website_id]
        ).await?;
    }

    Ok(())
}
```

### 4.2 AI-Generated Style Themes

**Endpoint**: `POST /api/v1/websites/:website_id/style-guide/generate`

Generate a complete style guide based on brand guidelines and industry.

```rust
#[derive(Debug, Deserialize)]
pub struct GenerateStyleGuideRequest {
    pub brand_guide_id: Option<i64>,
    pub industry: Option<String>,
    pub mood: Option<String>,  // "professional", "playful", "elegant", etc.
    pub color_preferences: Option<Vec<String>>,
}

pub async fn generate_style_guide(
    Path(website_id): Path<i64>,
    Json(payload): Json<GenerateStyleGuideRequest>,
    Extension(pool): Extension<deadpool_postgres::Pool>,
    Extension(anthropic): Extension<Arc<AnthropicClient>>,
) -> Result<Json<serde_json::Value>, StatusCode> {

    // Fetch brand guide if provided
    let brand_context = if let Some(brand_id) = payload.brand_guide_id {
        fetch_brand_guide(&pool, brand_id).await.ok()
    } else {
        None
    };

    let prompt = format!(
        "Generate a comprehensive Tailwind CSS theme configuration for a website.

        Industry: {}
        Mood: {}
        Brand Context: {}

        Create a theme that includes:
        1. Color palette (primary, secondary, accent, neutral)
        2. Typography system (font families, sizes, weights)
        3. Spacing scale
        4. Border radius values
        5. Shadow system
        6. Animation preferences

        Return both:
        - A complete Tailwind CSS configuration as a string
        - A structured theme_config JSON object",
        payload.industry.as_deref().unwrap_or("general"),
        payload.mood.as_deref().unwrap_or("professional"),
        brand_context.map(|b| b.summary).unwrap_or_default()
    );

    let theme_schema = serde_json::json!({
        "type": "object",
        "properties": {
            "tailwind_css": {"type": "string"},
            "theme_config": {
                "type": "object",
                "properties": {
                    "colors": {"type": "object"},
                    "typography": {"type": "object"},
                    "spacing": {"type": "object"},
                    "borderRadius": {"type": "object"},
                    "shadows": {"type": "object"}
                }
            }
        }
    });

    let response = anthropic.create_message_with_schema_tool(
        "You are an expert web designer specializing in Tailwind CSS theming.",
        &prompt,
        "generate_theme",
        theme_schema,
        32000
    ).await.map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    let theme_data: serde_json::Value = serde_json::from_str(&response.content)
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    // Update database
    update_style_guide(
        &pool,
        website_id,
        theme_data.get("tailwind_css").and_then(|v| v.as_str()).map(String::from),
        theme_data.get("theme_config").cloned(),
    ).await.map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    Ok(Json(theme_data))
}
```

---

## 5. Conversational Interface

### 5.1 Chat-Based Page Building

**Location**: `dt-cms/Source/src/components/page-builder/SemanticPageChat.tsx`

This component adapts the existing `SeoContentBriefStreamView.tsx` pattern for page building.

```typescript
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Sparkles, CheckCircle2 } from "lucide-react";

interface SemanticPageChatProps {
  websiteId: number;
  onPageGenerated?: (designPayload: any) => void;
}

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

interface GenerationPhase {
  phase: "research" | "structure" | "style" | "complete";
  progress: number;
  message: string;
}

export function SemanticPageChat({ websiteId, onPageGenerated }: SemanticPageChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI page builder. Tell me about the page you'd like to create.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<GenerationPhase | null>(null);
  const [taskId, setTaskId] = useState<string | null>(null);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsGenerating(true);

    try {
      // Call Octane API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_OCTANE_URL}/api/v1/websites/${websiteId}/pages/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(
              `${process.env.NEXT_PUBLIC_OCTANE_USERNAME}:${process.env.NEXT_PUBLIC_OCTANE_PASSWORD}`
            )}`,
          },
          body: JSON.stringify({
            page_intent: input,
            page_category_slug: "generated",
            webhook_url: `${window.location.origin}/api/webhooks/octane/page-generation`,
          }),
        }
      );

      const data = await response.json();
      setTaskId(data.task_id);

      // Poll for task completion
      pollTaskStatus(data.task_id);
    } catch (error) {
      console.error("Page generation error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content: "Sorry, there was an error generating your page. Please try again.",
          timestamp: new Date(),
        },
      ]);
      setIsGenerating(false);
    }
  };

  const pollTaskStatus = async (taskId: string) => {
    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_OCTANE_URL}/api/v1/tasks/${taskId}`,
          {
            headers: {
              Authorization: `Basic ${btoa(
                `${process.env.NEXT_PUBLIC_OCTANE_USERNAME}:${process.env.NEXT_PUBLIC_OCTANE_PASSWORD}`
              )}`,
            },
          }
        );

        const taskData = await response.json();

        // Update phase based on task progress
        if (taskData.status === "processing") {
          updatePhaseFromTask(taskData);
        } else if (taskData.status === "completed") {
          clearInterval(pollInterval);
          handleTaskComplete(taskData);
        } else if (taskData.status === "failed") {
          clearInterval(pollInterval);
          handleTaskFailed(taskData);
        }
      } catch (error) {
        console.error("Task polling error:", error);
        clearInterval(pollInterval);
      }
    }, 2000); // Poll every 2 seconds
  };

  const updatePhaseFromTask = (taskData: any) => {
    // Infer phase from elapsed time and task metadata
    const elapsed = taskData.elapsed_seconds || 0;

    if (elapsed < 30) {
      setCurrentPhase({
        phase: "research",
        progress: Math.min((elapsed / 30) * 100, 100),
        message: "Researching best practices and analyzing your website context...",
      });
    } else if (elapsed < 90) {
      setCurrentPhase({
        phase: "structure",
        progress: Math.min(((elapsed - 30) / 60) * 100, 100),
        message: "Generating semantic page structure and selecting components...",
      });
    } else {
      setCurrentPhase({
        phase: "style",
        progress: Math.min(((elapsed - 90) / 30) * 100, 100),
        message: "Applying styles and optimizing for performance...",
      });
    }
  };

  const handleTaskComplete = (taskData: any) => {
    setIsGenerating(false);
    setCurrentPhase({
      phase: "complete",
      progress: 100,
      message: "Page generated successfully!",
    });

    const assistantMessage: ChatMessage = {
      role: "assistant",
      content: `I've created your page! Here's what I included:\n\n${taskData.result.selected_components
        .map(
          (c: any, i: number) =>
            `${i + 1}. **${c.component_id}**: ${c.reasoning}`
        )
        .join("\n")}`,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);

    // Notify parent component
    if (onPageGenerated) {
      onPageGenerated(taskData.result.design_payload);
    }

    setTimeout(() => setCurrentPhase(null), 3000);
  };

  const handleTaskFailed = (taskData: any) => {
    setIsGenerating(false);
    setCurrentPhase(null);

    const errorMessage: ChatMessage = {
      role: "system",
      content: `Page generation failed: ${taskData.error || "Unknown error"}`,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, errorMessage]);
  };

  return (
    <div className="flex h-full flex-col">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <Card
              className={`max-w-[80%] ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : msg.role === "system"
                  ? "bg-destructive/10"
                  : ""
              }`}
            >
              <CardContent className="p-3">
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                <p className="text-xs opacity-60 mt-1">
                  {msg.timestamp.toLocaleTimeString()}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Phase Progress Indicator */}
        {isGenerating && currentPhase && (
          <Card className="border-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                {currentPhase.phase === "complete" ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}
                <Badge variant="outline" className="capitalize">
                  {currentPhase.phase}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {currentPhase.message}
              </p>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${currentPhase.progress}%` }}
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe the page you want to create..."
            className="min-h-[80px]"
            disabled={isGenerating}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button
            onClick={handleSendMessage}
            disabled={isGenerating || !input.trim()}
            size="icon"
            className="self-end"
          >
            {isGenerating ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4" />
            )}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}
```

### 5.2 Integration into dt-cms Page Builder

**Location**: `dt-cms/Source/src/pages/page-builder/index.tsx`

Add new route that embeds the `SemanticPageChat` component:

```typescript
import { SemanticPageChat } from "@/components/page-builder/SemanticPageChat";
import { AdminPanelLayout } from "@/components/layouts/AdminPanelLayout";
import { FullCanvasLayout } from "@/components/layouts/FullCanvasLayout";
import type { NextPageWithLayout } from "@/types/layout";
import { useRouter } from "next/router";

const SemanticPageBuilderPage: NextPageWithLayout = () => {
  const router = useRouter();
  const websiteId = parseInt(router.query.website_id as string);

  const handlePageGenerated = (designPayload: any) => {
    // Navigate to visual editor with generated design_payload
    router.push({
      pathname: "/page-builder/visual-editor",
      query: {
        website_id: websiteId,
        design_payload: JSON.stringify(designPayload),
      },
    });
  };

  return (
    <FullCanvasLayout
      title="AI Page Builder"
      subtitle="Create pages with conversational AI"
      breadcrumb={
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Pages</span>
          <span>/</span>
          <span>AI Builder</span>
        </div>
      }
    >
      <div className="h-[calc(100vh-200px)]">
        <SemanticPageChat
          websiteId={websiteId}
          onPageGenerated={handlePageGenerated}
        />
      </div>
    </FullCanvasLayout>
  );
};

SemanticPageBuilderPage.getLayout = (page) => (
  <AdminPanelLayout>{page}</AdminPanelLayout>
);

export default SemanticPageBuilderPage;
```

---

## 6. SEO, Brand Guide, and Media Library Integration

### 6.1 Data Cross-Referencing

When generating pages, Octane will query these tables to inform AI decisions:

```rust
// octane/src/services/context_aggregator.rs

#[derive(Debug, Serialize)]
pub struct WebsiteContext {
    pub website_id: i64,
    pub industry: String,
    pub brand_voice: String,
    pub target_audience: String,
    pub seo_keywords: Vec<String>,
    pub brand_colors: Vec<String>,
    pub available_media: Vec<MediaAsset>,
}

pub async fn fetch_website_context(
    website_id: i64,
    pool: &deadpool_postgres::Pool,
) -> Result<WebsiteContext, Box<dyn std::error::Error>> {
    let conn = pool.get().await?;

    // 1. Fetch brand guide
    let brand_guide_row = conn.query_opt(
        "SELECT industry, brand_voice, target_audience, primary_color, secondary_color
         FROM brand_guides
         WHERE website_id = $1
         ORDER BY created_at DESC
         LIMIT 1",
        &[&website_id]
    ).await?;

    let (industry, brand_voice, target_audience, primary_color, secondary_color) = if let Some(row) = brand_guide_row {
        (
            row.get::<_, String>("industry"),
            row.get::<_, String>("brand_voice"),
            row.get::<_, String>("target_audience"),
            row.get::<_, Option<String>>("primary_color"),
            row.get::<_, Option<String>>("secondary_color"),
        )
    } else {
        ("General".to_string(), "Professional".to_string(), "General audience".to_string(), None, None)
    };

    // 2. Fetch SEO keywords
    let seo_rows = conn.query(
        "SELECT keyword
         FROM seo_keywords
         WHERE website_id = $1
         ORDER BY priority DESC
         LIMIT 20",
        &[&website_id]
    ).await?;

    let seo_keywords: Vec<String> = seo_rows.iter()
        .filter_map(|row| row.get::<_, Option<String>>("keyword"))
        .collect();

    // 3. Fetch available media
    let media_rows = conn.query(
        "SELECT id, media_type, cdn_url, title, alt_text
         FROM media_records
         WHERE website_id = $1
           AND status = 'active'
         ORDER BY created_at DESC
         LIMIT 50",
        &[&website_id]
    ).await?;

    let available_media: Vec<MediaAsset> = media_rows.iter().map(|row| {
        MediaAsset {
            id: row.get("id"),
            media_type: row.get("media_type"),
            cdn_url: row.get("cdn_url"),
            title: row.get("title"),
            alt_text: row.get("alt_text"),
        }
    }).collect();

    // 4. Compile brand colors
    let mut brand_colors = Vec::new();
    if let Some(color) = primary_color {
        brand_colors.push(color);
    }
    if let Some(color) = secondary_color {
        brand_colors.push(color);
    }

    Ok(WebsiteContext {
        website_id,
        industry,
        brand_voice,
        target_audience,
        seo_keywords,
        brand_colors,
        available_media,
    })
}

#[derive(Debug, Serialize)]
pub struct MediaAsset {
    pub id: i64,
    pub media_type: String,
    pub cdn_url: String,
    pub title: Option<String>,
    pub alt_text: Option<String>,
}
```

### 6.2 Media Library Integration in AI Prompts

When generating page content, AI will receive media context:

```rust
let prompt = format!(
    "Create page content for: {}

    Available Media Assets:
    {}

    Select appropriate images/videos from the media library for each section.
    Return media_record_id for each selected asset.",
    page_intent,
    serde_json::to_string_pretty(&website_context.available_media)?
);
```

---

## 7. Module Configuration - @opensite/blocks + @opensite/ui

### 7.1 Package Dependencies

**File**: `utility-modules/opensite-blocks/package.json`

Add @opensite/ui as dependency:

```json
{
  "name": "@opensite/blocks",
  "version": "2.1.0",
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@opensite/img": "^1.2.0",
    "@opensite/video": "^0.3.5",
    "@opensite/ui": "^1.0.0"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
}
```

### 7.2 Block Registry Integration

**File**: `utility-modules/opensite-blocks/src/registry/blockRegistry.ts`

Extend registry to include @opensite/ui components:

```typescript
import type { ChaiBlock } from "@chaibuilder/sdk";

// Import @opensite/ui components
import { Container } from "@opensite/ui/components/container";
import { Section } from "@opensite/ui/components/section";
import { PageHeroBanner } from "@opensite/ui/components/page-hero-banner";
import { Button } from "@opensite/ui/components/button";
import { AlternatingBlocks } from "@opensite/ui/blocks/about/alternating-blocks";
import { MediaHoverCtas } from "@opensite/ui/blocks/cta/media-hover-ctas";
// ... import more blocks as needed

interface BlockRegistryEntry {
  _type: string;
  component: React.ComponentType<any>;
  defaultProps?: Record<string, any>;
}

export const OPENSITE_UI_BLOCKS: BlockRegistryEntry[] = [
  {
    _type: "Container",
    component: Container,
    defaultProps: { maxWidth: "xl" },
  },
  {
    _type: "Section",
    component: Section,
    defaultProps: { spacing: "lg", background: "white" },
  },
  {
    _type: "PageHeroBanner",
    component: PageHeroBanner,
    defaultProps: { minHeight: "500px", showOverlay: true },
  },
  {
    _type: "Button",
    component: Button,
    defaultProps: { variant: "default", size: "default" },
  },
  {
    _type: "AlternatingBlocks",
    component: AlternatingBlocks,
    defaultProps: { spacing: "lg", background: "white" },
  },
  {
    _type: "MediaHoverCtas",
    component: MediaHoverCtas,
    defaultProps: { items: [] },
  },
  // Add more @opensite/ui blocks here
];

// Merge with existing block registry
export const BLOCK_REGISTRY: Record<string, React.ComponentType<any>> = {
  ...OPENSITE_UI_BLOCKS.reduce((acc, entry) => {
    acc[entry._type] = entry.component;
    return acc;
  }, {} as Record<string, React.ComponentType<any>>),
  // ... existing blocks
};

// Helper to get default props
export function getBlockDefaultProps(_type: string): Record<string, any> | undefined {
  const entry = OPENSITE_UI_BLOCKS.find((e) => e._type === _type);
  return entry?.defaultProps;
}
```

### 7.3 Renderer Updates

**File**: `utility-modules/opensite-blocks/src/core/blocks-renderer.tsx`

Ensure renderer handles @opensite/ui blocks:

```typescript
import React from "react";
import { BLOCK_REGISTRY, getBlockDefaultProps } from "../registry/blockRegistry";
import type { ChaiBlock } from "@chaibuilder/sdk";

interface BlocksRendererProps {
  blocks: ChaiBlock[];
  className?: string;
}

export const BlocksRenderer: React.FC<BlocksRendererProps> = ({ blocks, className }) => {
  const renderBlock = (block: ChaiBlock): React.ReactNode => {
    const { _type, _id, _props = {}, _children = [], _styles = {} } = block;

    const Component = BLOCK_REGISTRY[_type];
    if (!Component) {
      console.warn(`Unknown block type: ${_type}`);
      return null;
    }

    // Merge default props with provided props
    const defaultProps = getBlockDefaultProps(_type) || {};
    const mergedProps = { ...defaultProps, ..._props };

    // Convert styles object to className string
    const styleClassName = Object.entries(_styles)
      .map(([key, value]) => `${key}:${value}`)
      .join(" ");

    const combinedClassName = [mergedProps.className, styleClassName]
      .filter(Boolean)
      .join(" ");

    return (
      <Component
        key={_id}
        {...mergedProps}
        className={combinedClassName}
      >
        {_children.length > 0 ? _children.map(renderBlock) : mergedProps.children}
      </Component>
    );
  };

  return <div className={className}>{blocks.map(renderBlock)}</div>;
};
```

---

## 8. Entry Point Integration - customer-sites

### 8.1 Update chai_index.html.erb

**File**: `utility-modules/customer-sites/app/views/customer_websites/chai_index.html.erb`

Update script loading to include @opensite/ui:

```erb
<!-- Existing imports -->
<script crossorigin src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- NEW: Add @opensite/ui bundle -->
<script crossorigin src="https://cdn.jsdelivr.net/npm/@opensite/ui@latest/dist/index.umd.js"></script>

<!-- Existing @opensite/blocks -->
<script crossorigin src="https://cdn.jsdelivr.net/npm/@opensite/blocks@latest/dist/blocks.umd.js"></script>

<script>
  // Existing initialization code
  (function() {
    var chaiPages = document._dashtrackChaiPages || [];

    if (chaiPages.length === 0) {
      console.warn('No pages to render');
      return;
    }

    // Initialize @opensite/ui theme (if needed)
    if (window.OpensiteUI && window.OpensiteUI.initTheme) {
      window.OpensiteUI.initTheme({
        cssVariables: <%= raw @website.style_guide&.theme_config&.to_json || '{}' %>
      });
    }

    // Render blocks as before
    chaiPages.forEach(function(page) {
      var container = document.getElementById('chai-page-' + page.id);
      if (!container) return;

      var designPayload = page.design_payload;
      if (!designPayload || !designPayload.blocks) return;

      // BlocksRenderer now includes @opensite/ui components
      window.OpensiteBlocks.render(designPayload.blocks, container);
    });
  })();
</script>
```

### 8.2 Style Guide Injection

Ensure `tailwind_css` from `website_style_guide` is injected:

```erb
<!-- Inject custom Tailwind CSS -->
<% if @website.style_guide&.tailwind_css.present? %>
  <style id="custom-tailwind">
    <%= raw @website.style_guide.tailwind_css %>
  </style>
<% end %>
```

---

## 9. Implementation Phases

### Phase 1: Foundation (Week 1-2)

**Objectives**:
- Set up database schema (ai_semantic_components table)
- Create component registry population script
- Implement basic Octane API endpoints

**Tasks**:
1. ✅ **COMPLETED**: Create Rails 6 migration in `toastability-service/db/migrate/` for `ai_semantic_components` table with pgvector embedding column and HNSW/GIN indices
2. Write `sync_component_registry()` function in Rust
3. Parse @opensite/ui registry.json and populate database
4. Generate Voyage embeddings for all components
5. Implement `/api/v1/components/search` endpoint
6. Implement `/api/v1/components/by-category/:category` endpoint
7. Write integration tests

**Deliverables**:
- Database schema deployed to staging
- Component registry populated with ~50+ @opensite/ui blocks
- API endpoints accessible via Postman/curl
- Documentation updated

---

### Phase 2: AI Workflow (Week 3-4)

**Objectives**:
- Implement multi-stage page generation workflow
- Integrate with Anthropic Claude API
- Set up webhook-based async task system

**Tasks**:
1. Create `semantic_page_builder.rs` module
2. Implement Phase 1: Research & Context Gathering
3. Implement Phase 2: Semantic Structure Generation
4. Implement Phase 3: Design Payload Generation
5. Create `/api/v1/websites/:id/pages/generate` endpoint
6. Set up ai_tasks table and polling system
7. Write workflow integration tests
8. Test with sample page intents

**Deliverables**:
- Functional page generation workflow (end-to-end)
- AI-generated design_payload in Chai format
- Async task system with status polling
- Performance metrics (p50, p95 latency)

---

### Phase 3: Style Guide & Media Integration (Week 5)

**Objectives**:
- Implement style guide generation
- Integrate media library queries
- Cross-reference SEO and brand guide data

**Tasks**:
1. Create `style_guide.rs` service module
2. Implement `/api/v1/websites/:id/style-guide/generate` endpoint
3. Create `context_aggregator.rs` for fetching website context
4. Integrate media_records query into page generation
5. Update prompts to include media assets
6. Test style application to generated pages

**Deliverables**:
- AI-generated Tailwind CSS themes
- Media library integration in page generation
- SEO keywords influencing content generation
- Brand colors applied to components

---

### Phase 4: Frontend Integration (Week 6-7)

**Objectives**:
- Build conversational UI in dt-cms
- Integrate @opensite/ui with @opensite/blocks
- Update customer-sites entry point

**Tasks**:
1. Create `SemanticPageChat.tsx` component
2. Implement streaming progress indicators
3. Add page generation route to dt-cms
4. Update `opensite-blocks` package.json dependencies
5. Extend `blockRegistry.ts` with @opensite/ui components
6. Update `chai_index.html.erb` script loading
7. Test end-to-end rendering on staging

**Deliverables**:
- Functional chat interface in dt-cms
- Real-time progress updates during generation
- Pages rendering correctly in customer-sites
- Performance validation (Core Web Vitals)

---

### Phase 5: Testing & Optimization (Week 8)

**Objectives**:
- Comprehensive testing across 10+ page types
- Performance optimization
- Bug fixes and edge case handling

**Tasks**:
1. Generate 10+ different page types (about, services, contact, etc.)
2. Measure AI generation time and cost
3. Validate Core Web Vitals on generated pages
4. Fix any rendering issues
5. Optimize prompts for better output
6. Load test Octane endpoints (100 concurrent requests)
7. Write user documentation

**Deliverables**:
- Test report with 10+ generated pages
- Performance benchmarks (generation time, cost, CWV)
- Bug fixes and optimizations applied
- User documentation for page builder

---

### Phase 6: Staging Deployment (Week 9)

**Objectives**:
- Deploy to staging environment
- Beta testing with internal team
- Gather feedback and iterate

**Tasks**:
1. Deploy Octane changes to staging (Fly.io)
2. Deploy dt-cms changes to staging (Vercel)
3. Deploy customer-sites changes to Heroku staging
4. Internal team testing (5-10 pages generated)
5. Collect feedback and create backlog
6. Fix critical issues
7. Document known limitations

**Deliverables**:
- Staging deployment live and accessible
- 5-10 beta test pages generated
- Feedback document with prioritized issues
- Updated roadmap for Phase 7

---

### Phase 7: Production Rollout (Week 10+)

**Objectives**:
- Production deployment
- Gradual rollout to client accounts
- Monitoring and support

**Tasks**:
1. Deploy Octane to production (Fly.io auto-scale)
2. Deploy dt-cms to production (Vercel)
3. Deploy customer-sites to production (ECS/Heroku)
4. Enable feature flag for 10% of accounts
5. Monitor error rates and performance
6. Gradually increase to 50%, then 100%
7. Ongoing support and iteration

**Deliverables**:
- Production deployment complete
- Feature flag system in place
- Monitoring dashboards (Logfire, Fly.io metrics)
- Support documentation for clients

---

## 10. Testing Strategy

### 10.1 Unit Tests

**Rust (Octane)**:
- Component registry sync functions
- Database query helpers
- Vector embedding generation
- JSONB merge operations

```bash
cargo test --lib
```

**TypeScript (dt-cms)**:
- SemanticPageChat component rendering
- API client functions
- Polling logic

```bash
pnpm test
```

### 10.2 Integration Tests

**Octane Smoke Tests**:
- Component search endpoint returns results
- Page generation workflow completes successfully
- Style guide generation updates database
- Webhook notifications sent correctly

```bash
cargo test --test smoke_tests
```

**End-to-End Tests (Playwright)**:
- User enters page intent in chat
- Progress indicators update correctly
- Generated page renders in customer-sites
- Core Web Vitals pass validation

```bash
pnpm playwright test
```

### 10.3 Performance Tests

**Metrics to Track**:
- Page generation time (target: < 120s)
- Octane API response time (p95 < 100ms)
- Component search latency (< 50ms)
- Customer-sites LCP (< 2.5s)

**Load Testing**:
```bash
# Use Apache Bench or k6
ab -n 100 -c 10 https://octane.buzz/api/v1/components/search?query=hero
```

### 10.4 Validation Checklist

Before production deployment, validate:

- [ ] 10+ different page types generated successfully
- [ ] All pages pass Core Web Vitals (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1)
- [ ] Component registry includes 50+ blocks from @opensite/ui
- [ ] Style guides apply correctly to generated pages
- [ ] Media library images render with proper formats (AVIF/WebP/JPEG)
- [ ] SEO metadata generated and applied
- [ ] Webhooks deliver completion notifications
- [ ] Error handling graceful for all failure scenarios
- [ ] Database queries use parameterized statements
- [ ] No memory leaks in long-running workflows
- [ ] CORS headers configured correctly
- [ ] Authentication/authorization working as expected

---

## 11. Rollout Plan

### 11.1 Staging Environment

**Timeline**: Week 9

**Activities**:
- Deploy all components to staging
- Internal team testing (5-10 pages)
- Gather feedback and prioritize fixes
- Performance benchmarking

**Success Criteria**:
- 0 critical bugs
- < 5 minor bugs
- Average generation time < 120s
- Core Web Vitals pass on all test pages

---

### 11.2 Production Deployment

**Timeline**: Week 10+

**Rollout Strategy**: Feature Flag with Gradual Rollout

**Phase A (10% of accounts, Week 10)**:
- Enable feature for 10 pilot accounts
- Monitor for 3-5 days
- Collect usage data and feedback

**Phase B (50% of accounts, Week 11)**:
- If Phase A successful, expand to 50%
- Continue monitoring
- Address any emerging issues

**Phase C (100% of accounts, Week 12)**:
- Full rollout
- Ongoing support and iteration

**Rollback Plan**:
- Feature flag allows instant disable
- Database changes are additive (no breaking migrations)
- Customer-sites can fall back to legacy rendering

---

### 11.3 Monitoring & Observability

**Metrics Dashboard** (Logfire, Fly.io, Vercel):
- Page generation requests/hour
- Average generation time
- Success/failure rate
- Component usage distribution
- AI cost per page
- Customer-sites rendering performance
- Error rates by endpoint

**Alerts**:
- Page generation failure rate > 5%
- Average generation time > 180s
- Octane API error rate > 1%
- Customer-sites LCP > 3.5s

---

## 12. Cost Estimation

### 12.1 AI Costs (Anthropic Claude)

**Per Page Generation**:
- Phase 1 Research: ~32K tokens input, 8K tokens output → ~$0.50
- Phase 2 Structure: ~32K tokens input, 16K tokens output → ~$1.00
- Total per page: ~$1.50

**Expected Usage**:
- 100 pages/day → $150/day → $4,500/month
- 500 pages/day → $750/day → $22,500/month

### 12.2 Infrastructure Costs

**Octane (Fly.io GPU instances)**:
- 2x shared-cpu-1x instances → $12/month
- Auto-scale to 4x during peak → $24/month (peak hours only)

**PostgreSQL (Heroku)**:
- Standard plan → $50/month (current)
- Vector index overhead: minimal

**Redis (Upstash)**:
- Current plan → $10/month

**Total Infrastructure**: ~$100/month

### 12.3 Total Monthly Cost

**Conservative (100 pages/day)**:
- AI: $4,500
- Infrastructure: $100
- **Total: $4,600/month**

**High Usage (500 pages/day)**:
- AI: $22,500
- Infrastructure: $100
- **Total: $22,600/month**

**Per Page Cost**: ~$1.50 (AI) + ~$0.01 (infra) = **$1.51/page**

---

## 13. Success Metrics

### 13.1 Technical Metrics

- **Page Generation Success Rate**: > 95%
- **Average Generation Time**: < 120s
- **Core Web Vitals Pass Rate**: > 90%
  - LCP ≤ 2.5s
  - INP ≤ 200ms
  - CLS ≤ 0.1
- **Component Search Latency**: < 50ms (p95)
- **Octane API Availability**: > 99.9%

### 13.2 Business Metrics

- **Adoption Rate**: % of clients using AI page builder
- **Pages Generated per Client**: Average number
- **Time Saved**: vs manual page building (target: 80% reduction)
- **Client Satisfaction**: Survey score (target: > 4.5/5)
- **Retention Impact**: Do clients using AI builder have higher retention?

### 13.3 Quality Metrics

- **Component Selection Accuracy**: How often does AI pick appropriate blocks?
- **Content Quality Score**: Manual review of generated content (1-5 scale)
- **Brand Alignment**: Does generated content match brand guidelines?
- **SEO Optimization**: Do pages rank well in search engines?

---

## 14. Risk Mitigation

### 14.1 Technical Risks

**Risk**: AI generates low-quality or inappropriate content
- **Mitigation**: Human review workflow, content moderation, prompt engineering

**Risk**: Performance degradation under high load
- **Mitigation**: Auto-scaling on Fly.io, rate limiting, caching

**Risk**: Breaking changes in @opensite/ui library
- **Mitigation**: Pin versions, comprehensive integration tests, gradual rollout

**Risk**: Database vector index slowdown
- **Mitigation**: Monitor query performance, add indexes, optimize embeddings

### 14.2 Business Risks

**Risk**: High AI costs exceed budget
- **Mitigation**: Usage caps, tiered pricing, prompt optimization

**Risk**: Clients don't adopt AI builder
- **Mitigation**: User education, onboarding tutorials, success stories

**Risk**: Generated sites don't meet client expectations
- **Mitigation**: Editable output, iteration support, manual override option

### 14.3 Operational Risks

**Risk**: Support burden increases
- **Mitigation**: Comprehensive documentation, in-app help, error messages

**Risk**: Dependency on Anthropic API
- **Mitigation**: Multi-provider support (OpenAI fallback), retry logic

**Risk**: Data privacy concerns
- **Mitigation**: No PII in prompts, clear privacy policy, client consent

---

## 15. Future Enhancements

### 15.1 Phase 8+ Features

**Multi-Page Site Generation**:
- Generate entire site (home, about, services, contact) in one workflow
- Site-wide consistency and navigation

**A/B Testing Variants**:
- Generate 2-3 page variants for A/B testing
- AI recommends best-performing layout

**Voice-Based Interface**:
- Audio input for page intent
- Real-time voice feedback during generation

**Video Previews**:
- AI-generated video walkthroughs of page structure
- Narrated explanations of component choices

**Industry-Specific Templates**:
- Pre-trained models for restaurant, real estate, healthcare, etc.
- Faster generation with domain expertise

**Collaborative Editing**:
- Multiple users refine AI-generated page together
- Comment threads on specific components

**Analytics-Driven Optimization**:
- AI analyzes page performance metrics
- Suggests improvements based on user behavior

---

## 16. Documentation Requirements

### 16.1 Developer Documentation

**Octane API Reference**:
- Complete endpoint documentation with examples
- Authentication guide
- Webhook setup instructions
- Rate limits and quotas

**Component Registry Guide**:
- How to add new components
- Props schema format
- Semantic tagging conventions
- Embedding generation process

**Integration Guide**:
- dt-cms integration steps
- customer-sites rendering setup
- @opensite/blocks configuration

### 16.2 User Documentation

**AI Page Builder User Guide**:
- How to use conversational interface
- Best practices for page intents
- Understanding AI suggestions
- Editing generated pages

**Video Tutorials**:
- 5-minute quick start
- 15-minute deep dive
- Case studies (3-5 examples)

**FAQ & Troubleshooting**:
- Common issues and solutions
- Performance optimization tips
- Supported page types

---

## 17. Conclusion

This implementation plan provides a comprehensive roadmap for building the Semantic UI AI Agent system. By leveraging existing patterns in Octane (multi-stage AI workflows), @opensite/ui (component library), and customer-sites (rendering engine), we can create an intelligent, conversational page builder that dramatically reduces the time and effort required to build high-quality websites.

**Key Success Factors**:
1. **Reuse Proven Patterns**: Adapt competitive_analysis.rs for page generation
2. **Performance First**: Maintain Core Web Vitals compliance
3. **Gradual Rollout**: Feature flag system for risk mitigation
4. **User-Centric Design**: Conversational interface with real-time feedback
5. **Data-Driven Optimization**: Cross-reference SEO, brand, and media data

**Expected Impact**:
- 80% reduction in page building time
- Higher quality, SEO-optimized pages
- Improved client satisfaction and retention
- Platform differentiation in competitive market

---

## Appendix A: Reference Files

Key files referenced in this plan:

1. `/Users/jordanhudgens/code/dashtrack/docs/opensite-platform/SEMANTIC_SITE_BUILDER.md`
2. `/Users/jordanhudgens/code/dashtrack/docs/opensite-platform/ECOSYSTEM_GUIDELINES.md`
3. `/Users/jordanhudgens/code/dashtrack/utility-modules/opensite-ui/README.md`
4. `/Users/jordanhudgens/code/dashtrack/octane/CLAUDE.md`
5. `/Users/jordanhudgens/code/dashtrack/octane/src/ai_workflows/competitive_analysis.rs`
6. `/Users/jordanhudgens/code/dashtrack/utility-modules/customer-sites/app/views/customer_websites/chai_index.html.erb`
7. `/Users/jordanhudgens/code/dashtrack/dt-cms/Source/src/components/seo/SeoContentBriefStreamView.tsx`
8. `/Users/jordanhudgens/code/dashtrack/utility-modules/opensite-blocks/src/core/blocks-renderer.tsx`

---

## Appendix B: Database Schema Diagrams

```
┌─────────────────────────────────┐
│   ai_semantic_components         │
├─────────────────────────────────┤
│ id (BIGSERIAL)                  │
│ component_id (VARCHAR)          │◄──┐
│ npm_package (VARCHAR)           │   │
│ import_path (TEXT)              │   │
│ semantic_type (VARCHAR)         │   │
│ semantic_tags (TEXT[])          │   │
│ category (VARCHAR)              │   │
│ props_schema (JSONB)            │   │
│ embedding (vector(1024))        │   │
│ usage_count (INTEGER)           │   │
│ ...                             │   │
└─────────────────────────────────┘   │
                                      │
                                      │
┌─────────────────────────────────┐   │
│   page_categories                │   │
├─────────────────────────────────┤   │
│ id (BIGSERIAL)                  │   │
│ website_id (BIGINT)             │   │
│ slug (VARCHAR)                  │   │
│ design_payload (JSONB)          │───┘ References component_id
│ seo_title (VARCHAR)             │
│ seo_description (TEXT)          │
│ ...                             │
└─────────────────────────────────┘
         │
         │
         ▼
┌─────────────────────────────────┐
│   websites                       │
├─────────────────────────────────┤
│ id (BIGSERIAL)                  │
│ domain (VARCHAR)                │
│ subdomain (VARCHAR)             │
│ ...                             │
└─────────────────────────────────┘
         │
         │
         ├──────────────────────┐
         │                      │
         ▼                      ▼
┌──────────────────────┐  ┌──────────────────────┐
│ website_style_guide  │  │ brand_guides         │
├──────────────────────┤  ├──────────────────────┤
│ website_id           │  │ website_id           │
│ tailwind_css (TEXT)  │  │ industry             │
│ theme_config (JSONB) │  │ brand_voice          │
│ ...                  │  │ primary_color        │
└──────────────────────┘  │ ...                  │
                          └──────────────────────┘
```

---

**End of Implementation Plan**

This document will be updated as implementation progresses. All code examples are illustrative and should be refined during development.
