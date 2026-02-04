import { imagePlaceholders } from "@/lib/media";
import { FeatureAccordionImage } from "@opensite/ui/blocks/features/feature-accordion-image";

export default function Demo() {
  return (
    <FeatureAccordionImage
      title="Frequently Asked Questions"
      description="Learn more about our platform's features and capabilities. Find answers to the most common questions about implementation, security, and pricing."
      items={[
        {
          title: "How does the deployment process work?",
          content:
            "Our platform uses a simple git-based workflow. Push your code to your repository, and we automatically build, test, and deploy to our global edge network. You'll have a production URL in seconds, complete with SSL certificates and custom domain support.",
          imageSrc: imagePlaceholders[41],
          imageAlt: "Deployment workflow",
        },
        {
          title: "What security features are included?",
          content:
            "We provide enterprise-grade security out of the box: automatic SSL/TLS encryption, DDoS protection, WAF (Web Application Firewall), SOC 2 Type II compliance, and regular penetration testing. All data is encrypted at rest and in transit.",
          imageSrc: imagePlaceholders[66],
          imageAlt: "Security features",
        },
        {
          title: "Can I integrate with my existing tools?",
          content:
            "Yes! We offer native integrations with 50+ popular tools including Slack, GitHub, Jira, Datadog, and more. Our comprehensive API and webhooks let you build custom integrations for any workflow.",
          imageSrc: imagePlaceholders[87],
          imageAlt: "Integration options",
        },
        {
          title: "What kind of support do you offer?",
          content:
            "All plans include 24/7 email support with < 24 hour response times. Pro and Enterprise plans get priority support with < 1 hour response times, dedicated Slack channels, and quarterly business reviews with our success team.",
          imageSrc: imagePlaceholders[109],
          imageAlt: "Support options",
        },
      ]}
      defaultValue="item-0"
      background="white"
      pattern="gridFadeBottomLeft"
      patternOpacity={1}
    />
  );
}
