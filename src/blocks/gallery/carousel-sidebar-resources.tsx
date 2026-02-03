import { CarouselSidebarResources } from "@opensite/ui/blocks/gallery/carousel-sidebar-resources";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselSidebarResources
      heading="Learning Resources"
      resources={[
        {
          title: "Getting Started with AI Integration",
          category: "Tutorial",
          link: "/resources/ai-integration-guide",
          image: imagePlaceholders[90],
          imageAlt: "AI integration tutorial",
        },
        {
          title: "Building Scalable APIs",
          category: "Guide",
          link: "/resources/scalable-apis",
          image: imagePlaceholders[91],
          imageAlt: "API development guide",
        },
        {
          title: "Security Best Practices 2025",
          category: "Whitepaper",
          link: "/resources/security-practices",
          image: imagePlaceholders[92],
          imageAlt: "Security whitepaper",
        },
        {
          title: "Cloud Migration Strategy",
          category: "Case Study",
          link: "/resources/cloud-migration",
          image: imagePlaceholders[93],
          imageAlt: "Cloud migration case study",
        },
        {
          title: "DevOps Implementation Roadmap",
          category: "Guide",
          link: "/resources/devops-roadmap",
          image: imagePlaceholders[94],
          imageAlt: "DevOps guide",
        },
        {
          title: "Data Privacy Compliance",
          category: "Whitepaper",
          link: "/resources/data-privacy",
          image: imagePlaceholders[95],
          imageAlt: "Data privacy whitepaper",
        },
      ]}
      viewAllText="View all resources"
      viewAllHref="/resources"
      background="white"
      spacing="section"
    />
  );
}
