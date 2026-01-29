import { imagePlaceholders } from "@/lib/media";
import { HeroDesignCarouselPortfolio } from "@opensite/ui/blocks/hero/hero-design-carousel-portfolio";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroDesignCarouselPortfolio
      heading="Design portfolio that speaks volumes"
      description="Showcase your best work with beautiful, interactive carousels that captivate and engage your audience."
      primaryAction={{
        label: "Schedule Chat",
        href: "/contact",
        variant: "default",
      }}
      secondaryAction={{
        label: "View Portfolio",
        href: "/portfolio",
        variant: "outline",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      carouselImages={[
        { src: imagePlaceholders[88], alt: "Design 1" },
        { src: imagePlaceholders[89], alt: "Design 2" },
        { src: imagePlaceholders[90], alt: "Design 3" },
        { src: imagePlaceholders[91], alt: "Design 4" },
      ]}
      spacing="xl"
    />
  );
}
