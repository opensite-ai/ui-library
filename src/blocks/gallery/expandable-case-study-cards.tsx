import { ExpandableCaseStudyCards } from "@opensite/ui/blocks/gallery/expandable-case-study-cards";
import { imagePlaceholders, brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <ExpandableCaseStudyCards
      items={[
        {
          id: "1",
          title: "Global E-commerce Transformation",
          href: "/case-studies/ecommerce",
          image: imagePlaceholders[110],
          imageAlt: "E-commerce platform",
          logo: brandLogoPlaceholders.white[0],
          logoAlt: "TechCorp logo",
          company: "TechCorp",
          badges: ["E-commerce", "Cloud", "AI"],
        },
        {
          id: "2",
          title: "Healthcare Data Platform",
          href: "/case-studies/healthcare",
          image: imagePlaceholders[111],
          imageAlt: "Healthcare platform",
          logo: brandLogoPlaceholders.white[1],
          logoAlt: "MediSync logo",
          company: "MediSync",
          badges: ["Healthcare", "HIPAA", "Integration"],
        },
        {
          id: "3",
          title: "Financial Services Modernization",
          href: "/case-studies/fintech",
          image: imagePlaceholders[112],
          imageAlt: "Financial platform",
          logo: brandLogoPlaceholders.white[2],
          logoAlt: "FinanceFlow logo",
          company: "FinanceFlow",
          badges: ["Fintech", "Security", "Compliance"],
        },
        {
          id: "4",
          title: "Manufacturing IoT Solution",
          href: "/case-studies/iot",
          image: imagePlaceholders[113],
          imageAlt: "IoT platform",
          logo: brandLogoPlaceholders.white[3],
          logoAlt: "IndustrialTech logo",
          company: "IndustrialTech",
          badges: ["IoT", "Manufacturing", "Real-time"],
        },
      ]}
      background="white"
      spacing="section"
    />
  );
}
