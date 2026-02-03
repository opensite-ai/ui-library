import { NavbarEducationPlatform } from "@opensite/ui/blocks/navbars/navbar-education-platform";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <NavbarEducationPlatform
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "EduTech",
        alt: "EduTech Logo",
      }}
      features={[
        {
          title: "Course Builder",
          description: "Create engaging online courses",
          icon: "lucide/book-plus",
          link: "#",
        },
        {
          title: "Video Hosting",
          description: "Stream educational content",
          icon: "lucide/video",
          link: "#",
        },
        {
          title: "Student Dashboard",
          description: "Track progress and assignments",
          icon: "lucide/gauge",
          link: "#",
        },
        {
          title: "Live Classes",
          description: "Interactive virtual classrooms",
          icon: "lucide/monitor-play",
          link: "#",
        },
      ]}
      docs={[
        {
          title: "Getting Started",
          description: "Set up your first course",
          icon: "lucide/rocket",
          link: "#",
        },
        {
          title: "Teacher Guide",
          description: "Best practices for educators",
          icon: "lucide/user-check",
          link: "#",
        },
        {
          title: "API Documentation",
          description: "Integrate with your systems",
          icon: "lucide/code-2",
          link: "#",
        },
      ]}
      company={[
        {
          title: "About Us",
          icon: "lucide/building-2",
          link: "#",
        },
        {
          title: "Careers",
          icon: "lucide/briefcase",
          link: "#",
        },
        {
          title: "Contact",
          icon: "lucide/mail",
          link: "#",
        },
      ]}
      authActions={[
        {
          label: "Sign In",
          variant: "ghost",
          href: "#",
        },
        {
          label: "Start Teaching",
          variant: "default",
          href: "#",
        },
      ]}
    />
  );
}
