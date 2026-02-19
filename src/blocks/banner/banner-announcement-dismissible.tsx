import { DynamicIcon } from "@opensite/ui";
import { BannerAnnouncementDismissible } from "@opensite/ui/blocks/banner/banner-announcement-dismissible";

export default function Demo() {
  return (
    <BannerAnnouncementDismissible
      icon={
        <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary">
          <DynamicIcon name="lucide/rocket" size={16} />
        </span>
      }
      message={
        <>
          <span>New in OpenSite:</span>{" "}
          <strong className="font-semibold">AI-assisted section generation</strong>{" "}
          is now available for all Pro workspaces.
        </>
      }
      actions={[
        {
          label: "Read release notes",
          href: "#release-notes",
          variant: "outline",
          size: "sm",
          asButton: true,
        },
        {
          label: "Enable now",
          href: "#enable-ai-sections",
          variant: "default",
          size: "sm",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={14} />,
          asButton: true,
        },
      ]}
      background="white"
    />
  );
}
