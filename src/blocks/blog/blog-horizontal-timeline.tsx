import { BlogHorizontalTimeline } from "@opensite/ui/blocks/blog/blog-horizontal-timeline";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <BlogHorizontalTimeline
      heading="Product Evolution"
      posts={[
        {
          id: "1",
          title: "Platform Launch: V1.0",
          description:
            "We officially launched our platform with core features including user authentication, dashboard analytics, and API integrations. The initial release focused on delivering a solid foundation for future growth.",
          image: imagePlaceholders[47],
          date: "JANUARY 2024",
          href: "#",
        },
        {
          id: "2",
          title: "AI Integration: Smart Insights",
          description:
            "Introduced machine learning-powered insights and recommendations. Our AI engine now analyzes user behavior patterns and provides personalized suggestions to improve productivity and outcomes.",
          image: imagePlaceholders[93],
          date: "FEBRUARY 2024",
          href: "#",
        },
        {
          id: "3",
          title: "Team Collaboration: Real-Time",
          description:
            "Released real-time collaboration features enabling teams to work together seamlessly. Includes shared workspaces, live cursors, comments, and instant notifications across all connected devices.",
          image: imagePlaceholders[16],
          date: "MARCH 2024",
          href: "#",
        },
        {
          id: "4",
          title: "Enterprise Edition: Security & Scale",
          description:
            "Launched Enterprise tier with advanced security features, SSO integration, audit logs, custom SLAs, and dedicated support. Now serving organizations with thousands of users across multiple regions.",
          image: imagePlaceholders[61],
          date: "APRIL 2024",
          href: "#",
        },
      ]}
      readText="Read More"
    />
  );
}
