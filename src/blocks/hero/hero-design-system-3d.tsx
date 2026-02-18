import { imagePlaceholders } from "@/lib/media";
import { HeroDesignSystem3d } from "@opensite/ui/blocks/hero/hero-design-system-3d";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroDesignSystem3d
      trustBadge="Design System"
      heading="Build with a comprehensive design system"
      description="Create consistent, beautiful interfaces with our complete set of components, patterns, and guidelines. Built for scale and flexibility."
      actions={[
        {
          label: "Explore Components",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Documentation",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/book-open" size={16} />,
        },
      ]}
      images={[
        { src: imagePlaceholders[100], alt: "Design system component 1" },
        { src: imagePlaceholders[101], alt: "Design system component 2" },
        { src: imagePlaceholders[102], alt: "Design system component 3" },
      ]}
      background="dark"
    />
  );
}
