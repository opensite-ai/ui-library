import { imagePlaceholders } from "@/lib/media";
import { HeroSimpleCenteredImage } from "@opensite/ui/blocks/hero/hero-simple-centered-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSimpleCenteredImage
      heading="Clean, simple, effective"
      description="Sometimes less is more. Focus on what matters with our streamlined approach to design and functionality."
      imageSrc={imagePlaceholders[9]}
      imageAlt="Product showcase"
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      spacing="xl"
    />
  );
}
