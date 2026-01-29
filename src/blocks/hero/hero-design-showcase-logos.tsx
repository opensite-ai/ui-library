import { imagePlaceholders } from "@/lib/media";
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
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Case Studies",
          href: "/case-studies",
          variant: "outline",
        },
      ]}
      logos={[
        { src: imagePlaceholders[93], alt: "Client 1" },
        { src: imagePlaceholders[94], alt: "Client 2" },
        { src: imagePlaceholders[95], alt: "Client 3" },
        { src: imagePlaceholders[96], alt: "Client 4" },
        { src: imagePlaceholders[97], alt: "Client 5" },
      ]}
      spacing="xl"
    />
  );
}
