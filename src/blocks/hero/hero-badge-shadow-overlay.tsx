import { HeroBadgeShadowOverlay } from "@opensite/ui/blocks/hero/hero-badge-shadow-overlay";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroBadgeShadowOverlay
      announcementBadge="Launch"
      announcementText="Premium design system"
      announcementHref="#"
      heading="Elevate your brand with stunning visuals"
      description="Crafted with precision and creativity, our design system empowers you to create visually captivating experiences that resonate with your audience."
      actions={[
        {
          label: "Explore Now",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      backgroundImageUrl={"https://toastability-production.s3.amazonaws.com/vvixyoo7ybq3h04q2q0kact0s5wc"}
    />
  );
}
