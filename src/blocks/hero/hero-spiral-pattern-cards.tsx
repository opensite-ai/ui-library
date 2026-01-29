import { HeroSpiralPatternCards } from "@opensite/ui/blocks/hero/hero-spiral-pattern-cards";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSpiralPatternCards
      badgeText="Innovative Platform"
      heading="Innovative solutions that evolve with you"
      description="Dynamic, flexible, and always improving. Our platform adapts to your needs and grows with your business."
      actions={[
        {
          label: "Learn More",
          href: "/features",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      spacing="xl"
    />
  );
}
