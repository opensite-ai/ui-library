import { NavbarTabbedSections } from "@opensite/ui/blocks/navbars/navbar-tabbed-sections";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarTabbedSections
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "TabbedNav",
        alt: "TabbedNav Logo",
      }}
      menu={[
        {
          title: "Products",
          tabs: [
            {
              id: "core-features",
              title: "Core Features",
              links: [
                { title: "Dashboard", url: "#", description: "Overview and insights" },
                { title: "Analytics", url: "#", description: "Data visualization" },
                { title: "Reports", url: "#", description: "Custom reporting" },
              ],
            },
            {
              id: "advanced",
              title: "Advanced",
              links: [
                { title: "Automation", url: "#", description: "Workflow automation" },
                { title: "Integrations", url: "#", description: "Connect your tools" },
              ],
            },
          ],
        },
        {
          title: "Solutions",
          tabs: [
            {
              id: "by-industry",
              title: "By Industry",
              links: [
                { title: "E-commerce", url: "#", description: "Online retail solutions" },
                { title: "SaaS", url: "#", description: "Software as a service" },
                { title: "Healthcare", url: "#", description: "Medical solutions" },
              ],
            },
            {
              id: "by-team",
              title: "By Team",
              links: [
                { title: "Marketing", url: "#", description: "Marketing teams" },
                { title: "Sales", url: "#", description: "Sales teams" },
              ],
            },
          ],
        },
        {
          title: "Resources",
          tabs: [
            {
              id: "learn",
              title: "Learn",
              links: [
                { title: "Documentation", url: "#", description: "Complete guides" },
                { title: "Tutorials", url: "#", description: "Step-by-step tutorials" },
                { title: "Blog", url: "#", description: "Latest updates" },
              ],
            },
          ],
        },
      ]}
      authActions={[
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
