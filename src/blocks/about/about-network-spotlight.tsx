import { AboutNetworkSpotlight } from "@opensite/ui/blocks/about/about-network-spotlight";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutNetworkSpotlight
      eyebrow="Partner Program"
      heading="Join Our Growing Network"
      description="Connect with industry leaders, access exclusive resources, and grow your business through our partner ecosystem."
      highlights={[
        "Access to co-marketing opportunities and joint campaigns",
        "Priority support and dedicated partner success manager",
        "Revenue sharing and referral commission programs",
        "Early access to new features and beta programs",
      ]}
      actions={[
        {
          label: "Become a Partner",
          href: "/partners/apply",
          variant: "default",
          asButton: true,
        },
        {
          label: "Learn More",
          href: "/partners",
          variant: "outline",
          asButton: true,
        },
      ]}
      image={{
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop",
        alt: "Partner collaboration meeting",
      }}
      spotlightCard={{
        icon: <DynamicIcon name="lucide/award" size={24} />,
        label: "Featured Partner",
        title: "Acme Corporation",
        description: "Achieved 300% growth in their first year as a certified partner.",
      }}
      background="dark"
      spacing="lg"
    />
  );
}
