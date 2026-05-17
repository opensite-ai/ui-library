import { HeroProductShowcaseFloating } from "@opensite/ui/blocks/hero/hero-product-showcase-floating";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroProductShowcaseFloating
      badgeText="New Arrival"
      badgeIcon="lucide/sparkles"
      heading="Introducing our latest innovation"
      description="Experience the perfect blend of style, functionality, and cutting-edge technology. Designed to elevate your everyday."
      userCount={{
        count: "300+",
        label: "Websites Powered",
        avatars: [
          {
            src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            alt: "User Avatar 1",
          },
          {
            src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            alt: "User Avatar 2",
          },
          {
            src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            alt: "User Avatar 3",
          },
        ],
      }}
      floatingStat={{
        label: "Clients",
        value: "300+",
        icon: "lucide/users",
        position: "top-right",
      }}
      actions={[
        {
          label: "Shop Now",
          href: "#",
          variant: "default",
          size: "lg",
          iconAfter: <DynamicIcon name="lucide/shopping-bag" size={16} />,
        },
        {
          label: "Learn More",
          href: "#",
          size: "lg",
          variant: "outline",
        },
      ]}
      productImage={{ src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Product showcase" }}
      background="dark"
      pattern="diagonalCrossFadeTopLeft"
      patternOpacity={0.15}
    />
  );
}
