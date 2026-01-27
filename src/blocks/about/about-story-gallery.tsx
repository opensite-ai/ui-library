import { AboutStoryGallery } from "@opensite/ui/blocks/about/about-story-gallery";

export default function Demo() {
  return (
    <AboutStoryGallery
      title="Our Journey in Pictures"
      description={`From our humble beginnings to where we are today, every milestone tells a story of growth, learning, and unwavering commitment to excellence.

These moments capture the spirit of who we are—a team that celebrates wins together, learns from challenges, and never stops pushing forward.`}
      images={[
        {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
          alt: "Team collaboration session",
        },
        {
          src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
          alt: "Office celebration",
        },
        {
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
          alt: "Modern workspace",
        },
        {
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
          alt: "Team workshop",
        },
        {
          src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
          alt: "Conference presentation",
        },
        {
          src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
          alt: "Team building event",
        },
      ]}
    />
  );
}
