import { HeroGridPatternEfficiency } from "@opensite/ui/blocks/hero/hero-grid-pattern-efficiency";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroGridPatternEfficiency
      heading="Work smarter, not harder"
      highlightedWord="smarter"
      description="Maximize productivity with intelligent tools and workflows designed to eliminate busywork and help you focus on what matters."
      action={{
        label: "Boost Productivity",
        href: "/signup",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      actionSubtext="No credit card required"
      showGridPattern={true}
      pattern="grid1"
      spacing="xl"
    />
  );
}
