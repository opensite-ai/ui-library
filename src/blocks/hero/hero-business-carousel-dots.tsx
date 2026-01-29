import { imagePlaceholders } from "@/lib/media";
import { HeroBusinessCarouselDots } from "@opensite/ui/blocks/hero/hero-business-carousel-dots";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroBusinessCarouselDots
      heading="Business solutions that scale with you"
      description="From startups to enterprises, our platform grows alongside your business with powerful tools and seamless integrations."
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Book Demo",
          href: "/demo",
          variant: "outline",
          icon: <DynamicIcon name="lucide/calendar" size={16} />,
        },
      ]}
      carouselImages={[
        { src: imagePlaceholders[52], alt: "Business feature 1" },
        { src: imagePlaceholders[53], alt: "Business feature 2" },
        { src: imagePlaceholders[54], alt: "Business feature 3" },
      ]}
      spacing="xl"
    />
  );
}
