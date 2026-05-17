import { HeroSharedInboxLayered } from "@opensite/ui/blocks/hero/hero-shared-inbox-layered";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSharedInboxLayered
      eyebrow="Team Inbox"
      heading="Collaborate on every customer conversation"
      description="Shared inbox that brings your team together. Assign emails, add notes, and deliver exceptional customer support together."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "#",
          variant: "ghost",
        },
      ]}
      layeredImages={{
        backgroundImage: {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Shared inbox background",
        },
        foregroundImage: {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Inbox foreground",
        },
      }}
      background="dark"
      pattern="dashedGridFadeCenter"
      patternOpacity={0.25}
    />
  );
}
