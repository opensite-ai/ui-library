import { FooterCtaSocial } from "@opensite/ui/blocks/footers/footer-cta-social";

export default function Demo() {
  return (
    <FooterCtaSocial
      preHeading="Transform Your Business"
      heading="Let's build the future together"
      description="Partner with us to unlock unprecedented growth opportunities. Our team of experts is ready to help you achieve your most ambitious goals through innovative solutions and strategic guidance."
      buttonText="Schedule a Consultation"
      buttonUrl="/contact"
      email="partnerships@innovatetech.io"
      socialLinks={[
        {
          icon: "lucide/linkedin",
          url: "https://linkedin.com/company/innovatetech",
          label: "Connect with InnovateTech on LinkedIn",
        },
        {
          icon: "lucide/twitter",
          url: "https://twitter.com/innovatetech",
          label: "Follow InnovateTech on Twitter",
        },
        {
          icon: "lucide/facebook",
          url: "https://facebook.com/innovatetech",
          label: "Like InnovateTech on Facebook",
        },
        {
          icon: "lucide/instagram",
          url: "https://instagram.com/innovatetech",
          label: "Follow InnovateTech on Instagram",
        },
        {
          icon: "lucide/youtube",
          url: "https://youtube.com/@innovatetech",
          label: "Subscribe to InnovateTech on YouTube",
        },
      ]}
      copyright="© 2026 InnovateTech Solutions. All rights reserved worldwide."
      attributionText="Website by OpenSite"
      attributionHref="https://opensite.ai"
      background="gradient"
      spacing="xl"
      pattern="circuit-board"
      patternOpacity={0.1}
    />
  );
}
