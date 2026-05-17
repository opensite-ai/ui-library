import { HeroOverlayCtaGrid } from "@opensite/ui/blocks/hero/hero-overlay-cta-grid";

export default function Demo() {
  return (
    <HeroOverlayCtaGrid
      heading="Choose your path"
      backgroundImage={"https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp"}
      description="Multiple ways to engage with our platform. Select the option that best fits your needs."
      spacing="none"
      cards={[
        {
          label: "New Features",
          subtitle: "New AI features to automate workflows",
          icon: "lucide/bot",
          href: "#",
        },
        {
          label: "Automation",
          subtitle: "Dedicated agents to help streamline tasks",
          icon: "lucide/bell",
          href: "#",
        },
        {
          label: "Performance",
          subtitle: "Enterprise speed for all business sizes",
          icon: "lucide/bolt",
          href: "#",
        },
      ]}
    />
  );
}
