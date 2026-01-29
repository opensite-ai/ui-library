import { CarouselGalleryThumbnails } from "@opensite/ui/blocks/carousel/carousel-gallery-thumbnails";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselGalleryThumbnails
      images={[
        {
          src: imagePlaceholders[14],
          alt: "Modern minimalist living room with floor-to-ceiling windows",
        },
        {
          src: imagePlaceholders[29],
          alt: "Gourmet kitchen with marble countertops and custom cabinetry",
        },
        {
          src: imagePlaceholders[41],
          alt: "Luxurious master bedroom with city skyline views",
        },
        {
          src: imagePlaceholders[58],
          alt: "Spa-inspired bathroom with rainfall shower and soaking tub",
        },
        {
          src: imagePlaceholders[66],
          alt: "Private rooftop terrace with outdoor entertainment area",
        },
        {
          src: imagePlaceholders[82],
          alt: "Home office with built-in shelving and natural light",
        },
        {
          src: imagePlaceholders[97],
          alt: "Elegant dining room with designer lighting fixtures",
        },
        {
          src: imagePlaceholders[108],
          alt: "Fitness center with state-of-the-art equipment",
        },
      ]}
      autoPlay
      autoPlayInterval={6000}
      showThumbnails={true}
      pattern="squareAltGrid"
      patternOpacity={0.25}
      background="dark"
    />
  );
}
