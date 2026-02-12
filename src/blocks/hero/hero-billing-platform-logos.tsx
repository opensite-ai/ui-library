import { brandLogoPlaceholders, imagePlaceholders } from "@/lib/media";
import { HeroBillingPlatformLogos } from "@opensite/ui/blocks/hero/hero-billing-platform-logos";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroBillingPlatformLogos
      heading="Simplified billing for modern businesses"
      description="Accept payments, manage subscriptions, and handle invoicing all in one place. Trusted by thousands of companies worldwide."
      actions={[
        {
          label: "Start Free Trial",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Pricing",
          href: "#",
          variant: "outline",
        },
      ]}
      mainImage={{ src: imagePlaceholders[122], alt: "Billing dashboard" }}
      logos={[
        { src: brandLogoPlaceholders.black[0], alt: "Partner 1" },
        { src: brandLogoPlaceholders.black[1], alt: "Partner 2" },
        { src: brandLogoPlaceholders.black[2], alt: "Partner 3" },
        { src: brandLogoPlaceholders.black[3], alt: "Partner 4" },
        { src: brandLogoPlaceholders.black[4], alt: "Partner 5" },
        { src: brandLogoPlaceholders.black[5], alt: "Partner 6" },
      ]}
    />
  );
}
