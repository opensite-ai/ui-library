import { imagePlaceholders } from "@/lib/media";
import { HeroSaasDashboardPreview } from "@opensite/ui/blocks/hero/hero-saas-dashboard-preview";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

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
          href: "/signup",
          variant: "default",
        },
      }}
      browserPreview={{
        url: "app.company.com/dashboard",
        image: {
          src: imagePlaceholders[111],
          alt: "Dashboard preview",
        },
      }}
      spacing="xl"
    />
  );
}
