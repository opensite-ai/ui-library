import { ArticleBreadcrumbSocial } from "@opensite/ui/blocks/article/article-breadcrumb-social";
import { imagePlaceholders, LONG_FORM_MARKDOWN_STRING } from "@/lib/media";

export default function Demo() {
  return (
    <ArticleBreadcrumbSocial
      breadcrumbs={[
        { label: "Blog", href: "#" },
        { label: "Technology", href: "#" },
      ]}
      background="white"
      pattern="p6"
      patternOpacity={1}
      currentPage="Building Scalable Web Applications"
      title="Building Scalable Web Applications in 2026"
      author={{
        name: "Sarah Mitchell",
        image: imagePlaceholders[9],
        role: "Senior Software Architect",
      }}
      publishDate="January 15, 2026"
      readTime="12 min read"
      heroImageSrc={imagePlaceholders[42]}
      heroImageAlt="Modern web application architecture"
      sections={[
        { id: "overview", title: "Overview" },
        { id: "key-features", title: "Key Features" },
        { id: "implementation", title: "Implementation" },
        { id: "performance", title: "Performance Metrics" },
        { id: "summary", title: "Summary" },
      ]}
      enableTocTracking={true}
      enableBackToTop={true}
      markdownString={LONG_FORM_MARKDOWN_STRING}
    />
  );
}
