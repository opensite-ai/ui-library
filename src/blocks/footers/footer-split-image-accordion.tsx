import { FooterSplitImageAccordion } from "@opensite/ui/blocks/footers/footer-split-image-accordion";
import { imagePlaceholders, brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterSplitImageAccordion
      newsletterTitle="Join our community and save 20% on your first order"
      emailPlaceholder="Enter your email"
      footerLinks={[
        {
          title: "Collections",
          id: "collections",
          items: [
            { text: "New Arrivals", link: "#" },
            { text: "Best Sellers", link: "#" },
            { text: "Limited Edition", link: "#" },
            { text: "Sale Items", link: "#" },
            { text: "Gift Cards", link: "#" },
          ],
        },
        {
          title: "Customer Care",
          id: "customer-care",
          items: [
            { text: "Contact Us", link: "#" },
            { text: "Shipping Info", link: "#" },
            { text: "Returns & Exchanges", link: "#" },
            { text: "Size Guide", link: "#" },
            { text: "FAQ", link: "#" },
          ],
        },
        {
          title: "About Us",
          id: "about",
          items: [
            { text: "Our Story", link: "#" },
            { text: "Sustainability", link: "#" },
            { text: "Careers", link: "#" },
            { text: "Press", link: "#" },
            { text: "Store Locations", link: "#" },
          ],
        },
      ]}
      socialLinks={[
        {
          icon: "simple-icons/instagram",
          link: "https://instagram.com/brand",
          label: "Follow us on Instagram",
        },
        {
          icon: "simple-icons/facebook",
          link: "https://facebook.com/brand",
          label: "Like us on Facebook",
        },
        {
          icon: "simple-icons/pinterest",
          link: "https://pinterest.com/brand",
          label: "Follow us on Pinterest",
        },
        {
          icon: "simple-icons/tiktok",
          link: "https://tiktok.com/@brand",
          label: "Watch us on TikTok",
        },
        {
          icon: "simple-icons/x",
          link: "https://twitter.com/brand",
          label: "Follow us on X",
        },
      ]}
      paymentMethods={[
        "https://cdn.ing/assets/i/r/289200/visa-logo-payment-icon.svg",
        "https://cdn.ing/assets/i/r/289201/mastercard-logo-payment-icon.svg",
        "https://cdn.ing/assets/i/r/289202/amex-logo-payment-icon.svg",
        "https://cdn.ing/assets/i/r/289203/paypal-logo-payment-icon.svg",
        "https://cdn.ing/assets/i/r/289204/apple-pay-logo-payment-icon.svg",
        "https://cdn.ing/assets/i/r/289205/google-pay-logo-payment-icon.svg",
      ]}
      submenuLinks={[
        { text: "Terms of Service", link: "#" },
        { text: "Privacy Policy", link: "#" },
        { text: "Accessibility", link: "#" },
      ]}
      footerData={{
        image: {
          src: imagePlaceholders[45],
          alt: "Luxury champagne wall with ambient lighting",
        },
        logo: {
          light: brandLogoPlaceholders.black[5],
          dark: brandLogoPlaceholders.white[5],
        },
        logoUrl: "/",
        title: "Elevate Your Style",
        description:
          "Discover curated collections of premium fashion and lifestyle products. Quality craftsmanship meets timeless design.",
      }}
      copyright="© 2026 Elevate Brand. All rights reserved."
      background="white"
      spacing="none"
    />
  );
}
