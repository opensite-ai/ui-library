import { videoPlaceholders } from "@/lib/media";
import { HeroProductivityLauncherVideo } from "@opensite/ui/blocks/hero/hero-productivity-launcher-video";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroProductivityLauncherVideo
      heading="Supercharge your productivity"
      description="The ultimate productivity launcher for modern professionals. Access everything you need with a single keystroke."
      actions={[
        {
          label: "Download Free",
          href: "/download",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/download" size={16} />,
        },
        {
          label: "Watch Tour",
          href: "/tour",
          variant: "outline",
          icon: <DynamicIcon name="lucide/play-circle" size={16} />,
        },
      ]}
      videoSrc={videoPlaceholders[20]}
      versionInfo={{
        version: "v2.0",
        osRequirement: "macOS 12+, Windows 10+",
      }}
      spacing="xl"
    />
  );
}
