import { HeroSoftwareGrowthVideoDialog } from "@opensite/ui/blocks/hero/hero-software-growth-video-dialog";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSoftwareGrowthVideoDialog
      heading="Accelerate your growth with data-driven insights"
      description="See how top companies use our platform to scale faster, make smarter decisions, and achieve sustainable growth."
      videoAction={{
        label: "Watch Demo",
        variant: "outline",
        iconAfter: <DynamicIcon name="lucide/play" size={16} />,
      }}
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "ghost",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      showcaseImages={[
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Growth metric 1" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Growth metric 2" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Growth metric 3" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Growth metric 4" },
      ]}
      modalVideo={{
        video: {
          src: "https://toastability-production.s3.amazonaws.com/4kox2ux0ye1wlqkdwg03s08a67i1",
          title: "See how it works",
        },
      }}
      background="dark"
    />
  );
}
