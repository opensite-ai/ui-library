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
            { text: "New Arrivals", link: "#" },
            { text: "Best Sellers", link: "#" },
            { text: "Sale Items", link: "#" },
            { text: "Gift Cards", link: "#" },
            { text: "Collections", link: "#" },
          ],
        },
        {
          title: "Company",
          id: "company",
          items: [
            { text: "About Us", link: "#" },
            { text: "Our Story", link: "#" },
            { text: "Careers", link: "#" },
            { text: "Press", link: "#" },
            { text: "Blog", link: "#" },
          ],
        },
        {
          title: "Support",
          id: "support",
          items: [
            { text: "Help Center", link: "#" },
            { text: "Shipping Info", link: "#" },
            { text: "Returns", link: "#" },
            { text: "Size Guide", link: "#" },
            { text: "Track Order", link: "#" },
          ],
        },
        {
          title: "Contact",
          id: "contact",
          items: [
            { text: "Customer Service", type: "default", link: "#" },
            { text: "Email Us", type: "email", email: "support@example.com" },
            { text: "Store Locations", link: "#" },
            {
              text: "Wholesale Inquiries",
              type: "email",
              email: "wholesale@example.com",
            },
          ],
        },
      ]}
      socialLinks={[
        {
          icon: "simple-icons/facebook",
          link: "https://facebook.com",
          label: "Follow us on Facebook",
        },
        {
          icon: "simple-icons/instagram",
          link: "https://instagram.com",
          label: "Follow us on Instagram",
        },
        {
          icon: "simple-icons/twitter",
          link: "https://twitter.com",
          label: "Follow us on Twitter",
        },
        {
          icon: "simple-icons/pinterest",
          link: "https://pinterest.com",
          label: "Follow us on Pinterest",
        },
        {
          icon: "simple-icons/youtube",
          link: "https://youtube.com",
          label: `Subscribe to our YouTube channel: ${platform}`,
        },
      ]}
      copyright="© 2026 Your Brand. All rights reserved."
      background="gray"
      spacing="xl"
    />
  );
}
