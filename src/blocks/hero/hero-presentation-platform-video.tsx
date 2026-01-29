import { videoPlaceholders } from "@/lib/media";
import { HeroPresentationPlatformVideo } from "@opensite/ui/blocks/hero/hero-presentation-platform-video";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPresentationPlatformVideo
      subtitle="Presentation Platform"
      heading="Create stunning presentations in minutes"
      description="Beautiful templates, smart layouts, and powerful collaboration tools. Make every presentation memorable."
      actions={[
        {
          label: "Start Creating",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Templates",
          href: "/templates",
          variant: "outline",
        },
      ]}
      videoSrc={videoPlaceholders[15]}
      spacing="xl"
    />
  );
}
