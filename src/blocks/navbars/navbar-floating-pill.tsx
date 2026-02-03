import { NavbarFloatingPill } from "@opensite/ui/blocks/navbars/navbar-floating-pill";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarFloatingPill
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        alt: "Brand Logo",
      }}
      items={[
        { label: "Home", href: "#" },
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
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
