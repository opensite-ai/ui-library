import { BlurVignetteGrid } from "@opensite/ui/blocks/gallery/blur-vignette-grid";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <BlurVignetteGrid
      images={[
        { src: imagePlaceholders[0], alt: "Photo 1", colSpan: 2, height: "h-82" },
        { src: imagePlaceholders[1], alt: "Photo 2", colSpan: 3, height: "h-82" },
        { src: imagePlaceholders[2], alt: "Photo 3", colSpan: 3, height: "h-100" },
        { src: imagePlaceholders[3], alt: "Photo 4", colSpan: 2, height: "h-100" },
        { src: imagePlaceholders[4], alt: "Photo 5", colSpan: 2, height: "h-82" },
        { src: imagePlaceholders[5], alt: "Photo 6", colSpan: 3, height: "h-82" },
        { src: imagePlaceholders[6], alt: "Photo 7", colSpan: 5, height: "h-100" },
        { src: imagePlaceholders[7], alt: "Photo 8", colSpan: 3, height: "h-82" },
        { src: imagePlaceholders[8], alt: "Photo 9", colSpan: 2, height: "h-82" },
      ]}
      vignetteConfig={{
        radius: "24px",
        inset: "10px",
        transitionLength: "100px",
        blur: "15px",
      }}
      gridColumns={5}
      gridGap="gap-4"
      background="white"
      spacing="section"
    />
  );
}
