import { imagePlaceholders } from "@/lib/media";
import { HeroImageSlider } from "@opensite/ui/blocks/hero/hero-image-slider";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroImageSlider
      heading="Explore our collection"
      description="Browse through our carefully curated selection of products, each one designed to enhance your experience."
      images={[
        { src: imagePlaceholders[14], alt: "Slide 1" },
        { src: imagePlaceholders[18], alt: "Slide 2" },
        { src: imagePlaceholders[19], alt: "Slide 3" },
        { src: imagePlaceholders[26], alt: "Slide 4" },
      ]}
      actions={[
        {
          label: "Shop Now",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/shopping-bag" size={16} />,
        },
      ]}
      background="white"
      pattern="gridFadeTop"
      patternOpacity={0.9}
    />
  );
}
