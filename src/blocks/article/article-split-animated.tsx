import { ArticleSplitAnimated } from "@opensite/ui/blocks/article/article-split-animated";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <ArticleSplitAnimated
      image={imagePlaceholders[31]}
      background="dark"
      pattern="gridFadeTop"
      patternOpacity={0.15}
      imageAlt="AI-powered development workflow"
      category="Artificial Intelligence"
      categoryHref="#"
      title="The Future of AI-Assisted Development"
      description="Discover how artificial intelligence is transforming the software development lifecycle, from code generation to automated testing and deployment."
      authorName="Dr. Raj Patel"
      authorImage={imagePlaceholders[67]}
      authorRole="AI Research Lead"
      authorHref="#"
      publishDate="January 25, 2026"
      readTime="15 min read"
      ctaActions={[
        {
          label: "Read Full Article",
          href: "#",
          variant: "default",
          size: "lg",
        },
      ]}
      enableAnimations={true}
    />
  );
}
