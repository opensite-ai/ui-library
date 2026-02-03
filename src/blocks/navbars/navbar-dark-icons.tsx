import { NavbarDarkIcons } from "@opensite/ui/blocks/navbars/navbar-dark-icons";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarDarkIcons
      logo={{
        url: "/",
        src: brandLogoPlaceholders.white[0],
        title: "Developer Platform",
        alt: "Developer Platform Logo",
      }}
      navigation={[
        {
          title: "Products",
          links: [
            {
              label: "API Gateway",
              description: "Manage your APIs efficiently",
              url: "#",
              iconName: "lucide/server",
              iconColor: "#3b82f6",
            },
            {
              label: "Database",
              description: "Scalable cloud database",
              url: "#",
              iconName: "lucide/database",
              iconColor: "#8b5cf6",
            },
            {
              label: "Authentication",
              description: "Secure user authentication",
              url: "#",
              iconName: "lucide/shield",
              iconColor: "#10b981",
            },
            {
              label: "Storage",
              description: "Cloud file storage",
              url: "#",
              iconName: "lucide/hard-drive",
              iconColor: "#f59e0b",
            },
          ],
        },
        {
          title: "Resources",
          links: [
            {
              label: "Documentation",
              description: "Comprehensive guides",
              url: "#",
              iconName: "lucide/book-open",
              iconColor: "#06b6d4",
            },
            {
              label: "API Reference",
              description: "Complete API documentation",
              url: "#",
              iconName: "lucide/code",
              iconColor: "#ec4899",
            },
            {
              label: "Community",
              description: "Join our community",
              url: "#",
              iconName: "lucide/users",
              iconColor: "#14b8a6",
            },
          ],
        },
        {
          title: "Pricing",
          url: "#",
        },
      ]}
      authActions={[
        {
          label: "Deploy App",
          variant: "default",
          href: "#",
        },
      ]}
      githubUrl="https://github.com/vercel/next.js"
    />
  );
}
