import { HeroDesignCarouselPortfolio } from "@opensite/ui/blocks/hero/hero-design-carousel-portfolio";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroDesignCarouselPortfolio
      heading="Design portfolio that speaks volumes"
      description="Showcase your best work with beautiful, interactive carousels that captivate and engage your audience."
      logo={{ src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Brand Logo" }}
      features={[
        {
          icon: (
            <DynamicIcon
              name="lucide/target"
              size={24}
              className="text-primary"
            />
          ),
          title: "Strategic Focus",
          description:
            "Every project begins with understanding your goals. We align our work with your business objectives to ensure measurable impact.",
        },
        {
          icon: (
            <DynamicIcon name="lucide/zap" size={24} className="text-primary" />
          ),
          title: "Rapid Execution",
          description:
            "Our agile methodology enables quick iterations and fast time-to-market without compromising on quality.",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/heart"
              size={24}
              className="text-primary"
            />
          ),
          title: "Human-Centered",
          description:
            "We design for people first. Every decision is informed by user research and validated through testing.",
        },
      ]}
      actions={[
        {
          label: "Schedule Chat",
          href: "#",
          variant: "default",
        },
        {
          label: "View Portfolio",
          href: "#",
          variant: "outline",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      carouselImages={[
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Design 1" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Design 2" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Design 3" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Design 4" },
      ]}
      background="gray"
      pattern="circuitBoardFadeTop"
      patternOpacity={0.9}
    />
  );
}
