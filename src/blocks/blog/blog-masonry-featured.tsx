import { BlogMasonryFeatured } from "@opensite/ui/blocks/blog/blog-masonry-featured";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <BlogMasonryFeatured
      heading="Curated Reads"
      posts={[
        {
          id: "featured",
          title: "The Art and Science of API Design",
          description:
            "A comprehensive exploration of API design principles, RESTful best practices, GraphQL considerations, and how to create developer-friendly interfaces that stand the test of time.",
          image: imagePlaceholders[40],
          author: "Victoria Chang",
          date: "April 22, 2024",
          href: "#",
        },
        {
          id: "1",
          title: "Serverless Cost Optimization",
          description:
            "Strategies to reduce serverless computing costs while maintaining performance.",
          image: imagePlaceholders[77],
          author: "Ahmed Hassan",
          date: "April 19, 2024",
          href: "#",
        },
        {
          id: "2",
          title: "Building Accessible Forms",
          description:
            "Creating inclusive form experiences that work for everyone.",
          image: imagePlaceholders[11],
          author: "Laura Anderson",
          date: "April 16, 2024",
          href: "#",
        },
        {
          id: "3",
          title: "State Management in React",
          description:
            "Comparing Redux, Zustand, Jotai, and Context API for different use cases.",
          image: imagePlaceholders[55],
          author: "Chris Taylor",
          date: "April 13, 2024",
          href: "#",
        },
        {
          id: "4",
          title: "WebSocket Security Guide",
          description:
            "Best practices for securing real-time WebSocket connections.",
          image: imagePlaceholders[90],
          author: "Yuki Tanaka",
          date: "April 10, 2024",
          href: "#",
        },
      ]}
    />
  );
}
