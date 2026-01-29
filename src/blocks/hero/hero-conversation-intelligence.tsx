import { imagePlaceholders } from "@/lib/media";
import { HeroConversationIntelligence } from "@opensite/ui/blocks/hero/hero-conversation-intelligence";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroConversationIntelligence
      headingPrimary="Unlock insights from"
      headingHighlight="every conversation"
      description="Analyze calls, meetings, and customer interactions with advanced AI. Get actionable insights that drive better decisions and outcomes."
      actions={[
        {
          label: "Start Analyzing",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Watch Demo",
          href: "/demo",
          variant: "outline",
          icon: <DynamicIcon name="lucide/play-circle" size={16} />,
        },
      ]}
      image={{ src: imagePlaceholders[75], alt: "Conversation intelligence dashboard" }}
      spacing="xl"
    />
  );
}
