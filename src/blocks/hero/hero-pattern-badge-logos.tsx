import { imagePlaceholders } from "@/lib/media";
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
        { src: imagePlaceholders[68], alt: "Company 1" },
        { src: imagePlaceholders[69], alt: "Company 2" },
        { src: imagePlaceholders[71], alt: "Company 3" },
        { src: imagePlaceholders[72], alt: "Company 4" },
        { src: imagePlaceholders[73], alt: "Company 5" },
        { src: imagePlaceholders[74], alt: "Company 6" },
      ]}
      pattern="dots"
      spacing="xl"
    />
  );
}
