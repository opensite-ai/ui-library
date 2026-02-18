import { imagePlaceholders } from "@/lib/media";
import { HeroSaasDashboardPreview } from "@opensite/ui/blocks/hero/hero-saas-dashboard-preview";

export default function Demo() {
  return (
    <HeroSaasDashboardPreview
      badgeText="SaaS Platform"
      badgeIcon="lucide/box"
      heading="The operating system for your business"
      description="All-in-one platform to run your business efficiently. From analytics to automation, everything you need is here."
      emailForm={{
        placeholder: "Enter your email",
        action: {
          label: "Start Free Trial",
          href: "#",
          variant: "default",
        },
      }}
      browserPreview={{
        url: "yourbrand.com/showcase",
        image: {
          src: imagePlaceholders[83],
          alt: "Dashboard",
        },
      }}
      spacing="xl"
      background="dark"
    />
  );
}
