import { TestimonialsWallCompact } from "@opensite/ui/blocks/testimonials/testimonials-wall-compact";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsWallCompact
      heading="Wall of Love"
      description="Thousands of users sharing their success stories"
      testimonials={[
        {
          quote: "Amazing product! Changed our entire workflow.",
          author: "Alex Thompson",
          handle: "@alexthompson",
          avatarSrc: imagePlaceholders[20],
          badge: "Featured",
        },
        {
          quote: "Best investment we made this quarter.",
          author: "Maria Garcia",
          handle: "@mariagarcia",
          avatarSrc: imagePlaceholders[28],
        },
        {
          quote: "Incredible support team. Always helpful!",
          author: "James Lee",
          handle: "@jameslee",
          avatarSrc: imagePlaceholders[36],
          badge: "Verified",
        },
        {
          quote: "Exactly what we needed. Perfect solution!",
          author: "Sarah Johnson",
          handle: "@sarahj",
          avatarSrc: imagePlaceholders[44],
        },
        {
          quote: "Five stars! Highly recommend to everyone.",
          author: "Michael Chen",
          handle: "@mchen",
          avatarSrc: imagePlaceholders[52],
        },
        {
          quote: "Transformed our business operations completely.",
          author: "Lisa Martinez",
          handle: "@lisamartinez",
          avatarSrc: imagePlaceholders[60],
          badge: "Featured",
        },
        {
          quote: "Intuitive design. Easy to learn and use.",
          author: "David Park",
          handle: "@davidpark",
          avatarSrc: imagePlaceholders[68],
        },
        {
          quote: "ROI was immediate. Worth every penny!",
          author: "Jennifer Williams",
          handle: "@jwilliams",
          avatarSrc: imagePlaceholders[76],
        },
        {
          quote: "Great features. Everything works flawlessly.",
          author: "Robert Zhang",
          handle: "@robertzhang",
          avatarSrc: imagePlaceholders[84],
          badge: "Verified",
        },
        {
          quote: "Excellent value. Can't imagine working without it.",
          author: "Emily Foster",
          handle: "@emilyfoster",
          avatarSrc: imagePlaceholders[92],
        },
        {
          quote: "Outstanding performance and reliability.",
          author: "Thomas Anderson",
          handle: "@tanderson",
          avatarSrc: imagePlaceholders[100],
        },
        {
          quote: "Game changer for productivity. Highly effective!",
          author: "Michelle Rodriguez",
          handle: "@mrodriguez",
          avatarSrc: imagePlaceholders[108],
          badge: "Featured",
        },
      ]}
      background="white"
      spacing="lg"
    />
  );
}
