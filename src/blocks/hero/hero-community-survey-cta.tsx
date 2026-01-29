import { HeroCommunitySurveyCta } from "@opensite/ui/blocks/hero/hero-community-survey-cta";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCommunitySurveyCta
      announcementPrimary="Your Voice Matters"
      announcementLinkText="Learn More"
      announcementHref="/about"
      heading="Help us build the future"
      description="Take our 5-minute survey and share your thoughts. Your feedback directly influences our product roadmap and helps us serve you better."
      actions={[
        {
          label: "Take Survey",
          href: "/survey",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      spacing="xl"
    />
  );
}
