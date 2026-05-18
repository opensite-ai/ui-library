import { HeroPatternLogoTechStack } from "@opensite/ui/blocks/hero/hero-pattern-logo-tech-stack";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPatternLogoTechStack
      logo={{ src: "https://cdn.ing/assets/i/r/287635/1tmeh86afyxszfz7hbmvcc0oct8w/logo-dark.png", alt: "Company Logo" }}
      heading="Built with the best technologies"
      description="Powered by cutting-edge tools and frameworks that developers love. Fast, reliable, and scalable."
      techLogos={[
        { src: "https://toastability-production.s3.amazonaws.com/z9u4sdrj2oq3eds0qyui0nxsus3j", alt: "React" },
        { src: "https://toastability-production.s3.amazonaws.com/63aotyt2pb4gqpccej2kkw8reson", alt: "TypeScript" },
        { src: "https://toastability-production.s3.amazonaws.com/pjgb223h1bjywdk15i3zi7pjhutg", alt: "Node.js" },
        { src: "https://toastability-production.s3.amazonaws.com/we9r4e711an6d0bd3dwbl9tb9z7q", alt: "PostgreSQL" },
        { src: "https://toastability-production.s3.amazonaws.com/f8rfrurzo743ym1s7m5xtbombunz", alt: "Docker" },
        { src: "https://toastability-production.s3.amazonaws.com/oe0y4bgiylx81fbfvsw31mhdgjzs", alt: "AWS" },
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
