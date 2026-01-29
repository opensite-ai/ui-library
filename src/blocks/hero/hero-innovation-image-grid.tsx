import { imagePlaceholders } from "@/lib/media";
import { HeroInnovationImageGrid } from "@opensite/ui/blocks/hero/hero-innovation-image-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroInnovationImageGrid
      heading="Pioneering the future of technology"
      description="Pushing boundaries and exploring new frontiers. Join us on our mission to shape tomorrow's world."
      action={{
        label: "Learn More",
        href: "/innovation",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      images={[
        { src: imagePlaceholders[27], alt: "Innovation 1" },
        { src: imagePlaceholders[28], alt: "Innovation 2" },
        { src: imagePlaceholders[29], alt: "Innovation 3" },
      ]}
      spacing="xl"
    />
  );
}
