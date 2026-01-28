import { BlogFeaturedPopular } from "@opensite/ui/blocks/blog/blog-featured-popular";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <BlogFeaturedPopular
      heading="Top Reads This Month"
      description="Discover the most engaging and insightful articles from our community of experts and thought leaders."
      popularHeading="Popular Articles"
      posts={[
        {
          id: "featured",
          title: "The Complete Guide to Microservices Architecture",
          description:
            "An comprehensive exploration of microservices patterns, best practices, and real-world implementation strategies for building scalable distributed systems.",
          image: imagePlaceholders[42],
          category: "Architecture",
          href: "/blog/microservices-guide",
        },
        {
          id: "1",
          title: "GraphQL vs REST: Making the Right Choice",
          description:
            "A detailed comparison of GraphQL and REST APIs, helping you choose the best approach for your project.",
          image: imagePlaceholders[83],
          category: "API Design",
          href: "/blog/graphql-vs-rest",
        },
        {
          id: "2",
          title: "Advanced TypeScript Patterns and Techniques",
          description:
            "Master advanced TypeScript features to write more maintainable and type-safe code.",
          image: imagePlaceholders[19],
          category: "Programming",
          href: "/blog/advanced-typescript",
        },
        {
          id: "3",
          title: "Serverless Computing: When and Why",
          description:
            "Understanding serverless architectures and identifying the right use cases for your applications.",
          image: imagePlaceholders[64],
          category: "Cloud",
          href: "/blog/serverless-computing",
        },
      ]}
    />
  );
}
