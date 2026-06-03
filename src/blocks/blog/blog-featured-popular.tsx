import { BlogFeaturedPopular } from "@opensite/ui/blocks/blog/blog-featured-popular";

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
          image:
            "https://toastability-production.s3.amazonaws.com/mt87xjr79wxdhjy7496v3r6m2m9t",
          category: "Architecture",
          href: "#",
        },
        {
          id: "1",
          title: "GraphQL vs REST: Making the Right Choice",
          description:
            "A detailed comparison of GraphQL and REST APIs, helping you choose the best approach for your project.",
          image:
            "https://toastability-production.s3.amazonaws.com/3vwfdbekbkskxj2mvlvu85fz787u",
          category: "API Design",
          href: "#",
        },
        {
          id: "2",
          title: "Advanced TypeScript Patterns and Techniques",
          description:
            "Master advanced TypeScript features to write more maintainable and type-safe code.",
          image:
            "https://toastability-production.s3.amazonaws.com/c4sgsy0g7o2rrjmvm9x7evxems82",
          category: "Programming",
          href: "#",
        },
        {
          id: "3",
          title: "Serverless Computing: When and Why",
          description:
            "Understanding serverless architectures and identifying the right use cases for your applications.",
          image:
            "https://toastability-production.s3.amazonaws.com/5sm6wc4no8fyzxfki5njmnv6gql5",
          category: "Cloud",
          href: "#",
        },
      ]}
      pattern="gridFadeTop"
      patternOpacity={0.1}
      background="dark"
    />
  );
}
