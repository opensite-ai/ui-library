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
        { src: "https://toastability-production.s3.amazonaws.com/sj8cs2gpbanaowqwxar1uhhwd23z", alt: "Gallery 1" },
        { src: "https://toastability-production.s3.amazonaws.com/hu4gmd93sp95wdyr9qijze0rgim9", alt: "Gallery 2" },
        { src: "https://toastability-production.s3.amazonaws.com/uh2vd59np82h8sevbmfnsha89sf1", alt: "Gallery 3" },
        { src: "https://toastability-production.s3.amazonaws.com/gxs6zevccphti0hdq5l9fwytprpr", alt: "Gallery 4" },
        { src: "https://toastability-production.s3.amazonaws.com/s4vho0wfbjhf758oife8qfuekou8", alt: "Gallery 5" },
        { src: "https://toastability-production.s3.amazonaws.com/1b0gd8ul22q799d62dvm3sgyll85", alt: "Gallery 6" },
      ]}
      background="dark"
      pattern="dashedGridFadeTop"
      patternOpacity={0.1}
      spacing="xl"
    />
  );
}
