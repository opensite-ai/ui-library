import { NavbarSplitCta } from "@opensite/ui/blocks/navbars/navbar-split-cta";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarSplitCta
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "StartupCo",
        alt: "StartupCo Logo",
      }}
      menu={[
        { title: "Product", url: "#" },
        { title: "Features", url: "#" },
        { title: "Pricing", url: "#" },
        { title: "Company", url: "#" },
      ]}
      primaryCta={{
        label: "Start Free Trial",
        url: "#",
      }}
      secondaryCta={{
        label: "Book a Demo",
        url: "#",
      }}
    />
  );
}
