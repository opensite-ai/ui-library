import { imagePlaceholders } from "@/lib/media";
import { HeroGradientAvatarsRating } from "@opensite/ui/blocks/hero/hero-gradient-avatars-rating";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroGradientAvatarsRating
      heading="Loved by thousands of users"
      description="Join our community of satisfied customers and experience the difference. Rated 4.9/5 by over 10,000 users."
      actions={[
        {
          label: "Start Free Trial",
          href: "#",
          variant: "outline",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Read Reviews",
          href: "#",
          variant: "ghost",
          icon: <DynamicIcon name="lucide/star" size={16} />,
        },
      ]}
      avatars={[
        { src: imagePlaceholders[1], alt: "User 1" },
        { src: imagePlaceholders[2], alt: "User 2" },
        { src: imagePlaceholders[3], alt: "User 3" },
        { src: imagePlaceholders[4], alt: "User 4" },
      ]}
      images={[
        { src: imagePlaceholders[100], alt: "Hero 1" },
        { src: imagePlaceholders[101], alt: "Hero 2" },
      ]}
      ratingValue="4.9"
      ratingLabel="10,000+ happy users"
      background="gradient"
      pattern="gridFadeTopLeft"
      patternOpacity={0.15}
    />
  );
}
