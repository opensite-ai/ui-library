import { AboutMissionDualImage } from "@opensite/ui/blocks/about/about-mission-dual-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <AboutMissionDualImage
      missionTitle="Our Mission"
      missionContent="To democratize access to powerful technology by creating intuitive tools that help businesses of all sizes compete and thrive in the digital economy."
      visionTitle="Our Vision"
      visionContent="A world where every entrepreneur and organization has the digital capabilities they need to bring their ideas to life and make a meaningful impact."
      primaryImage={{
        src: imagePlaceholders[12],
        alt: "Team collaboration",
      }}
      secondaryImage={{
        src: imagePlaceholders[45],
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
