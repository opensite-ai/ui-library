import { HeroGradientClientFocused } from "@opensite/ui/blocks/hero/hero-gradient-client-focused";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroGradientClientFocused
      heading="Your success is our mission"
      description="We're dedicated to helping you achieve your goals with personalized support, expert guidance, and proven strategies."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "outline",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Talk to Sales",
          href: "#",
          variant: "ghost",
          icon: <DynamicIcon name="lucide/phone" size={16} />,
        },
      ]}
      image={{ src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Client success" }}
      background="gradient"
    />
  );
}
