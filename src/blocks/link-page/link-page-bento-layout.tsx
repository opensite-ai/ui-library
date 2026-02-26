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
          href: "https://instagram.com",
        },
        {
          id: "2",
          href: "https://twitter.com",
        },
        {
          id: "3",
          href: "https://linkedin.com",
        },
        {
          id: "4",
          href: "https://youtube.com",
        },
      ]}
      links={[
        {
          id: "1",
          label: "Latest Video Series",
          description: "5 Days of Brand Strategy",
          href: "#",
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
          href: "#",
          iconName: "lucide/download",
          featured: true,
          image: {
            src: imagePlaceholders[92],
            alt: "Brand Playbook",
          },
        },
        {
          id: "3",
          label: "Start Free Trial",
          description: "Experience our platform with a 14-day free trial.",
          href: "#",
          iconName: "lucide/rocket",
          featured: true,
          image: {
            src: imagePlaceholders[93],
            alt: "Free Trial",
          },
        },
        {
          id: "3",
          label: "Portfolio",
          href: "#",
          iconName: "lucide/briefcase",
        },
        {
          id: "4",
          label: "Shop Presets",
          href: "#",
          iconName: "lucide/shopping-bag",
        },
        {
          id: "5",
          label: "Book a Call",
          href: "#",
          iconName: "lucide/calendar",
        },
        {
          id: "6",
          label: "Newsletter",
          href: "#",
          iconName: "lucide/mail",
        },
      ]}
      footerAction={{
        label: "Made with OpenSite",
        href: "https://opensite.ai",
        iconAfter: <DynamicIcon name="lucide/sparkles" size={16} />,
      }}
      spacing="xl"
      pattern="gridFadeTop"
      patternOpacity={0.15}
      background="dark"
    />
  );
}
