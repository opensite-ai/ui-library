import { AboutStoryGallery } from "@opensite/ui/blocks/about/about-story-gallery";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <AboutStoryGallery
      title="Our Journey in Pictures"
      description={`From our humble beginnings to where we are today, every milestone tells a story of growth, learning, and unwavering commitment to excellence.`}
      images={[
        {
          src: imagePlaceholders[12],
          alt: "Team collaboration session",
        },
        {
          src: imagePlaceholders[27],
          alt: "Office celebration",
        },
        {
          src: imagePlaceholders[45],
          alt: "Modern workspace",
        },
        {
          src: imagePlaceholders[16],
          alt: "Team workshop",
        },
        {
          src: imagePlaceholders[63],
          alt: "Conference presentation",
        },
        {
          src: imagePlaceholders[94],
          alt: "Team building event",
        },
      ]}
      pattern="squareAltGrid"
      patternOpacity={1}
      background="white"
    />
  );
}
