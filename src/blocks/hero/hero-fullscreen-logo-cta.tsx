import { imagePlaceholders } from "@/lib/media";
import { HeroFullscreenLogoCta } from "@opensite/ui/blocks/hero/hero-fullscreen-logo-cta";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroFullscreenLogoCta
      logo={{ src: imagePlaceholders[112], alt: "Company Logo" }}
      heading="Building the future of work"
      description="Join the companies already transforming how they operate with our innovative platform."
      action={{
        label: "Get Started",
        href: "/signup",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      spacing="xl"
    />
  );
}
