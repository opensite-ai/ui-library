import { imagePlaceholders } from "@/lib/media";
import { FeatureChecklistThreeColumn } from "@opensite/ui/blocks/features/feature-checklist-three-column";

export default function Demo() {
  return (
    <FeatureChecklistThreeColumn
      title="Build Any Kind of Website"
      checklistColumn1={[
        "Fully Responsive Design",
        "Clean & Modern Interface",
        "Lightning Fast Performance",
        "SEO Optimized Structure",
      ]}
      checklistColumn2={[
        "Accessible Components",
        "Dark Mode Support",
        "Cross-Browser Compatible",
        "Mobile-First Approach",
      ]}
      cards={[
        {
          title: "Responsive Components",
          description:
            "Every component is built mobile-first and scales beautifully across all device sizes.",
          image: imagePlaceholders[34],
          imageAlt: "Responsive design showcase",
          badge: "Featured",
          checklistItems: [
            "Adapts to any screen size automatically",
            "Touch-optimized for mobile devices",
            "Consistent experience across platforms",
          ],
          link: "#",
          linkLabel: "Learn more",
        },
        {
          title: "Performance Focused",
          description:
            "Optimized for speed with lazy loading, code splitting, and minimal bundle sizes.",
          image: imagePlaceholders[78],
          imageAlt: "Performance metrics",
          badge: "Popular",
          checklistItems: [
            "Sub-second page load times",
            "Lighthouse score of 95+",
            "Optimized assets and images",
          ],
          link: "#",
          linkLabel: "See benchmarks",
        },
        {
          title: "Developer Experience",
          description:
            "Built with TypeScript, comprehensive docs, and examples that get you started fast.",
          image: imagePlaceholders[91],
          imageAlt: "Developer tools",
          badge: "New",
          checklistItems: [
            "Full TypeScript support",
            "Storybook documentation",
            "Copy-paste code examples",
          ],
          link: "#",
          linkLabel: "Explore docs",
        },
      ]}
      background="white"
      spacing="xl"
    />
  );
}
