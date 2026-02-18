import { HeroComingSoonCountdown } from "@opensite/ui/blocks/hero/hero-coming-soon-countdown";
import moment from "moment";

export default function Demo() {
  return (
    <HeroComingSoonCountdown
      badgeIcon="lucide/rocket"
      badgeText="Launching Soon"
      heading="Something amazing is on the way"
      description="Be the first to know when we launch. Sign up now for exclusive early access and special launch pricing."
      countdownDate={moment().add(3, "weeks").toDate()}
      emailPlaceholder="Enter your email"
      submitAction={{
        label: "Notify Me",
        href: "/subscribe",
        variant: "default",
      }}
      socialLinks={[
        { href: "https://twitter.com" },
        { href: "https://facebook.com" },
        { href: "https://instagram.com" },
        { href: "https://linkedin.com" },
      ]}
      background="gray"
      spacing="xl"
    />
  );
}
