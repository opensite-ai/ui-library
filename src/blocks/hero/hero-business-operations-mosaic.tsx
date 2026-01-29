import { imagePlaceholders } from "@/lib/media";
import { HeroBusinessOperationsMosaic } from "@opensite/ui/blocks/hero/hero-business-operations-mosaic";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroBusinessOperationsMosaic
      heading="Streamline your business operations"
      subheading="Unified platform for managing all aspects of your business. From inventory to accounting, everything in one place."
      images={[
        { src: imagePlaceholders[56], alt: "Operations 1" },
        { src: imagePlaceholders[57], alt: "Operations 2" },
        { src: imagePlaceholders[58], alt: "Operations 3" },
      ]}
      spacing="xl"
    />
  );
}
