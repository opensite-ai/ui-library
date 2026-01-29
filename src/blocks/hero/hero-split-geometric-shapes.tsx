import { imagePlaceholders } from "@/lib/media";
import { HeroSplitGeometricShapes } from "@opensite/ui/blocks/hero/hero-split-geometric-shapes";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSplitGeometricShapes
      heading="Bold design for bold ideas"
      description="Stand out with striking visuals and modern aesthetics. Make a statement that resonates with your audience."
      actions={[
        {
          label: "Explore",
          href: "/explore",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Contact",
          href: "/contact",
          variant: "outline",
        },
      ]}
      spacing="xl"
    />
  );
}
