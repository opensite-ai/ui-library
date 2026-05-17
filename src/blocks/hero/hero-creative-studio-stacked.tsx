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
        videoUrl: "https://toastability-production.s3.amazonaws.com/4kox2ux0ye1wlqkdwg03s08a67i1",
        title: "See how it works",
      }}
      images={[
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Project 1" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Project 2" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Project 3" },
      ]}
      background="dark"
      pattern="dashedGridFadeTopRight"
      patternOpacity={0.25}
    />
  );
}
