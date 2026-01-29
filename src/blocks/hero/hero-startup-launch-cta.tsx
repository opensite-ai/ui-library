import { HeroStartupLaunchCta } from "@opensite/ui/blocks/hero/hero-startup-launch-cta";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroStartupLaunchCta
      badge="We're Launching"
      heading="The future of startups starts here"
      description="Join the waitlist for early access to the platform that's changing how startups build, launch, and scale."
      actions={[
        {
          label: "Join Waitlist",
          href: "/waitlist",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "/about",
          variant: "outline",
        },
      ]}
      spacing="xl"
    />
  );
}
