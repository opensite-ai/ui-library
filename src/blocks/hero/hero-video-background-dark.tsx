import { videoPlaceholders } from "@/lib/media";
import { HeroVideoBackgroundDark } from "@opensite/ui/blocks/hero/hero-video-background-dark";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroVideoBackgroundDark
      badgeText="Immersive Experience"
      heading="Make an unforgettable first impression"
      description="Captivate your audience with stunning video backgrounds that tell your story in motion."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Explore",
          href: "#",
          variant: "outline",
        },
      ]}
      backgroundVideo={{
        video: {
          masterPlaylistUrl:
            "https://cdn.ing/assets/video/uploads/283390/hls/38857/master.m3u8",
          fallbackSrc:
            "https://toastability-production.s3.amazonaws.com/eliix1g2jzj7gp9pe2srfquuyt0d",
          optixFlowApiKey: "os-bcf1c82f-0c47-49ec-a303-807eec0a25c6",
        },
      }}
      background="dark"
    />
  );
}

// https://octane.cdn.ing/api/v1/video/5ae48b81-2a69-5108-aeaa-4fa947f8d48d/master_playlist
// https://octane.cdn.ing/api/v1/video/df6f71fe-2fd9-51ef-b147-2902b6af60d9/master_playlist
