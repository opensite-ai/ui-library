import { AboutMinimalStory } from "@opensite/ui/blocks/about/about-minimal-story";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <AboutMinimalStory
      author={{
        name: "Jessica Martinez",
        role: "Founder & CEO",
        avatar: {
          src: imagePlaceholders[72],
          alt: "Jessica Martinez",
        },
      }}
      title="A Letter From Our Founder"
      content={`When I started this company in 2015, I had a simple belief: technology should empower people, not overwhelm them.

After spending a decade in enterprise software, I saw firsthand how complex tools often created more problems than they solved. Teams struggled with bloated systems, users abandoned products out of frustration, and businesses lost sight of what mattered most—their customers.

So I set out to build something different. A company that puts simplicity at the center of everything we create. Where every feature earns its place by making someone's life easier, not just checking a box on a requirements document.

Today, we serve thousands of businesses worldwide, but our mission remains unchanged. We're still that scrappy team asking "does this actually help?" before shipping anything.

Thank you for being part of our journey.`}
      featuredImage={{
        src: imagePlaceholders[12],
        alt: "Team collaboration",
      }}
    />
  );
}
