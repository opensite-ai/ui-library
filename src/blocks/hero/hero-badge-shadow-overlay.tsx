import { imagePlaceholders } from "@/lib/media";
import { HeroBadgeShadowOverlay } from "@opensite/ui/blocks/hero/hero-badge-shadow-overlay";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroBadgeShadowOverlay
      announcementBadge="Premium Experience"
      announcementText="Create memorable impressions with our premium design system"
      heading="Elevate your brand with stunning visuals"
      actions={[
        {
          label: "Explore Now",
          href: "/explore",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      backgroundImageUrl={imagePlaceholders[40]}
      spacing="xl"
    />
  );
}
