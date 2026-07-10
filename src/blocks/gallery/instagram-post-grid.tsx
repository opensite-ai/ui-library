import { InstagramPostGrid } from "@opensite/ui/blocks/gallery/instagram-post-grid";
import { imagePlaceholders, videoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <InstagramPostGrid
      heading="Follow us on Instagram"
      subheading="The latest from the kitchen, the counter, and everywhere in between."
      items={[
        {
          id: "1",
          href: "https://www.instagram.com/p/CxAmp1e001/",
          image: imagePlaceholders[0],
          imageAlt: "Fresh sourdough loaves cooling on a rack",
          caption: "Fresh out of the oven this morning 🥖",
          date: "Jul 8, 2026",
          likeCount: 1284,
          commentCount: 42,
        },
        {
          id: "2",
          href: "https://www.instagram.com/p/CxAmp1e002/",
          image: imagePlaceholders[1],
          imageAlt: "Behind the counter during the morning rush",
          caption: "Behind the counter during the Saturday rush.",
          date: "Jul 6, 2026",
          isVideo: true,
          videoUrl: videoPlaceholders[0],
          likeCount: 3902,
          commentCount: 118,
          viewCount: 48120,
        },
        {
          id: "3",
          href: "https://www.instagram.com/p/CxAmp1e003/",
          image: imagePlaceholders[2],
          imageAlt: "Plated seasonal special with garnish",
          caption: "This week's seasonal special is here 🍂",
          date: "Jul 4, 2026",
          likeCount: 876,
          commentCount: 23,
        },
        {
          id: "4",
          href: "https://www.instagram.com/p/CxAmp1e004/",
          image: imagePlaceholders[3],
          imageAlt: "Barista pouring latte art in slow motion",
          caption: "Latte art in slow motion — sound on ☕️",
          date: "Jul 2, 2026",
          isVideo: true,
          videoUrl: videoPlaceholders[1],
          likeCount: 5210,
          commentCount: 204,
          viewCount: 91340,
        },
        {
          id: "5",
          href: "https://www.instagram.com/p/CxAmp1e005/",
          image: imagePlaceholders[4],
          imageAlt: "The team gathered before opening",
          caption: "Meet the crew that makes it all happen.",
          date: "Jun 29, 2026",
          likeCount: 2044,
          commentCount: 67,
        },
        {
          id: "6",
          href: "https://www.instagram.com/p/CxAmp1e006/",
          image: imagePlaceholders[5],
          imageAlt: "Corner table set for dinner service",
          caption: "Your table is ready. See you tonight ✨",
          date: "Jun 27, 2026",
          likeCount: 1512,
          commentCount: 38,
        },
      ]}
      background="white"
      spacing="lg"
      pattern="gridFadeTopLeft"
      patternOpacity={1}
    />
  );
}
