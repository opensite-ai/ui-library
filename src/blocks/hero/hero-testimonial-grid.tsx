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
        avatars: [{ image: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", fallback: "AT" }],
      }}
      gridImages={[
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Customer 1" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Customer 2" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Customer 3" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Customer 4" },
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
