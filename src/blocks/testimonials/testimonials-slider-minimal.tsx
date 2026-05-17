import { TestimonialsSliderMinimal } from "@opensite/ui/blocks/testimonials/testimonials-slider-minimal";

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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/0mh8a1dg7ftcqnyzgv303u501c8y",
        },
        {
          quote:
            "The platform's reliability and performance have been flawless. Zero downtime in six months of operation.",
          author: "Michael Bennett",
          role: "VP of Technology",
          company: "ReliableTech",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/9z0sbfnskx70vse99e3dfhper7i1",
        },
        {
          quote:
            "Customer satisfaction scores improved dramatically after implementation. Our clients notice and appreciate the difference.",
          author: "Sophia Rodriguez",
          role: "Director of Customer Success",
          company: "ServicePro Inc",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/ms4s4zyqpmboh0slez1cwat9qhw4",
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
