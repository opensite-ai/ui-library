import { AboutSplitHero } from "@opensite/ui/blocks/about/about-split-hero";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <AboutSplitHero
      brandText="Enterprise"
      brandHighlight="PRO"
      heading="Achieve More with Elite Access Pro"
      description="Enhance your business growth with increased visibility, advanced analytics, and priority support that scales with your success."
      ctaAction={{
        label: "Upgrade to Premium",
        href: "#",
        variant: "default",
        size: "lg",
      }}
      imageSrc={imagePlaceholders[85]}
      imageAlt="Enterprise team collaboration"
      background="dark"
      pattern="gridDotsBasic"
      patternOpacity={0.15}
      directionConfig={{
        desktop: "mediaRight",
        mobile: "mediaTop",
      }}
    />
  );
}
