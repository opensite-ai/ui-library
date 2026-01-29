import { imagePlaceholders } from "@/lib/media";
import { FeatureSplitImage } from "@opensite/ui/blocks/features/feature-split-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FeatureSplitImage
      title="Build Faster, Ship Smarter"
      description="Accelerate your development workflow with our comprehensive component library. Hundreds of production-ready components built with React, TypeScript, and Tailwind CSS help you launch in days, not months."
      imageSrc={imagePlaceholders[45]}
      imageAlt="Development workflow visualization"
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Components",
          href: "/components",
          variant: "outline",
        },
      ]}
      spacing="xl"
    />
  );
}
