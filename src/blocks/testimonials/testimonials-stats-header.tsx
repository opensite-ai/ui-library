import { TestimonialsStatsHeader } from "@opensite/ui/blocks/testimonials/testimonials-stats-header";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsStatsHeader
      heading="Trusted by Industry Leaders"
      description="Join thousands of businesses achieving exceptional results"
      stats={[
        {
          id: "growth",
          value: "312",
          suffix: "%",
          label: "Revenue Growth",
          description: "Average year-over-year lift after launch.",
          icon: "lucide/trending-up",
        },
        {
          id: "velocity",
          value: "4.6",
          suffix: "x",
          label: "Delivery Speed",
          description: "Faster time-to-value compared to baseline.",
          icon: "lucide/rocket",
          iconColor: "text-primary",
        },
        {
          id: "retention",
          prefix: "+",
          value: "29",
          suffix: "%",
          label: "Customer Retention",
          description: "Retention gains within the first 90 days.",
          icon: "lucide/user-check",
          iconColor: "text-primary",
        },
      ]}
      testimonials={[
        {
          quote:
            "The platform has transformed our entire organization. Results exceeded all expectations, and the team support has been phenomenal.",
          author: "Katherine Reynolds",
          role: "CEO",
          company: "Global Enterprises",
          avatarSrc: imagePlaceholders[53],
          linkConfig: {
            href: "https://linkedin.com",
            label: "View Post",
          },
        },
        {
          quote:
            "Implementing this solution was one of the best decisions we've made. Performance, reliability, and innovation in one package.",
          author: "Daniel Kim",
          role: "VP of Operations",
          company: "TechForward Inc",
          avatarSrc: imagePlaceholders[68],
          linkConfig: {
            href: "https://linkedin.com",
            label: "View Post",
          },
        },
        {
          quote:
            "The analytics capabilities have given us insights that drive real business value. We make better decisions faster now.",
          author: "Michelle Torres",
          role: "Chief Data Officer",
          company: "DataDriven Corp",
          avatarSrc: imagePlaceholders[83],
          linkConfig: {
            href: "https://linkedin.com",
            label: "View Post",
          },
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
      background="white"
      pattern="gridBasic"
      patternOpacity={0.9}
    />
  );
}
