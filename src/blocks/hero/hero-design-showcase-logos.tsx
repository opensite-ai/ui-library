import { brandLogoPlaceholders, imagePlaceholders } from "@/lib/media";
import { HeroDesignShowcaseLogos } from "@opensite/ui/blocks/hero/hero-design-showcase-logos";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroDesignShowcaseLogos
      heading="Trusted by leading brands worldwide"
      description="Join thousands of companies who have transformed their design workflow with our platform."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Case Studies",
          href: "#",
          variant: "outline",
        },
      ]}
      logos={[
        { src: brandLogoPlaceholders.black[0], alt: "Partner 1" },
        { src: brandLogoPlaceholders.black[1], alt: "Partner 2" },
        { src: brandLogoPlaceholders.black[2], alt: "Partner 3" },
        { src: brandLogoPlaceholders.black[3], alt: "Partner 4" },
        { src: brandLogoPlaceholders.black[4], alt: "Partner 5" },
        { src: brandLogoPlaceholders.black[5], alt: "Partner 6" },
      ]}
      background="gray"
      pattern="gridFadeTop"
      patternOpacity={0.9}
    />
  );
}
