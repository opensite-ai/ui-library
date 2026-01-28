import { CarouselAutoProgressSlides } from "@opensite/ui/blocks/carousel/carousel-auto-progress-slides";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselAutoProgressSlides
      heading="Product Evolution"
      subheading="Watch how our platform transforms businesses"
      pattern="gridFadeCenter"
      patternOpacity={1}
      background="gray"
      items={[
        {
          src: imagePlaceholders[18],
          label: "Platform Launch - Q1 2024",
        },
        {
          src: imagePlaceholders[35],
          label: "AI Integration - Q2 2024",
        },
        {
          src: imagePlaceholders[52],
          label: "Enterprise Features - Q3 2024",
        },
        {
          src: imagePlaceholders[71],
          label: "Global Expansion - Q4 2024",
        },
        {
          src: imagePlaceholders[88],
          label: "Next Generation - 2025",
        },
      ]}
      autoAdvanceInterval={75}
    />
  );
}
