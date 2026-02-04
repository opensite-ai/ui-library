import { ExpandableCaseStudyCards } from "@opensite/ui/blocks/gallery/expandable-case-study-cards";
import { imagePlaceholders, brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <ExpandableCaseStudyCards
      title="Explore Our Case Studies"
      description="Discover our solutions"
      items={[
        {
          id: "1",
          title: "Global E-commerce Transformation",
          href: "#",
          image: imagePlaceholders[110],
          imageAlt: "E-commerce platform",
          logo: brandLogoPlaceholders.black[0],
          logoAlt: "TechCorp logo",
          company: "TechCorp",
          description:
            "Revolutionizing online retail with a scalable, AI-driven platform that enhanced user experience and boosted sales by 50%.",
          badges: ["E-commerce", "Cloud", "AI"],
        },
        {
          id: "2",
          title: "Healthcare Data Platform",
          href: "#",
          image: imagePlaceholders[111],
          imageAlt: "Healthcare platform",
          logo: brandLogoPlaceholders.black[1],
          logoAlt: "MediSync logo",
          company: "MediSync",
          description:
            "Integrating patient data across multiple systems to provide real-time insights, improving care quality and operational efficiency.",
          badges: ["Healthcare", "HIPAA", "Integration"],
        },
        {
          id: "3",
          title: "Financial Services Modernization",
          href: "#",
          image: imagePlaceholders[112],
          imageAlt: "Financial platform",
          logo: brandLogoPlaceholders.black[2],
          logoAlt: "FinanceFlow logo",
          company: "FinanceFlow",
          description:
            "Implementing a secure, compliant fintech platform that streamlined transactions and enhanced user trust, resulting in a 30% increase in customer retention.",
          badges: ["Fintech", "Security", "Compliance"],
        },
        {
          id: "4",
          title: "Manufacturing IoT Solution",
          href: "#",
          image: imagePlaceholders[113],
          imageAlt: "IoT platform",
          logo: brandLogoPlaceholders.black[3],
          logoAlt: "IndustrialTech logo",
          company: "IndustrialTech",
          description:
            "Deploying an IoT-enabled manufacturing platform that optimized production processes, reduced downtime by 25%, and improved overall equipment effectiveness.",
          badges: ["IoT", "Manufacturing", "Real-time"],
        },
      ]}
      background="dark"
      pattern="gridDotsBasic"
      patternOpacity={0.25}
      spacing="py-12 md:py-40"
    />
  );
}
