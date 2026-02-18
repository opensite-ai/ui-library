import { HeroNewsletterMinimal } from "@opensite/ui/blocks/hero/hero-newsletter-minimal";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroNewsletterMinimal
      heading="Stay in the loop"
      description="Get weekly insights, tips, and updates delivered straight to your inbox. Join 50,000+ subscribers who never miss a beat."
      inputPlaceholder="Enter your email"
      submitAction={{
        label: "Subscribe",
        href: "/subscribe",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      disclaimer="We respect your privacy. Unsubscribe anytime."
      stats={[
        {
          icon: (
            <DynamicIcon
              name="lucide/briefcase"
              size={24}
              className="text-primary"
            />
          ),
          value: "500+",
          label: "Projects Completed",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/users"
              size={24}
              className="text-primary"
            />
          ),
          value: "50M+",
          label: "Users Reached",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/star"
              size={24}
              className="text-primary"
            />
          ),
          value: "98%",
          label: "Client Satisfaction",
        },
      ]}
      background="dark"
    />
  );
}
