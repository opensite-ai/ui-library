import { CarouselDemoLink } from "@opensite/ui/blocks/gallery/carousel-demo-link";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselDemoLink
      heading="Our Platform Solutions"
      demoAction={{
        label: "Book a demo",
        href: "https://calendly.com/demo",
      }}
      items={[
        {
          id: "1",
          title: "AI-Powered Analytics",
          summary:
            "Transform your data into actionable insights with our advanced machine learning platform. Real-time processing and predictive analytics.",
          url: "/solutions/analytics",
          image: imagePlaceholders[30],
          imageAlt: "Analytics platform interface",
        },
        {
          id: "2",
          title: "Cloud Infrastructure",
          summary:
            "Scalable, secure, and reliable cloud infrastructure designed for enterprise workloads. Auto-scaling and 99.99% uptime SLA.",
          url: "/solutions/cloud",
          image: imagePlaceholders[31],
          imageAlt: "Cloud infrastructure dashboard",
        },
        {
          id: "3",
          title: "Security Suite",
          summary:
            "Comprehensive security platform with real-time threat detection, compliance management, and zero-trust architecture.",
          url: "/solutions/security",
          image: imagePlaceholders[32],
          imageAlt: "Security monitoring dashboard",
        },
        {
          id: "4",
          title: "Data Integration",
          summary:
            "Seamlessly connect all your data sources with our universal integration platform. Support for 200+ enterprise applications.",
          url: "/solutions/integration",
          image: imagePlaceholders[33],
          imageAlt: "Data integration workflow",
        },
        {
          id: "5",
          title: "Business Intelligence",
          summary:
            "Interactive dashboards and real-time reporting tools that empower data-driven decision making across your organization.",
          url: "/solutions/bi",
          image: imagePlaceholders[34],
          imageAlt: "Business intelligence dashboard",
        },
      ]}
      readMoreText="Learn more"
      background="white"
      spacing="lg"
      pattern="p6"
    />
  );
}
