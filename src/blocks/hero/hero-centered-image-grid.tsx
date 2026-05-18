import { HeroCenteredImageGrid } from "@opensite/ui/blocks/hero/hero-centered-image-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCenteredImageGrid
      heading="Visual storytelling at its finest"
      description="Showcase your work with beautiful grid layouts that capture attention and inspire action."
      logo={{
        src: "https://cdn.ing/assets/i/r/288973/lxkmf98s3bmpytziacx1o0rwuun9/ui-placeholder-logo-white-6.png",
        alt: "Brand Logo",
      }}
      actions={[
        {
          label: "View Gallery",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "#",
          variant: "outline",
        },
      ]}
      gridImages={[
        {
          src: "https://cdn.ing/assets/i/r/289147/mc32ysna8zk8xtyt0oizs1cqwbqt/fine-dining-restaurant-table-gourmet-dishes-red-wine.webp",
          alt: "Project showcase",
        },
        {
          src: "https://cdn.ing/assets/i/r/289148/0p9g9lcxh9z50zhqww4athwg17bf/moody-orange-cocktail-in-coupe-glass-on-bar.jpg",
          alt: "Studio workspace",
        },
      ]}
      background="dark"
      pattern="dashedGridFadeTop"
      patternOpacity={0.1}
      spacing="hero"
    />
  );
}
