import { StatsCardGroup } from "@opensite/ui/blocks/stats/stats-card-group";

const AVATAR_URL =
  "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp";

export default function Demo() {
  return (
    <StatsCardGroup
      stats={[
        {
          icon: "lucide/users",
          value: "2,000+",
          label: "Happy Customers",
          showAvatars: true,
        },
        {
          icon: "lucide/star",
          value: "4.9/5",
          label: "Average Rating",
        },
        {
          icon: "lucide/shield-check",
          value: "99.9%",
          label: "Uptime Guarantee",
        },
      ]}
      avatars={[
        { src: AVATAR_URL, alt: "Customer avatar" },
        { src: AVATAR_URL, alt: "Customer avatar" },
        { src: AVATAR_URL, alt: "Customer avatar" },
        { src: AVATAR_URL, alt: "Customer avatar" },
        { src: AVATAR_URL, alt: "Customer avatar" },
      ]}
      spacing="lg"
    />
  );
}
