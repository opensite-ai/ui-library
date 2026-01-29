import { HeroDashedBorderFeatures } from "@opensite/ui/blocks/hero/hero-dashed-border-features";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroDashedBorderFeatures
      heading="Features that make a difference"
      description="Discover the powerful capabilities that set us apart. Every feature designed with your success in mind."
      features={[
        {
          icon: <DynamicIcon name="lucide/zap" size={24} />,
          title: "Lightning Fast",
          description: "Optimized for speed and performance",
        },
        {
          icon: <DynamicIcon name="lucide/shield" size={24} />,
          title: "Secure by Default",
          description: "Enterprise-grade security built-in",
        },
        {
          icon: <DynamicIcon name="lucide/sparkles" size={24} />,
          title: "AI-Powered",
          description: "Smart automation that learns",
        },
      ]}
      actions={[
        {
          label: "Explore Features",
          href: "/features",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Contact Sales",
          href: "/contact",
          variant: "outline",
        },
      ]}
      spacing="xl"
    />
  );
}
