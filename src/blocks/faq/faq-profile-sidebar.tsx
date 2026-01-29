import { imagePlaceholders } from "@/lib/media";
import { FaqProfileSidebar } from "@opensite/ui/blocks/faq/faq-profile-sidebar";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FaqProfileSidebar
      heading="Expert Answers"
      items={[
        {
          id: "implementation",
          question: "How long does implementation take?",
          answer:
            "Most teams are up and running within a week. Our onboarding specialists guide you through setup, data migration, and team training to ensure a smooth transition.",
        },
        {
          id: "scalability",
          question: "Can the platform scale with my business?",
          answer:
            "Absolutely. Our infrastructure is built to scale from startups to enterprises. Automatic scaling handles traffic spikes, and you can add unlimited users and storage.",
        },
        {
          id: "custom-dev",
          question: "Do you offer custom development?",
          answer:
            "Yes, Enterprise customers can request custom features, integrations, and workflows. Our professional services team works with you to build tailored solutions.",
        },
        {
          id: "sla",
          question: "What are your SLA guarantees?",
          answer:
            "We guarantee 99.9% uptime with redundant infrastructure. Enterprise plans include priority support with 1-hour response times and dedicated account management.",
        },
      ]}
      profileImage={imagePlaceholders[18]}
      profileName="Sarah Chen"
      profileRole="Customer Success Manager"
      profileDescription="With over 8 years of experience helping teams maximize their productivity, I'm here to ensure you get the most value from our platform."
      contactText="Have a question not covered here?"
      contactAction={{
        label: "Schedule a Call",
        href: "/schedule",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      pattern="circuitBoardFadeBottom"
      patternOpacity={0.75}
      background="white"
    />
  );
}
