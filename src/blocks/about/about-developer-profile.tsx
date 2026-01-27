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
      bio="Passionate about building scalable web applications and mentoring the next generation of developers. With over 10 years of experience in software development, I specialize in creating elegant solutions to complex problems."
      skillsTitle="Technical Skills"
      skills={["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"]}
      socialLinks={[
        {
          icon: <DynamicIcon name="lucide/github" size={20} />,
          href: "https://github.com",
          "aria-label": "GitHub",
        },
        {
          icon: <DynamicIcon name="lucide/linkedin" size={20} />,
          href: "https://linkedin.com",
          "aria-label": "LinkedIn",
        },
        {
          icon: <DynamicIcon name="lucide/twitter" size={20} />,
          href: "https://twitter.com",
          "aria-label": "Twitter",
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
    />
  );
}
