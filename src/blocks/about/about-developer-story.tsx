import { logoPlaceholders, imagePlaceholders } from "@/lib/media";
import { AboutDeveloperStory } from "@opensite/ui/blocks/about/about-developer-story";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutDeveloperStory
      title="From Curiosity to Craft"
      description="My journey into software development began with a simple question: 'How does this work?' That curiosity has driven me through 15 years of building, breaking, and rebuilding digital experiences that matter."
      storyTitle="The Path Forward"
      storyContent="What started as tinkering with HTML in my teenage years evolved into a deep passion for creating meaningful technology. I've had the privilege of working with startups and Fortune 500 companies alike, learning that the best solutions come from understanding people first and technology second."
      storyImage={{
        src: imagePlaceholders[12],
        alt: "Developer workspace",
      }}
      actions={[
        {
          label: "Read My Blog",
          href: "/blog",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Portfolio",
          href: "/portfolio",
          variant: "outline",
        },
      ]}
      logos={[
        {
          src: logoPlaceholders.darkHorizontalLogo,
          alt: "Company logo",
        },
        {
          src: logoPlaceholders.darkHorizontalLogo,
          alt: "Company logo",
        },
        {
          src: logoPlaceholders.darkHorizontalLogo,
          alt: "Company logo",
        },
      ]}
      stats={[
        { value: "200+", label: "Projects Shipped" },
        { value: "15", label: "Years Experience" },
        { value: "30+", label: "Technologies Mastered" },
      ]}
    />
  );
}
