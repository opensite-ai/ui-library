import { videoPlaceholders } from "@/lib/media";
import { HeroVideoOverlayStars } from "@opensite/ui/blocks/hero/hero-video-overlay-stars";

export default function Demo() {
  return (
    <HeroVideoOverlayStars
      heading="Testimonials"
      description="Our CRM solution is designed to streamline your business operations and improve efficiency."
      actions={[
        {
          label: "Try It Free",
          href: "#",
          icon: "lucide/arrow-right",
        },
      ]}
      videoSrc={videoPlaceholders[2]}
      trust={{
        starCount: 5,
        message: "Trusted by 2,500+ customers worldwide",
      }}
    />
  );
}
