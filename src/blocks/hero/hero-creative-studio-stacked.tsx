import { imagePlaceholders, videoPlaceholders } from "@/lib/media";
import { HeroCreativeStudioStacked } from "@opensite/ui/blocks/hero/hero-creative-studio-stacked";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCreativeStudioStacked
      heading="Where creativity meets innovation"
      description="Award-winning creative studio specializing in brand identity, digital experiences, and visual storytelling that makes an impact."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "#",
          variant: "link",
        },
      ]}
      videoDialog={{
        videoUrl: videoPlaceholders[25],
        title: "See how it works",
      }}
      images={[
        { src: imagePlaceholders[78], alt: "Project 1" },
        { src: imagePlaceholders[79], alt: "Project 2" },
        { src: imagePlaceholders[80], alt: "Project 3" },
      ]}
    />
  );
}
