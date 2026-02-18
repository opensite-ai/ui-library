import { videoPlaceholders } from "@/lib/media";
import { HeroVideoOverlayStars } from "@opensite/ui/blocks/hero/hero-video-overlay-stars";

export default function Demo() {
  return (
    <HeroVideoOverlayStars
      heading="Rated 5 stars by our customers"
      actions={[
        {
          label: "Try It Free",
          href: "#",
          icon: "lucide/arrow-right",
        },
      ]}
      videoSrc={videoPlaceholders[19]}
      trust={{
        starCount: 5,
        message: "Trusted by 2,500+ customers worldwide",
      }}
    />
  );
}
