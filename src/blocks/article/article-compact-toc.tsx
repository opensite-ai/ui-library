import { ArticleCompactToc } from "@opensite/ui/blocks/article/article-compact-toc";
import { imagePlaceholders, LONG_FORM_MARKDOWN_STRING } from "@/lib/media";

/**
 * ArticleCompactToc Demo
 *
 * Key Feature: Mobile-optimized collapsible Table of Contents
 * - TOC appears below the article meta on mobile/tablet screens
 * - Click "Table of Contents" button to expand/collapse navigation
 * - Automatically tracks active section as you scroll
 * - Sections are linked and clickable for quick navigation
 *
 * To see the TOC in action: resize your browser to mobile width (< 1024px)
 */
export default function Demo() {
  return (
    <ArticleCompactToc
      breadcrumbs={[
        { label: "Research", href: "#research" },
        { label: "Studies", href: "#studies" },
      ]}
      pattern="diagonalCrossBasic"
      patternOpacity={0.7}
      background="white"
      currentPage="User Behavior Analysis"
      title="Understanding User Behavior in Modern Web Applications"
      authorName="Dr. Jennifer Park"
      authorHref="#"
      publishDate="January 22, 2026"
      readTime="8 min read"
      heroImageSrc={imagePlaceholders[5]}
      heroImageAlt="User behavior analytics visualization"
      sections={[
        { id: "introduction", title: "Introduction" },
        { id: "methodology", title: "Methodology" },
        { id: "results", title: "Results" },
        { id: "discussion", title: "Discussion" },
        { id: "conclusion", title: "Conclusion" },
      ]}
      enableTocTracking={true}
      markdownString={LONG_FORM_MARKDOWN_STRING}
    />
  );
}
