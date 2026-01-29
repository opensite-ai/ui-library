import { HeroSplitSpiralShapes } from "@opensite/ui/blocks/hero/hero-split-spiral-shapes";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSplitSpiralShapes
      badgeText="Design Excellence"
      heading="Where creativity meets precision"
      description="Award-winning designs that blend artistic vision with technical excellence. Experience the difference of thoughtful design."
      actions={[
        {
          label: "View Portfolio",
          href: "/portfolio",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Contact Us",
          href: "/contact",
          variant: "outline",
        },
      ]}
      spacing="xl"
    />
  );
}
