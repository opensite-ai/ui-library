import { ArticleSidebarSticky } from "@opensite/ui/blocks/article/article-sidebar-sticky";
import { LONG_FORM_MARKDOWN_STRING, optixFlowApiKey } from "@/lib/media";

const ARTICLE_IMAGE_URL =
  "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp";

export default function Demo() {
  return (
    <ArticleSidebarSticky
      backHref="#"
      backText="Back to Blog"
      title="Mastering React Server Components: A Deep Dive"
      authorName="Emma Thompson"
      authorImage={ARTICLE_IMAGE_URL}
      authorHref="#"
      publishDate="January 18, 2026"
      heroImageSrc={ARTICLE_IMAGE_URL}
      heroImageAlt="React Server Components architecture"
      background="white"
      pattern="dashedGridBasic"
      patternOpacity={1}
      markdownString={LONG_FORM_MARKDOWN_STRING}
      optixFlowConfig={{ apiKey: optixFlowApiKey as string }}
    />
  );
}
