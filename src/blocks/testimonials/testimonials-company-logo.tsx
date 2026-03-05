import { TestimonialsCompanyLogo } from "@opensite/ui/blocks/testimonials/testimonials-company-logo";
import { imagePlaceholders, brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsCompanyLogo
      testimonial={{
        quote:
          "Partnering with this platform has been transformative for our organization. The enterprise features, security protocols, and dedicated support have enabled us to scale operations globally while maintaining the highest standards of data protection and compliance.",
        author: "Dr. Catherine Wells",
        role: "Chief Information Officer",
      }}
      companyLogo={brandLogoPlaceholders.white[0]}
      companyLogoAlt="Enterprise Client Logo"
      imageSrc={imagePlaceholders[25]}
      imageAlt="Modern office space"
      background="gray"
      pattern="diagonalCrossBasic"
      patternOpacity={1}
    />
  );
}
