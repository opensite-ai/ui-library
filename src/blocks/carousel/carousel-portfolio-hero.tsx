import { CarouselPortfolioHero } from "@opensite/ui/blocks/carousel/carousel-portfolio-hero";
import { imagePlaceholders } from "@/lib/media";
import { DynamicIcon } from "@opensite/ui";

export default function Demo() {
  return (
    <CarouselPortfolioHero
      slides={[
        {
          id: 1,
          image: imagePlaceholders[19],
          title: "Brand Identity Redesign",
          description:
            "Complete visual transformation for a global tech startup",
          tag: "Branding",
        },
        {
          id: 2,
          image: imagePlaceholders[37],
          title: "E-Commerce Platform",
          description:
            "Award-winning shopping experience with AI-powered recommendations",
          tag: "Web Design",
        },
        {
          id: 3,
          image: imagePlaceholders[53],
          title: "Mobile Banking App",
          description: "Intuitive financial management for the modern consumer",
          tag: "Mobile Design",
        },
        {
          id: 4,
          image: imagePlaceholders[72],
          title: "Sustainability Campaign",
          description:
            "Multi-channel marketing initiative driving environmental change",
          tag: "Marketing",
        },
        {
          id: 5,
          image: imagePlaceholders[91],
          title: "SaaS Dashboard",
          description:
            "Enterprise analytics platform serving Fortune 500 clients",
          tag: "Product Design",
        },
      ]}
      actions={[
        {
          label: "View All Projects",
          href: "#",
          variant: "default",
          size: "lg",
          asButton: true,
        },
      ]}
      autoPlayInterval={6000}
    />
  );
}
