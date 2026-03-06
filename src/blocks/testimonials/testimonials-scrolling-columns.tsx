import { TestimonialsScrollingColumns } from "@opensite/ui/blocks/testimonials/testimonials-scrolling-columns";
import { brandLogoPlaceholders, imagePlaceholders } from "@/lib/media";

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
          avatarSrc: imagePlaceholders[19],
          imageSrc: imagePlaceholders[44],
          logoSrc: brandLogoPlaceholders.white[5],
        },
        {
          quote:
            "The customer support team is incredibly responsive and knowledgeable. They truly care about our success.",
          author: "Marcus Chen",
          role: "IT Manager",
          avatarSrc: imagePlaceholders[31],
          logoSrc: brandLogoPlaceholders.white[4],
          imageSrc: imagePlaceholders[31],
        },
        {
          quote:
            "Integration was seamless. We were up and running in days instead of weeks. Impressive!",
          author: "Sarah Thompson",
          role: "CTO",
          avatarSrc: imagePlaceholders[43],
          imageSrc: imagePlaceholders[43],
          logoSrc: brandLogoPlaceholders.white[3],
        },
        {
          quote:
            "The analytics dashboard provides insights that drive real business value. We make better decisions faster now.",
          author: "James Rodriguez",
          role: "Head of Analytics",
          avatarSrc: imagePlaceholders[55],
          imageSrc: imagePlaceholders[55],
          logoSrc: brandLogoPlaceholders.white[2],
        },
        {
          quote:
            "Security features met all our enterprise requirements without compromising usability. Perfect balance.",
          author: "Linda Park",
          role: "CISO",
          avatarSrc: imagePlaceholders[67],
          imageSrc: imagePlaceholders[17],
          logoSrc: brandLogoPlaceholders.white[1],
        },
        {
          quote:
            "Best tool we've implemented in years. The entire team adopted it enthusiastically from day one.",
          author: "David Martinez",
          role: "Team Lead",
          avatarSrc: imagePlaceholders[79],
          imageSrc: imagePlaceholders[19],
          logoSrc: brandLogoPlaceholders.white[0],
        },
      ]}
      background="dark"
      pattern="diagonalCrossBasic"
      patternOpacity={0.1}
      spacing="xl"
    />
  );
}
