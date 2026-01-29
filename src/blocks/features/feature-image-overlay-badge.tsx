import { imagePlaceholders } from "@/lib/media";
import { FeatureImageOverlayBadge } from "@opensite/ui/blocks/features/feature-image-overlay-badge";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FeatureImageOverlayBadge
      badge="Customer Success Story"
      title="See How Teams Are Building Faster"
      description="Join thousands of developers who have accelerated their workflow and shipped products faster with our platform."
      actions={[
        {
          label: "Read Full Story",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View All Stories",
          href: "#",
          variant: "outline",
        },
      ]}
      imageSrc={imagePlaceholders[59]}
      imageAlt="Customer success story"
      avatarSrc={imagePlaceholders[13]}
      avatarBadgeText="Featured"
      overlayTitle="TechCorp reduces deployment time by 90%"
      overlayLinkText="Read their journey"
      overlayLinkUrl="#"
    />
  );
}
