import { imagePlaceholders } from "@/lib/media";
import { DynamicIcon } from "@opensite/ui";
import { FeatureUtilityCardsGrid } from "@opensite/ui/blocks/features/feature-utility-cards-grid";

export default function Demo() {
  return (
    <FeatureUtilityCardsGrid
      label="Industry Specific Tools"
      labelIconName="lucide/sparkles"
      title="Everything You Need in One Place"
      description="A comprehensive suite of tools designed to simplify your workflow and accelerate development."
      learnMoreAction={{
        label: "All Tools",
        href: "#",
        variant: "link",
        asButton: true,
        iconAfter: <DynamicIcon name="lucide/arrow-up-right" size={20} />,
        className: "flex items-center gap-2 font-bold  uppercase",
      }}
      utilities={[
        {
          title: "Code Generator",
          description:
            "Generate boilerplate code from templates with intelligent variable replacement.",
          image: imagePlaceholders[56],
          imageAlt: "Code generator interface",
        },
        {
          title: "API Explorer",
          description:
            "Interactive API documentation with live testing and code examples in multiple languages.",
          image: imagePlaceholders[77],
          imageAlt: "API explorer interface",
        },
        {
          title: "Database Designer",
          description:
            "Visual schema builder with relationship mapping and automatic migration generation.",
          image: imagePlaceholders[93],
          imageAlt: "Database designer interface",
        },
        {
          title: "Asset Optimizer",
          description:
            "Compress and optimize images, fonts, and assets automatically during build.",
          image: imagePlaceholders[44],
          imageAlt: "Asset optimizer interface",
        },
      ]}
      background="gray"
    />
  );
}
