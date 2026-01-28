import { BlogCardsTaglineCta } from "@opensite/ui/blocks/blog/blog-cards-tagline-cta";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <BlogCardsTaglineCta
      badge="Knowledge Hub"
      heading="Empowering Your Digital Journey"
      description="Discover actionable insights, expert perspectives, and practical guides to help you navigate the ever-evolving world of technology and business."
      ctaAction={{
        label: "Subscribe to Newsletter",
        href: "/subscribe",
        variant: "default",
      }}
      posts={[
        {
          id: "1",
          title: "Digital Transformation: A Complete Roadmap",
          summary:
            "Navigate your organization's digital transformation journey with proven strategies and frameworks from industry leaders.",
          image: imagePlaceholders[23],
          href: "/blog/digital-transformation-roadmap",
        },
        {
          id: "2",
          title: "Sustainable Tech: Building Green Data Centers",
          summary:
            "Explore how leading companies are reducing carbon footprints while maintaining high-performance infrastructure.",
          image: imagePlaceholders[87],
          href: "/blog/sustainable-data-centers",
        },
        {
          id: "3",
          title: "Customer Experience in the AI Era",
          summary:
            "Learn how artificial intelligence is reshaping customer interactions and creating personalized experiences at scale.",
          image: imagePlaceholders[77],
          href: "/blog/cx-ai-era",
        },
      ]}
      readMoreText="Continue Reading"
    />
  );
}
