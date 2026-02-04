import { CarouselIconSidebar } from "@opensite/ui/blocks/gallery/carousel-icon-sidebar";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselIconSidebar
      title="Our Key Features"
      description="Discover the standout features that set our platform apart. Each element is designed with your success in mind, ensuring a seamless and powerful experience."
      items={[
        {
          src: imagePlaceholders[60],
          alt: "Elegant Design",
          title: "Elegant Design",
          description:
            "Beautiful interfaces that users love. Our design philosophy combines aesthetics with usability to create experiences that delight.",
          icon: "lucide/palette",
        },
        {
          src: imagePlaceholders[61],
          alt: "High Performance",
          title: "High Performance",
          description:
            "Lightning-fast applications optimized for speed. Every millisecond counts, and we ensure your users get the fastest experience possible.",
          icon: "lucide/zap",
        },
        {
          src: imagePlaceholders[62],
          alt: "Secure by Default",
          title: "Secure by Default",
          description:
            "Enterprise-grade security built into every layer. From encryption to authentication, we protect your data with industry best practices.",
          icon: "lucide/shield-check",
        },
        {
          src: imagePlaceholders[63],
          alt: "Scalable Architecture",
          title: "Scalable Architecture",
          description:
            "Infrastructure that grows with your business. Whether you have 100 or 100 million users, our platform handles it effortlessly.",
          icon: "lucide/trending-up",
        },
        {
          src: imagePlaceholders[64],
          alt: "24/7 Support",
          title: "24/7 Support",
          description:
            "Expert support team available around the clock. Get help whenever you need it with response times under 30 minutes.",
          icon: "lucide/headphones",
        },
      ]}
      background="gray"
      spacing="py-8 md:py-40"
      pattern="waves"
      patternOpacity={0.04}
    />
  );
}
