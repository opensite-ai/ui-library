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
      image={{ src: "https://toastability-production.s3.amazonaws.com/vh1aowwr93yz4qrzct2s4je0cxdo", alt: "CRM Dashboard" }}
      background="dark"
      pattern="crossPattern"
      patternOpacity={0.9}
    />
  );
}
