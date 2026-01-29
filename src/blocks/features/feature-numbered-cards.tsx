import { imagePlaceholders } from "@/lib/media";
import { FeatureNumberedCards } from "@opensite/ui/blocks/features/feature-numbered-cards";

export default function Demo() {
  return (
    <FeatureNumberedCards
      features={[
        {
          title: "Secure Payment Processing",
          description:
            "Accept payments globally with enterprise-grade security and compliance built in from day one.",
          image: imagePlaceholders[28],
          imageAlt: "Secure payment processing interface",
          checklistItems: [
            "PCI DSS Level 1 certified infrastructure",
            "End-to-end encryption for all transactions",
            "Real-time fraud detection and prevention",
            "Support for 135+ currencies worldwide",
          ],
        },
        {
          title: "Instant Notifications",
          description:
            "Keep your team and customers informed with intelligent notification systems across all channels.",
          image: imagePlaceholders[52],
          imageAlt: "Notification dashboard",
          checklistItems: [
            "Multi-channel delivery (email, SMS, push)",
            "Customizable templates and branding",
            "Delivery tracking and analytics",
            "Smart throttling and user preferences",
          ],
        },
        {
          title: "Advanced Reporting",
          description:
            "Transform raw data into actionable insights with powerful analytics and customizable reports.",
          image: imagePlaceholders[89],
          imageAlt: "Analytics dashboard",
          checklistItems: [
            "Real-time data visualization",
            "Custom report builder with drag-and-drop",
            "Scheduled report delivery",
            "Export to CSV, PDF, or Excel",
          ],
        },
      ]}
      pattern="grid1"
      patternOpacity={0.08}
      background="secondary"
    />
  );
}
