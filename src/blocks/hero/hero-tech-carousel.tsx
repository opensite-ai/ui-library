import { HeroTechCarousel } from "@opensite/ui/blocks/hero/hero-tech-carousel";

export default function Demo() {
  return (
    <HeroTechCarousel
      heading="Built with cutting-edge technology"
      description="Explore the powerful technologies and frameworks that make our platform fast, reliable, and scalable."
      technologies={[
        { name: "React", command: "npm install react" },
        { name: "TypeScript", command: "npm install typescript" },
        { name: "Next.js", command: "npx create-next-app" },
        { name: "Tailwind CSS", command: "npm install tailwindcss" },
        { name: "Node.js", command: "nvm install node" },
        { name: "React", command: "npm install react" },
        { name: "TypeScript", command: "npm install typescript" },
        { name: "Next.js", command: "npx create-next-app" },
        { name: "Tailwind CSS", command: "npm install tailwindcss" },
        { name: "Node.js", command: "nvm install node" },
      ]}
      spacing="xl"
    />
  );
}
