import { TestimonialsCarouselImage } from "@opensite/ui/blocks/testimonials/testimonials-carousel-image";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsCarouselImage
      testimonials={[
        {
          quote:
            "This solution has completely transformed how our team collaborates. The seamless integration with our existing tools made adoption effortless.",
          author: "Jennifer Martinez",
          role: "VP of Product",
          company: "CloudScale",
          backgroundImage: imagePlaceholders[12],
        },
        {
          quote:
            "We've seen a 200% increase in team productivity since implementing this platform. The ROI speaks for itself.",
          author: "Robert Chen",
          role: "Chief Technology Officer",
          company: "NextGen Solutions",
          backgroundImage: imagePlaceholders[34],
        },
        {
          quote:
            "The customer support is exceptional. Every question is answered promptly, and the team genuinely cares about our success.",
          author: "Amanda Foster",
          role: "Director of Operations",
          company: "Enterprise Dynamics",
          backgroundImage: imagePlaceholders[56],
        },
        {
          quote:
            "Security and compliance were our top concerns. This platform exceeded all expectations and passed our rigorous audits with flying colors.",
          author: "Daniel Kim",
          role: "Information Security Officer",
          company: "SecureData Corp",
          backgroundImage: imagePlaceholders[78],
        },
      ]}
      height="h-[500px] md:h-[600px] lg:h-[700px]"
      overlayOpacity={0.6}
      background="dark"
    />
  );
}
