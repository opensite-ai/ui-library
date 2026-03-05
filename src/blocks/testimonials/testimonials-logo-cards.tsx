import { TestimonialsLogoCards } from "@opensite/ui/blocks/testimonials/testimonials-logo-cards";
import { imagePlaceholders, brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsLogoCards
      heading="Trusted by Industry Leaders"
      description="See how top companies are transforming their operations with our platform"
      testimonials={[
        {
          quote:
            "The platform has completely revolutionized our operational efficiency. We've seen measurable improvements across every metric that matters. The implementation team was exceptional, and the ongoing support has been world-class.",
          author: "Rebecca Thompson",
          role: "Chief Technology Officer",
          avatarSrc: imagePlaceholders[29],
          companyLogo: brandLogoPlaceholders.black[0],
          companyLogoAlt: "TechCorp International",
        },
        {
          quote:
            "Outstanding reliability and performance. Our team adopted it instantly.",
          author: "Marcus Lee",
          role: "VP of Engineering",
          avatarSrc: imagePlaceholders[43],
          companyLogo: brandLogoPlaceholders.black[1],
          companyLogoAlt: "CloudScale Solutions",
        },
        {
          quote:
            "Best investment we've made. ROI exceeded projections within three months.",
          author: "Sarah Martinez",
          role: "CFO",
          avatarSrc: imagePlaceholders[57],
          companyLogo: brandLogoPlaceholders.black[2],
          companyLogoAlt: "Finance Dynamics",
        },
        {
          quote:
            "The analytics capabilities transformed our decision-making process entirely.",
          author: "James Wilson",
          role: "Data Director",
          avatarSrc: imagePlaceholders[71],
          companyLogo: brandLogoPlaceholders.black[3],
          companyLogoAlt: "DataFirst Inc",
        },
        {
          quote:
            "Security features met our enterprise requirements without compromising usability.",
          author: "Linda Chen",
          role: "CISO",
          avatarSrc: imagePlaceholders[85],
          companyLogo: brandLogoPlaceholders.black[4],
          companyLogoAlt: "SecureNet Corp",
        },
      ]}
      background="muted"
      pattern="circles"
      spacing="lg"
    />
  );
}
