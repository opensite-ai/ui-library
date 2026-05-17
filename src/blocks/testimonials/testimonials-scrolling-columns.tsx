import { TestimonialsScrollingColumns } from "@opensite/ui/blocks/testimonials/testimonials-scrolling-columns";

export default function Demo() {
  return (
    <TestimonialsScrollingColumns
      heading="What Our Customers Are Saying"
      description="Real stories from businesses transforming their operations"
      testimonials={[
        {
          quote:
            "Exceptional platform with outstanding results. Our team's efficiency increased by 45% in the first quarter alone.",
          author: "Nicole Anderson",
          role: "Operations Director",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/c4sgsy0g7o2rrjmvm9x7evxems82",
          imageSrc: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz",
          logoSrc: "https://cdn.ing/assets/i/r/288973/lxkmf98s3bmpytziacx1o0rwuun9/ui-placeholder-logo-white-6.png",
          linkConfig: {
            href: "#",
            label: "Full Review",
          },
        },
        {
          quote:
            "The customer support team is incredibly responsive and knowledgeable. They truly care about our success.",
          author: "Marcus Chen",
          role: "IT Manager",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/s4vho0wfbjhf758oife8qfuekou8",
          logoSrc: "https://cdn.ing/assets/i/r/288967/cn6z89c4c23ubohkz6kv3npdn672/ui-placeholder-logo-white-5.png",
          imageSrc: "https://toastability-production.s3.amazonaws.com/s4vho0wfbjhf758oife8qfuekou8",
          linkConfig: {
            href: "#",
            label: "Full Review",
          },
        },
        {
          quote:
            "Integration was seamless. We were up and running in days instead of weeks. Impressive!",
          author: "Sarah Thompson",
          role: "CTO",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k",
          imageSrc: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k",
          logoSrc: "https://cdn.ing/assets/i/r/288969/h9k3b0ett73u3pouc2w15ibvl7tc/ui-placeholder-logo-white-4.png",
          linkConfig: {
            href: "#",
            label: "Full Review",
          },
        },
        {
          quote:
            "The analytics dashboard provides insights that drive real business value. We make better decisions faster now.",
          author: "James Rodriguez",
          role: "Head of Analytics",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/2t36c7l0ywchaz4nys8yj2l5amae",
          imageSrc: "https://toastability-production.s3.amazonaws.com/2t36c7l0ywchaz4nys8yj2l5amae",
          logoSrc: "https://cdn.ing/assets/i/r/288971/sow5o2s8dp1cr159rxexm0yhov5w/ui-placeholder-logo-white-3.png",
          linkConfig: {
            href: "#",
            label: "Full Review",
          },
        },
        {
          quote:
            "Security features met all our enterprise requirements without compromising usability. Perfect balance.",
          author: "Linda Park",
          role: "CISO",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/vrezhtksoqbw1nyo4hwnoqizrus5",
          imageSrc: "https://toastability-production.s3.amazonaws.com/ihgx63s5nfzp2e93e3ccljjnnrov",
          logoSrc: "https://cdn.ing/assets/i/r/288966/0ls9to9jqnrc4gcxty9rx2c4udjv/ui-placeholder-logo-white-2.png",
          linkConfig: {
            href: "#",
            label: "Full Review",
          },
        },
        {
          quote:
            "Best tool we've implemented in years. The entire team adopted it enthusiastically from day one.",
          author: "David Martinez",
          role: "Team Lead",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/0g6t701zqr2r7najmdgftpeqnxmz",
          imageSrc: "https://toastability-production.s3.amazonaws.com/c4sgsy0g7o2rrjmvm9x7evxems82",
          logoSrc: "https://cdn.ing/assets/i/r/288963/4kq4loxmhh5lwc7scw7hhusu87km/ui-placeholder-logo-white-1.png",
          linkConfig: {
            href: "#",
            label: "Full Review",
          },
        },
      ]}
      background="dark"
      pattern="diagonalCrossBasic"
      patternOpacity={0.1}
      spacing="xl"
    />
  );
}
