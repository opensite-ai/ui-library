import { imagePlaceholders } from "@/lib/media";
import { FeatureCategoryImageCards } from "@opensite/ui/blocks/features/feature-category-image-cards";

export default function Demo() {
  return (
    <FeatureCategoryImageCards
      badge="Product Categories"
      title="Explore Our Platform"
      description="Discover the tools and features designed to help you build, ship, and scale your applications."
      features={[
        {
          title: "Authentication & Security",
          category: "Core Infrastructure",
          imageSrc: imagePlaceholders[48],
          imageAlt: "Authentication features",
        },
        {
          title: "Real-Time Collaboration",
          category: "Team Features",
          imageSrc: imagePlaceholders[63],
          imageAlt: "Collaboration tools",
        },
        {
          title: "Data Analytics",
          category: "Insights & Reporting",
          imageSrc: imagePlaceholders[85],
          imageAlt: "Analytics dashboard",
        },
        {
          title: "API Management",
          category: "Developer Tools",
          imageSrc: imagePlaceholders[104],
          imageAlt: "API management",
        },
      ]}
      background="dark"
      spacing="xl"
    />
  );
}
