import { AboutCompanyProfile } from "@opensite/ui/blocks/about/about-company-profile";

export default function Demo() {
  return (
    <AboutCompanyProfile
      title="Building the Future of Digital Experiences"
      description="We combine cutting-edge technology with human-centered design to create solutions that transform how businesses connect with their audiences. Our team of experts brings decades of combined experience across multiple industries."
      mainImage={{
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        alt: "Team collaboration in modern office",
      }}
      secondaryImage={{
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=500&fit=crop",
        alt: "Creative workspace",
      }}
      breakout={{
        value: "15+",
        label: "Years of Excellence",
        description: "Delivering innovative solutions since 2009",
      }}
      companiesTitle="Trusted by Industry Leaders"
      companies={[
        {
          logo: {
            src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop",
            alt: "Partner company logo",
          },
        },
        {
          logo: {
            src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop",
            alt: "Partner company logo",
          },
        },
        {
          logo: {
            src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop",
            alt: "Partner company logo",
          },
        },
      ]}
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
      ]}
    />
  );
}
