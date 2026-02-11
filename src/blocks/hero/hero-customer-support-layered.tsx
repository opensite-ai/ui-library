import { imagePlaceholders } from "@/lib/media";
import { HeroCustomerSupportLayered } from "@opensite/ui/blocks/hero/hero-customer-support-layered";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCustomerSupportLayered
      heading="Support that your customers love"
      description="Deliver exceptional customer experiences with our multi-channel support platform. Fast, efficient, and always there when you need it."
      images={[
        { src: imagePlaceholders[85], alt: "Support interface 1" },
        { src: imagePlaceholders[86], alt: "Support interface 2" },
        { src: imagePlaceholders[87], alt: "Support interface 3" },
      ]}
      background="secondary"
      pattern="gridFadeBottomRight"
      patternOpacity={0.15}
    />
  );
}
