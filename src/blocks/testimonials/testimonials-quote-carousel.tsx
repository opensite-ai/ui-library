import { TestimonialsQuoteCarousel } from "@opensite/ui/blocks/testimonials/testimonials-quote-carousel";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsQuoteCarousel
      heading="Customer Reviews"
      description="Join thousands of satisfied customers sharing their experiences"
      testimonials={[
        {
          quote:
            "The platform's capabilities have exceeded every expectation. Our team productivity has soared, and the insights we're gaining are invaluable.",
          author: "Christopher Williams",
          role: "Head of Product",
          company: "InnovateCo",
          avatarSrc: imagePlaceholders[37],
        },
        {
          quote:
            "Implementation was smooth, support was exceptional, and results were immediate. This is how enterprise software should work.",
          author: "Diana Martinez",
          role: "VP of Engineering",
          company: "ScaleUp Systems",
          avatarSrc: imagePlaceholders[62],
        },
        {
          quote:
            "We've tried many solutions over the years. This is the first one that truly delivers on performance, security, and ease of use simultaneously.",
          author: "Benjamin Lee",
          role: "Chief Information Officer",
          company: "Enterprise Solutions",
          avatarSrc: imagePlaceholders[87],
        },
        {
          quote:
            "The ROI became evident within weeks. Our operational costs dropped while service quality improved dramatically. A rare win-win scenario.",
          author: "Amanda Foster",
          role: "CFO",
          company: "GrowthMetrics",
          avatarSrc: imagePlaceholders[104],
        },
      ]}
      background="dark"
      spacing="lg"
    />
  );
}
