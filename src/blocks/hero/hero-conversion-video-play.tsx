import { brandLogoPlaceholders, videoPlaceholders } from "@/lib/media";
import { HeroConversionVideoPlay } from "@opensite/ui/blocks/hero/hero-conversion-video-play";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroConversionVideoPlay
      heading="Turn visitors into customers"
      description="Optimize your conversion funnel with data-driven insights and smart automation. See how top companies boost conversions by 300%."
      primaryAction={{
        label: "Get Started",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      videoButtonLabel="Watch Demo"
      videoUrl={videoPlaceholders[5]}
      videoDialogTitle="Conversion Optimization Demo"
      logos={[
        { src: brandLogoPlaceholders.white[0], alt: "Partner 1" },
        { src: brandLogoPlaceholders.white[1], alt: "Partner 2" },
        { src: brandLogoPlaceholders.white[2], alt: "Partner 3" },
        { src: brandLogoPlaceholders.white[3], alt: "Partner 4" },
        { src: brandLogoPlaceholders.white[4], alt: "Partner 5" },
        { src: brandLogoPlaceholders.white[5], alt: "Partner 6" },
      ]}
      background="dark"
      pattern="grid1"
      patternOpacity={0.1}
    />
  );
}
