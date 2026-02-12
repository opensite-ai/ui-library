import { imagePlaceholders, logoPlaceholders } from "@/lib/media";
import { HeroLogoCenteredScreenshot } from "@opensite/ui/blocks/hero/hero-logo-centered-screenshot";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroLogoCenteredScreenshot
      logo={{ src: logoPlaceholders.lightHorizontalLogo, alt: "Company Logo" }}
      heading="The platform that powers modern businesses"
      description="Trusted by thousands of companies worldwide to streamline operations and drive growth."
      action={{
        label: "Get Started",
        href: "/signup",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      image={{ src: imagePlaceholders[33], alt: "Platform screenshot" }}
      pattern="dashedGridFadeTop"
      patternOpacity={0.3}
      background="dark"
    />
  );
}
