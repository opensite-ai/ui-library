import { imagePlaceholders, videoPlaceholders } from "@/lib/media";
import { HeroVideoDialogGradient } from "@opensite/ui/blocks/hero/hero-video-dialog-gradient";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroVideoDialogGradient
      heading="See our platform in action"
      description="Get a 3-minute walkthrough of our most powerful features and see why teams love working with us."
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
      image={{
        src: imagePlaceholders[35],
        alt: "Platform demo preview",
      }}
      videoDialog={{
        title: "Platform Demo",
        videoUrl: videoPlaceholders[35],
      }}
      background="gradient"
      pattern="circuitBoardFadeTop"
      patternOpacity={0.1}
    />
  );
}
