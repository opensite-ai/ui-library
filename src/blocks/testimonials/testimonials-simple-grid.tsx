import { TestimonialsSimpleGrid } from "@opensite/ui/blocks/testimonials/testimonials-simple-grid";

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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/qghzqu1i99vaubyew9s5dxcbel9l",
        },
        {
          quote:
            "Outstanding support and reliable performance. The implementation team guided us every step of the way.",
          author: "Michael Chen",
          role: "CTO",
          company: "TechVision",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/50y066ms7rb5sw62u9u08jzkk8rj",
        },
        {
          quote:
            "We've seen measurable improvements in every key metric. The ROI has exceeded all expectations.",
          author: "Sarah Williams",
          role: "VP of Finance",
          company: "GrowthMetrics",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/betxbx61fkijt0aygineplf489ze",
        },
        {
          quote:
            "The analytics capabilities have transformed our decision-making process. Highly recommend to any data-driven organization.",
          author: "David Park",
          role: "Head of Analytics",
          company: "DataFirst",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/e83zsyvl0an0owzdmpwjnnty641x",
        },
        {
          quote:
            "Security features met our stringent enterprise requirements. The compliance team was thoroughly impressed.",
          author: "Lisa Anderson",
          role: "CISO",
          company: "SecureCorp",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/ms4s4zyqpmboh0slez1cwat9qhw4",
        },
        {
          quote:
            "Seamless integration with our existing tech stack. No disruption, maximum value from day one.",
          author: "Robert Zhang",
          role: "Engineering Lead",
          company: "IntegrateTech",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/97gctpna2hdozl1f8u5xq4ew8h0o",
        },
      ]}
      actions={[
        {
          label: "Read All Reviews",
          href: "#",
          variant: "default",
          size: "lg",
        },
      ]}
      background="gray"
      pattern="diagonalCrossFadeTop"
      patternOpacity={0.9}
      spacing="lg"
    />
  );
}
