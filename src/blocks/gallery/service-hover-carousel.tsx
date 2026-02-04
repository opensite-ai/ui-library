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
          image: imagePlaceholders[30],
          imageAlt: "Web development service",
          hoverImage: imagePlaceholders[11],
          hoverImageAlt: "Web development in action",
          tag: "Popular",
          href: "#",
        },
        {
          id: "2",
          title: "Mobile App Design",
          price: "$7,500",
          image: imagePlaceholders[32],
          imageAlt: "Mobile app design service",
          hoverImage: imagePlaceholders[33],
          hoverImageAlt: "Mobile app design process",
          tag: "Trending",
          href: "#",
        },
        {
          id: "3",
          title: "Cloud Infrastructure",
          price: "$10,000",
          image: imagePlaceholders[34],
          imageAlt: "Cloud infrastructure service",
          hoverImage: imagePlaceholders[35],
          hoverImageAlt: "Cloud infrastructure setup",
          tag: "Enterprise",
          href: "#",
        },
        {
          id: "4",
          title: "AI Integration",
          price: "$15,000",
          image: imagePlaceholders[36],
          imageAlt: "AI integration service",
          hoverImage: imagePlaceholders[37],
          hoverImageAlt: "AI integration implementation",
          tag: "New",
          href: "#",
        },
        {
          id: "5",
          title: "Security Audit",
          price: "$8,000",
          image: imagePlaceholders[38],
          imageAlt: "Security audit service",
          hoverImage: imagePlaceholders[39],
          hoverImageAlt: "Security audit process",
          tag: "Essential",
          href: "#",
        },
      ]}
      pricePrefix="Starting at"
      background="dark"
      spacing="py-6 md:py-40"
      pattern="architect"
      patternOpacity={1}
    />
  );
}
