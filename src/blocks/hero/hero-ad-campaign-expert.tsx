import { imagePlaceholders } from "@/lib/media";
import { HeroAdCampaignExpert } from "@opensite/ui/blocks/hero/hero-ad-campaign-expert";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroAdCampaignExpert
      heading="Your ad campaigns excel with "
      headingHighlight="AI-powered insights"
      description="Optimize your advertising performance with real-time analytics and automated campaign management. Deliver exceptional results across all platforms."
      action={{
        label: "Start Free Trial",
        href: "/signup",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      imageSrc={imagePlaceholders[5]}
      imageAlt="Ad campaign dashboard interface"
      spacing="xl"
    />
  );
}
