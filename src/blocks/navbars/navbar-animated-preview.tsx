import { NavbarAnimatedPreview } from "@opensite/ui/blocks/navbars/navbar-animated-preview";
import { brandLogoPlaceholders, imagePlaceholders } from "@/lib/media";
import { DynamicIcon } from "@opensite/ui";

export default function Demo() {
  return (
    <NavbarAnimatedPreview
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        alt: "Company Logo",
      }}
      menuLinks={[
        {
          label: "Products",
          layout: "animated-image-preview",
          links: [
            {
              label: "Analytics Platform",
              description: "Real-time data insights and reporting",
              image: imagePlaceholders[0],
              url: "#",
              iconName: "lucide/bar-chart",
            },
            {
              label: "Marketing Suite",
              description: "Complete marketing automation tools",
              image: imagePlaceholders[1],
              url: "#",
              iconName: "lucide/megaphone",
            },
            {
              label: "CRM System",
              description: "Customer relationship management",
              image: imagePlaceholders[2],
              url: "#",
              iconName: "lucide/users",
            },
            {
              label: "API Platform",
              description: "Developer-friendly APIs",
              image: imagePlaceholders[3],
              url: "#",
              iconName: "lucide/code",
            },
          ],
        },
        {
          label: "Solutions",
          layout: "featured-cards-grid",
          featuredLinks: [
            {
              label: "Enterprise",
              description: "Scale your business with enterprise solutions",
              url: "#",
              iconName: "lucide/building",
              background: imagePlaceholders[4],
            },
            {
              label: "Small Business",
              description: "Perfect tools for growing companies",
              url: "#",
              iconName: "lucide/briefcase",
              background: imagePlaceholders[5],
            },
          ],
          links: [
            {
              label: "E-Commerce",
              description: "Online store solutions",
              url: "#",
              iconName: "lucide/shopping-cart",
            },
            {
              label: "Healthcare",
              description: "HIPAA-compliant solutions",
              url: "#",
              iconName: "lucide/heart-pulse",
            },
            {
              label: "Education",
              description: "Learning management systems",
              url: "#",
              iconName: "lucide/graduation-cap",
            },
            {
              label: "Finance",
              description: "Secure financial tools",
              url: "#",
              iconName: "lucide/wallet",
            },
          ],
        },
        {
          label: "Developers",
          layout: "grouped-links-image",
          groupLinks: [
            {
              label: "Documentation",
              links: [
                {
                  label: "Getting Started",
                  description: "Quick start guide",
                  url: "#",
                  iconName: "lucide/book-open",
                },
                {
                  label: "API Reference",
                  description: "Complete API docs",
                  url: "#",
                  iconName: "lucide/file-text",
                },
              ],
            },
            {
              label: "Resources",
              links: [
                {
                  label: "Code Examples",
                  description: "Sample implementations",
                  url: "#",
                  iconName: "lucide/code-2",
                },
                {
                  label: "SDKs & Tools",
                  description: "Developer tools",
                  url: "#",
                  iconName: "lucide/package",
                },
              ],
            },
          ],
          imageLink: {
            label: "New: API v2.0 Released",
            image: imagePlaceholders[6],
            url: "#",
          },
        },
        {
          label: "Pricing",
          href: "#",
        },
      ]}
      actions={[
        {
          label: "Sign In",
          variant: "ghost",
          href: "#",
        },
        {
          label: "Get Started",
          variant: "default",
          href: "#",
        },
      ]}
    />
  );
}
