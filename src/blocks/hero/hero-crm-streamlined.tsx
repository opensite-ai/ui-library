import { HeroCrmStreamlined } from "@opensite/ui/blocks/hero/hero-crm-streamlined";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCrmStreamlined
      tagline="Simple CRM"
      heading="Customer relationships made simple"
      description="Manage your entire customer lifecycle in one intuitive platform. From first contact to loyal advocate, we've got you covered."
      actions={[
        {
          label: "Start Free Trial",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      image={{ src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "CRM Dashboard" }}
      background="dark"
      pattern="crossPattern"
      patternOpacity={0.9}
    />
  );
}
