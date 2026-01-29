import { imagePlaceholders } from "@/lib/media";
import { FeatureChecklistImage } from "@opensite/ui/blocks/features/feature-checklist-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FeatureChecklistImage
      title="Everything You Need to Succeed"
      description="Our platform provides all the tools, integrations, and support you need to build and scale your applications with confidence."
      imageSrc={imagePlaceholders[58]}
      imageAlt="Platform features overview"
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Schedule Demo",
          href: "/demo",
          variant: "outline",
        },
      ]}
      checklistItems={[
        "Zero-config deployment to global edge network",
        "Automatic SSL certificates and custom domains",
        "Built-in CI/CD with GitHub, GitLab, and Bitbucket",
        "Real-time collaboration and preview environments",
        "Enterprise-grade security and compliance",
        "24/7 expert support with < 1 hour response time",
      ]}
      spacing="xl"
    />
  );
}
