import { imagePlaceholders, videoPlaceholders } from "@/lib/media";
import { HeroVideoDialogGradient } from "@opensite/ui/blocks/hero/hero-video-dialog-gradient";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroVideoDialogGradient
      heading="See our platform in action"
      description="Get a 3-minute walkthrough of our most powerful features and see why teams love working with us."
      actions={[
        {
          label: "Start Free Trial",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Contact Sales",
          href: "/contact",
          variant: "outline",
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
      spacing="xl"
    />
  );
}
