import { FooterBackgroundCard } from "@opensite/ui/blocks/footers/footer-background-card";
import { imagePlaceholders, brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterBackgroundCard
      logo={{
        url: "/",
        src: brandLogoPlaceholders.white[2],
        alt: "Company Logo",
        title: "Your Agency",
      }}
      backgroundImage={imagePlaceholders[45]}
      profileImage={imagePlaceholders[72]}
      tagline="Sarah Mitchell"
      personalMessage="With over 15 years of experience in digital strategy and creative direction, I'm dedicated to helping brands tell their story and connect with audiences in meaningful ways. Every project is an opportunity to create something extraordinary."
      ctaText="Let's Work Together"
      ctaUrl="#contact"
      menuItems={[
        {
          title: "Services",
          links: [
            { text: "Brand Strategy", url: "#" },
            { text: "Digital Marketing", url: "#" },
            { text: "Web Design", url: "#" },
            { text: "Content Creation", url: "#" },
            { text: "SEO Optimization", url: "#" },
          ],
        },
        {
          title: "Company",
          links: [
            { text: "About", url: "#" },
            { text: "Portfolio", url: "#" },
            { text: "Testimonials", url: "#" },
            { text: "Careers", url: "#" },
            { text: "Blog", url: "#" },
          ],
        },
        {
          title: "Resources",
          links: [
            { text: "Case Studies", url: "#" },
            { text: "White Papers", url: "#" },
            { text: "Free Tools", url: "#" },
            { text: "Newsletter", url: "#" },
            { text: "Events", url: "#" },
          ],
        },
      ]}
      contactTitle="Get In Touch"
      contact={{
        phone: "+1 (555) 123-4567",
        email: "hello@agency.com",
        location: "San Francisco, CA",
        timezone: "PST (UTC-8)",
      }}
      copyright="© 2026 Your Agency. All rights reserved."
      attributionText="Powered by Opensite AI"
      attributionHref="https://opensite.ai"
      bottomLinks={[
        { text: "Privacy Policy", url: "#" },
        { text: "Terms of Service", url: "#" },
        { text: "Cookies", url: "#" },
      ]}
      background="transparent"
      spacing="xl"
    />
  );
}
