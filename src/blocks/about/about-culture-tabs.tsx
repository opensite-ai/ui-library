import { AboutCultureTabs } from "@opensite/ui/blocks/about/about-culture-tabs";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutCultureTabs
      badgeText="Our Culture"
      heading="Where Innovation Meets Purpose"
      description="We foster an environment where creativity thrives, collaboration is celebrated, and every team member has the opportunity to make a meaningful impact."
      aspects={[
        {
          id: "innovation",
          title: "Innovation First",
          description: "We encourage bold thinking and experimentation. Every idea has the potential to transform how we work and what we create.",
          icon: <DynamicIcon name="lucide/lightbulb" size={24} />,
          testimonial: {
            quote: "The freedom to explore new ideas here is unlike anywhere else I've worked. My suggestions are not just heard, they're implemented.",
            author: "Sarah Chen",
            role: "Senior Engineer",
            avatar: {
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
              alt: "Sarah Chen",
            },
          },
        },
        {
          id: "collaboration",
          title: "Collaborative Spirit",
          description: "Cross-functional teams work together seamlessly, sharing knowledge and supporting each other to achieve common goals.",
          icon: <DynamicIcon name="lucide/users" size={24} />,
          testimonial: {
            quote: "The collaborative environment here has accelerated my growth more than I could have imagined. Everyone is invested in each other's success.",
            author: "Marcus Johnson",
            role: "Product Designer",
            avatar: {
              src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
              alt: "Marcus Johnson",
            },
          },
        },
        {
          id: "growth",
          title: "Continuous Growth",
          description: "We invest in our people through mentorship, learning opportunities, and clear paths for career advancement.",
          icon: <DynamicIcon name="lucide/trending-up" size={24} />,
          testimonial: {
            quote: "In just two years, I've grown from junior developer to team lead. The support and opportunities here are exceptional.",
            author: "Emily Rodriguez",
            role: "Team Lead",
            avatar: {
              src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
              alt: "Emily Rodriguez",
            },
          },
        },
      ]}
      ctaHeading="Ready to Join Our Team?"
      ctaDescription="Explore open positions and discover how you can contribute to our mission."
      actions={[
        {
          label: "View Open Positions",
          href: "/careers",
          variant: "default",
        },
        {
          label: "Learn About Benefits",
          href: "/benefits",
          variant: "outline",
        },
      ]}
      ctaImages={[
        {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop",
          alt: "Team working together",
        },
        {
          src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
          alt: "Office environment",
        },
      ]}
    />
  );
}
