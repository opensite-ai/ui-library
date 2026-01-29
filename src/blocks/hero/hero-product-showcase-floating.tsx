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
      actions={[
        {
          label: "Shop Now",
          href: "/shop",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/shopping-bag" size={16} />,
        },
        {
          label: "Learn More",
          href: "/product",
          variant: "outline",
        },
      ]}
      productImage={{ src: imagePlaceholders[103], alt: "Product showcase" }}
      spacing="xl"
    />
  );
}
