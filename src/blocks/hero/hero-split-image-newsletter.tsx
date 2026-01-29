import { imagePlaceholders } from "@/lib/media";
import { HeroSplitImageNewsletter } from "@opensite/ui/blocks/hero/hero-split-image-newsletter";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSplitImageNewsletter
      heading="Stay updated with our newsletter"
      description="Get the latest insights, tips, and updates delivered to your inbox every week. Join 20,000+ subscribers."
      newsletterForm={{
        placeholder: "Enter your email",
        action: {
          label: "Subscribe",
          href: "/subscribe",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      }}
      image={{
        src: imagePlaceholders[13],
        alt: "Newsletter preview",
      }}
      spacing="xl"
    />
  );
}
