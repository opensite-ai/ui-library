import { AboutExpandableValues } from "@opensite/ui/blocks/about/about-expandable-values";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutExpandableValues
      badgeText="Our Values"
      heading="Principles That Guide Everything We Do"
      description="These core values shape our culture, inform our decisions, and define how we work with clients and each other."
      values={[
        {
          id: "integrity",
          icon: <DynamicIcon name="lucide/shield-check" size={24} />,
          title: "Integrity First",
          description: "We believe in doing the right thing, even when no one is watching. Honesty and transparency are the foundation of every relationship we build.",
          examples: [
            "Transparent pricing with no hidden fees",
            "Honest timelines and realistic expectations",
            "Open communication about challenges and setbacks",
          ],
        },
        {
          id: "excellence",
          icon: <DynamicIcon name="lucide/award" size={24} />,
          title: "Pursuit of Excellence",
          description: "Good enough is never enough. We continuously push ourselves to deliver work that exceeds expectations and sets new standards.",
          examples: [
            "Rigorous quality assurance processes",
            "Continuous learning and skill development",
            "Regular retrospectives to improve our craft",
          ],
        },
        {
          id: "collaboration",
          icon: <DynamicIcon name="lucide/users" size={24} />,
          title: "Collaborative Partnership",
          description: "We see ourselves as an extension of your team. Your success is our success, and we work together to achieve shared goals.",
          examples: [
            "Regular check-ins and progress updates",
            "Inclusive decision-making processes",
            "Knowledge sharing and documentation",
          ],
        },
        {
          id: "innovation",
          icon: <DynamicIcon name="lucide/lightbulb" size={24} />,
          title: "Thoughtful Innovation",
          description: "We embrace new ideas and technologies, but always with purpose. Innovation should solve real problems, not create new ones.",
          examples: [
            "Research-driven technology choices",
            "User-centered design approach",
            "Sustainable and scalable solutions",
          ],
        },
      ]}
      actions={[
        {
          label: "Work With Us",
          href: "/contact",
          variant: "default",
        },
        {
          label: "Learn More",
          href: "/about",
          variant: "outline",
        },
      ]}
    />
  );
}
