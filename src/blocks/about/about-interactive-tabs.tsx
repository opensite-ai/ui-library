import { AboutInteractiveTabs } from "@opensite/ui/blocks/about/about-interactive-tabs";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutInteractiveTabs
      badgeText="Our Approach"
      heading="How We Deliver Results"
      description="Our proven methodology combines strategic thinking with hands-on execution to transform your vision into reality."
      tabs={[
        {
          id: "discover",
          icon: <DynamicIcon name="lucide/search" size={20} />,
          title: "Discover",
          content: "We begin by deeply understanding your business, goals, and challenges. Through stakeholder interviews, market research, and competitive analysis, we uncover insights that inform every decision.",
          image: {
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
            alt: "Discovery phase workshop",
          },
        },
        {
          id: "design",
          icon: <DynamicIcon name="lucide/palette" size={20} />,
          title: "Design",
          content: "Armed with insights, we craft solutions that balance aesthetics with functionality. Our iterative design process ensures every element serves a purpose and resonates with your audience.",
          image: {
            src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
            alt: "Design process",
          },
        },
        {
          id: "develop",
          icon: <DynamicIcon name="lucide/code" size={20} />,
          title: "Develop",
          content: "Our engineering team brings designs to life using modern technologies and best practices. We prioritize performance, accessibility, and maintainability in every line of code.",
          image: {
            src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
            alt: "Development phase",
          },
        },
        {
          id: "deliver",
          icon: <DynamicIcon name="lucide/rocket" size={20} />,
          title: "Deliver",
          content: "Launch is just the beginning. We ensure smooth deployment, provide comprehensive training, and offer ongoing support to maximize the impact of your investment.",
          image: {
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            alt: "Project delivery",
          },
        },
      ]}
    />
  );
}
