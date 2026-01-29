import { imagePlaceholders } from "@/lib/media";
import { HeroOverlayCtaGrid } from "@opensite/ui/blocks/hero/hero-overlay-cta-grid";

export default function Demo() {
  return (
    <HeroOverlayCtaGrid
      heading="Choose your path"
      description="Multiple ways to engage with our platform. Select the option that best fits your needs."
      primaryCta={{
        label: "Start Free",
        href: "/individual",
      }}
      secondaryCta={{
        label: "Contact Sales",
        href: "/enterprise",
      }}
      spacing="xl"
    />
  );
}
