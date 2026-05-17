import { TestimonialsMarquee } from "@opensite/ui/blocks/testimonials/testimonials-marquee";

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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/gl7n7p6atndufbsm6q2ac5jeqttp",
        },
        {
          quote:
            "We've tried many solutions, but this one actually delivers on its promises. Highly recommended!",
          author: "Carlos Rodriguez",
          role: "Operations Lead",
          company: "Streamline Co",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/6ntdz6xwid3fswjz8y0otdxmzs40",
        },
        {
          quote:
            "Implementation was surprisingly smooth. The onboarding process made everything intuitive.",
          author: "Emily Nakamura",
          role: "Team Lead",
          company: "ProductFlow",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/0o6d7z4mm9nzeufhv9kefrhihbip",
        },
        {
          quote:
            "Our productivity has doubled since adoption. The ROI speaks for itself.",
          author: "Michael Bennett",
          role: "Director of Operations",
          company: "EfficiencyCo",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/0x7ktdk01jfaoysst0emzvqevu19",
        },
        {
          quote:
            "The platform scales beautifully with our growth. No performance degradation whatsoever.",
          author: "Priya Sharma",
          role: "Engineering Manager",
          company: "ScaleUp Systems",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/rddfyzvfpdlbzwhgep2myppwxn05",
        },
        {
          quote:
            "Customer success team goes above and beyond. They truly care about our outcomes.",
          author: "Thomas Wright",
          role: "VP Customer Success",
          company: "GrowthMetrics",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/9ujya2tfhxja7y5s9wb7d2u8crhd",
        },
        {
          quote:
            "The analytics dashboard provides insights we never knew we needed. Game changing.",
          author: "Jennifer Kim",
          role: "Data Analyst",
          company: "InsightLabs",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/fokd3hxzvdtsomagbfhqooyvndyv",
        },
        {
          quote:
            "Security audit passed with flying colors. Enterprise-grade protection that actually works.",
          author: "David Martinez",
          role: "Security Officer",
          company: "SecureFirst",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/4xjcgtlwseruezhoh3o1ga4umhj4",
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
