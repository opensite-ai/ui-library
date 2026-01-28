import { AboutSplitHero } from "@opensite/ui/blocks/about/about-split-hero";

export default function Demo() {
  return (
    <AboutSplitHero
      brandText="Enterprise"
      brandHighlight="PRO"
      heading="Achieve More with Elite Access Pro"
      description="Enhance your business growth with increased visibility, advanced analytics, and priority support that scales with your success."
      ctaAction={{
        label: "Upgrade to Premium",
        href: "/upgrade",
        variant: "default",
        size: "lg",
      }}
      imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=1600&fit=crop"
      imageAlt="Enterprise team collaboration"
      background="dark"
      spacing="none"
    />
  );
}
