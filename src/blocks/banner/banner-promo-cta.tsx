import { BannerPromoCta, DynamicIcon } from "@opensite/ui";

export default function Demo() {
  return (
    <BannerPromoCta
      message="Spring build sprint"
      discount="Save up to 35% on annual team plans"
      actions={[
        {
          label: "Claim discount",
          href: "#spring-offer",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={14} />,
        },
      ]}
      background="primary"
    />
  );
}
