import { HeroFullscreenLogoCta } from "@opensite/ui/blocks/hero/hero-fullscreen-logo-cta";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroFullscreenLogoCta
      logo={{ src: "https://cdn.ing/assets/i/r/308446/g4ykz8o4phw84yo9ly1lxhv0hqsd/logo-light.webp", alt: "Company Logo" }}
      heading="Building the future of work"
      description="Join the companies already transforming how they operate with our innovative platform."
      action={{
        label: "Get Started",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      background="dark"
      pattern="circuitBoardFadeBottomRight"
      patternOpacity={0.15}
    />
  );
}
