import { AboutInteractiveTabs } from "@opensite/ui/blocks/about/about-interactive-tabs";
import { imagePlaceholders } from "@/lib/media";

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
              src: imagePlaceholders[16],
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
              src: imagePlaceholders[27],
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
              src: imagePlaceholders[38],
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
              src: imagePlaceholders[49],
              alt: "Project delivery",
            },
          },
        },
      ]}
    />
  );
}
