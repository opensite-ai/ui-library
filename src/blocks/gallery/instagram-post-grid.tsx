import { InstagramPostGrid } from "@opensite/ui/blocks/gallery/instagram-post-grid";
import { igPosts } from "@/lib/media";

/**
 * Instagram post grid fed from the shared `igPosts` library in `@/lib/media`
 * (21 re-hosted production posts: 8 reels with poster thumbnails + 13 photos).
 * The explicit selection includes six videos and two images while filling the
 * desktop 4-column grid cleanly.
 */
export default function Demo() {
  return (
    <InstagramPostGrid
      heading="Follow us on Instagram"
      subheading="The latest from the kitchen, the counter, and everywhere in between."
      username="acmecafe"
      items={[
        igPosts[0],
        igPosts[8],
        igPosts[1],
        igPosts[2],
        igPosts[3],
        igPosts[9],
        igPosts[4],
        igPosts[5],
      ]}
      background="dark"
      pattern="gridFadeTopLeft"
      patternOpacity={0.1}
    />
  );
}
