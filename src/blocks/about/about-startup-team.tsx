import { AboutStartupTeam } from "@opensite/ui/blocks/about/about-startup-team";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <AboutStartupTeam
      title="Meet the People Behind the Product"
      description={`We're a diverse team of designers, engineers, and strategists united by a shared passion for creating exceptional digital experiences. Our backgrounds span startups, Fortune 500 companies, and everything in between. What brings us together is a belief that great products come from great teams—and great teams are built on trust, respect, and a relentless pursuit of excellence.`}
      sidebarLinks={[
        { label: "Leadership", value: "leadership" },
        { label: "Engineering", value: "engineering" },
        { label: "Design", value: "design" },
        { label: "Operations", value: "operations" },
      ]}
      teamTitle="Team Member Directory"
      teamMembers={[
        {
          name: "Sarah Chen",
          role: "CEO & Co-Founder",
          avatar: {
            src: imagePlaceholders[67],
            alt: "Sarah Chen",
          },
          tab: "leadership",
          socialLinks: [
            {
              icon: <DynamicIcon name="lucide/linkedin" size={16} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: <DynamicIcon name="lucide/twitter" size={16} />,
              url: "https://twitter.com",
              label: "Twitter",
            },
          ],
        },
        {
          name: "Marcus Johnson",
          role: "CTO & Co-Founder",
          avatar: {
            src: imagePlaceholders[102],
            alt: "Marcus Johnson",
          },
          tab: "leadership",
          socialLinks: [
            {
              icon: <DynamicIcon name="lucide/linkedin" size={16} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: <DynamicIcon name="lucide/github" size={16} />,
              url: "https://github.com",
              label: "GitHub",
            },
          ],
        },
        {
          name: "Emily Rodriguez",
          role: "VP of Design",
          avatar: {
            src: imagePlaceholders[88],
            alt: "Emily Rodriguez",
          },
          tab: "design",
          socialLinks: [
            {
              icon: <DynamicIcon name="lucide/linkedin" size={16} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: <DynamicIcon name="lucide/dribbble" size={16} />,
              url: "https://dribbble.com",
              label: "Dribbble",
            },
          ],
        },
        {
          name: "David Kim",
          role: "VP of Engineering",
          avatar: {
            src: imagePlaceholders[81],
            alt: "David Kim",
          },
          tab: "engineering",
          socialLinks: [
            {
              icon: <DynamicIcon name="lucide/linkedin" size={16} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: <DynamicIcon name="lucide/github" size={16} />,
              url: "https://github.com",
              label: "GitHub",
            },
          ],
        },
        {
          name: "Lisa Thompson",
          role: "VP of Operations",
          avatar: {
            src: imagePlaceholders[72],
            alt: "Lisa Thompson",
          },
          tab: "operations",
          socialLinks: [
            {
              icon: <DynamicIcon name="lucide/linkedin" size={16} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
          ],
        },
        {
          name: "James Wilson",
          role: "VP of Sales",
          avatar: {
            src: imagePlaceholders[77],
            alt: "James Wilson",
          },
          tab: "operations",
          socialLinks: [
            {
              icon: <DynamicIcon name="lucide/linkedin" size={16} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
          ],
        },
      ]}
    />
  );
}
