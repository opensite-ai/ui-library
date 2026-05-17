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
        src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        alt: "Team collaboration",
      }}
      secondaryImage={{
        src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        alt: "Modern workspace",
      }}
      actions={[
        {
          label: "Learn Our Story",
          href: "#",
          variant: "default",
          size: "lg",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Meet the Team",
          href: "#",
          variant: "outline",
          size: "lg",
          iconAfter: <DynamicIcon name="lucide/users" size={16} />,
        },
      ]}
      spacing="xl"
      background="dark"
      pattern="architect"
      patternOpacity={0.33}
    />
  );
}
