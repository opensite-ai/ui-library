import { brandLogoPlaceholders, imagePlaceholders } from "@/lib/media";
import { HeroTechCarousel } from "@opensite/ui/blocks/hero/hero-tech-carousel";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroTechCarousel
      spacing="mt-8 md:mt-0"
      items={[
        {
          logo: {
            src: brandLogoPlaceholders.white[0],
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
            { src: imagePlaceholders[0], alt: "" },
            { src: imagePlaceholders[5], alt: "" },
            { src: imagePlaceholders[10], alt: "" },
          ],
        },
        {
          logo: {
            src: brandLogoPlaceholders.white[1],
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
            { src: imagePlaceholders[74], alt: "" },
            { src: imagePlaceholders[52], alt: "" },
            { src: imagePlaceholders[110], alt: "" },
          ],
        },
        {
          logo: {
            src: brandLogoPlaceholders.white[2],
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
            { src: imagePlaceholders[88], alt: "" },
            { src: imagePlaceholders[99], alt: "" },
            { src: imagePlaceholders[130], alt: "" },
          ],
        },
      ]}
    />
  );
}
