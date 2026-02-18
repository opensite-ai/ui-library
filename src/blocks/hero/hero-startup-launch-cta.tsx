import { imagePlaceholders, logoPlaceholders } from "@/lib/media";
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
        logoSrc: logoPlaceholders.logoMark,
        title: "OpenSite",
        subtitle: "Intelligent Automation",
      }}
      imageSrc={imagePlaceholders[75]}
      avatars={[
        { src: imagePlaceholders[6], alt: "Avatar 1" },
        { src: imagePlaceholders[7], alt: "Avatar 2" },
        { src: imagePlaceholders[9], alt: "Avatar 3" },
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
