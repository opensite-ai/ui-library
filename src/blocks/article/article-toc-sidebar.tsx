import { ArticleTocSidebar } from "@opensite/ui/blocks/article/article-toc-sidebar";
import { imagePlaceholders, LONG_FORM_MARKDOWN_STRING } from "@/lib/media";

export default function Demo() {
  return (
    <ArticleTocSidebar
      category="Development"
      title="Building Scalable Systems: A Comprehensive Guide"
      description="Learn the principles, patterns, and practices that enable applications to grow gracefully from prototype to production scale."
      authorName="Michael Zhang"
      authorImage={imagePlaceholders[88]}
      authorHref="#"
      publishDate="January 12, 2026"
      readTime="20 min read"
      heroImageSrc={imagePlaceholders[95]}
      heroImageAlt="Scalable architecture diagram"
      sections={[
        { id: "introduction", title: "Introduction" },
        { id: "getting-started", title: "Getting Started" },
        { id: "core-concepts", title: "Core Concepts" },
        { id: "best-practices", title: "Best Practices" },
        { id: "conclusion", title: "Conclusion" },
      ]}
      ctaTitle="Want to Learn More?"
      ctaDescription="Join our upcoming workshop on scalable system design and architecture patterns."
      ctaActions={[
        {
          label: "Register for Workshop",
          href: "#",
          variant: "default",
          className: "w-full",
        },
      ]}
      enableTocTracking={true}
      background="dark"
      pattern="dashedGridFadeTop"
      patternOpacity={0.15}
      markdownString={LONG_FORM_MARKDOWN_STRING}
    />
  );
}
