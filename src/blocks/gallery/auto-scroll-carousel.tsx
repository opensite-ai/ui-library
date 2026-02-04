import { AutoScrollCarousel } from "@opensite/ui/blocks/gallery/auto-scroll-carousel";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <AutoScrollCarousel
      heading="Bringing your data to life with AI"
      description="Our team of data scientists and AI engineers transform complex datasets into actionable insights that drive business growth and innovation."
      action={{
        label: "Explore our solutions",
        href: "#",
      }}
      images={[
        { src: imagePlaceholders[0], alt: "Team collaboration" },
        { src: imagePlaceholders[1], alt: "Data analytics dashboard" },
        { src: imagePlaceholders[2], alt: "AI model training" },
        { src: imagePlaceholders[3], alt: "Research and development" },
        { src: imagePlaceholders[4], alt: "Innovation workshop" },
        { src: imagePlaceholders[5], alt: "Technology showcase" },
        { src: imagePlaceholders[6], alt: "Product demonstration" },
        { src: imagePlaceholders[7], alt: "Client presentation" },
        { src: imagePlaceholders[8], alt: "Team meeting" },
        { src: imagePlaceholders[9], alt: "Office environment" },
        { src: imagePlaceholders[10], alt: "Creative workspace" },
        { src: imagePlaceholders[11], alt: "Team collaboration" },
      ]}
      autoScrollSpeed={0.5}
      background="gray"
      spacing="pt-6 pb-20 md:pt-32 md:pb-32"
      pattern="gridDotsBasic"
      patternOpacity={1}
    />
  );
}
