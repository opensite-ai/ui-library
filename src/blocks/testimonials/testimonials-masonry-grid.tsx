import { TestimonialsMasonryGrid } from "@opensite/ui/blocks/testimonials/testimonials-masonry-grid";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsMasonryGrid
      heading="Community Testimonials"
      description="Real feedback from real users making an impact"
      testimonials={[
        {
          quote:
            "This has completely transformed how we approach our daily workflows. The efficiency gains are remarkable.",
          author: "Rachel Anderson",
          role: "Operations Manager",
          avatarSrc: imagePlaceholders[24],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
        {
          quote:
            "Best tool we've implemented this year. The team loves it, and the results are undeniable. Five stars across the board!",
          author: "Marcus Johnson",
          role: "Team Lead",
          avatarSrc: imagePlaceholders[36],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
        {
          quote:
            "Simple yet powerful. Exactly what we needed without unnecessary complexity.",
          author: "Lisa Chen",
          role: "Product Designer",
          avatarSrc: imagePlaceholders[48],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
        {
          quote:
            "The customer support is phenomenal. Every question answered promptly and thoroughly. They genuinely care about our success.",
          author: "David Park",
          role: "CTO",
          avatarSrc: imagePlaceholders[60],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
        {
          quote:
            "We've seen a 300% improvement in key metrics. The analytics alone are worth the investment.",
          author: "Sarah Williams",
          role: "Analytics Lead",
          avatarSrc: imagePlaceholders[72],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
        {
          quote:
            "Integration with our existing tools was seamless. No disruption to ongoing projects.",
          author: "Kevin Torres",
          role: "IT Director",
          avatarSrc: imagePlaceholders[84],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
        {
          quote:
            "The mobile experience matches desktop functionality perfectly. Our field team can work from anywhere without limitations.",
          author: "Amanda Foster",
          role: "Field Operations",
          avatarSrc: imagePlaceholders[96],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
        {
          quote:
            "Security features exceeded our enterprise requirements. Passed all audits effortlessly.",
          author: "Robert Zhang",
          role: "Security Architect",
          avatarSrc: imagePlaceholders[108],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
        {
          quote:
            "Worth every penny. The ROI became evident within weeks of implementation.",
          author: "Michelle Rodriguez",
          role: "CFO",
          avatarSrc: imagePlaceholders[32],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
      ]}
      background="gray"
      pattern="gridFadeTop"
      patternOpacity={0.9}
    />
  );
}
