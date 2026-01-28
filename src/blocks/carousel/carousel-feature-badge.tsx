import { CarouselFeatureBadge } from "@opensite/ui/blocks/carousel/carousel-feature-badge";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselFeatureBadge
      badge="Platform Features"
      heading="Everything you need to scale your SaaS business"
      description="From powerful analytics to seamless integrations, our platform provides all the tools you need to grow faster and serve customers better. Built for modern teams who demand excellence."
      background="dark"
      pattern="architect"
      patternOpacity={0.5}
      items={[
        {
          src: imagePlaceholders[23],
          alt: "Real-time Analytics Dashboard",
        },
        {
          src: imagePlaceholders[47],
          alt: "Team Collaboration Tools",
        },
        {
          src: imagePlaceholders[56],
          alt: "API Integration Hub",
        },
        {
          src: imagePlaceholders[79],
          alt: "Customer Success Portal",
        },
        {
          src: imagePlaceholders[92],
          alt: "Advanced Reporting Engine",
        },
        {
          src: imagePlaceholders[105],
          alt: "Security & Compliance Center",
        },
      ]}
    />
  );
}
