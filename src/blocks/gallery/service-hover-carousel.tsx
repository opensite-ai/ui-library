import { ServiceHoverCarousel } from "@opensite/ui/blocks/gallery/service-hover-carousel";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <ServiceHoverCarousel
      heading="Our Services"
      items={[
        {
          id: "1",
          title: "Web Development",
          price: "$5,000",
          image: imagePlaceholders[130],
          imageAlt: "Web development service",
          hoverImage: imagePlaceholders[131],
          hoverImageAlt: "Web development in action",
          tag: "Popular",
          href: "/services/web-development",
        },
        {
          id: "2",
          title: "Mobile App Design",
          price: "$7,500",
          image: imagePlaceholders[132],
          imageAlt: "Mobile app design service",
          hoverImage: imagePlaceholders[133],
          hoverImageAlt: "Mobile app design process",
          tag: "Trending",
          href: "/services/mobile-app-design",
        },
        {
          id: "3",
          title: "Cloud Infrastructure",
          price: "$10,000",
          image: imagePlaceholders[134],
          imageAlt: "Cloud infrastructure service",
          hoverImage: imagePlaceholders[135],
          hoverImageAlt: "Cloud infrastructure setup",
          tag: "Enterprise",
          href: "/services/cloud-infrastructure",
        },
        {
          id: "4",
          title: "AI Integration",
          price: "$15,000",
          image: imagePlaceholders[136],
          imageAlt: "AI integration service",
          hoverImage: imagePlaceholders[137],
          hoverImageAlt: "AI integration implementation",
          tag: "New",
          href: "/services/ai-integration",
        },
        {
          id: "5",
          title: "Security Audit",
          price: "$8,000",
          image: imagePlaceholders[138],
          imageAlt: "Security audit service",
          hoverImage: imagePlaceholders[139],
          hoverImageAlt: "Security audit process",
          tag: "Essential",
          href: "/services/security-audit",
        },
      ]}
      pricePrefix="Starting at"
      background="white"
      spacing="section"
    />
  );
}
