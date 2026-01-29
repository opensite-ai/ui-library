import { imagePlaceholders } from "@/lib/media";
import { HeroCrmStreamlined } from "@opensite/ui/blocks/hero/hero-crm-streamlined";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCrmStreamlined
      tagline="Simple CRM"
      heading="Customer relationships made simple"
      description="Manage your entire customer lifecycle in one intuitive platform. From first contact to loyal advocate, we've got you covered."
      action={{
        label: "Start Free Trial",
        href: "/signup",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      image={{ src: imagePlaceholders[82], alt: "CRM Dashboard" }}
      spacing="xl"
    />
  );
}
