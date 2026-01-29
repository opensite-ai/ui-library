import { HeroCenteredGradientCta } from "@opensite/ui/blocks/hero/hero-centered-gradient-cta";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCenteredGradientCta
      badge="Limited Time Offer"
      heading="Transform your workflow today"
      description="Join thousands of teams who have revolutionized their productivity. Get started in minutes with our intuitive platform."
      actions={[
        {
          label: "Get Started Free",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Schedule Demo",
          href: "/demo",
          variant: "outline",
          icon: <DynamicIcon name="lucide/video" size={16} />,
        },
      ]}
      background="gradient"
      spacing="xl"
    />
  );
}
