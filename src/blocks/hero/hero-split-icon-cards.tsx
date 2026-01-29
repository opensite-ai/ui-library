import { HeroSplitIconCards } from "@opensite/ui/blocks/hero/hero-split-icon-cards";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSplitIconCards
      eyebrow="For Developers"
      heading="Built for teams that ship fast"
      description="Powerful features designed for modern development teams. Ship better products, faster."
      primaryCta={{
        label: "Get Started",
        href: "/signup",
      }}
      secondaryCta={{
        label: "View Demo",
        href: "/demo",
      }}
    />
  );
}
