import { imagePlaceholders } from "@/lib/media";
import { HeroPortfolioCreative } from "@opensite/ui/blocks/hero/hero-portfolio-creative";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPortfolioCreative
      heading="Creative work that stands out"
      description="Award-winning portfolio showcasing our best projects in design, branding, and digital experiences."
      portfolioImages={[
        { src: imagePlaceholders[92], alt: "Brand Identity Project" },
        { src: imagePlaceholders[98], alt: "Web Design Project" },
        { src: imagePlaceholders[99], alt: "Mobile App Project" },
      ]}
      actions={[
        {
          label: "View All Work",
          href: "/portfolio",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      spacing="xl"
    />
  );
}
