import { BlogCarouselApple } from "@opensite/ui/blocks/blog/blog-carousel-apple";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <BlogCarouselApple
      title="Featured Stories"
      subtitle="Trending Now"
      posts={[
        {
          image: imagePlaceholders[45],
          title: "The Evolution of Cloud-Native Development",
          category: "Cloud Computing",
          url: "/blog/cloud-native-evolution",
          excerpt:
            "Explore how cloud-native architectures are transforming software development and deployment strategies across industries.",
        },
        {
          image: imagePlaceholders[1],
          title: "Blockchain Beyond Cryptocurrency",
          category: "Innovation",
          url: "/blog/blockchain-applications",
          excerpt:
            "Discover practical blockchain applications in supply chain, healthcare, and enterprise solutions beyond digital currencies.",
        },
        {
          image: imagePlaceholders[28],
          title: "UX Design Principles for Mobile-First",
          category: "Design",
          url: "/blog/mobile-first-ux",
          excerpt:
            "Master the essential principles of creating intuitive mobile experiences that users love and businesses benefit from.",
        },
        {
          image: imagePlaceholders[67],
          title: "Quantum Computing: Current State and Future",
          category: "Technology",
          url: "/blog/quantum-computing-future",
          excerpt:
            "An in-depth look at quantum computing's progress, challenges, and potential impact on various industries.",
        },
        {
          image: imagePlaceholders[42],
          title: "API-First Development Strategy",
          category: "Development",
          url: "/blog/api-first-strategy",
          excerpt:
            "Learn why API-first approaches are becoming the standard for modern software development teams.",
        },
      ]}
      actionType="link"
      enableLayoutAnimations={true}
      background="dark"
      pattern="dashedGridFadeTopLeft"
      patternOpacity={0.15}
    />
  );
}
