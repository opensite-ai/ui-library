import { FooterAccordionSocial } from "@opensite/ui/blocks/footers/footer-accordion-social";
import { brandLogoPlaceholders } from "@/lib/media";
import { usePlatformFromUrl } from "@opensite/hooks/usePlatformFromUrl";

export default function Demo() {
  const platform = usePlatformFromUrl("https://www.youtube.com/@iamthedelo");

  return (
    <FooterAccordionSocial
      logo={{
        light: brandLogoPlaceholders.black[0],
        dark: brandLogoPlaceholders.white[0],
        url: "/",
      }}
      newsletterTitle="Stay Connected With Us"
      newsletterDescription="Get the latest updates on new collections, exclusive offers, and insider news delivered straight to your inbox."
      footerLinks={[
        {
          title: "Shop",
          id: "shop",
          items: [
            { text: "New Arrivals", href: "#" },
            { text: "Best Sellers", href: "#" },
            { text: "Sale Items", href: "#" },
            { text: "Gift Cards", href: "#" },
            { text: "Collections", href: "#" },
          ],
        },
        {
          title: "Company",
          id: "company",
          items: [
            { text: "About Us", href: "#" },
            { text: "Our Story", href: "#" },
            { text: "Careers", href: "#" },
            { text: "Press", href: "#" },
            { text: "Blog", href: "#" },
          ],
        },
        {
          title: "Support",
          id: "support",
          items: [
            { text: "Help Center", href: "#" },
            { text: "Shipping Info", href: "#" },
            { text: "Returns", href: "#" },
            { text: "Size Guide", href: "#" },
            { text: "Track Order", href: "#" },
          ],
        },
      ]}
      socialLinks={[
        {
          href: "https://facebook.com",
          label: "Follow us on Facebook",
        },
        {
          href: "https://instagram.com",
          label: "Follow us on Instagram",
        },
        {
          href: "https://twitter.com",
          label: "Follow us on Twitter",
        },
        {
          href: "https://pinterest.com",
          label: "Follow us on Pinterest",
        },
        {
          href: "https://youtube.com",
          label: `Subscribe to our YouTube channel: ${platform}`,
        },
      ]}
      copyright="Your Brand"
      background="gray"
    />
  );
}
