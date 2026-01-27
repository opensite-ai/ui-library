import { AboutSplitHero } from "@opensite/ui/blocks/about/about-split-hero";

export default function Demo() {
  return (
    <AboutSplitHero
      brandText="Enterprise"
      brandHighlight="PRO"
      heading="Unlock Your Full Potential"
      description="Get access to advanced features, priority support, and exclusive resources designed for teams that demand the best."
      ctaAction={{
        label: "Upgrade to Pro",
        href: "/upgrade",
        variant: "default",
        size: "lg",
      }}
      imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1000&fit=crop"
      imageAlt="Professional team working"
    />
  );
}
