import { HeroComingSoonCountdown } from "@opensite/ui/blocks/hero/hero-coming-soon-countdown";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroComingSoonCountdown
      badgeIcon="lucide/rocket"
      badgeText="Launching Soon"
      heading="Something amazing is on the way"
      description="Be the first to know when we launch. Sign up now for exclusive early access and special launch pricing."
      countdownItems={[
        { value: "24", label: "Days" },
        { value: "15", label: "Hours" },
        { value: "42", label: "Minutes" },
        { value: "08", label: "Seconds" },
      ]}
      emailPlaceholder="Enter your email"
      submitAction={{
        label: "Notify Me",
        href: "/subscribe",
        variant: "default",
      }}
      socialLinks={[
        { href: "https://twitter.com", iconName: "lucide/twitter" },
        { href: "https://facebook.com", iconName: "lucide/facebook" },
        { href: "https://instagram.com", iconName: "lucide/instagram" },
        { href: "https://linkedin.com", iconName: "lucide/linkedin" },
      ]}
      background="dark"
      spacing="xl"
    />
  );
}
