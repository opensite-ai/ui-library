import { brandLogoPlaceholders, imagePlaceholders } from "@/lib/media";
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
        { src: brandLogoPlaceholders.black[0], alt: "Company 1" },
        { src: brandLogoPlaceholders.black[1], alt: "Company 2" },
        { src: brandLogoPlaceholders.black[2], alt: "Company 3" },
        { src: brandLogoPlaceholders.black[3], alt: "Company 4" },
        { src: brandLogoPlaceholders.black[4], alt: "Company 5" },
        { src: brandLogoPlaceholders.black[5], alt: "Company 6" },
      ]}
      pattern="architect"
      patternOpacity={0.1}
      background="muted"
    />
  );
}
