import { imagePlaceholders } from "@/lib/media";
import { FeatureIconTabsContent } from "@opensite/ui/blocks/features/feature-icon-tabs-content";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FeatureIconTabsContent
      tabs={[
        {
          value: "performance",
          iconName: "lucide/zap",
          label: "Performance",
          content: {
            badge: "Lightning Fast",
            title: "Built for Speed",
            description:
              "Our infrastructure is optimized for sub-100ms response times globally. Automatic caching, edge computing, and intelligent routing ensure your users get the fastest experience possible.",
            imageSrc: imagePlaceholders[50],
            imageAlt: "Performance metrics",
            actions: [
              {
                label: "View Benchmarks",
                href: "/benchmarks",
                variant: "default",
                iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
              },
            ],
          },
        },
        {
          value: "security",
          iconName: "lucide/shield-check",
          label: "Security",
          content: {
            badge: "Enterprise Ready",
            title: "Security First Architecture",
            description:
              "Bank-level encryption, SOC 2 Type II compliance, automated security scanning, and regular penetration testing. Your data is protected by industry-leading security practices.",
            imageSrc: imagePlaceholders[74],
            imageAlt: "Security features",
            actions: [
              {
                label: "Security Docs",
                href: "/security",
                variant: "default",
                iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
              },
            ],
          },
        },
        {
          value: "scalability",
          iconName: "lucide/trending-up",
          label: "Scalability",
          content: {
            badge: "Auto-Scaling",
            title: "Grows With Your Business",
            description:
              "From zero to millions of users, our platform automatically scales to meet demand. No configuration needed - we handle the complexity so you can focus on building.",
            imageSrc: imagePlaceholders[97],
            imageAlt: "Scalability diagram",
            actions: [
              {
                label: "Learn More",
                href: "/scalability",
                variant: "default",
                iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
              },
            ],
          },
        },
      ]}
      defaultTab="performance"
    />
  );
}
