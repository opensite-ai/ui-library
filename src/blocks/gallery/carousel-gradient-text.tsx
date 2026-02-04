import { CarouselGradientText } from "@opensite/ui/blocks/gallery/carousel-gradient-text";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselGradientText
      heading="Our Work"
      subheading="Portfolio"
      tagline="Innovative solutions that drive results"
      items={[
        {
          image: imagePlaceholders[50],
          imageAlt: "Project showcase 1",
          title: "Enterprise SaaS Platform",
          href: "#",
          description:
            "Scalable multi-tenant platform serving 100,000+ users with 99.99% uptime and enterprise-grade security.",
        },
        {
          image: imagePlaceholders[51],
          imageAlt: "Project showcase 2",
          title: "E-commerce Marketplace",
          href: "#",
          description:
            "High-performance marketplace processing $50M+ in annual transactions with real-time inventory management.",
        },
        {
          image: imagePlaceholders[52],
          imageAlt: "Project showcase 3",
          title: "Healthcare Portal",
          href: "#",
          description:
            "HIPAA-compliant patient portal enabling secure communication and appointment scheduling for 200+ clinics.",
        },
        {
          image: imagePlaceholders[53],
          imageAlt: "Project showcase 4",
          title: "Fintech Dashboard",
          href: "#",
          description:
            "Real-time financial analytics platform with customizable widgets and advanced reporting capabilities.",
        },
        {
          image: imagePlaceholders[54],
          imageAlt: "Project showcase 5",
          title: "Education LMS",
          href: "#",
          description:
            "Comprehensive learning management system supporting 50,000+ students with interactive content and assessments.",
        },
        {
          image: imagePlaceholders[15],
          imageAlt: "Project showcase 1",
          title: "Enterprise SaaS Platform",
          href: "#",
          description:
            "Scalable multi-tenant platform serving 100,000+ users with 99.99% uptime and enterprise-grade security.",
        },
        {
          image: imagePlaceholders[16],
          imageAlt: "Project showcase 2",
          title: "E-commerce Marketplace",
          href: "#",
          description:
            "High-performance marketplace processing $50M+ in annual transactions with real-time inventory management.",
        },
        {
          image: imagePlaceholders[17],
          imageAlt: "Project showcase 3",
          title: "Healthcare Portal",
          href: "#",
          description:
            "HIPAA-compliant patient portal enabling secure communication and appointment scheduling for 200+ clinics.",
        },
        {
          image: imagePlaceholders[18],
          imageAlt: "Project showcase 4",
          title: "Fintech Dashboard",
          href: "#",
          description:
            "Real-time financial analytics platform with customizable widgets and advanced reporting capabilities.",
        },
        {
          image: imagePlaceholders[19],
          imageAlt: "Project showcase 5",
          title: "Education LMS",
          href: "#",
          description:
            "Comprehensive learning management system supporting 50,000+ students with interactive content and assessments.",
        },
      ]}
      background="white"
      spacing="py-6 md:py-40"
      pattern="circuitBoardBasic"
      patternOpacity={1}
    />
  );
}
