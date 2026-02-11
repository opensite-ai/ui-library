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
      background="dark"
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
