import { imagePlaceholders } from "@/lib/media";
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
            src: imagePlaceholders[1],
            alt: "User Avatar 1",
          },
          {
            src: imagePlaceholders[2],
            alt: "User Avatar 2",
          },
          {
            src: imagePlaceholders[3],
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
      productImage={{ src: imagePlaceholders[103], alt: "Product showcase" }}
      background="dark"
      pattern="diagonalCrossFadeTopLeft"
      patternOpacity={0.15}
    />
  );
}
