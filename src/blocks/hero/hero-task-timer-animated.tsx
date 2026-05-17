import { HeroTaskTimerAnimated } from "@opensite/ui/blocks/hero/hero-task-timer-animated";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroTaskTimerAnimated
      heading="Track time, boost productivity"
      description="Stay focused and manage your time effectively with our intuitive task timer. Perfect for work, study, or any activity that requires dedicated focus."
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
      images={[
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Timer interface" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Task tracking" },
      ]}
      background="dark"
      pattern="gridFadeTopLeft"
      patternOpacity={0.1}
    />
  );
}
