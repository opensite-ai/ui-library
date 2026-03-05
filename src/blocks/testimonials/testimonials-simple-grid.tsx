import { TestimonialsSimpleGrid } from "@opensite/ui/blocks/testimonials/testimonials-simple-grid";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsSimpleGrid
      heading="Customer Stories"
      description="Hear from businesses that have transformed their operations with our platform"
      columns={3}
      testimonials={[
        {
          quote:
            "The platform's intuitive design and powerful features have streamlined our entire workflow. Our team productivity increased by 40% in the first quarter.",
          author: "Jennifer Martinez",
          role: "Director of Operations",
          company: "Streamline Solutions",
          avatarSrc: imagePlaceholders[21],
        },
        {
          quote:
            "Outstanding support and reliable performance. The implementation team guided us every step of the way.",
          author: "Michael Chen",
          role: "CTO",
          company: "TechVision",
          avatarSrc: imagePlaceholders[35],
        },
        {
          quote:
            "We've seen measurable improvements in every key metric. The ROI has exceeded all expectations.",
          author: "Sarah Williams",
          role: "VP of Finance",
          company: "GrowthMetrics",
          avatarSrc: imagePlaceholders[49],
        },
        {
          quote:
            "The analytics capabilities have transformed our decision-making process. Highly recommend to any data-driven organization.",
          author: "David Park",
          role: "Head of Analytics",
          company: "DataFirst",
          avatarSrc: imagePlaceholders[63],
        },
        {
          quote:
            "Security features met our stringent enterprise requirements. The compliance team was thoroughly impressed.",
          author: "Lisa Anderson",
          role: "CISO",
          company: "SecureCorp",
          avatarSrc: imagePlaceholders[77],
        },
        {
          quote:
            "Seamless integration with our existing tech stack. No disruption, maximum value from day one.",
          author: "Robert Zhang",
          role: "Engineering Lead",
          company: "IntegrateTech",
          avatarSrc: imagePlaceholders[91],
        },
      ]}
      background="gray"
      pattern="diagonalCrossFadeTop"
      patternOpacity={0.9}
      spacing="lg"
    />
  );
}
