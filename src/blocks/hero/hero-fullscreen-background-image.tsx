import { imagePlaceholders } from "@/lib/media";
import { HeroFullscreenBackgroundImage } from "@opensite/ui/blocks/hero/hero-fullscreen-background-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroFullscreenBackgroundImage
      heading="Experience the extraordinary"
      description="Immersive experiences that captivate and inspire. Make a bold statement with stunning visuals."
      actions={[
        {
          label: "Explore",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      backgroundImage={imagePlaceholders[110]}
    />
  );
}
