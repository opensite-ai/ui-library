import { TestimonialsMiniDividers } from "@opensite/ui/blocks/testimonials/testimonials-mini-dividers";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsMiniDividers
      heading="Customer Feedback"
      description="Quick insights from our satisfied customers"
      testimonials={[
        {
          quote:
            "Exceptional quality and service. Exceeded all my expectations.",
          author: "Alex Thompson",
          role: "Product Manager",
          avatarSrc: imagePlaceholders[30],
          rating: 5,
        },
        {
          quote: "Best purchase I've made this year. Highly recommend!",
          author: "Maria Garcia",
          role: "Design Lead",
          avatarSrc: imagePlaceholders[45],
          rating: 5,
        },
        {
          quote: "The support team went above and beyond to help us succeed.",
          author: "James Lee",
          role: "Engineering Manager",
          avatarSrc: imagePlaceholders[60],
          rating: 5,
        },
        {
          quote:
            "Intuitive interface and powerful features. Perfect combination.",
          author: "Sarah Williams",
          role: "Operations Director",
          avatarSrc: imagePlaceholders[75],
          rating: 4,
        },
        {
          quote:
            "Transformed our workflow completely. Can't imagine working without it.",
          author: "Michael Chen",
          role: "CTO",
          avatarSrc: imagePlaceholders[90],
          rating: 5,
        },
        {
          quote: "Excellent value for money. ROI was evident within weeks.",
          author: "Lisa Anderson",
          role: "CFO",
          avatarSrc: imagePlaceholders[105],
          rating: 5,
        },
      ]}
      background="dark"
      spacing="lg"
    />
  );
}
