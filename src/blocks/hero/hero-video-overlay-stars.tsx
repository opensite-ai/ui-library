import { masterPlaylistUrls, videoPlaceholders } from "@/lib/media";
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
      backgroundVideo={{
        video: {
          masterPlaylistUrl:
            "https://octane.cdn.ing/api/v1/video/58e2b1e3-e1e2-50ee-81e3-62ff540b6115/master_playlist",
          fallbackSrc:
            "https://octane.cdn.ing/api/v1/video/58e2b1e3-e1e2-50ee-81e3-62ff540b6115/progressive.mp4",
          src: "https://toastability-production.s3.amazonaws.com/7bjxoh95etcr699ztg0593d043gq",
          optixFlowApiKey: "os-bcf1c82f-0c47-49ec-a303-807eec0a25c6",
        },
      }}
      trust={{
        starCount: 5,
        message: "Trusted by 2,500+ customers worldwide",
      }}
    />
  );
}
