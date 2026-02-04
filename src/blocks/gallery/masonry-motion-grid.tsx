import { MasonryMotionGrid } from "@opensite/ui/blocks/gallery/masonry-motion-grid";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <MasonryMotionGrid
      title="Media Gallery"
      description="Explore our media gallery featuring a collection of stunning images arranged in a visually engaging layout. Each image is thoughtfully placed to create a harmonious balance of aesthetics and motion."
      column1Images={[
        {
          src: imagePlaceholders[0],
          alt: "Gallery image 1",
          height: "h-60",
        },
        {
          src: imagePlaceholders[1],
          alt: "Gallery image 2",
          height: "h-80",
        },
        {
          src: imagePlaceholders[2],
          alt: "Gallery image 3",
          height: "h-72",
        },
      ]}
      column2Images={[
        {
          src: imagePlaceholders[3],
          alt: "Gallery image 4",
          height: "h-72",
        },
        {
          src: imagePlaceholders[4],
          alt: "Gallery image 5",
          height: "h-60",
        },
        {
          src: imagePlaceholders[5],
          alt: "Gallery image 6",
          height: "h-80",
        },
      ]}
      column3Images={[
        {
          src: imagePlaceholders[6],
          alt: "Gallery image 7",
          height: "h-80",
        },
        {
          src: imagePlaceholders[7],
          alt: "Gallery image 8",
          height: "h-72",
        },
        {
          src: imagePlaceholders[8],
          alt: "Gallery image 9",
          height: "h-60",
        },
      ]}
      column4Images={[
        {
          src: imagePlaceholders[9],
          alt: "Gallery image 10",
          height: "h-72",
        },
        {
          src: imagePlaceholders[10],
          alt: "Gallery image 11",
          height: "h-80",
        },
        {
          src: imagePlaceholders[11],
          alt: "Gallery image 12",
          height: "h-60",
        },
      ]}
      animationDuration={0.5}
      animationDelayMultiplier={0.1}
      showDuplicateGrid={true}
      background="dark"
      spacing="py-12 md:py-40"
      pattern="gridDotsBasic"
      patternOpacity={0.2}
    />
  );
}
