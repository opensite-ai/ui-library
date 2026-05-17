import { AboutCompanyProfile } from "@opensite/ui/blocks/about/about-company-profile";

export default function Demo() {
  return (
    <AboutCompanyProfile
      title="Building the Future of Digital Experiences"
      description="We combine cutting-edge technology with human-centered design to create solutions that transform how businesses connect with their audiences. Our team of experts brings decades of combined experience across multiple industries."
      mainImage={{
        src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
        alt: "Team collaboration in modern office",
      }}
      secondaryImage={{
        src: "https://cdn.ing/assets/i/r/308196/g6bbn73f7gxal82uu49m9prfd0u8/workplace-in-cafe.webp",
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
      pattern="grid1"
      patternOpacity={1}
      background="white"
    />
  );
}
