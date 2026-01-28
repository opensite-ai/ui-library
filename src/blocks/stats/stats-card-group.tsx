import { StatsCardGroup } from "@opensite/ui/blocks/stats/stats-card-group";
import { imagePlaceholders } from "@/lib/media";

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
        {
          src: imagePlaceholders[109],
          alt: "Customer avatar",
        },
        {
          src: imagePlaceholders[102],
          alt: "Customer avatar",
        },
        {
          src: imagePlaceholders[67],
          alt: "Customer avatar",
        },
        {
          src: imagePlaceholders[77],
          alt: "Customer avatar",
        },
        {
          src: imagePlaceholders[88],
          alt: "Customer avatar",
        },
      ]}
      spacing="lg"
    />
  );
}
