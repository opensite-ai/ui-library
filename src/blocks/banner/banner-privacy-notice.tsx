import { BannerPrivacyNotice, DynamicIcon } from "@opensite/ui";

export default function Demo() {
  return (
    <BannerPrivacyNotice
      iconName="lucide/shield"
      title="Privacy policy update"
      description={
        <>
          We clarified how workspace analytics and event data are processed for reporting.
        </>
      }
      actions={[
        {
          label: "Review changes",
          href: "#privacy-policy",
          variant: "link",
          iconAfter: <DynamicIcon name="lucide/external-link" size={14} />,
        },
      ]}
      background="white"
    />
  );
}
