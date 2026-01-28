import { BlogTechInsights } from "@opensite/ui/blocks/blog/blog-tech-insights";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <BlogTechInsights
      heading="Tech Insights"
      description="Latest developments in technology"
      readMoreAction={{
        label: "View All",
        href: "/insights",
        variant: "outline",
      }}
      featuredPost={{
        id: "featured",
        title: "The Rise of Edge Computing in Modern Applications",
        image: imagePlaceholders[50],
        author: "Dr. Emily Chang",
        authorAvatar: imagePlaceholders[85],
        authorRole: "Principal Architect",
        href: "/blog/edge-computing-rise",
      }}
      secondaryPosts={[
        {
          id: "1",
          title: "WebAssembly: Transforming Web Performance",
          description:
            "How WebAssembly is transforming browser-based applications and enabling near-native performance for web apps.",
          image: imagePlaceholders[4],
          href: "/blog/webassembly-transformation",
        },
        {
          id: "2",
          title: "Blockchain in Supply Chain Management",
          description:
            "Exploring the intersection of blockchain technology and supply chain management for transparency and traceability.",
          image: imagePlaceholders[17],
          href: "/blog/blockchain-supply-chain",
        },
        {
          id: "3",
          title: "Quantum-Resistant Cryptography: Preparing for the Future",
          description:
            "Deep dive into quantum-resistant cryptography and preparing systems for the post-quantum computing era.",
          image: imagePlaceholders[37],
          href: "/blog/quantum-resistant-crypto",
        },
      ]}
    />
  );
}
