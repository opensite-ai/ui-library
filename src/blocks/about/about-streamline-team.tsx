import { AboutStreamlineTeam } from "@opensite/ui/blocks/about/about-streamline-team";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutStreamlineTeam
      title="Streamlined for Success"
      description="We've built our processes and team structure to deliver maximum value with minimum friction. Every role, every workflow, every tool is optimized for efficiency and impact."
      primaryImage={{
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop",
        alt: "Team collaboration",
      }}
      secondaryImage={{
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop",
        alt: "Team meeting",
      }}
      features={[
        {
          icon: <DynamicIcon name="lucide/zap" size={20} className="text-primary" />,
          title: "Agile Methodology",
          description: "Rapid iterations and continuous delivery keep projects moving forward.",
        },
        {
          icon: <DynamicIcon name="lucide/users" size={20} className="text-primary" />,
          title: "Cross-Functional Teams",
          description: "Designers, developers, and strategists work together from day one.",
        },
        {
          icon: <DynamicIcon name="lucide/message-circle" size={20} className="text-primary" />,
          title: "Transparent Communication",
          description: "Regular updates and open channels keep everyone aligned.",
        },
      ]}
      teamTitle="Join Our Growing Team"
      teamDescription="We're always looking for talented individuals who share our passion for creating exceptional digital experiences."
      actions={[
        {
          label: "View Open Positions",
          href: "/careers",
          variant: "default",
          size: "lg",
        },
      ]}
    />
  );
}
