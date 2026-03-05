import { TestimonialsAnimatedSplit } from "@opensite/ui/blocks/testimonials/testimonials-animated-split";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsAnimatedSplit
      testimonials={[
        {
          quote:
            "Implementing this platform has revolutionized how we handle client communications. The response time improvement alone has justified the investment tenfold.",
          author: "Sarah Chen",
          role: "VP of Operations",
          company: "TechFlow Solutions",
          avatarSrc: imagePlaceholders[42],
          image: imagePlaceholders[15],
        },
        {
          quote:
            "Our team productivity increased by 40% in the first quarter. The intuitive interface and powerful features make complex workflows feel effortless.",
          author: "Marcus Johnson",
          role: "Director of Engineering",
          company: "Innovate Labs",
          avatarSrc: imagePlaceholders[51],
          image: imagePlaceholders[28],
        },
        {
          quote:
            "The analytics dashboard gives us insights we never had before. Data-driven decision making has become our competitive advantage.",
          author: "Emily Rodriguez",
          role: "Chief Strategy Officer",
          company: "DataVision Inc",
          avatarSrc: imagePlaceholders[67],
          image: imagePlaceholders[39],
        },
        {
          quote:
            "Customer satisfaction scores jumped from 3.8 to 4.7 stars within months. The automation features free up our team to focus on what truly matters.",
          author: "David Park",
          role: "Head of Customer Success",
          company: "ServicePro",
          avatarSrc: imagePlaceholders[88],
          image: imagePlaceholders[54],
        },
      ]}
      // autoPlayInterval={7000}
      background="dark"
      spacing="xl"
      pattern="diagonalCrossFadeTopRight"
      patternOpacity={0.15}
    />
  );
}
