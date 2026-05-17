import { HeroImageLeftContent } from "@opensite/ui/blocks/hero/hero-image-left-content";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroImageLeftContent
      imageSrc={"https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp"}
      imageAlt="Product showcase"
      heading="Beautiful design meets powerful functionality"
      description="Create stunning experiences with our intuitive platform. Designed for professionals, built for everyone."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Demo",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/play-circle" size={16} />,
        },
      ]}
      background="gray"
      pattern="gridBasic"
      patternOpacity={0.9}
    />
  );
}
