import { CarouselImageHero } from "@opensite/ui/blocks/carousel/carousel-image-hero";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselImageHero
      badge="New Product Launch"
      heading="Innovation That Changes Everything"
      description="Experience the next generation of technology designed to empower your business and elevate your customer experience to unprecedented heights."
      actions={[
        {
          label: "Start Free Trial",
          href: "#",
          variant: "default",
          size: "lg",
        },
        {
          label: "Watch Demo",
          href: "#",
          variant: "outline",
          size: "lg",
        },
      ]}
      images={[
        {
          src: imagePlaceholders[16],
          alt: "Advanced AI-powered workspace",
        },
        {
          src: imagePlaceholders[44],
          alt: "Collaborative team environment",
        },
        {
          src: imagePlaceholders[63],
          alt: "Real-time data visualization",
        },
        {
          src: imagePlaceholders[87],
          alt: "Seamless integration ecosystem",
        },
      ]}
      autoPlayInterval={5500}
      pattern="diagonalCrossFadeCenter"
      patternOpacity={0.8}
      background="dark"
    />
  );
}
