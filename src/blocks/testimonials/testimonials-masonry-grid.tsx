import { TestimonialsMasonryGrid } from "@opensite/ui/blocks/testimonials/testimonials-masonry-grid";

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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/op92dycs7w856e2jsvx20st0nyz9",
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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/9uxe0jw1zl1tujy0m5yalo7m2ht8",
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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/9797jh6slgbf9oq6lzlimcdiuziv",
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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/9keidwrag6g7jtqr7rdwb1ryt6ht",
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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/x4scuzhsozrwrg703df5wbhygkgo",
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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/t4cidbsfz3z468bn45yqdrkbx7ou",
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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/z37cidvud212bzqhhalrhvk7ipaa",
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
          avatarSrc: "https://cdn.ing/assets/i/r/289100/qx79hnpbzbm229nfaeceafv6b3a8/cooking-citrus-and-pistachio-bundt-cake-on-rusty-t-2024-10-18-04-31-33-utc.webp",
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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/1b0gd8ul22q799d62dvm3sgyll85",
          linkConfig: {
            href: "#",
            label: "Read More",
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
      background="gray"
      pattern="gridFadeTop"
      patternOpacity={0.9}
    />
  );
}
