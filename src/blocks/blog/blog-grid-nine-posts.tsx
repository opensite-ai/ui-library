import { BlogGridNinePosts } from "@opensite/ui/blocks/blog/blog-grid-nine-posts";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <BlogGridNinePosts
      heading="Latest Insights"
      description="Stay informed with our collection of in-depth articles, tutorials, and industry analysis."
      posts={[
        {
          id: "1",
          title: "Kubernetes Best Practices for Production Workloads",
          summary:
            "Essential configurations, security measures, and optimization techniques for running Kubernetes in production.",
          image: imagePlaceholders[25],
          category: "Cloud Native",
          author: "Kevin Zhang",
          authorAvatar: imagePlaceholders[62],
          published: "April 18, 2024",
          href: "/blog/kubernetes-best-practices",
        },
        {
          id: "2",
          title: "Understanding WebAssembly and Its Use Cases",
          summary:
            "Explore how WebAssembly is enabling high-performance applications in browsers and beyond.",
          image: imagePlaceholders[81],
          category: "Web Tech",
          author: "Nina Patel",
          authorAvatar: imagePlaceholders[7],
          published: "April 16, 2024",
          href: "/blog/webassembly-guide",
        },
        {
          id: "3",
          title: "Event-Driven Architecture Patterns",
          summary:
            "Learn how to design scalable systems using event-driven principles and messaging patterns.",
          image: imagePlaceholders[27],
          category: "Architecture",
          author: "Carlos Mendez",
          authorAvatar: imagePlaceholders[44],
          published: "April 14, 2024",
          href: "/blog/event-driven-patterns",
        },
        {
          id: "4",
          title: "Accessibility in Modern Web Applications",
          summary:
            "Implementing WCAG guidelines and creating inclusive experiences for all users.",
          image: imagePlaceholders[43],
          category: "Accessibility",
          author: "Jordan Lee",
          authorAvatar: imagePlaceholders[75],
          published: "April 12, 2024",
          href: "/blog/web-accessibility",
        },
        {
          id: "5",
          title: "Database Sharding Strategies for Scale",
          summary:
            "When and how to implement database sharding to handle massive data growth.",
          image: imagePlaceholders[96],
          category: "Databases",
          author: "Aisha Williams",
          authorAvatar: imagePlaceholders[15],
          published: "April 9, 2024",
          href: "/blog/database-sharding",
        },
        {
          id: "6",
          title: "Testing Strategies for Microservices",
          summary:
            "Comprehensive approaches to testing distributed systems and ensuring service reliability.",
          image: imagePlaceholders[13],
          category: "Testing",
          author: "Miguel Santos",
          authorAvatar: imagePlaceholders[58],
          published: "April 7, 2024",
          href: "/blog/testing-microservices",
        },
        {
          id: "7",
          title: "CSS Grid and Flexbox: A Complete Comparison",
          summary:
            "Master modern CSS layout techniques and know when to use Grid vs Flexbox.",
          image: imagePlaceholders[69],
          category: "CSS",
          author: "Elena Kowalski",
          authorAvatar: imagePlaceholders[99],
          published: "April 4, 2024",
          href: "/blog/css-grid-flexbox",
        },
        {
          id: "8",
          title: "Introduction to Domain-Driven Design",
          summary:
            "Understanding DDD principles and applying them to create maintainable software systems.",
          image: imagePlaceholders[18],
          category: "Software Design",
          author: "Robert Kim",
          authorAvatar: imagePlaceholders[26],
          published: "April 1, 2024",
          href: "/blog/domain-driven-design",
        },
        {
          id: "9",
          title: "Real-Time Collaboration: Building Apps Like Figma",
          summary:
            "Technical deep dive into building collaborative features using CRDTs and WebSockets.",
          image: imagePlaceholders[11],
          category: "Real-Time",
          author: "Sarah Thompson",
          authorAvatar: imagePlaceholders[8],
          published: "March 29, 2024",
          href: "/blog/realtime-collaboration",
        },
      ]}
      ctaAction={{
        label: "Load More",
        variant: "outline",
      }}
    />
  );
}
