import { imagePlaceholders } from "@/lib/media";
import { HeroPlatformFeaturesGrid } from "@opensite/ui/blocks/hero/hero-platform-features-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPlatformFeaturesGrid
      logo={{ src: imagePlaceholders[88], alt: "Company Logo" }}
      subtitle="Complete Platform"
      heading="A complete platform for modern teams"
      action={{
        label: "Explore Features",
        href: "/features",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      features={[
        {
          iconName: "lucide/message-square",
          title: "Team Chat",
          description: "Real-time messaging",
        },
        {
          iconName: "lucide/video",
          title: "Video Calls",
          description: "HD video meetings",
        },
        {
          iconName: "lucide/file-text",
          title: "Documents",
          description: "Collaborative editing",
        },
        {
          iconName: "lucide/calendar",
          title: "Calendar",
          description: "Schedule meetings",
        },
        {
          iconName: "lucide/database",
          title: "File Storage",
          description: "Secure cloud storage",
        },
        {
          iconName: "lucide/workflow",
          title: "Workflows",
          description: "Automate processes",
        },
      ]}
      spacing="xl"
    />
  );
}
