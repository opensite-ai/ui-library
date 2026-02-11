import { imagePlaceholders } from "@/lib/media";
import { HeroSharedInboxLayered } from "@opensite/ui/blocks/hero/hero-shared-inbox-layered";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSharedInboxLayered
      subtitle="Team Inbox"
      heading="Collaborate on every customer conversation"
      description="Shared inbox that brings your team together. Assign emails, add notes, and deliver exceptional customer support together."
      layeredImages={{
        backgroundImage: {
          src: imagePlaceholders[113],
          alt: "Shared inbox background",
        },
        foregroundImage: {
          src: imagePlaceholders[110],
          alt: "Inbox foreground",
        },
      }}
    />
  );
}
