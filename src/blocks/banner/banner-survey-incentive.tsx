import { BannerSurveyIncentive, DynamicIcon } from "@opensite/ui";

export default function Demo() {
  return (
    <BannerSurveyIncentive
      iconName="lucide/message-square-heart"
      title="2-minute product survey"
      description={
        <>
          Share feedback and receive a <strong>20% renewal credit</strong> for your workspace.
        </>
      }
      actions={[
        {
          label: "Start survey",
          href: "#survey",
          variant: "default",
          size: "sm",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={14} />,
          asButton: true,
        },
        {
          label: "Maybe later",
          href: "#dismiss-survey",
          variant: "outline",
          size: "sm",
          asButton: true,
        },
      ]}
      background="white"
    />
  );
}
