import { imagePlaceholders } from "@/lib/media";
import { HeroCenteredScreenshot } from "@opensite/ui/blocks/hero/hero-centered-screenshot";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCenteredScreenshot
      heading="The all-in-one platform for modern teams"
      description="Everything you need to collaborate, communicate, and create amazing work together. Simple, powerful, and built for the way you work."
      actions={[
        {
          label: "Try It Free",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" />,
          asButton: true,
          size: "lg",
        },
        {
          label: "See Plans",
          href: "#",
          variant: "ghost",
          asButton: true,
          size: "lg",
        },
      ]}
      imageSrc={imagePlaceholders[70]}
      imageAlt="Product interface screenshot"
      background="gray"
      pattern="gridBasic"
      patternOpacity={1}
    />
  );
}
