import { FooterContactCard } from "@opensite/ui/blocks/footers/footer-contact-card";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterContactCard
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[1],
        alt: "Stellar Design Agency Logo",
        title: "Stellar Design",
      }}
      heading="Let's create something amazing together"
      email="hello@stellardesign.co"
      phone="+1 (555) 987-6543"
      address="567 Creative Boulevard, Suite 300, New York, NY 10001"
      socialLinks={[
        {
          icon: "simple-icons/instagram",
          href: "https://instagram.com/stellardesign",
          label: "Follow Stellar Design on Instagram",
        },
        {
          icon: "simple-icons/dribbble",
          href: "https://dribbble.com/stellardesign",
          label: "View our work on Dribbble",
        },
        {
          icon: "simple-icons/behance",
          href: "https://behance.net/stellardesign",
          label: "View our portfolio on Behance",
        },
        {
          icon: "simple-icons/linkedin",
          href: "https://linkedin.com/company/stellardesign",
          label: "Connect with us on LinkedIn",
        },
        {
          icon: "simple-icons/twitter",
          href: "https://twitter.com/stellardesign",
          label: "Follow us on Twitter",
        },
      ]}
      navLinks={[
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "About", href: "/about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ]}
      socialTitle="Follow our creative journey"
      location="New York, NY"
      locationLabel="Proudly based in"
      copyright="© 2026 Stellar Design Agency. All rights reserved."
      attributionText="Built with OpenSite"
      attributionHref="https://opensite.ai"
      background="white"
      spacing="xl"
      pattern="grid"
      patternOpacity={0.2}
    />
  );
}
