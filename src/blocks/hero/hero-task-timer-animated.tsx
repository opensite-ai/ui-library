import { HeroTaskTimerAnimated } from "@opensite/ui/blocks/hero/hero-task-timer-animated";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroTaskTimerAnimated
      heading="Track time, boost productivity"
      description="Stay focused and manage your time effectively with our intuitive task timer. Perfect for work, study, or any activity that requires dedicated focus."
      taskItems={[
        "Design mockups",
        "Code review",
        "Write documentation",
        "Ship feature",
      ]}
      timerMinutes={25}
      actions={[
        {
          label: "Start Tracking",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Features",
          href: "#",
          variant: "outline",
        },
      ]}
      background="dark"
      pattern="gridFadeTopLeft"
      patternOpacity={0.1}
    />
  );
}
