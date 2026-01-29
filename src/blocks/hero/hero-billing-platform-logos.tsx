import { imagePlaceholders } from "@/lib/media";
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
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Pricing",
          href: "/pricing",
          variant: "outline",
        },
      ]}
      logos={[
        { src: imagePlaceholders[45], alt: "Partner 1" },
        { src: imagePlaceholders[46], alt: "Partner 2" },
        { src: imagePlaceholders[47], alt: "Partner 3" },
        { src: imagePlaceholders[48], alt: "Partner 4" },
        { src: imagePlaceholders[49], alt: "Partner 5" },
        { src: imagePlaceholders[50], alt: "Partner 6" },
      ]}
      spacing="xl"
    />
  );
}
