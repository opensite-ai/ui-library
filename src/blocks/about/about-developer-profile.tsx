import { AboutDeveloperProfile } from "@opensite/ui/blocks/about/about-developer-profile";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutDeveloperProfile
      avatar={{
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
        alt: "Alex Thompson",
      }}
      name="Alex Thompson"
      role="Senior Full-Stack Developer"
      location="San Francisco, CA"
      bio="Passionate about building scalable web applications and mentoring the next generation of developers. With over 10 years of experience in software development, I specialize in creating elegant solutions to complex problems."
      skills={[
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "AWS", level: 82 },
      ]}
      socialLinks={[
        {
          icon: <DynamicIcon name="lucide/github" size={20} />,
          url: "https://github.com",
          label: "GitHub",
        },
        {
          icon: <DynamicIcon name="lucide/linkedin" size={20} />,
          url: "https://linkedin.com",
          label: "LinkedIn",
        },
        {
          icon: <DynamicIcon name="lucide/twitter" size={20} />,
          url: "https://twitter.com",
          label: "Twitter",
        },
      ]}
      actions={[
        {
          label: "Download Resume",
          href: "/resume.pdf",
          variant: "default",
          icon: <DynamicIcon name="lucide/download" size={16} />,
        },
        {
          label: "Contact Me",
          href: "/contact",
          variant: "outline",
        },
      ]}
      stats={[
        { value: "150+", label: "Projects Completed" },
        { value: "50+", label: "Open Source Contributions" },
        { value: "10K+", label: "GitHub Stars" },
      ]}
    />
  );
}
