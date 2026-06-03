import { BlogHorizontalCards } from "@opensite/ui/blocks/blog/blog-horizontal-cards";

export default function Demo() {
  return (
    <BlogHorizontalCards
      badge="Featured Content"
      heading="Deep Dives and Tutorials"
      description="Comprehensive guides and detailed analyses to help you master complex topics and advance your skills."
      ctaAction={{
        label: "Explore All Tutorials",
        href: "#",
        variant: "default",
      }}
      posts={[
        {
          id: "1",
          title: "Building a Design System from Scratch",
          summary:
            "A step-by-step guide to creating a scalable design system that grows with your product and team. Learn about component libraries, design tokens, documentation, and governance. And discover best practices for maintaining consistency and fostering collaboration across teams. Lastly, see real-world examples of successful design systems in action.",
          image:
            "https://toastability-production.s3.amazonaws.com/50y066ms7rb5sw62u9u08jzkk8rj",
          category: "Design Systems",
          author: "Maya Chen",
          date: "Apr 20, '24",
          href: "#",
        },
        {
          id: "2",
          title: "Advanced React Patterns: Compound Components",
          summary:
            "Master the compound component pattern to create flexible and reusable React components with implicit state sharing and elegant APIs.",
          image:
            "https://toastability-production.s3.amazonaws.com/82ykd8s8boiqaxypkulb0v0s2qiw",
          category: "React",
          author: "Jake Morrison",
          date: "Apr 17, '24",
          href: "#",
        },
        {
          id: "3",
          title: "PostgreSQL Performance Tuning Guide",
          summary:
            "Deep dive into PostgreSQL optimization techniques including indexing strategies, query optimization, connection pooling, and configuration tuning for production workloads.",
          image:
            "https://toastability-production.s3.amazonaws.com/f921uoblxbv8f9bmr4s2ik7xxugl",
          category: "Databases",
          author: "Dmitri Volkov",
          date: "Apr 14, '24",
          href: "#",
        },
      ]}
      readMoreText="Read Full Article"
      background="dark"
      pattern="dashedGridFadeTopRight"
      patternOpacity={0.25}
    />
  );
}
