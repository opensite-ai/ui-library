import { BlogGridAuthorCards } from "@opensite/ui/blocks/blog/blog-grid-author-cards";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <BlogGridAuthorCards
      heading="Stories from Our Team"
      description="Expert insights, practical guides, and thought leadership from our talented contributors."
      posts={[
        {
          id: "1",
          title: "Scaling Engineering Teams: Lessons from 10 Years",
          summary:
            "Key insights on building and scaling high-performing engineering organizations from startup to enterprise.",
          image: imagePlaceholders[31],
          category: "Leadership",
          author: "Marcus Johnson",
          authorAvatar: imagePlaceholders[68],
          published: "April 15, 2024",
          href: "/blog/scaling-engineering-teams",
        },
        {
          id: "2",
          title: "The Psychology of User Interface Design",
          summary:
            "How cognitive principles and behavioral psychology inform better UI/UX decisions and user experiences.",
          image: imagePlaceholders[79],
          category: "Design",
          author: "Rachel Park",
          authorAvatar: imagePlaceholders[101],
          published: "April 13, 2024",
          href: "/blog/psychology-ui-design",
        },
        {
          id: "3",
          title: "From Monolith to Microservices: A Migration Story",
          summary:
            "Our journey breaking down a legacy monolithic application into a modern microservices architecture.",
          image: imagePlaceholders[73],
          category: "Architecture",
          author: "Alex Rivera",
          authorAvatar: imagePlaceholders[35],
          published: "April 10, 2024",
          href: "/blog/monolith-to-microservices",
        },
        {
          id: "4",
          title: "Machine Learning in Production: Real-World Challenges",
          summary:
            "Practical lessons learned deploying ML models at scale in production environments.",
          image: imagePlaceholders[49],
          category: "AI/ML",
          author: "Dr. Priya Sharma",
          authorAvatar: imagePlaceholders[84],
          published: "April 8, 2024",
          href: "/blog/ml-in-production",
        },
        {
          id: "5",
          title: "Building Resilient Distributed Systems",
          summary:
            "Design patterns and strategies for creating fault-tolerant systems that gracefully handle failures.",
          image: imagePlaceholders[92],
          category: "Systems",
          author: "Thomas Wei",
          authorAvatar: imagePlaceholders[18],
          published: "April 5, 2024",
          href: "/blog/resilient-systems",
        },
        {
          id: "6",
          title: "The Future of Web Development: 2024 and Beyond",
          summary:
            "Emerging trends, technologies, and paradigms shaping the next generation of web applications.",
          image: imagePlaceholders[40],
          category: "Web Dev",
          author: "Sophie Martinez",
          authorAvatar: imagePlaceholders[73],
          published: "April 2, 2024",
          href: "/blog/future-web-dev",
        },
      ]}
      viewAllAction={{
        label: "View All Posts",
        href: "/blog",
        variant: "outline",
      }}
    />
  );
}
