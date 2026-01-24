import { StatsCardGroup } from "@opensite/ui/blocks/stats/stats-card-group";

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
          src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
          alt: "Customer avatar",
        },
        {
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
          alt: "Customer avatar",
        },
        {
          src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
          alt: "Customer avatar",
        },
        {
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
          alt: "Customer avatar",
        },
        {
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
          alt: "Customer avatar",
        },
      ]}
      spacing="lg"
    />
  );
}
