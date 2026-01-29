import { HeroStatsSocialProof } from "@opensite/ui/blocks/hero/hero-stats-social-proof";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroStatsSocialProof
      heading="Trusted by thousands of businesses"
      description="Join the companies already experiencing transformative results with our platform."
      stats={[
        { value: "50K+", label: "Active Users" },
        { value: "99.9%", label: "Uptime" },
        { value: "4.9/5", label: "User Rating" },
        { value: "150+", label: "Countries" },
      ]}
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Case Studies",
          href: "/case-studies",
          variant: "outline",
        },
      ]}
      spacing="xl"
    />
  );
}
