import { ProcessScrollImage } from "@opensite/ui/blocks/process/process-scroll-image";
import { imagePlaceholders } from "@/lib/media";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <ProcessScrollImage
      heading="Build. Test. Launch."
      description="Our agile methodology ensures rapid delivery without compromising quality."
      actions={[
        {
          label: "Start Your Project",
          href: "/get-started",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Case Studies",
          href: "/case-studies",
          variant: "outline",
        },
      ]}
      steps={[
        {
          step: "01",
          title: "Requirements Gathering",
          description: "Comprehensive analysis of business needs, technical requirements, and user expectations. We create detailed specifications that serve as the blueprint for success.",
          image: imagePlaceholders[15],
        },
        {
          step: "02",
          title: "Architecture Planning",
          description: "Design scalable system architecture that supports growth. We select the right technologies, define data structures, and plan integration points.",
          image: imagePlaceholders[51],
        },
        {
          step: "03",
          title: "Iterative Development",
          description: "Build features in focused sprints with continuous feedback loops. Regular demos and stakeholder reviews ensure alignment throughout the process.",
          image: imagePlaceholders[78],
        },
        {
          step: "04",
          title: "Automated Testing",
          description: "Comprehensive test coverage including unit tests, integration tests, and end-to-end scenarios. Catch bugs early and maintain code quality.",
          image: imagePlaceholders[95],
        },
        {
          step: "05",
          title: "Staged Rollout",
          description: "Gradual deployment strategy with feature flags, monitoring, and rollback capabilities. Minimize risk while maximizing user satisfaction.",
          image: imagePlaceholders[36],
        },
      ]}
      spacing="xl"
      background="white"
    />
  );
}
