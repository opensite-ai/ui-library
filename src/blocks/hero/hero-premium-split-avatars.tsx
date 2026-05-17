import { HeroPremiumSplitAvatars } from "@opensite/ui/blocks/hero/hero-premium-split-avatars";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPremiumSplitAvatars
      brandName="Premium"
      brandSuffix="Community"
      heading="Join an exclusive community"
      description="Connect with like-minded professionals and gain access to premium resources, events, and networking opportunities."
      image={{ src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", alt: "Community gathering" }}
      action={{
        label: "Join Now",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" />,
      }}
      avatars={[
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", fallback: "M1" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", fallback: "M2" },
        { src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp", fallback: "M3" },
      ]}
      socialProofText="5,000+ active members"
      background="muted"
      pattern="architect"
      patternOpacity={0.1}
    />
  );
}
