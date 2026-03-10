import { TestimonialsTwitterCards } from "@opensite/ui/blocks/testimonials/testimonials-twitter-cards";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsTwitterCards
      heading="Buzz on Social Media"
      description="See what people are saying about us on social media. Real feedback from real users sharing their experiences and excitement about our product."
      testimonials={[
        {
          content:
            "Just started using this platform and I'm blown away by how intuitive everything is. Game changer for my workflow! 🚀",
          author: "Alexandra Martinez",
          handle: "@alexmartinez",
          avatarSrc: imagePlaceholders[25],
          linkConfig: {
            href: "https://twitter.com",
            label: "View Post",
          },
        },
        {
          content:
            "Best tool I've discovered this year. The team behind it really cares about user experience and it shows.",
          author: "David Park",
          handle: "@davidpark_dev",
          avatarSrc: imagePlaceholders[40],
          linkConfig: {
            href: "https://twitter.com",
            label: "View Post",
          },
        },
        {
          content:
            "After trying 5 different solutions, this is the only one that actually works as advertised. Highly recommend! 💯",
          author: "Sarah Williams",
          handle: "@swilliams_tech",
          avatarSrc: imagePlaceholders[55],
          linkConfig: {
            href: "https://instagram.com",
            label: "View Post",
          },
        },
        {
          content:
            "The customer support is phenomenal. Got a response within minutes and they walked me through everything. A+ service!",
          author: "Marcus Johnson",
          handle: "@marcusj",
          avatarSrc: imagePlaceholders[70],
          linkConfig: {
            href: "https://facebook.com",
            label: "View Post",
          },
        },
        {
          content:
            "Finally, a product that delivers on performance promises. Been using it for 3 months and zero issues. Solid!",
          author: "Jennifer Chen",
          handle: "@jchen_designs",
          avatarSrc: imagePlaceholders[85],
          linkConfig: {
            href: "https://linkedin.com",
            label: "View Post",
          },
        },
        {
          content:
            "The pricing is incredibly fair for what you get. ROI was clear within the first month. Great value! 👏",
          author: "Robert Anderson",
          handle: "@randerson_biz",
          avatarSrc: imagePlaceholders[100],
          linkConfig: {
            href: "https://linkedin.com",
            label: "View Post",
          },
        },
      ]}
      background="dark"
      pattern="gradientGlowBottom"
      spacing="lg"
    />
  );
}
