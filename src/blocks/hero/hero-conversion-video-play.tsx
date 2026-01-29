import { videoPlaceholders } from "@/lib/media";
import { HeroConversionVideoPlay } from "@opensite/ui/blocks/hero/hero-conversion-video-play";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroConversionVideoPlay
      heading="Turn visitors into customers"
      description="Optimize your conversion funnel with data-driven insights and smart automation. See how top companies boost conversions by 300%."
      primaryAction={{
        label: "Get Started",
        href: "/signup",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      videoButtonLabel="Watch Demo"
      videoUrl={videoPlaceholders[5]}
      videoDialogTitle="Conversion Optimization Demo"
      spacing="xl"
    />
  );
}
