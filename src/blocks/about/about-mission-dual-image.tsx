import { AboutMissionDualImage } from "@opensite/ui/blocks/about/about-mission-dual-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutMissionDualImage
      missionTitle="Our Mission"
      missionContent="To democratize access to powerful technology by creating intuitive tools that help businesses of all sizes compete and thrive in the digital economy."
      visionTitle="Our Vision"
      visionContent="A world where every entrepreneur and organization has the digital capabilities they need to bring their ideas to life and make a meaningful impact."
      primaryImage={{
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=700&fit=crop",
        alt: "Team collaboration",
      }}
      secondaryImage={{
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=700&fit=crop",
        alt: "Modern workspace",
      }}
      actions={[
        {
          label: "Learn Our Story",
          href: "/story",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Meet the Team",
          href: "/team",
          variant: "outline",
        },
      ]}
    />
  );
}
