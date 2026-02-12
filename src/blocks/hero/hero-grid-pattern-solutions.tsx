import { imagePlaceholders } from "@/lib/media";
import { HeroGridPatternSolutions } from "@opensite/ui/blocks/hero/hero-grid-pattern-solutions";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroGridPatternSolutions
      badgeText="New Version Launched"
      badgeHref="#"
      heading="Complete solutions for every challenge"
      description="From startups to enterprises, we provide comprehensive solutions tailored to your unique needs and goals."
      images={[
        { src: imagePlaceholders[10], alt: "For Business" },
        { src: imagePlaceholders[11], alt: "For Developers" },
        { src: imagePlaceholders[12], alt: "For Teams" },
        { src: imagePlaceholders[13], alt: "For Teams" },
      ]}
      actions={[
        {
          label: "Explore Solutions",
          href: "#",
          variant: "outline",
          iconAfter: <DynamicIcon name="lucide/arrow-right" />,
        },
      ]}
      pattern="grid1"
      patternOpacity={0.1}
      background="dark"
    />
  );
}
