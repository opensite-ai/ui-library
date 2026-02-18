import { imagePlaceholders } from "@/lib/media";
import { HeroCenteredImageGrid } from "@opensite/ui/blocks/hero/hero-centered-image-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCenteredImageGrid
      heading="Visual storytelling at its finest"
      description="Showcase your work with beautiful grid layouts that capture attention and inspire action."
      actions={[
        {
          label: "View Gallery",
          href: "/gallery",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "/about",
          variant: "outline",
        },
      ]}
      gridImages={[
        { src: imagePlaceholders[62], alt: "Gallery 1" },
        { src: imagePlaceholders[63], alt: "Gallery 2" },
        { src: imagePlaceholders[64], alt: "Gallery 3" },
        { src: imagePlaceholders[65], alt: "Gallery 4" },
        { src: imagePlaceholders[66], alt: "Gallery 5" },
        { src: imagePlaceholders[67], alt: "Gallery 6" },
      ]}
      background="dark"
      pattern="dashedGridFadeTop"
      patternOpacity={0.1}
    />
  );
}
