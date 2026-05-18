import { HeroLogoCenteredScreenshot } from "@opensite/ui/blocks/hero/hero-logo-centered-screenshot";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroLogoCenteredScreenshot
      logo={{
        src: "https://cdn.ing/assets/i/r/288971/sow5o2s8dp1cr159rxexm0yhov5w/ui-placeholder-logo-white-3.png",
        alt: "Company Logo",
      }}
      heading="The platform that powers modern businesses"
      description="Trusted by thousands of companies worldwide to streamline operations and drive growth."
      action={{
        label: "Get Started",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      image={{
        src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        alt: "Platform screenshot",
      }}
      pattern="dashedGridFadeTop"
      patternOpacity={0.15}
      background="dark"
    />
  );
}
