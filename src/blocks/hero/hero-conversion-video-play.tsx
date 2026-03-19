import { brandLogoPlaceholders, optixFlowApiKey } from "@/lib/media";
import { HeroConversionVideoPlay } from "@opensite/ui/blocks/hero/hero-conversion-video-play";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroConversionVideoPlay
      heading="Turn visitors into customers"
      description="Optimize your conversion funnel with data-driven insights and smart automation. See how top companies boost conversions by 300%."
      primaryAction={{
        label: "Get Started",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      videoButtonLabel="Watch Demo"
      modalVideo={{
        video: {
          masterPlaylistUrl:
            "https://octane.cdn.ing/api/v1/video/01db8743-8d85-50e5-a293-7d0f0f000db3/master_playlist",
          fallbackSrc:
            "https://octane.cdn.ing/api/v1/video/01db8743-8d85-50e5-a293-7d0f0f000db3/progressive.mp4",
          src: "https://toastability-production.s3.amazonaws.com/e6b0u26kl3g06gooq2voz48xzh3z",
          poster:
            "https://cdn.ing/assets/i/r/209106/variants/i86gmxxj6rpf6i1pisg9o3l2ycsp/ffa771bd373b30a1a63111797ef5dd88627acefa289ede100f7c545462724c63/354071-nightlife-bar-smiling-talking-by-azulroto-artlist-4k.webp",
          optixFlowApiKey: optixFlowApiKey,
        },
      }}
      videoDialogTitle="Conversion Optimization Demo"
      logos={[
        { src: brandLogoPlaceholders.white[0], alt: "Partner 1" },
        { src: brandLogoPlaceholders.white[1], alt: "Partner 2" },
        { src: brandLogoPlaceholders.white[2], alt: "Partner 3" },
        { src: brandLogoPlaceholders.white[3], alt: "Partner 4" },
        { src: brandLogoPlaceholders.white[4], alt: "Partner 5" },
        { src: brandLogoPlaceholders.white[5], alt: "Partner 6" },
      ]}
      background="dark"
      pattern="grid1"
      patternOpacity={0.1}
    />
  );
}
