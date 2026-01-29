import { FeaturePatternGridLinks } from "@opensite/ui/blocks/features/feature-pattern-grid-links";

export default function Demo() {
  return (
    <FeaturePatternGridLinks
      features={[
        {
          iconName: "lucide/code-2",
          title: "Component Library",
          description:
            "200+ production-ready components with full TypeScript support and documentation.",
          link: "/components",
          linkLabel: "Browse Components",
        },
        {
          iconName: "lucide/palette",
          title: "Design System",
          description:
            "Comprehensive design tokens, patterns, and guidelines for consistent UX.",
          link: "/design-system",
          linkLabel: "View Design System",
        },
        {
          iconName: "lucide/book-open",
          title: "Documentation",
          description:
            "In-depth guides, tutorials, and API references to help you get started.",
          link: "/docs",
          linkLabel: "Read the Docs",
        },
        {
          iconName: "lucide/users",
          title: "Community",
          description:
            "Join thousands of developers building amazing products with our platform.",
          link: "/community",
          linkLabel: "Join Community",
        },
      ]}
      spacing="xl"
      pattern="dots"
    />
  );
}
