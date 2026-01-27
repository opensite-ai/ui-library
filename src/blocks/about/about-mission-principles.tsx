import { AboutMissionPrinciples } from "@opensite/ui/blocks/about/about-mission-principles";

export default function Demo() {
  return (
    <AboutMissionPrinciples
      badgeText="Our Foundation"
      missionHeading="Building Technology That Matters"
      missionDescription="We believe the best technology disappears into the background, enabling people to focus on what truly matters. Our mission is to create tools that feel like natural extensions of human capability."
      missionAction={{
        label: "Explore Our Work",
        href: "/portfolio",
        variant: "default",
      }}
      principles={[
        {
          number: "01",
          title: "Simplicity Over Complexity",
          description: "We relentlessly eliminate unnecessary complexity, creating solutions that are powerful yet intuitive.",
        },
        {
          number: "02",
          title: "Quality Without Compromise",
          description: "Every detail matters. We craft experiences that delight users and stand the test of time.",
        },
        {
          number: "03",
          title: "Transparency Always",
          description: "Open communication builds trust. We share our process, challenges, and learnings openly.",
        },
        {
          number: "04",
          title: "Continuous Improvement",
          description: "We're never done learning. Every project teaches us something new that makes us better.",
        },
      ]}
      visionHeading="Looking Ahead"
      visionDescription="Our vision extends beyond individual projects. We're building a future where technology amplifies human potential and creates opportunities for everyone."
      visionAction={{
        label: "Join Our Journey",
        href: "/careers",
        variant: "outline",
        size: "lg",
      }}
    />
  );
}
