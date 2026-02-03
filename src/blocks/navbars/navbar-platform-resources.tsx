import { NavbarPlatformResources } from "@opensite/ui/blocks/navbars/navbar-platform-resources";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarPlatformResources
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "DevPlatform",
        alt: "DevPlatform Logo",
      }}
      menuLinks={[
        {
          label: "Platform",
          layout: "simple-list",
          links: [
            {
              label: "Infrastructure",
              description: "Cloud infrastructure services",
              url: "#",
              iconName: "lucide/server",
            },
            {
              label: "Databases",
              description: "Managed database solutions",
              url: "#",
              iconName: "lucide/database",
            },
            {
              label: "APIs",
              description: "RESTful and GraphQL APIs",
              url: "#",
              iconName: "lucide/code",
            },
            {
              label: "Hosting",
              description: "Global edge network",
              url: "#",
              iconName: "lucide/globe",
            },
          ],
        },
        {
          label: "Resources",
          layout: "multi-section",
          dropdownGroups: [
            {
              label: "Documentation",
              links: [
                { label: "Getting Started", url: "#" },
                { label: "API Reference", url: "#" },
                { label: "Tutorials", url: "#" },
              ],
            },
            {
              label: "Community",
              links: [
                { label: "Forum", url: "#" },
                { label: "Discord", url: "#" },
                { label: "GitHub", url: "#" },
              ],
            },
            {
              label: "Support",
              links: [
                { label: "Help Center", url: "#" },
                { label: "Contact Us", url: "#" },
                { label: "Status Page", url: "#" },
              ],
            },
          ],
        },
      ]}
      actions={[
        {
          label: "Sign In",
          variant: "ghost",
          href: "#",
        },
        {
          label: "Deploy Now",
          variant: "default",
          href: "#",
        },
      ]}
    />
  );
}
