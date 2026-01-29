import { imagePlaceholders } from "@/lib/media";
import { HeroAgencyAnimatedImages } from "@opensite/ui/blocks/hero/hero-agency-animated-images";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroAgencyAnimatedImages
      subheading="Award-Winning Agency"
      heading="Creative solutions for modern brands"
      action={{
        label: "View Our Work",
        href: "/portfolio",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      images={[
        { src: imagePlaceholders[15], alt: "Project 1" },
        { src: imagePlaceholders[16], alt: "Project 2" },
        { src: imagePlaceholders[17], alt: "Project 3" },
      ]}
      spacing="xl"
    />
  );
}
