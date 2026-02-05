import { FooterNewsletterContact } from "@opensite/ui/blocks/footers/footer-newsletter-contact";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterNewsletterContact
      newsletterTitle="Newsletter"
      newsletterDescription="Subscribe to receive exclusive deals, product launches, and insider tips delivered straight to your inbox every week."
      newsletterPlaceholder="Enter your email address"
      newsletterButtonText="Sign Up"
      footerLinks={[
        {
          title: "Shop",
          items: [
            { text: "New Arrivals", link: "/shop/new" },
            { text: "Best Sellers", link: "/shop/bestsellers" },
            { text: "Sale Items", link: "/shop/sale" },
            { text: "Gift Cards", link: "/shop/giftcards" },
            { text: "Collections", link: "/shop/collections" },
          ],
        },
        {
          title: "Customer Care",
          items: [
            { text: "Order Tracking", link: "/track-order" },
            { text: "Shipping & Returns", link: "/shipping" },
            { text: "Size Guide", link: "/size-guide" },
            { text: "FAQs", link: "/faq" },
            { text: "Contact Us", link: "/contact" },
          ],
        },
        {
          title: "About",
          items: [
            { text: "Our Story", link: "/about" },
            { text: "Sustainability", link: "/sustainability" },
            { text: "Store Locations", link: "/stores" },
            { text: "Careers", link: "/careers" },
            { text: "Press", link: "/press" },
          ],
        },
      ]}
      contactDetails={[
        {
          icon: "lucide/phone",
          text: "+1 (555) 123-4567",
          type: "phone",
          link: "+15551234567",
        },
        {
          icon: "lucide/mail",
          text: "support@fashionstore.com",
          type: "email",
          link: "support@fashionstore.com",
        },
        {
          icon: "lucide/map-pin",
          text: "123 Fashion Avenue, New York, NY 10001",
          type: "none",
        },
        {
          icon: "lucide/clock",
          text: "Mon-Fri: 9AM-8PM EST, Sat-Sun: 10AM-6PM EST",
          type: "none",
        },
      ]}
      socialLinks={[
        { icon: "simple-icons/instagram", link: "https://instagram.com/fashionstore", label: "Instagram" },
        { icon: "simple-icons/facebook", link: "https://facebook.com/fashionstore", label: "Facebook" },
        { icon: "simple-icons/pinterest", link: "https://pinterest.com/fashionstore", label: "Pinterest" },
        { icon: "simple-icons/tiktok", link: "https://tiktok.com/@fashionstore", label: "TikTok" },
      ]}
      logo={{
        light: brandLogoPlaceholders.black[2],
        dark: brandLogoPlaceholders.white[2],
        url: "/",
      }}
      copyright="© 2024 Fashion Store. All rights reserved. Designed with love in NYC."
      background="muted"
      spacing="lg"
    />
  );
}
