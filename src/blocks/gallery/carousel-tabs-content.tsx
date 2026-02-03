import { CarouselTabsContent } from "@opensite/ui/blocks/gallery/carousel-tabs-content";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselTabsContent
      items={[
        {
          title: "Enterprise Platform",
          description: "A comprehensive enterprise solution designed to handle complex workflows, large-scale data processing, and multi-tenant architectures. Built with scalability and reliability at its core.",
          note: "Trusted by Fortune 500 companies worldwide",
          image: imagePlaceholders[100],
          imageAlt: "Enterprise platform dashboard",
          category: "Enterprise",
        },
        {
          title: "Startup Suite",
          description: "Fast-track your startup growth with our all-in-one platform. From MVP to scale, we provide the tools and infrastructure you need to succeed without breaking the bank.",
          note: "Launch your product in days, not months",
          image: imagePlaceholders[101],
          imageAlt: "Startup suite interface",
          category: "Startup",
        },
        {
          title: "Developer Tools",
          description: "Powerful developer tools including CLI, SDKs, and comprehensive APIs. Build, test, and deploy with confidence using our modern development environment and extensive documentation.",
          note: "Loved by 50,000+ developers",
          image: imagePlaceholders[102],
          imageAlt: "Developer tools interface",
          category: "Developers",
        },
        {
          title: "Analytics Pro",
          description: "Advanced analytics platform with real-time data processing, custom dashboards, and AI-powered insights. Turn your data into your competitive advantage.",
          note: "Process billions of events daily",
          image: imagePlaceholders[103],
          imageAlt: "Analytics dashboard",
          category: "Analytics",
        },
        {
          title: "Integration Hub",
          description: "Connect with 200+ enterprise applications through our universal integration platform. Pre-built connectors, custom workflows, and real-time data synchronization.",
          note: "Seamless integration in minutes",
          image: imagePlaceholders[104],
          imageAlt: "Integration hub interface",
          category: "Integration",
        },
      ]}
      background="white"
      spacing="section"
    />
  );
}
