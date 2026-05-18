import { HeroUiLibraryShowcase } from "@opensite/ui/blocks/hero/hero-ui-library-showcase";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroUiLibraryShowcase
      logo={{
        src: "https://cdn.ing/assets/i/r/288973/lxkmf98s3bmpytziacx1o0rwuun9/ui-placeholder-logo-white-6.png",
        alt: "StartupCo Logo",
      }}
      heading="Beautiful components for modern apps"
      description="A comprehensive UI library with 100+ components. Built with accessibility, performance, and developer experience in mind."
      image={{
        src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        alt: "UI component showcase",
      }}
      actions={[
        {
          label: "Browse Components",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Docs",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/book-open" size={16} />,
        },
      ]}
      background="secondary"
      pattern="gridFadeTop"
      patternOpacity={0.1}
    />
  );
}
