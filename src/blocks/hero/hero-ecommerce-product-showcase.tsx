import { imagePlaceholders } from "@/lib/media";
import { HeroEcommerceProductShowcase } from "@opensite/ui/blocks/hero/hero-ecommerce-product-showcase";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroEcommerceProductShowcase
      badgeText="New Collection"
      badgeIcon="lucide/star"
      heading="Premium products for modern living"
      description="Discover our curated collection of handpicked items designed to elevate your everyday life. Quality craftsmanship, timeless style."
      actions={[
        {
          label: "Shop Now",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/shopping-bag" size={16} />,
        },
        {
          label: "View Lookbook",
          href: "#",
          variant: "outline",
        },
      ]}
      stats={[
        {
          icon: (
            <DynamicIcon
              name="lucide/briefcase"
              size={24}
              className="text-primary"
            />
          ),
          value: "500+",
          label: "Projects Completed",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/users"
              size={24}
              className="text-primary"
            />
          ),
          value: "50M+",
          label: "Users Reached",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/star"
              size={24}
              className="text-primary"
            />
          ),
          value: "98%",
          label: "Client Satisfaction",
        },
      ]}
      images={[
        { src: imagePlaceholders[104], alt: "Product 1" },
        { src: imagePlaceholders[105], alt: "Product 2" },
        { src: imagePlaceholders[106], alt: "Product 3" },
        { src: imagePlaceholders[107], alt: "Product 4" },
      ]}
      background="gray"
    />
  );
}
