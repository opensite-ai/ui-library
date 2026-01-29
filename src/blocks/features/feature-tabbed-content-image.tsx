import { imagePlaceholders } from "@/lib/media";
import { FeatureTabbedContentImage } from "@opensite/ui/blocks/features/feature-tabbed-content-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FeatureTabbedContentImage
      slides={[
        {
          id: "development",
          tabName: "Development",
          title: "Build Faster with Modern Tools",
          description:
            "Comprehensive development environment with everything you need to ship quality code quickly.",
          features: [
            "Hot module replacement for instant feedback",
            "Built-in TypeScript support and type checking",
            "Integrated testing framework with coverage reports",
            "Component library with 200+ pre-built blocks",
          ],
          actions: [
            {
              label: "Start Building",
              href: "/docs/getting-started",
              variant: "default",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
          image: imagePlaceholders[53],
          imageAlt: "Development environment",
        },
        {
          id: "deployment",
          tabName: "Deployment",
          title: "Deploy to Production in Seconds",
          description:
            "Push your code and let our platform handle the rest. Automatic builds, tests, and global deployment.",
          features: [
            "Zero-downtime deployments with instant rollbacks",
            "Automatic SSL certificates and custom domains",
            "Global CDN with 200+ edge locations",
            "Preview environments for every pull request",
          ],
          actions: [
            {
              label: "View Deployment Guide",
              href: "/docs/deployment",
              variant: "default",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
          image: imagePlaceholders[79],
          imageAlt: "Deployment pipeline",
        },
        {
          id: "monitoring",
          tabName: "Monitoring",
          title: "Real-Time Insights & Analytics",
          description:
            "Comprehensive observability with metrics, logs, and traces all in one place.",
          features: [
            "Real-time performance monitoring and alerts",
            "Distributed tracing across your entire stack",
            "Custom dashboards with advanced analytics",
            "Integration with Datadog, New Relic, and more",
          ],
          actions: [
            {
              label: "Explore Monitoring",
              href: "/features/monitoring",
              variant: "default",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
          image: imagePlaceholders[103],
          imageAlt: "Monitoring dashboard",
        },
      ]}
      defaultSlide="development"
      spacing="xl"
    />
  );
}
