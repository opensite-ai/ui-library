import { imagePlaceholders } from "@/lib/media";
import { HeroPatternLogoTechStack } from "@opensite/ui/blocks/hero/hero-pattern-logo-tech-stack";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPatternLogoTechStack
      logo={{ src: imagePlaceholders[75], alt: "Company Logo" }}
      heading="Built with the best technologies"
      description="Powered by cutting-edge tools and frameworks that developers love. Fast, reliable, and scalable."
      techLogos={[
        { src: imagePlaceholders[76], alt: "React" },
        { src: imagePlaceholders[77], alt: "TypeScript" },
        { src: imagePlaceholders[81], alt: "Node.js" },
        { src: imagePlaceholders[83], alt: "PostgreSQL" },
        { src: imagePlaceholders[84], alt: "Docker" },
        { src: imagePlaceholders[87], alt: "AWS" },
      ]}
      actions={[
        {
          label: "View Docs",
          href: "/docs",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "GitHub",
          href: "https://github.com",
          variant: "outline",
          icon: <DynamicIcon name="lucide/github" size={16} />,
        },
      ]}
      pattern="grid1"
      spacing="xl"
    />
  );
}
