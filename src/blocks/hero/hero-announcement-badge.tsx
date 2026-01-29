import { HeroAnnouncementBadge } from "@opensite/ui/blocks/hero/hero-announcement-badge";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroAnnouncementBadge
      badge="New Release v2.0"
      badgeIcon={<DynamicIcon name="lucide/sparkles" size={16} />}
      heading="The future of productivity is here"
      description="Experience unprecedented performance and new features designed to transform the way you work. Join thousands of teams already making the switch."
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "What's New",
          href: "/changelog",
          variant: "outline",
        },
      ]}
      spacing="xl"
    />
  );
}
