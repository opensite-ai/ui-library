import { imagePlaceholders } from "@/lib/media";
import { DynamicIcon } from "@opensite/ui";
import { HeroBusinessOperationsMosaic } from "@opensite/ui/blocks/hero/hero-business-operations-mosaic";

export default function Demo() {
  return (
    <HeroBusinessOperationsMosaic
      heading="Streamline your business operations"
      description="Unified platform for managing all aspects of your business. From inventory to accounting, everything in one place."
      images={[
        { src: imagePlaceholders[56], alt: "Operations 1" },
        { src: imagePlaceholders[57], alt: "Operations 2" },
        { src: imagePlaceholders[58], alt: "Operations 3" },
      ]}
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Talk to Sales",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/phone" size={16} />,
        },
      ]}
      background="gray"
    />
  );
}
