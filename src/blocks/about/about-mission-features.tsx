import { AboutMissionFeatures } from "@opensite/ui/blocks/about/about-mission-features";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutMissionFeatures
      title="Transforming Ideas Into Impact"
      description="We partner with forward-thinking organizations to build digital experiences that drive growth and create lasting value."
      missionLabel="Our Mission"
      missionText="To empower businesses with technology that simplifies complexity, amplifies creativity, and accelerates success in an ever-evolving digital landscape."
      mainImage={{
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
        alt: "Team working together",
      }}
      missionBackgroundImage={{
        src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
        alt: "Abstract background",
      }}
      featuresTitle="What Sets Us Apart"
      featuresDescription="Our unique approach combines deep expertise with genuine partnership to deliver exceptional results."
      features={[
        {
          icon: <DynamicIcon name="lucide/target" size={24} className="text-primary" />,
          title: "Strategic Focus",
          description: "Every project begins with understanding your goals. We align our work with your business objectives to ensure measurable impact.",
        },
        {
          icon: <DynamicIcon name="lucide/zap" size={24} className="text-primary" />,
          title: "Rapid Execution",
          description: "Our agile methodology enables quick iterations and fast time-to-market without compromising on quality.",
        },
        {
          icon: <DynamicIcon name="lucide/heart" size={24} className="text-primary" />,
          title: "Human-Centered",
          description: "We design for people first. Every decision is informed by user research and validated through testing.",
        },
      ]}
    />
  );
}
