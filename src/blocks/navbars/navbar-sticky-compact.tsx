import { NavbarStickyCompact } from "@opensite/ui/blocks/navbars/navbar-sticky-compact";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarStickyCompact
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        alt: "Brand Logo",
      }}
      menu={[
        { title: "Home", url: "#" },
        { title: "Features", url: "#" },
        { title: "Pricing", url: "#" },
        { title: "About", url: "#" },
        { title: "Blog", url: "#" },
      ]}
      authActions={[
        {
          label: "Login",
          variant: "ghost",
          size: "sm",
          href: "#",
        },
        {
          label: "Sign Up",
          variant: "default",
          size: "sm",
          href: "#",
        },
      ]}
    />
  );
}
