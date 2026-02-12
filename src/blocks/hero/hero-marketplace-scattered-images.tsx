import { imagePlaceholders } from "@/lib/media";
import { HeroMarketplaceScatteredImages } from "@opensite/ui/blocks/hero/hero-marketplace-scattered-images";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroMarketplaceScatteredImages
      heading="Discover unique items from creators worldwide"
      description="Shop handcrafted goods, vintage treasures, and one-of-a-kind products from talented makers and collectors."
      action={{
        label: "Browse Marketplace",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      images={[
        { src: imagePlaceholders[34], alt: "Product 1" },
        { src: imagePlaceholders[36], alt: "Product 2" },
        { src: imagePlaceholders[37], alt: "Product 3" },
        { src: imagePlaceholders[38], alt: "Product 4" },
        { src: imagePlaceholders[39], alt: "Product 5" },
        { src: imagePlaceholders[40], alt: "Product 6" },
      ]}
      background="gray"
      pattern="gridDotsBasic"
      patternOpacity={1}
    />
  );
}
