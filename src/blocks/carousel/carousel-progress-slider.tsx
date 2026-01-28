import { CarouselProgressSlider } from "@opensite/ui/blocks/carousel/carousel-progress-slider";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselProgressSlider
      heading="Platform Capabilities"
      subheading="Discover what makes our solution the industry leader"
      slides={[
        {
          id: "analytics",
          title: "Advanced Analytics",
          description: "Gain deep insights into your business performance with real-time dashboards, custom reports, and predictive analytics powered by machine learning algorithms.",
          image: imagePlaceholders[13],
        },
        {
          id: "automation",
          title: "Intelligent Automation",
          description: "Streamline repetitive tasks and workflows with smart automation tools that learn from your patterns and optimize themselves over time.",
          image: imagePlaceholders[39],
        },
        {
          id: "collaboration",
          title: "Team Collaboration",
          description: "Bring your entire team together with integrated chat, video conferencing, file sharing, and project management tools in one unified platform.",
          image: imagePlaceholders[57],
        },
        {
          id: "integrations",
          title: "Seamless Integrations",
          description: "Connect with 1,000+ apps and services through our robust API and pre-built integrations. Your tools work better together.",
          image: imagePlaceholders[76],
        },
        {
          id: "security",
          title: "Enterprise Security",
          description: "Rest easy with SOC 2 Type II compliance, end-to-end encryption, SSO, and advanced access controls that protect your sensitive data.",
          image: imagePlaceholders[101],
        },
      ]}
      autoAdvanceInterval={5000}
    />
  );
}
