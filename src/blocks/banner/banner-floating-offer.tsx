import { BannerFloatingOffer, DynamicIcon } from "@opensite/ui";

export default function Demo() {
  return (
    <BannerFloatingOffer
      offerTitle="Launch Week Offer"
      offerDescription="Get 3 months free when you move to an annual Pro workspace."
      actions={[
        {
          label: "Claim offer",
          href: "#claim-offer",
          variant: "secondary",
          size: "sm",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={14} />,
          asButton: true,
        },
        {
          label: "Compare plans",
          href: "#plans",
          variant: "outline",
          size: "sm",
          asButton: true,
        },
      ]}
      dismissible={true}
      defaultOpen={true}
      background="primary"
    />
  );
}
