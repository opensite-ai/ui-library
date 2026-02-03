import { NavbarFeatureGrid } from "@opensite/ui/blocks/navbars/navbar-feature-grid";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarFeatureGrid
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "FeatureApp",
        alt: "FeatureApp Logo",
      }}
      features={[
        {
          title: "Real-time Analytics",
          description: "Monitor your business metrics in real-time",
          href: "#",
        },
        {
          title: "Team Collaboration",
          description: "Work together seamlessly with your team",
          href: "#",
        },
        {
          title: "Advanced Security",
          description: "Enterprise-grade security and compliance",
          href: "#",
        },
        {
          title: "API Integration",
          description: "Connect with your favorite tools and services",
          href: "#",
        },
        {
          title: "Custom Reports",
          description: "Generate detailed custom reports",
          href: "#",
        },
        {
          title: "24/7 Support",
          description: "Expert support whenever you need it",
          href: "#",
        },
      ]}
      authActions={[
        {
          label: "Log In",
          variant: "ghost",
          href: "#",
        },
        {
          label: "Try It Free",
          variant: "default",
          href: "#",
        },
      ]}
    />
  );
}
