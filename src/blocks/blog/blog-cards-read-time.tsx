import { BlogCardsReadTime } from "@opensite/ui/blocks/blog/blog-cards-read-time";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <BlogCardsReadTime
      badge="Latest Articles"
      heading="Insights from Our Experts"
      description="Stay informed with the latest trends, best practices, and industry insights from our team of seasoned professionals."
      posts={[
        {
          id: "1",
          title: "Building Scalable Microservices with Kubernetes",
          summary:
            "Learn how to architect and deploy cloud-native microservices that scale effortlessly with modern container orchestration.",
          image: imagePlaceholders[34],
          author: "Sarah Chen",
          authorAvatar: imagePlaceholders[67],
          readTime: "12 min read",
          href: "/blog/kubernetes-microservices",
        },
        {
          id: "2",
          title: "The Future of Artificial Intelligence in Healthcare",
          summary:
            "Exploring how AI and machine learning are revolutionizing patient care, diagnosis, and medical research.",
          image: imagePlaceholders[89],
          author: "Dr. Michael Torres",
          authorAvatar: imagePlaceholders[61],
          readTime: "8 min read",
          href: "/blog/ai-healthcare",
        },
        {
          id: "3",
          title: "Design Systems: Creating Consistency at Scale",
          summary:
            "A comprehensive guide to building and maintaining design systems that empower teams and delight users.",
          image: imagePlaceholders[56],
          author: "Emma Williams",
          authorAvatar: imagePlaceholders[24],
          readTime: "10 min read",
          href: "/blog/design-systems",
        },
        {
          id: "4",
          title: "Zero-Trust Security Architecture Explained",
          summary:
            "Understanding the principles and implementation strategies for modern zero-trust security frameworks.",
          image: imagePlaceholders[78],
          author: "James Rodriguez",
          authorAvatar: imagePlaceholders[5],
          readTime: "15 min read",
          href: "/blog/zero-trust-security",
        },
        {
          id: "5",
          title: "Optimizing React Performance for Large Applications",
          summary:
            "Practical techniques and tools for keeping your React applications fast and responsive as they grow.",
          image: imagePlaceholders[12],
          author: "Lisa Anderson",
          authorAvatar: imagePlaceholders[38],
          readTime: "11 min read",
          href: "/blog/react-performance",
        },
        {
          id: "6",
          title: "The Rise of Edge Computing and IoT",
          summary:
            "How edge computing is transforming IoT deployments and enabling real-time data processing at scale.",
          image: imagePlaceholders[45],
          author: "David Kim",
          authorAvatar: imagePlaceholders[72],
          readTime: "9 min read",
          href: "/blog/edge-computing-iot",
        },
      ]}
      viewAllAction={{
        label: "View All Articles",
        href: "/blog",
        variant: "outline",
      }}
    />
  );
}
