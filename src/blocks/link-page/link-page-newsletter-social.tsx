import { LinkPageNewsletterSocial } from "@opensite/ui/blocks/link-page/link-page-newsletter-social";
import { imagePlaceholders } from "@/lib/media";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <LinkPageNewsletterSocial
      name="Jamie Taylor"
      bio="Marketing Expert & Growth Strategist"
      avatar={{
        src: imagePlaceholders[51],
        alt: "Jamie Taylor",
      }}
      socialLinks={[
        {
          id: "1",
          iconName: "simple-icons/twitter",
          href: "https://twitter.com",
          platform: "Twitter",
        },
        {
          id: "2",
          iconName: "simple-icons/instagram",
          href: "https://instagram.com",
          platform: "Instagram",
        },
        {
          id: "3",
          iconName: "simple-icons/linkedin",
          href: "https://linkedin.com",
          platform: "LinkedIn",
        },
        {
          id: "4",
          iconName: "simple-icons/tiktok",
          href: "https://tiktok.com",
          platform: "TikTok",
        },
      ]}
      newsletterHeading="Join 10,000+ Marketers"
      newsletterDescription="Get weekly tips on growth marketing and audience building delivered to your inbox every Friday."
      emailPlaceholder="Enter your email address"
      buttonText="Subscribe Now"
      submitAction={{
        variant: "default",
      }}
      submittingLabel="Subscribing..."
      formConfig={{
        endpoint: "/api/subscribe",
      }}
      links={[
        {
          id: "1",
          label: "Free Marketing Course",
          href: "https://example.com/course",
          iconName: "lucide/graduation-cap",
        },
        {
          id: "2",
          label: "Growth Templates",
          href: "https://example.com/templates",
          iconName: "lucide/file-spreadsheet",
        },
        {
          id: "3",
          label: "1-on-1 Coaching",
          href: "https://example.com/coaching",
          iconName: "lucide/user-plus",
        },
        {
          id: "4",
          label: "Podcast Episodes",
          href: "https://example.com/podcast",
          iconName: "lucide/mic",
        },
        {
          id: "5",
          label: "Community Forum",
          href: "https://example.com/community",
          iconName: "lucide/users",
        },
      ]}
      footerAction={{
        label: "Built with OpenSite",
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
