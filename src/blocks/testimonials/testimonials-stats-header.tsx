import { TestimonialsStatsHeader } from "@opensite/ui/blocks/testimonials/testimonials-stats-header";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsStatsHeader
      heading="Trusted by Industry Leaders"
      description="Join thousands of businesses achieving exceptional results"
      stats={[
        { label: "Active Users", value: "50,000+" },
        {
          label: "Customer Satisfaction",
          value: "4.9/5.0",
        },
        { label: "Countries Worldwide", value: "120+" },
        { label: "Uptime Guarantee", value: "99.99%" },
      ]}
      testimonials={[
        {
          quote:
            "The platform has transformed our entire organization. Results exceeded all expectations, and the team support has been phenomenal.",
          author: "Katherine Reynolds",
          role: "CEO",
          company: "Global Enterprises",
          avatarSrc: imagePlaceholders[53],
        },
        {
          quote:
            "Implementing this solution was one of the best decisions we've made. Performance, reliability, and innovation in one package.",
          author: "Daniel Kim",
          role: "VP of Operations",
          company: "TechForward Inc",
          avatarSrc: imagePlaceholders[68],
        },
        {
          quote:
            "The analytics capabilities have given us insights that drive real business value. We make better decisions faster now.",
          author: "Michelle Torres",
          role: "Chief Data Officer",
          company: "DataDriven Corp",
          avatarSrc: imagePlaceholders[83],
        },
      ]}
      background="white"
      pattern="gridBasic"
      patternOpacity={0.9}
    />
  );
}
