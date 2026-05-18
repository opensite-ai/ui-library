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
        avatars: [{ image: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz", fallback: "AT" }],
      }}
      gridImages={[
        { src: "https://toastability-production.s3.amazonaws.com/vh1aowwr93yz4qrzct2s4je0cxdo", alt: "Customer 1" },
        { src: "https://toastability-production.s3.amazonaws.com/ssgb7unxdwdqokfvhkp7cok2v79s", alt: "Customer 2" },
        { src: "https://toastability-production.s3.amazonaws.com/vvkma6b8whdkiq5nq8z4eyfe00vo", alt: "Customer 3" },
        { src: "https://toastability-production.s3.amazonaws.com/9797jh6slgbf9oq6lzlimcdiuziv", alt: "Customer 4" },
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
