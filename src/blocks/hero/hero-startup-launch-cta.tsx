import { HeroStartupLaunchCta } from "@opensite/ui/blocks/hero/hero-startup-launch-cta";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroStartupLaunchCta
      badge="We're Launching"
      badgeIcon={<DynamicIcon name="lucide/rocket" />}
      heading="The future of startups starts here"
      description="Join the waitlist for early access to the platform that's changing how startups build, launch, and scale."
      badgeCard={{
        logoSrc: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        title: "OpenSite",
        subtitle: "Intelligent Automation",
      }}
      imageSrc={"https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp"}
      avatars={[
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Avatar 1" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Avatar 2" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Avatar 3" },
      ]}
      socialProofText="5,000+ active members"
      background="dark"
      pattern="dashedGridFadeBottomLeft"
      patternOpacity={0.25}
      actions={[
        {
          label: "Join Waitlist",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "#",
          variant: "outline",
        },
      ]}
    />
  );
}
