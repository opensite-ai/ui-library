import { imagePlaceholders, videoPlaceholders } from "@/lib/media";
import { HeroCreativeStudioStacked } from "@opensite/ui/blocks/hero/hero-creative-studio-stacked";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCreativeStudioStacked
      heading="Where creativity meets innovation"
      description="Award-winning creative studio specializing in brand identity, digital experiences, and visual storytelling that makes an impact."
      videoAction={{
        label: "Watch Demo",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/play" size={16} />,
      }}
      actions={[
        {
          label: "Learn More",
          href: "#",
          variant: "outline",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
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
      background="dark"
      pattern="dashedGridFadeTopRight"
      patternOpacity={0.25}
    />
  );
}
