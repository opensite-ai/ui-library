import { BannerGdprRights, DynamicIcon } from "@opensite/ui";

export default function Demo() {
  return (
    <BannerGdprRights
      iconName="lucide/shield-check"
      title="Your data rights"
      description={
        <>
          You can review consent, export account data, and request deletion at any time.
        </>
      }
      actions={[
        {
          label: "Manage preferences",
          href: "#privacy-preferences",
          variant: "link",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={14} />,
        },
        {
          label: "Request export",
          href: "#data-export",
          variant: "link",
        },
      ]}
      background="white"
    />
  );
}
