import { imagePlaceholders } from "@/lib/media";
import { FeatureImageCardsThreeColumn } from "@opensite/ui/blocks/features/feature-image-cards-three-column";

export default function Demo() {
  return (
    <FeatureImageCardsThreeColumn
      title="Featured Solutions"
      description="Tailored solutions designed to accelerate your development workflow and drive business growth."
      background="dark"
      pattern="architect"
      patternOpacity={1}
      cards={[
        {
          iconName: "lucide/zap",
          badgeText: "Most Popular",
          title: "Rapid Development",
          linkText: "Learn More",
          link: "#",
          imageSrc: imagePlaceholders[39],
          imageAlt: "Rapid development workflow",
        },
        {
          iconName: "lucide/shield-check",
          badgeText: "Enterprise",
          title: "Security First",
          linkText: "Explore Features",
          link: "#",
          imageSrc: imagePlaceholders[72],
          imageAlt: "Security features",
        },
        {
          iconName: "lucide/trending-up",
          badgeText: "Growth",
          title: "Scale Seamlessly",
          linkText: "See How",
          link: "#",
          imageSrc: imagePlaceholders[95],
          imageAlt: "Scalability features",
        },
      ]}
    />
  );
}
