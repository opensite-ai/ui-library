import { HeroSplitGeometricShapes } from "@opensite/ui/blocks/hero/hero-split-geometric-shapes";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSplitGeometricShapes
      heading="Bold design for bold ideas"
      description="Stand out with striking visuals and modern aesthetics. Make a statement that resonates with your audience."
      actions={[
        {
          label: "Explore",
          href: "/explore",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Contact",
          href: "/contact",
          variant: "outline",
        },
      ]}
      images={[
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Modern design showcase",
        },
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Creative workspace",
        },
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Bold visual identity",
        },
        {
          src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
          alt: "Contemporary aesthetics",
        },
      ]}
      background="white"
      pattern="diagonalCrossBasic"
      patternOpacity={0.9}
    />
  );
}
