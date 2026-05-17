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
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "#",
          variant: "link",
        },
      ]}
      images={[
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Feature 1" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Feature 2" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Feature 3" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Feature 4" },
      ]}
      background="dark"
      pattern="dashedGridFadeCenter"
      patternOpacity={0.25}
    />
  );
}
