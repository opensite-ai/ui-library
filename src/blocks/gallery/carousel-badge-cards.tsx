import { CarouselBadgeCards } from "@opensite/ui/blocks/gallery/carousel-badge-cards";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselBadgeCards
      heading="Featured Case Studies"
      items={[
        {
          id: "1",
          title: "AI-Powered Analytics Platform",
          description: "Transforming raw data into actionable business intelligence through advanced machine learning algorithms and predictive analytics.",
          label: "Analytics",
          href: "/case-studies/analytics-platform",
          image: imagePlaceholders[20],
          imageAlt: "Analytics dashboard interface",
        },
        {
          id: "2",
          title: "Enterprise Cloud Migration",
          description: "Seamless transition of legacy infrastructure to modern cloud architecture, reducing costs by 40% while improving performance.",
          label: "Cloud",
          href: "/case-studies/cloud-migration",
          image: imagePlaceholders[21],
          imageAlt: "Cloud infrastructure visualization",
        },
        {
          id: "3",
          title: "E-commerce Personalization Engine",
          description: "Dynamic product recommendations powered by AI, increasing conversion rates by 35% and customer satisfaction scores.",
          label: "E-commerce",
          href: "/case-studies/personalization",
          image: imagePlaceholders[22],
          imageAlt: "E-commerce platform",
        },
        {
          id: "4",
          title: "Healthcare Data Integration",
          description: "Unified patient data platform enabling real-time insights and improving care coordination across multiple facilities.",
          label: "Healthcare",
          href: "/case-studies/healthcare",
          image: imagePlaceholders[23],
          imageAlt: "Healthcare technology",
        },
        {
          id: "5",
          title: "Financial Risk Management",
          description: "Real-time fraud detection system processing millions of transactions daily with 99.9% accuracy.",
          label: "Finance",
          href: "/case-studies/risk-management",
          image: imagePlaceholders[24],
          imageAlt: "Financial dashboard",
        },
      ]}
      readMoreText="Read case study"
      background="white"
      spacing="section"
    />
  );
}
