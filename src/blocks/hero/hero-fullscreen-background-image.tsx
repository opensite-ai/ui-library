import { HeroFullscreenBackgroundImage } from "@opensite/ui/blocks/hero/hero-fullscreen-background-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroFullscreenBackgroundImage
      heading="Experience the extraordinary"
      description="Immersive experiences that captivate and inspire. Make a bold statement with stunning visuals."
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
      backgroundImage={"https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp"}
    />
  );
}
