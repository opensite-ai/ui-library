import { TestimonialsMarquee } from "@opensite/ui/blocks/testimonials/testimonials-marquee";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsMarquee
      heading="Loved by Thousands Worldwide"
      description="Join our community of satisfied customers achieving remarkable results"
      testimonials={[
        {
          quote:
            "The level of support and attention to detail is unmatched. Every feature works flawlessly.",
          author: "Alexandra Foster",
          role: "Product Manager",
          company: "InnovateTech",
          avatarSrc: imagePlaceholders[26],
        },
        {
          quote:
            "We've tried many solutions, but this one actually delivers on its promises. Highly recommended!",
          author: "Carlos Rodriguez",
          role: "Operations Lead",
          company: "Streamline Co",
          avatarSrc: imagePlaceholders[38],
        },
        {
          quote:
            "Implementation was surprisingly smooth. The onboarding process made everything intuitive.",
          author: "Emily Nakamura",
          role: "Team Lead",
          company: "ProductFlow",
          avatarSrc: imagePlaceholders[50],
        },
        {
          quote:
            "Our productivity has doubled since adoption. The ROI speaks for itself.",
          author: "Michael Bennett",
          role: "Director of Operations",
          company: "EfficiencyCo",
          avatarSrc: imagePlaceholders[62],
        },
        {
          quote:
            "The platform scales beautifully with our growth. No performance degradation whatsoever.",
          author: "Priya Sharma",
          role: "Engineering Manager",
          company: "ScaleUp Systems",
          avatarSrc: imagePlaceholders[74],
        },
        {
          quote:
            "Customer success team goes above and beyond. They truly care about our outcomes.",
          author: "Thomas Wright",
          role: "VP Customer Success",
          company: "GrowthMetrics",
          avatarSrc: imagePlaceholders[86],
        },
        {
          quote:
            "The analytics dashboard provides insights we never knew we needed. Game changing.",
          author: "Jennifer Kim",
          role: "Data Analyst",
          company: "InsightLabs",
          avatarSrc: imagePlaceholders[98],
        },
        {
          quote:
            "Security audit passed with flying colors. Enterprise-grade protection that actually works.",
          author: "David Martinez",
          role: "Security Officer",
          company: "SecureFirst",
          avatarSrc: imagePlaceholders[110],
        },
      ]}
      speed="normal"
      pauseOnHover
      background="dark"
      spacing="xl"
      pattern="dashedGridFadeTop"
      patternOpacity={0.15}
    />
  );
}
