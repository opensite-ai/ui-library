import { LinkPageBentoLayout } from "@opensite/ui/blocks/link-page/link-page-bento-layout";
import { imagePlaceholders } from "@/lib/media";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <LinkPageBentoLayout
      name="Sarah Mitchell"
      bio="Creative Director & Content Strategist | Helping brands tell their story"
      avatar={{
        src: imagePlaceholders[45],
        alt: "Sarah Mitchell",
      }}
      socialLinks={[
        {
          id: "1",
          iconName: "simple-icons/instagram",
          href: "https://instagram.com",
          platform: "Instagram",
        },
        {
          id: "2",
          iconName: "simple-icons/twitter",
          href: "https://twitter.com",
          platform: "Twitter",
        },
        {
          id: "3",
          iconName: "simple-icons/linkedin",
          href: "https://linkedin.com",
          platform: "LinkedIn",
        },
        {
          id: "4",
          iconName: "simple-icons/youtube",
          href: "https://youtube.com",
          platform: "YouTube",
        },
      ]}
      links={[
        {
          id: "1",
          label: "Latest Video Series",
          description: "5 Days of Brand Strategy",
          href: "https://youtube.com/watch",
          iconName: "simple-icons/youtube",
          featured: true,
          image: {
            src: imagePlaceholders[78],
            alt: "Latest Video Series",
          },
        },
        {
          id: "2",
          label: "Download Free Guide",
          description: "The Ultimate Brand Playbook",
          href: "https://example.com/guide",
          iconName: "lucide/download",
          featured: true,
          image: {
            src: imagePlaceholders[92],
            alt: "Brand Playbook",
          },
        },
        {
          id: "3",
          label: "Portfolio",
          href: "https://example.com/portfolio",
          iconName: "lucide/briefcase",
        },
        {
          id: "4",
          label: "Shop Presets",
          href: "https://example.com/shop",
          iconName: "lucide/shopping-bag",
        },
        {
          id: "5",
          label: "Book a Call",
          href: "https://example.com/booking",
          iconName: "lucide/calendar",
        },
        {
          id: "6",
          label: "Newsletter",
          href: "https://example.com/newsletter",
          iconName: "lucide/mail",
        },
      ]}
      footerAction={{
        label: "Made with OpenSite",
        href: "https://opensite.ai",
        iconAfter: <DynamicIcon name="lucide/sparkles" size={16} />,
      }}
      spacing="xl"
      pattern="dashedGridBasic"
      patternOpacity={0.08}
      background="secondary"
    />
  );
}
