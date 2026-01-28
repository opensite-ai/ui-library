import { BlogHorizontalCards } from "@opensite/ui/blocks/blog/blog-horizontal-cards";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <BlogHorizontalCards
      badge="Featured Content"
      heading="Deep Dives and Tutorials"
      description="Comprehensive guides and detailed analyses to help you master complex topics and advance your skills."
      ctaAction={{
        label: "Explore All Tutorials",
        href: "/tutorials",
        variant: "default",
      }}
      posts={[
        {
          id: "1",
          title: "Building a Design System from Scratch",
          summary:
            "A step-by-step guide to creating a scalable design system that grows with your product and team. Learn about component libraries, design tokens, documentation, and governance.",
          image: imagePlaceholders[36],
          category: "Design Systems",
          author: "Maya Chen",
          date: "April 20, 2024",
          href: "#",
        },
        {
          id: "2",
          title: "Advanced React Patterns: Compound Components",
          summary:
            "Master the compound component pattern to create flexible and reusable React components with implicit state sharing and elegant APIs.",
          image: imagePlaceholders[82],
          category: "React",
          author: "Jake Morrison",
          date: "April 17, 2024",
          href: "#",
        },
        {
          id: "3",
          title: "PostgreSQL Performance Tuning Guide",
          summary:
            "Deep dive into PostgreSQL optimization techniques including indexing strategies, query optimization, connection pooling, and configuration tuning for production workloads.",
          image: imagePlaceholders[25],
          category: "Databases",
          author: "Dmitri Volkov",
          date: "April 14, 2024",
          href: "#",
        },
      ]}
      readMoreText="Read Full Article"
    />
  );
}
