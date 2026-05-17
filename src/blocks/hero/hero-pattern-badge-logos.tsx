import { HeroPatternBadgeLogos } from "@opensite/ui/blocks/hero/hero-pattern-badge-logos";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPatternBadgeLogos
      badge="Trusted by Leaders"
      heading="Join the world's most innovative companies"
      description="Over 10,000 organizations trust our platform to power their operations and drive growth."
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Customers",
          href: "/customers",
          variant: "outline",
        },
      ]}
      logos={[
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Company 1" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Company 2" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Company 3" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Company 4" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Company 5" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Company 6" },
      ]}
      pattern="architect"
      patternOpacity={0.1}
      background="muted"
    />
  );
}
