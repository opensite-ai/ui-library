import { HeroFeatureCardsGrid } from "@opensite/ui/blocks/hero/hero-feature-cards-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroFeatureCardsGrid
      heading="Everything you need in one place"
      description="Powerful features that work together seamlessly to help you achieve more."
      features={[
        {
          icon: <DynamicIcon name="lucide/layout-dashboard" size={24} />,
          title: "Intuitive Dashboard",
          description: "Get insights at a glance with our beautiful, customizable dashboard",
        },
        {
          icon: <DynamicIcon name="lucide/users" size={24} />,
          title: "Team Collaboration",
          description: "Work together seamlessly with real-time updates and comments",
        },
        {
          icon: <DynamicIcon name="lucide/bar-chart" size={24} />,
          title: "Advanced Analytics",
          description: "Make data-driven decisions with comprehensive reporting",
        },
        {
          icon: <DynamicIcon name="lucide/zap" size={24} />,
          title: "Automation",
          description: "Save time with smart workflows and automated processes",
        },
      ]}
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      spacing="xl"
    />
  );
}
