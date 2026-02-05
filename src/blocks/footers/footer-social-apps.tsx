import { FooterSocialApps } from "@opensite/ui/blocks/footers/footer-social-apps";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterSocialApps
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[2],
        alt: "AppFlow Logo",
        title: "AppFlow",
      }}
      sections={[
        {
          title: "Platform",
          links: [
            { name: "Mobile Apps", href: "#mobile" },
            { name: "Web Apps", href: "#web" },
            { name: "Desktop Apps", href: "#desktop" },
            { name: "Extensions", href: "#extensions" },
            { name: "Marketplace", href: "#marketplace" },
          ],
        },
        {
          title: "Developers",
          links: [
            { name: "API Documentation", href: "#api-docs" },
            { name: "SDK Downloads", href: "#sdk" },
            { name: "Code Examples", href: "#examples" },
            { name: "Developer Forum", href: "#forum" },
            { name: "GitHub Repos", href: "#github" },
          ],
        },
        {
          title: "Company",
          links: [
            { name: "About", href: "#about" },
            { name: "Careers", href: "#careers" },
            { name: "News", href: "#news" },
            { name: "Brand Assets", href: "#brand" },
            { name: "Contact", href: "#contact" },
          ],
        },
      ]}
      socialLinks={[
        {
          href: "https://linkedin.com/company/innovatetech",
          label: "Connect with InnovateTech on LinkedIn",
        },
        {
          href: "https://twitter.com/innovatetech",
          label: "Follow InnovateTech on Twitter",
        },
        {
          href: "https://facebook.com/innovatetech",
          label: "Like InnovateTech on Facebook",
        },
        {
          href: "https://instagram.com/innovatetech",
          label: "Follow InnovateTech on Instagram",
        },
        {
          href: "https://youtube.com/@innovatetech",
          label: "Subscribe to InnovateTech on YouTube",
        },
      ]}
      appLinks={[
        {
          icon: "simple-icons/apple",
          href: "https://apps.apple.com/app/appflow",
          label: "Download on the App Store",
        },
        {
          icon: "simple-icons/googleplay",
          href: "https://play.google.com/store/apps/details?id=com.appflow",
          label: "Get it on Google Play",
        },
      ]}
      socialLabel="Connect With Us"
      appLabel="Download Our App"
      copyright="AppFlow Technologies"
      background="dark"
    />
  );
}
