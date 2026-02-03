import { NavbarSimpleLinks } from "@opensite/ui/blocks/navbars/navbar-simple-links";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarSimpleLinks
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "SimpleSite",
        alt: "SimpleSite Logo",
      }}
      navItems={[
        { name: "Home", link: "#" },
        { name: "About", link: "#" },
        { name: "Services", link: "#" },
        { name: "Portfolio", link: "#" },
        { name: "Contact", link: "#" },
      ]}
      defaultActiveItem="Home"
      actions={[
        {
          label: "Get in Touch",
          variant: "default",
          href: "#",
        },
      ]}
    />
  );
}
