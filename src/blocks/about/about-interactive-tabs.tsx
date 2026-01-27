import { AboutInteractiveTabs } from "@opensite/ui/blocks/about/about-interactive-tabs";

export default function Demo() {
  return (
    <AboutInteractiveTabs
      title="How We Deliver Results"
      subtitle="Our proven methodology combines strategic thinking with hands-on execution to transform your vision into reality."
      tabs={[
        {
          id: "discover",
          label: "Discover",
          content: {
            title: "Understanding Your Vision",
            description:
              "We begin by deeply understanding your business, goals, and challenges. Through stakeholder interviews, market research, and competitive analysis, we uncover insights that inform every decision.",
            image: {
              src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
              alt: "Discovery phase workshop",
            },
          },
        },
        {
          id: "design",
          label: "Design",
          content: {
            title: "Crafting the Solution",
            description:
              "Armed with insights, we craft solutions that balance aesthetics with functionality. Our iterative design process ensures every element serves a purpose and resonates with your audience.",
            image: {
              src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
              alt: "Design process",
            },
          },
        },
        {
          id: "develop",
          label: "Develop",
          content: {
            title: "Building with Excellence",
            description:
              "Our engineering team brings designs to life using modern technologies and best practices. We prioritize performance, accessibility, and maintainability in every line of code.",
            image: {
              src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
              alt: "Development phase",
            },
          },
        },
        {
          id: "deliver",
          label: "Deliver",
          content: {
            title: "Launching Your Success",
            description:
              "Launch is just the beginning. We ensure smooth deployment, provide comprehensive training, and offer ongoing support to maximize the impact of your investment.",
            image: {
              src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
              alt: "Project delivery",
            },
          },
        },
      ]}
    />
  );
}
