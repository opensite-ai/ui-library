import { HeroConversationIntelligence } from "@opensite/ui/blocks/hero/hero-conversation-intelligence";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroConversationIntelligence
      headingPrimary="Unlock insights from"
      description="Analyze calls, meetings, and customer interactions with advanced AI. Get actionable insights that drive better decisions and outcomes."
      actions={[
        {
          label: "Start Analyzing",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Watch Demo",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/play-circle" size={16} />,
        },
      ]}
      image={{
        src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        alt: "Conversation intelligence dashboard",
      }}
      background="dark"
      pattern="gridFadeCenter"
      patternOpacity={0.25}
    />
  );
}
