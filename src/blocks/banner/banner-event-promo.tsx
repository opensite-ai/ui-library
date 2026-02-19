import { BannerEventPromo, DynamicIcon } from "@opensite/ui";

export default function Demo() {
  return (
    <BannerEventPromo
      eventName="OpenSite Builder Summit 2026"
      eventDetails="Live virtual event • May 14-16 • Product demos + implementation workshops"
      actions={[
        {
          label: "Reserve your seat",
          href: "#reserve-seat",
          variant: "secondary",
          size: "sm",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={14} />,
          asButton: true,
        },
        {
          label: "View agenda",
          href: "#agenda",
          variant: "ghost",
          size: "sm",
          asButton: true,
        },
      ]}
      background="primary"
    />
  );
}
