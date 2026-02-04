import { CarouselScaleFocus } from "@opensite/ui/blocks/gallery/carousel-scale-focus";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselScaleFocus
      title="Architectural Highlights"
      description="A curated selection of stunning architectural designs that showcase innovation, creativity, and functionality in modern construction."
      images={[
        {
          src: imagePlaceholders[80],
          alt: "Modern Architecture",
        },
        {
          src: imagePlaceholders[81],
          alt: "Creative Workspace",
        },
        {
          src: imagePlaceholders[82],
          alt: "Urban Design",
        },
        {
          src: imagePlaceholders[83],
          alt: "Interior Spaces",
        },
        {
          src: imagePlaceholders[84],
          alt: "Natural Light",
        },
        {
          src: imagePlaceholders[85],
          alt: "Minimalist Design",
        },
        {
          src: imagePlaceholders[86],
          alt: "Architectural Details",
        },
      ]}
      startIndex={1}
      background="dark"
      spacing="xl"
      pattern="dashedGridBasic"
      patternOpacity={0.15}
    />
  );
}
