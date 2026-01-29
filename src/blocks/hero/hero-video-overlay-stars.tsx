import { HeroVideoOverlayStars } from "@opensite/ui/blocks/hero/hero-video-overlay-stars";

export default function Demo() {
  return (
    <HeroVideoOverlayStars
      heading="Rated 5 stars by our customers"
      action={{
        label: "Try It Free",
        href: "/signup",
        icon: "lucide/arrow-right",
      }}
      trust={{
        starCount: 5,
        message: "Trusted by 2,500+ customers worldwide",
      }}
      spacing="xl"
    />
  );
}
