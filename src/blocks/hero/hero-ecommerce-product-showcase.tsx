import { imagePlaceholders } from "@/lib/media";
import { HeroEcommerceProductShowcase } from "@opensite/ui/blocks/hero/hero-ecommerce-product-showcase";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroEcommerceProductShowcase
      badgeText="New Collection"
      heading="Premium products for modern living"
      description="Discover our curated collection of handpicked items designed to elevate your everyday life. Quality craftsmanship, timeless style."
      actions={[
        {
          label: "Shop Now",
          href: "/shop",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/shopping-bag" size={16} />,
        },
        {
          label: "View Lookbook",
          href: "/lookbook",
          variant: "outline",
        },
      ]}
      images={[
        { src: imagePlaceholders[104], alt: "Product 1" },
        { src: imagePlaceholders[105], alt: "Product 2" },
        { src: imagePlaceholders[106], alt: "Product 3" },
        { src: imagePlaceholders[107], alt: "Product 4" },
      ]}
      spacing="xl"
    />
  );
}
