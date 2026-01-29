import { imagePlaceholders } from "@/lib/media";
import { HeroTaskTimerAnimated } from "@opensite/ui/blocks/hero/hero-task-timer-animated";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroTaskTimerAnimated
      heading="Track time, boost productivity"
      actions={[
        {
          label: "Start Tracking",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Features",
          href: "/features",
          variant: "outline",
        },
      ]}
      images={[
        { src: imagePlaceholders[15], alt: "Timer interface" },
        { src: imagePlaceholders[16], alt: "Task tracking" },
      ]}
      spacing="xl"
    />
  );
}
