import { NavbarImagePreview } from "@opensite/ui/blocks/navbars/navbar-image-preview";
import { brandLogoPlaceholders, imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarImagePreview
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "Design Studio",
        alt: "Design Studio Logo",
      }}
      navigation={[
        {
          title: "Services",
          links: [
            {
              label: "Brand Identity",
              description: "Complete brand design packages",
              url: "#",
              image: imagePlaceholders[20],
            },
            {
              label: "Web Design",
              description: "Modern and responsive websites",
              url: "#",
              image: imagePlaceholders[21],
            },
            {
              label: "UI/UX Design",
              description: "User-centered design solutions",
              url: "#",
              image: imagePlaceholders[22],
            },
            {
              label: "Motion Graphics",
              description: "Engaging animated content",
              url: "#",
              image: imagePlaceholders[23],
            },
          ],
        },
        {
          title: "Portfolio",
          url: "#",
        },
        {
          title: "About",
          url: "#",
        },
        {
          title: "Contact",
          url: "#",
        },
      ]}
      authActions={[
        {
          label: "Get a Quote",
          variant: "default",
          href: "#",
        },
      ]}
    />
  );
}
