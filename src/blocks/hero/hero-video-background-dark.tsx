import { masterPlaylistUrls, videoPlaceholders } from "@/lib/media";
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
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Explore",
          href: "/explore",
          variant: "outline",
        },
      ]}
      backgroundVideo={{
        video: {
          // masterPlaylistUrl: masterPlaylistUrls[25],
          // masterPlaylistUrl:
          //   "https://octane.cdn.ing/api/v1/video/5ae48b81-2a69-5108-aeaa-4fa947f8d48d/master_playlist",
          // masterPlaylistUrl:
          //   "https://octane.cdn.ing/api/v1/video/5ae48b81-2a69-5108-aeaa-4fa947f8d48d/master_playlist",
          masterPlaylistUrl:
            "https://octane.cdn.ing/api/v1/video/df6f71fe-2fd9-51ef-b147-2902b6af60d9/master_playlist",
          fallbackSrc:
            "https://octane.cdn.ing/api/v1/video/df6f71fe-2fd9-51ef-b147-2902b6af60d9/progressive.mp4",
          src: videoPlaceholders[15],
          // masterPlaylistUrl:
          //   "https://octane.cdn.ing/api/v1/video/de9f4e3c-a5e1-5210-b6e6-73c4061e4afc/master_playlist",
          optixFlowApiKey: "os-bcf1c82f-0c47-49ec-a303-807eec0a25c6",
        },
      }}
      background="dark"
    />
  );
}

// https://octane.cdn.ing/api/v1/video/5ae48b81-2a69-5108-aeaa-4fa947f8d48d/master_playlist
// https://octane.cdn.ing/api/v1/video/df6f71fe-2fd9-51ef-b147-2902b6af60d9/master_playlist
