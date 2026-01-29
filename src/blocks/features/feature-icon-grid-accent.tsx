import { FeatureIconGridAccent } from "@opensite/ui/blocks/features/feature-icon-grid-accent";

export default function Demo() {
  return (
    <FeatureIconGridAccent
      label="WHAT SETS US APART"
      title="Designed for Modern Teams"
      description="Built with the tools and workflows that matter most to high-performing organizations."
      features={[
        {
          iconName: "lucide/zap",
          title: "Lightning Fast",
          description:
            "Optimized performance ensures your applications load instantly and respond smoothly.",
        },
        {
          iconName: "lucide/shield-check",
          title: "Enterprise Security",
          description:
            "Bank-level encryption and compliance standards protect your data at every layer.",
        },
        {
          iconName: "lucide/layers",
          title: "Seamless Integration",
          description:
            "Connect with your existing tools through our comprehensive API and plugin ecosystem.",
        },
        {
          iconName: "lucide/bar-chart-3",
          title: "Advanced Analytics",
          description:
            "Real-time insights and customizable dashboards help you make data-driven decisions.",
        },
      ]}
      spacing="xl"
    />
  );
}
