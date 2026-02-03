import { NavbarTransparentOverlay } from "@opensite/ui/blocks/navbars/navbar-transparent-overlay";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarTransparentOverlay
      logo={{
        url: "/",
        src: brandLogoPlaceholders.white[0],
        title: "Portfolio",
        alt: "Portfolio Logo",
      }}
      navItems={[
        { title: "Work", url: "#" },
        { title: "About", url: "#" },
        { title: "Services", url: "#" },
        { title: "Contact", url: "#" },
      ]}
      authActions={[
        {
          label: "Let's Talk",
          variant: "outline",
          href: "#",
        },
      ]}
    />
  );
}
