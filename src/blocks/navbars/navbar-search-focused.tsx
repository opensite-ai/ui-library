import { NavbarSearchFocused } from "@opensite/ui/blocks/navbars/navbar-search-focused";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarSearchFocused
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "SearchHub",
        alt: "SearchHub Logo",
      }}
      searchPlaceholder="Search products, docs, and more..."
      navItems={[
        { title: "Products", url: "#" },
        { title: "Solutions", url: "#" },
        { title: "Resources", url: "#" },
        { title: "Pricing", url: "#" },
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
