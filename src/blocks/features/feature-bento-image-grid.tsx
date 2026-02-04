import { imagePlaceholders } from "@/lib/media";
import { FeatureBentoImageGrid } from "@opensite/ui/blocks/features/feature-bento-image-grid";

export default function Demo() {
  return (
    <FeatureBentoImageGrid
      title="Platform Features"
      description="Discover the powerful capabilities that make our platform the choice of leading teams worldwide."
      background="gray"
      pattern="gridDotsBasic"
      patternOpacity={0.4}
      items={[
        {
          iconName: "lucide/atom",
          iconBadge: "AI",
          title: "AI-Powered Development",
          linkText: "Explore AI Features",
          link: "#",
          imageSrc: imagePlaceholders[42],
          imageAlt: "AI development tools",
          size: "large",
        },
        {
          iconName: "lucide/shield-check",
          iconBadge: "Security",
          title: "Enterprise Security",
          linkText: "View Security",
          link: "#",
          imageSrc: imagePlaceholders[65],
          imageAlt: "Security features",
          size: "small",
        },
        {
          iconName: "lucide/bar-chart-3",
          iconBadge: "Analytics",
          title: "Real-Time Analytics",
          linkText: "See Analytics",
          link: "#",
          imageSrc: imagePlaceholders[88],
          imageAlt: "Analytics dashboard",
          size: "small",
        },
        {
          iconName: "lucide/zap",
          iconBadge: "Performance",
          title: "Lightning Fast",
          linkText: "Check Performance",
          link: "#",
          imageSrc: imagePlaceholders[106],
          imageAlt: "Performance metrics",
          size: "large",
        },
      ]}
      spacing="xl"
    />
  );
}
