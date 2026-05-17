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
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Book Demo",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/calendar" size={16} />,
        },
      ]}
      carouselImages={[
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Business feature 1" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Business feature 2" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Business feature 3" },
      ]}
      background="gray"
    />
  );
}
