import { FooterAnimatedSocial } from "@opensite/ui/blocks/footers/footer-animated-social";

export default function Demo() {
  return (
    <FooterAnimatedSocial
      heading="Let's Create Something Amazing Together"
      description="We're passionate about building innovative solutions that make a difference. Partner with us to bring your vision to life and transform the way people interact with technology."
      ctaText="Start Your Project"
      ctaUrl="#contact"
      socialLinks={[
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "Dribbble", href: "https://dribbble.com" },
        { label: "Behance", href: "https://behance.net" },
      ]}
      copyright="© 2026 Creative Studio. All rights reserved."
      attributionText="Built with Opensite AI"
      attributionHref="https://opensite.ai"
      background="dark"
      spacing="xl"
      pattern="dots"
      patternOpacity={0.3}
    />
  );
}
