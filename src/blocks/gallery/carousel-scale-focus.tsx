import { CarouselScaleFocus } from "@opensite/ui/blocks/gallery/carousel-scale-focus";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselScaleFocus
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
      background="white"
      spacing="section"
    />
  );
}
