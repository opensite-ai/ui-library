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
            "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          ],
          testimonial: {
            quote:
              "The freedom to innovate here is unmatched. I've learned more in six months than in years elsewhere.",
            author: "Sarah Chen",
            role: "Senior Product Designer",
            avatar: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          },
        },
        {
          id: "collaboration",
          title: "Collaborative Spirit",
          description:
            "We break down silos and build bridges. Our open-door policy and cross-functional teams ensure that the best ideas rise to the top, regardless of where they come from. Collaboration isn't just encouraged—it's how we work.",
          images: [
            "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          ],
          testimonial: {
            quote:
              "Working across teams is seamless. Everyone is genuinely invested in helping each other succeed.",
            author: "Marcus Johnson",
            role: "Engineering Lead",
            avatar: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          },
        },
        {
          id: "growth",
          title: "Growth Mindset",
          description:
            "We invest in our people's development through mentorship programs, learning budgets, and regular skill-building workshops. Your growth is our growth, and we're committed to helping you reach your full potential.",
          images: [
            "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          ],
          testimonial: {
            quote:
              "The mentorship and learning opportunities have accelerated my career beyond what I imagined possible.",
            author: "Priya Patel",
            role: "Data Scientist",
            avatar: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          },
        },
        {
          id: "balance",
          title: "Work-Life Balance",
          description:
            "We understand that your best work happens when you're at your best. Flexible schedules, remote options, and generous time-off policies ensure you can be present for what matters most in your life.",
          images: [
            "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          ],
          testimonial: {
            quote:
              "I can be a dedicated professional and a present parent. That balance has transformed my life.",
            author: "Alex Rivera",
            role: "Marketing Director",
            avatar: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          },
        },
      ]}
      ctaHeading="Ready to Join Our Team?"
      ctaDescription="We're always looking for talented individuals who share our values and want to make an impact."
      actions={[
        {
          label: "View Open Positions",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn About Benefits",
          href: "#",
          variant: "outline",
        },
      ]}
      ctaImages={[
        "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
      ]}
      background="dark"
      pattern="dashedGridFadeTopRight"
      patternOpacity={0.15}
    />
  );
}
