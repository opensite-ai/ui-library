import { imagePlaceholders } from "@/lib/media";
import { FeatureCardGridLinked } from "@opensite/ui/blocks/features/feature-card-grid-linked";

export default function Demo() {
  return (
    <FeatureCardGridLinked
      title="Explore Our Solutions"
      pattern="circles"
      patternOpacity={0.42}
      background="muted"
      features={[
        {
          id: "enterprise",
          label: "For Enterprise",
          heading: "Scale with Confidence",
          description:
            "Enterprise-grade infrastructure with dedicated support, SLA guarantees, and custom integrations.",
          image: imagePlaceholders[68],
          imageAlt: "Enterprise solutions",
          url: "#",
        },
        {
          id: "developers",
          label: "For Developers",
          heading: "Build Faster",
          description:
            "Complete SDK, CLI tools, and comprehensive documentation to accelerate your development workflow.",
          image: imagePlaceholders[82],
          imageAlt: "Developer tools",
          url: "#",
        },
        {
          id: "startups",
          label: "For Startups",
          heading: "Launch Quickly",
          description:
            "Everything you need to go from idea to production in days, not months.",
          image: imagePlaceholders[101],
          imageAlt: "Startup solutions",
          url: "#",
        },
        {
          id: "marketing",
          label: "AEO",
          heading: "Optimize Your Content",
          description:
            "Leverage AI-driven tools to enhance your content strategy and boost engagement.",
          image: imagePlaceholders[33],
          imageAlt: "Startup solutions",
          url: "#",
        },
      ]}
    />
  );
}
