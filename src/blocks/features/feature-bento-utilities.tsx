import { imagePlaceholders } from "@/lib/media";
import { FeatureBentoUtilities } from "@opensite/ui/blocks/features/feature-bento-utilities";

export default function Demo() {
  return (
    <FeatureBentoUtilities
      label="DEVELOPMENT UTILITIES"
      labelIconName="lucide/sparkles"
      title="Tools That Power Your Workflow"
      description="Comprehensive utilities designed to streamline every aspect of your development process."
      leftColumnCards={[
        {
          title: "Code Generator",
          description:
            "Generate components, routes, and API endpoints from templates with smart variable replacement.",
          imageSrc: imagePlaceholders[46],
          imageAlt: "Code generator",
          showSparkle: true,
        },
        {
          title: "Schema Builder",
          description: "Visual database designer with automatic migration generation.",
          badge: "Beta",
          isDashed: false,
        },
      ]}
      rightColumnCards={[
        {
          title: "Asset Optimizer",
          description:
            "Automatically compress and optimize images, fonts, and other assets during build.",
          showSparkle: false,
        },
        {
          title: "API Testing",
          description:
            "Interactive API explorer with live testing and code generation in multiple languages.",
          imageSrc: imagePlaceholders[70],
          imageAlt: "API testing",
          showSparkle: true,
        },
        {
          title: "Performance Profiler",
          description: "Advanced performance analysis and optimization suggestions.",
          badge: "Coming Soon",
          isDashed: true,
        },
      ]}
      background="white"
      spacing="xl"
    />
  );
}
