import { HeroTechCarousel } from "@opensite/ui/blocks/hero/hero-tech-carousel";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroTechCarousel
      spacing="mt-8 md:mt-0"
      items={[
        {
          logo: {
            src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            alt: "InsuranceSite",
          },
          title: "InsuranceSite",
          content:
            "Modern broker tooling that helps independent agents close policies faster.",
          actions: [
            {
              label: "Get Started",
              href: "#",
              variant: "default",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
          backgroundMedia: [
            { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "" },
            { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "" },
            { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "" },
          ],
        },
        {
          logo: {
            src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            alt: "RealtorSite",
          },
          title: "RealtorSite",
          content:
            "Built for high-volume listing agents who want a beautiful site without the busywork.",
          actions: [
            {
              label: "Get Started",
              href: "#",
              variant: "default",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
          backgroundMedia: [
            { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "" },
            { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "" },
            { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "" },
          ],
        },
        {
          logo: {
            src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
            alt: "CastKit",
          },
          title: "CastKit",
          content:
            "AI-powered podcast production from raw recording to publish-ready episode.",
          actions: [
            {
              label: "Get Started",
              href: "#",
              variant: "default",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
          backgroundMedia: [
            { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "" },
            { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "" },
            { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "" },
          ],
        },
      ]}
    />
  );
}
