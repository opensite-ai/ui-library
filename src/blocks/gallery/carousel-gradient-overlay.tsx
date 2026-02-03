import { CarouselGradientOverlay } from "@opensite/ui/blocks/gallery/carousel-gradient-overlay";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselGradientOverlay
      title="Latest Projects"
      description="Explore our portfolio of innovative solutions that have transformed businesses across industries."
      items={[
        {
          id: "1",
          title: "Digital Transformation",
          description: "Complete digital overhaul for Fortune 500 company, modernizing legacy systems and implementing cloud-native architecture.",
          href: "/projects/digital-transformation",
          image: imagePlaceholders[40],
          imageAlt: "Digital transformation project",
        },
        {
          id: "2",
          title: "AI Customer Service",
          description: "Intelligent chatbot platform handling 10,000+ customer inquiries daily with 95% satisfaction rate and instant response times.",
          href: "/projects/ai-customer-service",
          image: imagePlaceholders[41],
          imageAlt: "AI customer service interface",
        },
        {
          id: "3",
          title: "Supply Chain Optimization",
          description: "Real-time logistics platform reducing delivery times by 30% through predictive analytics and route optimization.",
          href: "/projects/supply-chain",
          image: imagePlaceholders[42],
          imageAlt: "Supply chain dashboard",
        },
        {
          id: "4",
          title: "Mobile Banking App",
          description: "Award-winning mobile application with 2M+ active users, featuring biometric authentication and instant transfers.",
          href: "/projects/mobile-banking",
          image: imagePlaceholders[43],
          imageAlt: "Mobile banking interface",
        },
        {
          id: "5",
          title: "IoT Smart Factory",
          description: "Connected manufacturing platform monitoring 500+ devices in real-time, improving efficiency by 45%.",
          href: "/projects/iot-factory",
          image: imagePlaceholders[44],
          imageAlt: "IoT factory monitoring",
        },
      ]}
      readMoreText="View project"
      background="white"
      spacing="section"
    />
  );
}
