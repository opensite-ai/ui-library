import { imagePlaceholders } from "@/lib/media";
import { HeroAdaptableProductGrid } from "@opensite/ui/blocks/hero/hero-adaptable-product-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroAdaptableProductGrid
      heading="Flexible product displays that adapt to your brand"
      description="Create stunning product showcases with our adaptable grid system. Perfect for e-commerce, portfolios, and catalogs."
      action={{
        label: "Browse Products",
        href: "/products",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/shopping-cart" size={16} />,
      }}
      imageSrc={imagePlaceholders[10]}
      imageAlt="Product showcase"
      spacing="xl"
    />
  );
}
