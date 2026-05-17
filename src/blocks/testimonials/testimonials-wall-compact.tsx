import { TestimonialsWallCompact } from "@opensite/ui/blocks/testimonials/testimonials-wall-compact";

export default function Demo() {
  return (
    <TestimonialsWallCompact
      heading="Wall of Love"
      description="Thousands of users sharing their success stories"
      testimonials={[
        {
          quote: "Amazing product! Changed our entire workflow.",
          author: "Alex Thompson",
          handle: "@alexthompson",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/a3m42usevv0iet0fpfwa1fsytxmv",
          badge: "Featured",
        },
        {
          quote: "Best investment we made this quarter.",
          author: "Maria Garcia",
          handle: "@mariagarcia",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/hu4gmd93sp95wdyr9qijze0rgim9",
        },
        {
          quote: "Incredible support team. Always helpful!",
          author: "James Lee",
          handle: "@jameslee",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/9uxe0jw1zl1tujy0m5yalo7m2ht8",
          badge: "Verified",
        },
        {
          quote: "Exactly what we needed. Perfect solution!",
          author: "Sarah Johnson",
          handle: "@sarahj",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz",
        },
        {
          quote: "Five stars! Highly recommend to everyone.",
          author: "Michael Chen",
          handle: "@mchen",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c",
        },
        {
          quote: "Transformed our business operations completely.",
          author: "Lisa Martinez",
          handle: "@lisamartinez",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/9keidwrag6g7jtqr7rdwb1ryt6ht",
          badge: "Featured",
        },
        {
          quote: "Intuitive design. Easy to learn and use.",
          author: "David Park",
          handle: "@davidpark",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/8qkikcd43paeqgvw9gc1032j3yup",
        },
        {
          quote: "ROI was immediate. Worth every penny!",
          author: "Jennifer Williams",
          handle: "@jwilliams",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/3vwfdbekbkskxj2mvlvu85fz787u",
        },
        {
          quote: "Great features. Everything works flawlessly.",
          author: "Robert Zhang",
          handle: "@robertzhang",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/t4cidbsfz3z468bn45yqdrkbx7ou",
          badge: "Verified",
        },
        {
          quote: "Excellent value. Can't imagine working without it.",
          author: "Emily Foster",
          handle: "@emilyfoster",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/xjtepune0scj9yjkkqgaiwlq9hls",
        },
        {
          quote: "Outstanding performance and reliability.",
          author: "Thomas Anderson",
          handle: "@tanderson",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/mt87xjr79wxdhjy7496v3r6m2m9t",
        },
        {
          quote: "Game changer for productivity. Highly effective!",
          author: "Michelle Rodriguez",
          handle: "@mrodriguez",
          avatarSrc: "https://cdn.ing/assets/i/r/289100/qx79hnpbzbm229nfaeceafv6b3a8/cooking-citrus-and-pistachio-bundt-cake-on-rusty-t-2024-10-18-04-31-33-utc.webp",
          badge: "Featured",
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
      background="dark"
      pattern="diagonalCrossFadeTop"
      patternOpacity={0.15}
    />
  );
}
