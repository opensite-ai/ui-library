import { AboutDeveloperProfile } from "@opensite/ui/blocks/about/about-developer-profile";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <AboutDeveloperProfile
      avatar={{
        src: imagePlaceholders[81],
        alt: "Alex Thompson",
      }}
      name="Alex Thompson"
      role="Senior Full-Stack Developer"
      bio="Passionate about building scalable web applications and mentoring the next generation of developers. With over 10 years of experience in software development, I specialize in creating elegant solutions to complex problems."
      skillsTitle="Technical Skills"
      skills={["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"]}
      socialLinks={[
        {
          href: "https://instagram.com",
        },
        {
          href: "https://twitter.com",
        },
        {
          href: "https://linkedin.com",
        },
        {
          href: "https://youtube.com",
        },
      ]}
      actions={[
        {
          label: "Contact Me",
          href: "#",
          variant: "default",
          size: "lg",
          icon: <DynamicIcon name="lucide/send" size={16} />,
        },
        {
          label: "Download Resume",
          href: "#",
          variant: "outline",
          size: "lg",
          icon: <DynamicIcon name="lucide/download" size={16} />,
        },
      ]}
      patternOpacity={0.33}
      pattern="diagonalCrossFadeCenter"
      background="dark"
    />
  );
}
