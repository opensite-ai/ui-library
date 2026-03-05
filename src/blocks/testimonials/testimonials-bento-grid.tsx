import { TestimonialsBentoGrid } from "@opensite/ui/blocks/testimonials/testimonials-bento-grid";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsBentoGrid
      heading="Trusted by Industry Leaders"
      description="See what our customers have to say about transforming their businesses"
      testimonials={[
        {
          quote:
            "This platform completely transformed how we approach customer engagement. The AI-powered insights have given us a competitive edge we didn't think possible. Our conversion rates have tripled, and customer retention is at an all-time high.",
          author: "Alexandra Bennett",
          role: "Chief Marketing Officer",
          company: "Growth Dynamics",
          avatarSrc: imagePlaceholders[23],
          featured: true,
          linkConfig: {
            href: "#",
            label: "Read Full Case Study",
          },
        },
        {
          quote:
            "Implementation was seamless. The support team guided us every step, and we saw results within weeks.",
          author: "James Wilson",
          role: "Operations Director",
          company: "Streamline Co",
          avatarSrc: imagePlaceholders[45],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
        {
          quote:
            "The ROI has been incredible. We've reduced operational costs by 35% while improving service quality.",
          author: "Priya Sharma",
          role: "CFO",
          company: "FinTech Innovations",
          avatarSrc: imagePlaceholders[67],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
        {
          quote:
            "Our team loves the intuitive interface. Onboarding new members takes minutes instead of days.",
          author: "Michael Torres",
          role: "Engineering Lead",
          company: "CodeCraft",
          avatarSrc: imagePlaceholders[89],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
        {
          quote:
            "The automation capabilities have freed up 20 hours per week for strategic work. Game changer.",
          author: "Lisa Chang",
          role: "Product Manager",
          company: "InnovateTech",
          avatarSrc: imagePlaceholders[102],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
        {
          quote:
            "We've seen a complete transformation in how we serve our customers. Response times are down, satisfaction is up, and our team loves using it daily.",
          author: "Dr. Rachel Foster",
          role: "VP of Operations",
          company: "CustomerFirst Inc",
          avatarSrc: imagePlaceholders[83],
          linkConfig: {
            href: "#",
            label: "Read More",
          },
        },
      ]}
      background="gray"
      pattern="gridFadeTop"
      spacing="lg"
    />
  );
}
