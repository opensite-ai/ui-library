import { imagePlaceholders } from "@/lib/media";
import { HeroTestimonialImageGrid } from "@opensite/ui/blocks/hero/hero-testimonial-image-grid";

export default function Demo() {
  return (
    <HeroTestimonialImageGrid
      heading="Loved by customers worldwide"
      description="See why thousands of businesses trust us to power their operations and drive growth."
      testimonial={{
        quote: "This platform transformed how we work. Absolutely game-changing.",
        author: "Sarah Johnson",
        role: "CEO",
        company: "TechCorp",
        avatars: [
          { image: imagePlaceholders[24], fallback: "SJ" },
        ],
      }}
      gridImages={[
        { src: imagePlaceholders[25], alt: "Customer success story 1" },
        { src: imagePlaceholders[26], alt: "Customer success story 2" },
        { src: imagePlaceholders[27], alt: "Customer success story 3" },
        { src: imagePlaceholders[28], alt: "Customer success story 4" },
      ]}
      button={{
        text: "Read More Reviews",
        url: "/reviews",
      }}
      spacing="xl"
    />
  );
}
