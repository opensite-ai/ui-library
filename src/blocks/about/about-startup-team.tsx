import { AboutStartupTeam } from "@opensite/ui/blocks/about/about-startup-team";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutStartupTeam
      title="Meet the People Behind the Product"
      description={`We're a diverse team of designers, engineers, and strategists united by a shared passion for creating exceptional digital experiences.

Our backgrounds span startups, Fortune 500 companies, and everything in between. What brings us together is a belief that great products come from great teams—and great teams are built on trust, respect, and a relentless pursuit of excellence.`}
      sidebarLinks={[
        { label: "Overview", href: "#overview", isActive: true },
        { label: "Leadership", href: "#leadership" },
        { label: "Engineering", href: "#engineering" },
        { label: "Design", href: "#design" },
        { label: "Operations", href: "#operations" },
      ]}
      teamTitle="Leadership Team"
      teamMembers={[
        {
          name: "Sarah Chen",
          role: "CEO & Co-Founder",
          avatar: {
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
            alt: "Sarah Chen",
          },
          socialLinks: [
            { icon: <DynamicIcon name="lucide/linkedin" size={16} />, url: "https://linkedin.com", label: "LinkedIn" },
            { icon: <DynamicIcon name="lucide/twitter" size={16} />, url: "https://twitter.com", label: "Twitter" },
          ],
        },
        {
          name: "Marcus Johnson",
          role: "CTO & Co-Founder",
          avatar: {
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
            alt: "Marcus Johnson",
          },
          socialLinks: [
            { icon: <DynamicIcon name="lucide/linkedin" size={16} />, url: "https://linkedin.com", label: "LinkedIn" },
            { icon: <DynamicIcon name="lucide/github" size={16} />, url: "https://github.com", label: "GitHub" },
          ],
        },
        {
          name: "Emily Rodriguez",
          role: "VP of Design",
          avatar: {
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
            alt: "Emily Rodriguez",
          },
          socialLinks: [
            { icon: <DynamicIcon name="lucide/linkedin" size={16} />, url: "https://linkedin.com", label: "LinkedIn" },
            { icon: <DynamicIcon name="lucide/dribbble" size={16} />, url: "https://dribbble.com", label: "Dribbble" },
          ],
        },
        {
          name: "David Kim",
          role: "VP of Engineering",
          avatar: {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
            alt: "David Kim",
          },
          socialLinks: [
            { icon: <DynamicIcon name="lucide/linkedin" size={16} />, url: "https://linkedin.com", label: "LinkedIn" },
            { icon: <DynamicIcon name="lucide/github" size={16} />, url: "https://github.com", label: "GitHub" },
          ],
        },
        {
          name: "Lisa Thompson",
          role: "VP of Operations",
          avatar: {
            src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
            alt: "Lisa Thompson",
          },
          socialLinks: [
            { icon: <DynamicIcon name="lucide/linkedin" size={16} />, url: "https://linkedin.com", label: "LinkedIn" },
          ],
        },
        {
          name: "James Wilson",
          role: "VP of Sales",
          avatar: {
            src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
            alt: "James Wilson",
          },
          socialLinks: [
            { icon: <DynamicIcon name="lucide/linkedin" size={16} />, url: "https://linkedin.com", label: "LinkedIn" },
          ],
        },
      ]}
    />
  );
}
