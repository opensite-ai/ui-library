import { TestimonialsSliderMinimal } from "@opensite/ui/blocks/testimonials/testimonials-slider-minimal";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsSliderMinimal
      testimonials={[
        {
          quote:
            "A transformative solution that has fundamentally changed how we operate. The impact on our bottom line has been remarkable.",
          author: "Dr. Elizabeth Foster",
          role: "Chief Executive Officer",
          company: "Innovation Group",
          avatarSrc: imagePlaceholders[41],
        },
        {
          quote:
            "The platform's reliability and performance have been flawless. Zero downtime in six months of operation.",
          author: "Michael Bennett",
          role: "VP of Technology",
          company: "ReliableTech",
          avatarSrc: imagePlaceholders[59],
        },
        {
          quote:
            "Customer satisfaction scores improved dramatically after implementation. Our clients notice and appreciate the difference.",
          author: "Sophia Rodriguez",
          role: "Director of Customer Success",
          company: "ServicePro Inc",
          avatarSrc: imagePlaceholders[77],
        },
      ]}
      autoPlayInterval={46000}
      background="dark"
      pattern="squareAltGrid"
      patternOpacity={0.5}
      spacing="lg"
    />
  );
}
