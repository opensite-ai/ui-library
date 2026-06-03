import { HeroArchitectureFullscreen } from "@opensite/ui/blocks/hero/hero-architecture-fullscreen";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <HeroArchitectureFullscreen
      logo={{
        url: "/",
        src: brandLogoPlaceholders.white[0],
        title: "StartupCo",
        alt: "StartupCo Logo",
      }}
      heading="Designing spaces that inspire"
      description="Award-winning architecture firm specializing in sustainable, innovative designs that blend form and function seamlessly."
      action={{
        label: "View Projects",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      backgroundImage={
        "https://toastability-production.s3.amazonaws.com/cen5x90p3kbdafb80liq1a5j222x"
      }
    />
  );
}
