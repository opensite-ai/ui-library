import { HeroConversionVideoPlay } from "@opensite/ui/blocks/hero/hero-conversion-video-play";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

import {
  loadSkinFromJsDelivr,
  resolveVideoClasses,
  getSkinStyleObject,
} from "@page-speed/skins";
const skin = await loadSkinFromJsDelivr(
  "0.1.2",
  "skins/video/youtube-classic.json",
);

const skinClasses = resolveVideoClasses(skin);
const skinStyle = getSkinStyleObject(skin);

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
          optixFlowApiKey: "os-bcf1c82f-0c47-49ec-a303-807eec0a25c6",
          skinClasses: skinClasses,
          skinStyle: skinStyle,
        },
      }}
      videoDialogTitle="Conversion Optimization Demo"
      logos={[
        { src: "https://toastability-production.s3.amazonaws.com/y1aezpa78m2fhfvj8whcx337y9cb", alt: "Partner 1" },
        { src: "https://toastability-production.s3.amazonaws.com/eoa76d31ynbg34urr6e4619la1f7", alt: "Partner 2" },
        { src: "https://toastability-production.s3.amazonaws.com/0mh8a1dg7ftcqnyzgv303u501c8y", alt: "Partner 3" },
        { src: "https://toastability-production.s3.amazonaws.com/vvucxqs128w2d0z3n4s2z131rq7p", alt: "Partner 4" },
        { src: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k", alt: "Partner 5" },
        { src: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz", alt: "Partner 6" },
      ]}
      background="dark"
      pattern="grid1"
      patternOpacity={0.1}
    />
  );
}
