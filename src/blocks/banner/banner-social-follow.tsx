import { BannerSocialFollow, DynamicIcon } from "@opensite/ui";

export default function Demo() {
  return (
    <BannerSocialFollow
      iconName="lucide/users"
      message={
        <>
          Join <strong>60,000+ builders</strong> shipping weekly updates with OpenSite.
        </>
      }
      actions={[
        {
          label: "Follow on X",
          href: "https://x.com",
          variant: "secondary",
          size: "sm",
          asButton: true,
        },
        {
          label: "Join Discord",
          href: "#community-discord",
          variant: "outline",
          size: "sm",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={14} />,
          asButton: true,
        },
      ]}
      background="primary"
    />
  );
}
