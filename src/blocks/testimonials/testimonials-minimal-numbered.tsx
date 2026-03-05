import { TestimonialsMinimalNumbered } from "@opensite/ui/blocks/testimonials/testimonials-minimal-numbered";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsMinimalNumbered
      testimonials={[
        {
          quote:
            "The platform has completely transformed how we approach our business operations. Every feature is thoughtfully designed and the performance is exceptional.",
          author: "Dr. Catherine Foster",
          role: "CEO",
          company: "Innovation Labs",
          avatarSrc: imagePlaceholders[34],
        },
        {
          quote:
            "We've tried many solutions over the years, but this is the only one that truly delivered on its promises. The team's dedication to excellence shows in every detail.",
          author: "Marcus Rodriguez",
          role: "VP of Engineering",
          company: "TechScale",
          avatarSrc: imagePlaceholders[52],
        },
        {
          quote:
            "What impressed us most was the seamless integration with our existing systems. No disruption, just immediate value from day one.",
          author: "Jennifer Kim",
          role: "IT Director",
          company: "Enterprise Solutions",
          avatarSrc: imagePlaceholders[70],
        },
        {
          quote:
            "The analytics capabilities alone have transformed our decision-making process. We now have insights we never knew were possible.",
          author: "Robert Zhang",
          role: "Head of Data",
          company: "DataFirst Corp",
          avatarSrc: imagePlaceholders[88],
        },
      ]}
      autoPlayInterval={10000}
      background="muted"
      spacing="xl"
      pattern="architect"
      patternOpacity={0.1}
    />
  );
}
