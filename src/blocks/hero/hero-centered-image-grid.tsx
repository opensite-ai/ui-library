import { HeroCenteredImageGrid } from "@opensite/ui/blocks/hero/hero-centered-image-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCenteredImageGrid
      heading="Visual storytelling at its finest"
      description="Showcase your work with beautiful grid layouts that capture attention and inspire action."
      actions={[
        {
          label: "View Gallery",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "#",
          variant: "outline",
        },
      ]}
      gridImages={[
        { src: "https://toastability-production.s3.amazonaws.com/sj8cs2gpbanaowqwxar1uhhwd23z", alt: "Project showcase" },
        { src: "https://toastability-production.s3.amazonaws.com/hu4gmd93sp95wdyr9qijze0rgim9", alt: "Studio workspace" },
      ]}
      background="dark"
      pattern="dashedGridFadeTop"
      patternOpacity={0.1}
      spacing="xl"
    />
  );
}
