import { ArticleHeroProse } from "@opensite/ui/blocks/article/article-hero-prose";
import { imagePlaceholders, LONG_FORM_MARKDOWN_STRING } from "@/lib/media";

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
        authorImage: imagePlaceholders[77],
        authorHref: "#",
        image: imagePlaceholders[62],
        pubDate: new Date("2026-01-20"),
      }}
      dateFormat="MMMM d, yyyy"
      markdownString={LONG_FORM_MARKDOWN_STRING}
    />
  );
}
