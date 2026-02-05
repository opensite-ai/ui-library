import { FooterSocialNewsletter } from "@opensite/ui/blocks/footers/footer-social-newsletter";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterSocialNewsletter
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[4],
        alt: "CloudSync Logo",
        title: "CloudSync",
      }}
      sections={[
        {
          title: "Product",
          links: [
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "Enterprise", href: "#enterprise" },
            { name: "Security", href: "#security" },
            { name: "Integrations", href: "#integrations" },
          ],
        },
        {
          title: "Resources",
          links: [
            { name: "Documentation", href: "#docs" },
            { name: "API Reference", href: "#api" },
            { name: "Guides & Tutorials", href: "#guides" },
            { name: "Changelog", href: "#changelog" },
            { name: "System Status", href: "#status" },
          ],
        },
        {
          title: "Community",
          links: [
            { name: "Blog", href: "#blog" },
            { name: "Events", href: "#events" },
            { name: "Developer Forum", href: "#forum" },
            { name: "Customer Stories", href: "#stories" },
            { name: "Open Source", href: "#opensource" },
          ],
        },
        {
          title: "Company",
          links: [
            { name: "About Us", href: "#about" },
            { name: "Careers", href: "#careers" },
            { name: "Press", href: "#press" },
            { name: "Partners", href: "#partners" },
            { name: "Contact", href: "#contact" },
          ],
        },
      ]}
      socialLinks={[
        {
          icon: "simple-icons/x",
          href: "https://twitter.com/cloudsync",
          label: "Follow us on X",
        },
        {
          icon: "simple-icons/linkedin",
          href: "https://linkedin.com/company/cloudsync",
          label: "Connect on LinkedIn",
        },
        {
          icon: "simple-icons/github",
          href: "https://github.com/cloudsync",
          label: "Star us on GitHub",
        },
        {
          icon: "simple-icons/discord",
          href: "https://discord.gg/cloudsync",
          label: "Join our Discord",
        },
        {
          icon: "simple-icons/youtube",
          href: "https://youtube.com/@cloudsync",
          label: "Subscribe on YouTube",
        },
      ]}
      newsletterLabel="Subscribe to our newsletter"
      newsletterPlaceholder="Enter your email address"
      newsletterButtonText="Subscribe"
      privacyConsentText="By subscribing, you agree to our"
      privacyLinkText="Privacy Policy"
      privacyLinkUrl="#privacy"
      copyright="© 2026 CloudSync Corporation. All rights reserved."
      attributionText="Built with OpenSite"
      attributionHref="https://opensite.ai"
      background="muted"
      spacing="xl"
    />
  );
}
