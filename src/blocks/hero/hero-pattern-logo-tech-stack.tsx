import {
  brandLogoPlaceholders,
  imagePlaceholders,
  logoPlaceholders,
} from "@/lib/media";
import { HeroPatternLogoTechStack } from "@opensite/ui/blocks/hero/hero-pattern-logo-tech-stack";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPatternLogoTechStack
      logo={{ src: logoPlaceholders.darkHorizontalLogo, alt: "Company Logo" }}
      heading="Built with the best technologies"
      description="Powered by cutting-edge tools and frameworks that developers love. Fast, reliable, and scalable."
      techLogos={[
        { src: brandLogoPlaceholders.black[0], alt: "React" },
        { src: brandLogoPlaceholders.black[1], alt: "TypeScript" },
        { src: brandLogoPlaceholders.black[2], alt: "Node.js" },
        { src: brandLogoPlaceholders.black[3], alt: "PostgreSQL" },
        { src: brandLogoPlaceholders.black[4], alt: "Docker" },
        { src: brandLogoPlaceholders.black[5], alt: "AWS" },
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
      background="white"
      patternOpacity={0.9}
    />
  );
}
