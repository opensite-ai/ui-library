import { AboutStoryGallery } from "@opensite/ui/blocks/about/about-story-gallery";

export default function Demo() {
  return (
    <AboutStoryGallery
      title="Our Journey in Pictures"
      description={`From our humble beginnings to where we are today, every milestone tells a story of growth, learning, and unwavering commitment to excellence.`}
      images={[
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Team collaboration session",
        },
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Office celebration",
        },
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Modern workspace",
        },
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Team workshop",
        },
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Conference presentation",
        },
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Team building event",
        },
      ]}
      pattern="squareAltGrid"
      patternOpacity={1}
      background="white"
    />
  );
}
