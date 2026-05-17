import { TestimonialsCompanyLogo } from "@opensite/ui/blocks/testimonials/testimonials-company-logo";

export default function Demo() {
  return (
    <TestimonialsCompanyLogo
      testimonial={{
        quote:
          "Partnering with this platform has been transformative for our organization. The enterprise features, security protocols, and dedicated support have enabled us to scale operations globally while maintaining the highest standards of data protection and compliance.",
        author: "Dr. Catherine Wells",
        role: "Chief Information Officer",
      }}
      companyLogo={"https://cdn.ing/assets/i/r/288963/4kq4loxmhh5lwc7scw7hhusu87km/ui-placeholder-logo-white-1.png"}
      companyLogoAlt="Enterprise Client Logo"
      imageSrc={"https://toastability-production.s3.amazonaws.com/f921uoblxbv8f9bmr4s2ik7xxugl"}
      imageAlt="Modern office space"
      background="gray"
      pattern="diagonalCrossBasic"
      patternOpacity={1}
    />
  );
}
