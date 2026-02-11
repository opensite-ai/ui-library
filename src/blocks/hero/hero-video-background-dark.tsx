import { videoPlaceholders } from "@/lib/media";
import { HeroVideoBackgroundDark } from "@opensite/ui/blocks/hero/hero-video-background-dark";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroVideoBackgroundDark
      badgeText="Immersive Experience"
      heading="Make an unforgettable first impression"
      description="Captivate your audience with stunning video backgrounds that tell your story in motion."
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Explore",
          href: "/explore",
          variant: "outline",
        },
      ]}
      videoSrc={videoPlaceholders[25]}
      background="dark"
    />
  );
}
