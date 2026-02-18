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
      floatingStat={{
        label: "CLients",
        value: "300+",
        icon: "lucide/users",
        position: "top-right",
      }}
      actions={[
        {
          label: "Shop Now",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/shopping-bag" size={16} />,
        },
        {
          label: "Learn More",
          href: "#",
          variant: "outline",
        },
      ]}
      productImage={{ src: imagePlaceholders[103], alt: "Product showcase" }}
      spacing="xl"
      background="gray"
    />
  );
}
