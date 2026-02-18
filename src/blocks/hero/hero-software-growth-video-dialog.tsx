import { imagePlaceholders, videoPlaceholders } from "@/lib/media";
import { HeroSoftwareGrowthVideoDialog } from "@opensite/ui/blocks/hero/hero-software-growth-video-dialog";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSoftwareGrowthVideoDialog
      heading="Accelerate your growth with data-driven insights"
      description="See how top companies use our platform to scale faster, make smarter decisions, and achieve sustainable growth."
      videoAction={{
        label: "Watch Demo",
        variant: "outline",
        iconAfter: <DynamicIcon name="lucide/play" size={16} />,
      }}
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "ghost",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      showcaseImages={[
        { src: imagePlaceholders[1], alt: "Growth metric 1" },
        { src: imagePlaceholders[2], alt: "Growth metric 2" },
        { src: imagePlaceholders[3], alt: "Growth metric 3" },
        { src: imagePlaceholders[4], alt: "Growth metric 4" },
      ]}
      videoDialog={{
        videoUrl: videoPlaceholders[25],
        title: "See how it works",
      }}
      background="dark"
    />
  );
}
