import { HeroPatternLogoTechStack } from "@opensite/ui/blocks/hero/hero-pattern-logo-tech-stack";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPatternLogoTechStack
      logo={{ src: "https://cdn.ing/assets/i/r/287635/1tmeh86afyxszfz7hbmvcc0oct8w/logo-dark.png", alt: "Company Logo" }}
      heading="Built with the best technologies"
      description="Powered by cutting-edge tools and frameworks that developers love. Fast, reliable, and scalable."
      techLogos={[
        { src: "https://cdn.ing/assets/i/r/288964/4xdrg1wjc2knoy58ulqijicamar3/ui-placeholder-logo-dark-1.png", alt: "React" },
        { src: "https://cdn.ing/assets/i/r/288965/aw0n8ithqntxtfweqrlmseqlcak7/ui-placeholder-logo-black-2.png", alt: "TypeScript" },
        { src: "https://cdn.ing/assets/i/r/288972/kppvdeo8kgeweawxisqy9h9ybz6h/ui-placeholder-logo-black-3.png", alt: "Node.js" },
        { src: "https://cdn.ing/assets/i/r/288970/op9ys0gsyi7len3w742n0os7ebu6/ui-placeholder-logo-black-4.png", alt: "PostgreSQL" },
        { src: "https://cdn.ing/assets/i/r/288968/nn5xpkit7idgr7i6fa46ez3g9kwn/ui-placeholder-logo-black-5.png", alt: "Docker" },
        { src: "https://cdn.ing/assets/i/r/288974/dlb4c51kvgv6ncasqpgr2kvuma7y/ui-placeholder-logo-black-6.png", alt: "AWS" },
      ]}
      actions={[
        {
          label: "View Docs",
          href: "/docs",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "GitHub",
          href: "https://github.com",
          variant: "outline",
          icon: <DynamicIcon name="lucide/github" size={16} />,
        },
      ]}
      pattern="grid1"
      background="white"
      patternOpacity={0.9}
    />
  );
}
