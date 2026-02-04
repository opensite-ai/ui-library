import { InteriorCarousel } from "@opensite/ui/blocks/gallery/interior-carousel";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <InteriorCarousel
      heading="Interior Design Showcase"
      description="Explore our collection of beautifully designed spaces that blend functionality with aesthetics. From modern minimalism to classic elegance."
      images={[
        imagePlaceholders[120],
        imagePlaceholders[121],
        imagePlaceholders[122],
        imagePlaceholders[123],
        imagePlaceholders[124],
        imagePlaceholders[125],
        imagePlaceholders[126],
        imagePlaceholders[127],
      ]}
      loop={true}
      background="gray"
      spacing="pt-10 pb-20 md:pt-32 md:pb-32"
      pattern="gridFadeTop"
      patternOpacity={1}
    />
  );
}
