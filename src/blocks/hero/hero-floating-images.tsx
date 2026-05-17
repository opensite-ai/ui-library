import { HeroFloatingImages } from "@opensite/ui/blocks/hero/hero-floating-images";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroFloatingImages
      badge="Featured Work"
      heading="Build Stunning Websites with OpenSite UI"
      description="We design and build beautiful digital products that help brands connect with their audience. From concept to launch, we bring visions to life."
      actions={[
        {
          label: "View Portfolio",
          href: "/portfolio",
          size: "lg",
          variant: "default",
          iconAfter: (
            <DynamicIcon name="lucide/arrow-right" className="h-4 w-4" />
          ),
        },
        {
          label: "Our Process",
          href: "/process",
          size: "lg",
          variant: "link",
        },
      ]}
      images={[
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Floating Image 1",
          className: "rounded-lg shadow-lg",
        },
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Floating Image 2",
          className: "rounded-lg shadow-lg",
        },
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Floating Image 3",
          className: "rounded-lg shadow-lg",
        },
      ]}
      optixFlowConfig={{ apiKey: "os-bcf1c82f-0c47-49ec-a303-807eec0a25c6" }}
      className="flex items-center justify-center"
      background="dark"
      pattern="gridFadeBottomLeft"
      patternOpacity={0.15}
    />
  );
}
