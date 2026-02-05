import { FooterNewsletterMinimal } from "@opensite/ui/blocks/footers/footer-newsletter-minimal";

export default function Demo() {
  return (
    <FooterNewsletterMinimal
      heading="Let's build something extraordinary together"
      supportLabel="Need help with your project?"
      supportEmail="hello@designstudio.co"
      navLinks={[
        { label: "Work", href: "/work" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ]}
      socialLinks={[
        { label: "Dribbble", href: "https://dribbble.com/designstudio" },
        { label: "Behance", href: "https://behance.net/designstudio" },
        { label: "Instagram", href: "https://instagram.com/designstudio" },
        { label: "Twitter", href: "https://twitter.com/designstudio" },
        { label: "LinkedIn", href: "https://linkedin.com/company/designstudio" },
      ]}
      footerLinks={[
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Cookies", href: "/cookies" },
        { label: "Accessibility", href: "/accessibility" },
      ]}
      newsletterLabel="Join our creative community"
      newsletterPlaceholder="YOUR EMAIL ADDRESS"
      brandText="DESIGN STUDIO"
      copyright="© 2024 Design Studio Co. Creative excellence since 2015."
      attributionText="Site crafted with OpenSite"
      attributionHref="https://opensite.ai"
      location="San Francisco, California & Remote Worldwide"
      background="dark"
      spacing="xl"
    />
  );
}
