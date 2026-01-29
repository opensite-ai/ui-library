import { imagePlaceholders } from "@/lib/media";
import { HeroAiPoweredCarousel } from "@opensite/ui/blocks/hero/hero-ai-powered-carousel";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroAiPoweredCarousel
      badge="AI-Powered"
      badgeTagline="Next Generation Technology"
      heading="Intelligent automation for your workflow"
      description="Transform your business with AI-driven solutions that learn, adapt, and optimize automatically. Experience the future of productivity."
      actions={[
        {
          label: "Start Free Trial",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/sparkles" size={16} />,
        },
        {
          label: "Watch Demo",
          href: "/demo",
          variant: "outline",
          icon: <DynamicIcon name="lucide/play-circle" size={16} />,
        },
      ]}
      mobileCarouselImages1={[
        { src: imagePlaceholders[20], alt: "AI Feature 1" },
        { src: imagePlaceholders[21], alt: "AI Feature 2" },
        { src: imagePlaceholders[22], alt: "AI Feature 3" },
      ]}
      mobileCarouselImages2={[
        { src: imagePlaceholders[23], alt: "AI Feature 4" },
        { src: imagePlaceholders[24], alt: "AI Feature 5" },
        { src: imagePlaceholders[25], alt: "AI Feature 6" },
      ]}
      desktopCarouselImages1={[
        { src: imagePlaceholders[20], alt: "AI Feature 1" },
        { src: imagePlaceholders[21], alt: "AI Feature 2" },
        { src: imagePlaceholders[22], alt: "AI Feature 3" },
      ]}
      desktopCarouselImages2={[
        { src: imagePlaceholders[23], alt: "AI Feature 4" },
        { src: imagePlaceholders[24], alt: "AI Feature 5" },
        { src: imagePlaceholders[25], alt: "AI Feature 6" },
      ]}
      spacing="xl"
    />
  );
}
