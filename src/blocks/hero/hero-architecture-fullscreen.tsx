import { imagePlaceholders } from "@/lib/media";
import { HeroArchitectureFullscreen } from "@opensite/ui/blocks/hero/hero-architecture-fullscreen";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroArchitectureFullscreen
      heading="Designing spaces that inspire"
      description="Award-winning architecture firm specializing in sustainable, innovative designs that blend form and function seamlessly."
      action={{
        label: "View Projects",
        href: "/projects",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      backgroundImage={imagePlaceholders[30]}
      spacing="xl"
    />
  );
}
