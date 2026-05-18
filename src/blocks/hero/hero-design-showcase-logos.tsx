import { HeroDesignShowcaseLogos } from "@opensite/ui/blocks/hero/hero-design-showcase-logos";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroDesignShowcaseLogos
      heading="Trusted by leading brands worldwide"
      description="Join thousands of companies who have transformed their design workflow with our platform."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Case Studies",
          href: "#",
          variant: "outline",
        },
      ]}
      logos={[
        { src: "https://toastability-production.s3.amazonaws.com/1xdx70c7gp9l883soyh5d3exesvt", alt: "Partner 1" },
        { src: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c", alt: "Partner 2" },
        { src: "https://toastability-production.s3.amazonaws.com/n001o4pfpszmyw03ubctig7kvf0e", alt: "Partner 3" },
        { src: "https://toastability-production.s3.amazonaws.com/l080sx0lcx51x44dqrb8006nqf08", alt: "Partner 4" },
        { src: "https://toastability-production.s3.amazonaws.com/2t36c7l0ywchaz4nys8yj2l5amae", alt: "Partner 5" },
        { src: "https://toastability-production.s3.amazonaws.com/gg5qnvb4nsl2k3g4dw4ls8bsllwh", alt: "Partner 6" },
      ]}
      background="gray"
      pattern="gridFadeTop"
      patternOpacity={0.9}
    />
  );
}
