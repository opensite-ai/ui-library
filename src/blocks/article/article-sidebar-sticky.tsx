import { ArticleSidebarSticky } from "@opensite/ui/blocks/article/article-sidebar-sticky";
import {
  imagePlaceholders,
  LONG_FORM_MARKDOWN_STRING,
  optixFlowApiKey,
} from "@/lib/media";

export default function Demo() {
  return (
    <ArticleSidebarSticky
      backHref="#"
      backText="Back to Blog"
      title="Mastering React Server Components: A Deep Dive"
      authorName="Emma Thompson"
      authorImage={imagePlaceholders[2]}
      authorHref="#"
      publishDate="January 18, 2026"
      heroImageSrc={imagePlaceholders[56]}
      heroImageAlt="React Server Components architecture"
      background="white"
      pattern="dashedGridBasic"
      patternOpacity={1}
      markdownString={LONG_FORM_MARKDOWN_STRING}
      optixFlowConfig={{ apiKey: optixFlowApiKey as string }}
    />
  );
}
