import { imagePlaceholders } from "@/lib/media";
import { HeroTestimonialImageGrid } from "@opensite/ui/blocks/hero/hero-testimonial-image-grid";

export default function Demo() {
  return (
    <HeroTestimonialImageGrid
      heading="What our customers are saying"
      description="Don't just take our word for it. Here's what real users have to say about their experience."
      testimonial={{
        quote: "The best platform we've ever used. Truly revolutionary.",
        author: "Alex Thompson",
        role: "CTO",
        company: "TechVentures",
        avatars: [{ image: imagePlaceholders[37], fallback: "AT" }],
      }}
      gridImages={[
        { src: imagePlaceholders[37], alt: "Customer 1" },
        { src: imagePlaceholders[38], alt: "Customer 2" },
        { src: imagePlaceholders[39], alt: "Customer 3" },
        { src: imagePlaceholders[40], alt: "Customer 4" },
      ]}
      actions={[
        {
          label: "Read All Reviews",
          href: "#",
        },
      ]}
      spacing="xl"
    />
  );
}
