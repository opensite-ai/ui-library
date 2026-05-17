import { ArticleHeroProse } from "@opensite/ui/blocks/article/article-hero-prose";
import { LONG_FORM_MARKDOWN_STRING } from "@/lib/media";

const ARTICLE_IMAGE_URL =
  "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp";

export default function Demo() {
  return (
    <ArticleHeroProse
      background="dark"
      pattern="gridFadeTopRight"
      patternOpacity={0.15}
      post={{
        title: "The Evolution of Modern JavaScript: From ES6 to ES2026",
        description:
          "Explore how JavaScript has transformed over the past decade, introducing powerful features that have reshaped web development as we know it.",
        authorName: "Alex Rodriguez",
        authorImage: ARTICLE_IMAGE_URL,
        authorHref: "#",
        image: ARTICLE_IMAGE_URL,
        pubDate: new Date("2026-01-20"),
      }}
      dateFormat="MMMM d, yyyy"
      markdownString={LONG_FORM_MARKDOWN_STRING}
    />
  );
}
