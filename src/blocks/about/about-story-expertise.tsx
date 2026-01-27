import { AboutStoryExpertise } from "@opensite/ui/blocks/about/about-story-expertise";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutStoryExpertise
      eyebrow="Our Story"
      heading="From Garage Startup to Global Impact"
      storyParagraphs={[
        "What began as a two-person operation in 2010 has grown into a team of over 200 professionals serving clients across 30 countries.",
        "Our journey hasn't always been smooth. We've faced challenges, made mistakes, and learned invaluable lessons along the way. But through it all, our commitment to our clients and our craft has never wavered.",
        "Today, we're proud to be trusted partners to some of the world's most innovative organizations, helping them navigate digital transformation and achieve their most ambitious goals.",
      ]}
      actions={[
        {
          label: "Read Our Full Story",
          href: "/story",
          variant: "default",
          size: "lg",
        },
        {
          label: "Meet the Team",
          href: "/team",
          variant: "outline",
          size: "lg",
        },
      ]}
      image={{
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop",
        alt: "Team collaboration",
      }}
      highlight={{
        icon: <DynamicIcon name="lucide/award" size={24} />,
        label: "Recognition",
        title: "Top 100 Tech Companies",
        description: "Named among the fastest-growing technology companies for three consecutive years.",
      }}
      expertiseHeading="Areas of Expertise"
      expertiseDescription="We've developed deep expertise across multiple domains, enabling us to tackle complex challenges with confidence."
      expertiseAreas={[
        {
          icon: <DynamicIcon name="lucide/layout" size={24} />,
          title: "Product Design",
          description: "User-centered design that balances aesthetics with functionality.",
        },
        {
          icon: <DynamicIcon name="lucide/code" size={24} />,
          title: "Engineering",
          description: "Scalable, maintainable code built with modern best practices.",
        },
        {
          icon: <DynamicIcon name="lucide/bar-chart" size={24} />,
          title: "Data & Analytics",
          description: "Insights-driven strategies powered by advanced analytics.",
        },
        {
          icon: <DynamicIcon name="lucide/cloud" size={24} />,
          title: "Cloud Infrastructure",
          description: "Reliable, secure, and cost-effective cloud solutions.",
        },
      ]}
      background="white"
      spacing="lg"
    />
  );
}
