import { CarouselScrollingFeatureShowcase } from "@opensite/ui/blocks/carousel/carousel-scrolling-feature-showcase";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselScrollingFeatureShowcase
      heading="Revolutionary Features"
      subheading="Everything you need to transform your business operations"
      features={[
        {
          id: "ai-assistant",
          title: "AI-Powered Virtual Assistant",
          description: "Meet your new intelligent helper that understands context, learns from interactions, and provides personalized recommendations. Available 24/7 to answer questions, automate tasks, and boost your productivity by up to 40%. Uses advanced natural language processing to understand even complex queries and deliver accurate responses in milliseconds.",
          image: imagePlaceholders[20],
        },
        {
          id: "real-time-sync",
          title: "Real-Time Data Synchronization",
          description: "Stay perfectly in sync across all your devices and team members. Changes appear instantly for everyone, eliminating version conflicts and ensuring your team always works with the most current information. Our conflict resolution algorithms handle simultaneous edits gracefully, and offline mode lets you work anywhere.",
          image: imagePlaceholders[43],
        },
        {
          id: "custom-workflows",
          title: "No-Code Workflow Builder",
          description: "Design sophisticated business processes without writing a single line of code. Our visual workflow builder features drag-and-drop simplicity with powerful logic capabilities including conditional branching, loops, and external API calls. Includes 200+ pre-built templates to get you started instantly.",
          image: imagePlaceholders[60],
        },
        {
          id: "advanced-permissions",
          title: "Granular Access Control",
          description: "Define precisely who can see and do what with field-level permissions, role-based access control, and conditional visibility rules. Create custom roles, set up approval workflows, and maintain detailed audit logs of all access and changes. Perfect for enterprises with complex compliance requirements.",
          image: imagePlaceholders[77],
        },
        {
          id: "predictive-insights",
          title: "Predictive Analytics Engine",
          description: "Harness the power of machine learning to forecast trends, identify opportunities, and prevent problems before they happen. Our ML models analyze historical patterns and external factors to deliver actionable insights with confidence scores. Customize predictions based on your unique business metrics.",
          image: imagePlaceholders[95],
        },
        {
          id: "white-label",
          title: "Complete White Labeling",
          description: "Make the platform truly yours with comprehensive branding options. Customize logos, colors, domain names, email templates, and even terminology to match your brand identity perfectly. Your clients will never know you're using a third-party platform.",
          image: imagePlaceholders[110],
        },
      ]}
    />
  );
}
