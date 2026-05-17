import { HeroGridPatternSolutions } from "@opensite/ui/blocks/hero/hero-grid-pattern-solutions";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroGridPatternSolutions
      badgeText="New Version Launched"
      badgeHref="#"
      heading="Complete solutions for every challenge"
      description="From startups to enterprises, we provide comprehensive solutions tailored to your unique needs and goals."
      images={[
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "For Business" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "For Developers" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "For Teams" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "For Teams" },
      ]}
      actions={[
        {
          label: "Explore Solutions",
          href: "#",
          variant: "outline",
          iconAfter: <DynamicIcon name="lucide/arrow-right" />,
        },
      ]}
      pattern="grid1"
      patternOpacity={0.1}
      background="dark"
    />
  );
}
