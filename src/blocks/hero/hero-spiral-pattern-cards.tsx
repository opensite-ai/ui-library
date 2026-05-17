import { HeroSpiralPatternCards } from "@opensite/ui/blocks/hero/hero-spiral-pattern-cards";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSpiralPatternCards
      badgeText="Innovative Platform"
      heading="Innovative solutions that evolve with you"
      description="Dynamic, flexible, and always improving. Our platform adapts to your needs and grows with your business."
      actions={[
        {
          label: "Learn More",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      background="dark"
      pattern="gridDotsBasic"
      patternOpacity={0.1}
      images={[
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Image 1" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Image 2" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Image 3" },
      ]}
    />
  );
}
