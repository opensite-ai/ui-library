import { logoPlaceholders, imagePlaceholders } from "@/lib/media";
import { AboutStatsShowcase } from "@opensite/ui/blocks/about/about-stats-showcase";

export default function Demo() {
  return (
    <AboutStatsShowcase
      title="Driving Results That Matter"
      description="We measure our success by the impact we create for our clients. Here's what the numbers say about our work."
      images={[
        {
          src: imagePlaceholders[23],
          alt: "Team collaboration",
          colSpan: 8,
        },
        {
          src: imagePlaceholders[33],
          alt: "Modern office",
          colSpan: 4,
        },
      ]}
      statsTitle="Numbers That Speak for Themselves"
      stats={[
        { value: "500+", label: "Projects Delivered" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "50M+", label: "Users Impacted" },
        { value: "15+", label: "Years of Experience" },
        { value: "200+", label: "Team Members" },
        { value: "30+", label: "Countries Served" },
      ]}
      logosTitle="Trusted by Leading Organizations"
      logos={[
        {
          src: logoPlaceholders.darkHorizontalLogo,
          alt: "Partner logo",
          name: "Acme",
        },
        {
          src: logoPlaceholders.darkHorizontalLogo,
          alt: "Partner logo",
          name: "Globex",
        },
        {
          src: logoPlaceholders.darkHorizontalLogo,
          alt: "Partner logo",
          name: "Initech",
        },
        {
          src: logoPlaceholders.darkHorizontalLogo,
          alt: "Partner logo",
          name: "Umbrella",
        },
      ]}
      benefitsTitle="The Impact We Create"
      benefits={[
        {
          image: {
            src: imagePlaceholders[44],
            alt: "Growth analytics",
          },
        },
        {
          stat: {
            value: "312%",
            label: "Average ROI",
            description:
              "Our clients see significant returns on their technology investments within the first year.",
          },
        },
        {
          testimonial: {
            company: "TechCorp",
            quote:
              "Working with this team transformed our digital presence. The results exceeded our expectations.",
            author: "Jennifer Lee",
            role: "Chief Digital Officer",
          },
        },
      ]}
    />
  );
}
