import { AboutCompanyProfile } from "@opensite/ui/blocks/about/about-company-profile";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <AboutCompanyProfile
      title="Building the Future of Digital Experiences"
      description="We combine cutting-edge technology with human-centered design to create solutions that transform how businesses connect with their audiences. Our team of experts brings decades of combined experience across multiple industries."
      mainImage={{
        src: imagePlaceholders[12],
        alt: "Team collaboration in modern office",
      }}
      secondaryImage={{
        src: imagePlaceholders[45],
        alt: "Creative workspace",
      }}
      breakout={{
        title: "15+ Years of Excellence",
        description: "Delivering innovative solutions since 2009",
        action: {
          label: "Learn More",
          href: "#",
        },
      }}
      achievementsTitle="Our Impact"
      achievementsDescription="Measurable results that speak to our commitment to excellence"
      achievements={[
        {
          value: "500+",
          label: "Projects Delivered",
        },
        {
          value: "98%",
          label: "Client Satisfaction",
        },
        {
          value: "50M+",
          label: "Users Reached",
        },
        {
          value: "320+",
          label: "Projects Launched",
        },
      ]}
    />
  );
}
