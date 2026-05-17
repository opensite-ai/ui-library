import { HeroCommunitySurveyCta } from "@opensite/ui/blocks/hero/hero-community-survey-cta";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCommunitySurveyCta
      announcementPrimary="Your Voice Matters"
      announcementLinkText="Learn More"
      announcementHref="#"
      heading="Help us build the future"
      description="Take our 5-minute survey and share your thoughts. Your feedback directly influences our product roadmap and helps us serve you better."
      mainImage={{
        src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        alt: "Hero Community Survey CTA Image",
      }}
      leftOverlayImage={{
        src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        alt: "Hero Community Survey CTA Image Left",
      }}
      rightOverlayImage={{
        src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        alt: "Hero Community Survey CTA Image Right",
      }}
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "outline",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "#",
          variant: "ghost",
        },
      ]}
      background="dark"
      pattern="gradientGlowBottom"
      patternOpacity={1}
    />
  );
}
