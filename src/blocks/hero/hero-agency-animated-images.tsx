import { imagePlaceholders } from "@/lib/media";
import { HeroAgencyAnimatedImages } from "@opensite/ui/blocks/hero/hero-agency-animated-images";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroAgencyAnimatedImages
      heading="Creative solutions for modern brands"
      description="Discover a platform that empowers you to create, collaborate, and achieve amazing results. Welcome to the future of work."
      actions={[
        {
          label: "View Our Work",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      images={[
        { src: imagePlaceholders[15], alt: "Project 1" },
        { src: imagePlaceholders[16], alt: "Project 2" },
        { src: imagePlaceholders[17], alt: "Project 3" },
        { src: imagePlaceholders[18], alt: "Project 4" },
      ]}
      background="gray"
    />
  );
}
