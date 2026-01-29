import { imagePlaceholders } from "@/lib/media";
import { HeroWelcomeAsymmetricImages } from "@opensite/ui/blocks/hero/hero-welcome-asymmetric-images";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroWelcomeAsymmetricImages
      heading="Where innovation meets creativity"
      description="Discover a platform that empowers you to create, collaborate, and achieve amazing results. Welcome to the future of work."
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "/about",
          variant: "outline",
        },
      ]}
      images={[
        { src: imagePlaceholders[34], alt: "Feature 1" },
        { src: imagePlaceholders[35], alt: "Feature 2" },
        { src: imagePlaceholders[36], alt: "Feature 3" },
        { src: imagePlaceholders[37], alt: "Feature 4" },
      ]}
      spacing="xl"
    />
  );
}
