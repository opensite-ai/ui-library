import { imagePlaceholders } from "@/lib/media";
import { HeroPremiumSplitAvatars } from "@opensite/ui/blocks/hero/hero-premium-split-avatars";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPremiumSplitAvatars
      brandName="Premium"
      brandSuffix="Community"
      heading="Join an exclusive community"
      description="Connect with like-minded professionals and gain access to premium resources, events, and networking opportunities."
      image={{ src: imagePlaceholders[125], alt: "Community gathering" }}
      action={{
        label: "Join Now",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" />,
      }}
      avatars={[
        { src: imagePlaceholders[6], fallback: "M1" },
        { src: imagePlaceholders[7], fallback: "M2" },
        { src: imagePlaceholders[9], fallback: "M3" },
      ]}
      socialProofText="5,000+ active members"
      background="muted"
      pattern="architect"
      patternOpacity={0.1}
    />
  );
}
