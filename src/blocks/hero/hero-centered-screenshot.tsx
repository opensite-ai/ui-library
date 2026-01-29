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
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "See Plans",
          href: "/pricing",
          variant: "outline",
        },
      ]}
      imageSrc={imagePlaceholders[70]}
      imageAlt="Product interface screenshot"
      spacing="xl"
    />
  );
}
