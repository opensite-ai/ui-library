import { AboutMinimalStory } from "@opensite/ui/blocks/about/about-minimal-story";

export default function Demo() {
  return (
    <AboutMinimalStory
      author={{
        name: "Jessica Martinez",
        role: "Founder & CEO",
        avatar: {
          src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
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
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
        alt: "Team collaboration",
      }}
    />
  );
}
