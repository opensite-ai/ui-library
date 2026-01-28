import { AboutCultureTabs } from "@opensite/ui/blocks/about/about-culture-tabs";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutCultureTabs
      badgeText="Our Culture"
      heading="What Makes Us Different"
      description="We've built a workplace where innovation thrives and every voice matters. Explore the core aspects that define our unique culture."
      aspects={[
        {
          id: "innovation",
          title: "Innovation First",
          description:
            "We believe in challenging the status quo and pushing boundaries. Our teams have the freedom to experiment, fail fast, and iterate toward breakthrough solutions. Every idea is valued, and creativity is encouraged at every level.",
          images: [
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
          ],
          testimonial: {
            quote:
              "The freedom to innovate here is unmatched. I've learned more in six months than in years elsewhere.",
            author: "Sarah Chen",
            role: "Senior Product Designer",
            avatar:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
          },
        },
        {
          id: "collaboration",
          title: "Collaborative Spirit",
          description:
            "We break down silos and build bridges. Our open-door policy and cross-functional teams ensure that the best ideas rise to the top, regardless of where they come from. Collaboration isn't just encouraged—it's how we work.",
          images: [
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
          ],
          testimonial: {
            quote:
              "Working across teams is seamless. Everyone is genuinely invested in helping each other succeed.",
            author: "Marcus Johnson",
            role: "Engineering Lead",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
          },
        },
        {
          id: "growth",
          title: "Growth Mindset",
          description:
            "We invest in our people's development through mentorship programs, learning budgets, and regular skill-building workshops. Your growth is our growth, and we're committed to helping you reach your full potential.",
          images: [
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
          ],
          testimonial: {
            quote:
              "The mentorship and learning opportunities have accelerated my career beyond what I imagined possible.",
            author: "Priya Patel",
            role: "Data Scientist",
            avatar:
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop",
          },
        },
        {
          id: "balance",
          title: "Work-Life Balance",
          description:
            "We understand that your best work happens when you're at your best. Flexible schedules, remote options, and generous time-off policies ensure you can be present for what matters most in your life.",
          images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
          ],
          testimonial: {
            quote:
              "I can be a dedicated professional and a present parent. That balance has transformed my life.",
            author: "Alex Rivera",
            role: "Marketing Director",
            avatar:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
          },
        },
      ]}
      ctaHeading="Ready to Join Our Team?"
      ctaDescription="We're always looking for talented individuals who share our values and want to make an impact."
      actions={[
        {
          label: "View Open Positions",
          href: "/careers",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn About Benefits",
          href: "/benefits",
          variant: "outline",
        },
      ]}
      ctaImages={[
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
      ]}
      spacing="xl"
    />
  );
}
