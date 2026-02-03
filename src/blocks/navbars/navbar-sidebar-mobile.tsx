import { NavbarSidebarMobile } from "@opensite/ui/blocks/navbars/navbar-sidebar-mobile";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarSidebarMobile
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "AppName",
        alt: "AppName Logo",
      }}
      menu={[
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Projects",
          items: [
            { title: "All Projects", url: "#" },
            { title: "Recent", url: "#" },
            { title: "Favorites", url: "#" },
          ],
        },
        {
          title: "Team",
          items: [
            { title: "Members", url: "#" },
            { title: "Invitations", url: "#" },
            { title: "Settings", url: "#" },
          ],
        },
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Settings",
          items: [
            { title: "Profile", url: "#" },
            { title: "Billing", url: "#" },
            { title: "Preferences", url: "#" },
          ],
        },
      ]}
      authActions={[
        {
          label: "Upgrade Plan",
          variant: "default",
          href: "#",
        },
      ]}
    />
  );
}
