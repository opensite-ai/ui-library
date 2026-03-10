import { TestimonialsParallaxNumber } from "@opensite/ui/blocks/testimonials/testimonials-parallax-number";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsParallaxNumber
      testimonials={[
        {
          quote:
            "This platform has revolutionized our business operations. The results speak for themselves - increased productivity, reduced costs, and happier team members.",
          author: "Victoria Chen",
          role: "CEO & Founder",
          company: "Innovation Dynamics",
          avatarSrc: imagePlaceholders[33],
          backgroundIcon: "lucide/rocket",
        },
        {
          quote:
            "The level of innovation and attention to detail is unmatched. Every feature works seamlessly, and the performance is exceptional under any workload.",
          author: "Alexander Martinez",
          role: "CTO",
          company: "TechForward",
          avatarSrc: imagePlaceholders[58],
          backgroundIcon: "mdi/graph",
        },
        {
          quote:
            "We've seen a complete transformation in how we serve our customers. Response times are down, satisfaction is up, and our team loves using it daily.",
          author: "Dr. Rachel Foster",
          role: "VP of Operations",
          company: "CustomerFirst Inc",
          avatarSrc: imagePlaceholders[83],
          backgroundIcon: "lucide/thumbs-up",
          backgroundLabel: "Yep",
        },
      ]}
      verticalLabel="Reviews"
      autoPlayInterval={1500000}
      background="dark"
      pattern="gridFadeCenter"
      patternOpacity={0.15}
      spacing="xl"
    />
  );
}
