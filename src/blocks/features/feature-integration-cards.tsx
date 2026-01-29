import { brandLogoPlaceholders } from "@/lib/media";
import { FeatureIntegrationCards } from "@opensite/ui/blocks/features/feature-integration-cards";

export default function Demo() {
  return (
    <FeatureIntegrationCards
      title="Powerful Integrations"
      description="Connect seamlessly with the tools your team already uses. One-click setup gets you started in minutes."
      integrations={[
        {
          icon: brandLogoPlaceholders.black[0],
          iconAlt: "Integration logo",
          title: "Slack",
          description:
            "Get real-time notifications and updates directly in your Slack channels.",
          link: "/integrations/slack",
          linkLabel: "Connect Slack",
        },
        {
          icon: brandLogoPlaceholders.black[1],
          iconAlt: "Integration logo",
          title: "GitHub",
          description:
            "Sync your repositories and automate workflows with GitHub Actions.",
          link: "/integrations/github",
          linkLabel: "Connect GitHub",
        },
        {
          icon: brandLogoPlaceholders.black[2],
          iconAlt: "Integration logo",
          title: "Google Workspace",
          description:
            "Integrate with Gmail, Calendar, and Drive for seamless productivity.",
          link: "/integrations/google",
          linkLabel: "Connect Google",
        },
        {
          icon: brandLogoPlaceholders.black[3],
          iconAlt: "Integration logo",
          title: "Salesforce",
          description:
            "Sync customer data and automate your sales workflow end-to-end.",
          link: "/integrations/salesforce",
          linkLabel: "Connect Salesforce",
        },
        {
          icon: brandLogoPlaceholders.black[4],
          iconAlt: "Integration logo",
          title: "Stripe",
          description:
            "Process payments and manage subscriptions with our Stripe integration.",
          link: "/integrations/stripe",
          linkLabel: "Connect Stripe",
        },
        {
          icon: brandLogoPlaceholders.black[5],
          iconAlt: "Integration logo",
          title: "Zapier",
          description:
            "Automate workflows by connecting to 5,000+ apps through Zapier.",
          link: "/integrations/zapier",
          linkLabel: "Connect Zapier",
        },
      ]}
      spacing="xl"
    />
  );
}
