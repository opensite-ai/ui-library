import { TestimonialsCenteredAvatars } from "@opensite/ui/blocks/testimonials/testimonials-centered-avatars";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsCenteredAvatars
      badge="Customer Success Stories"
      heading="Trusted by Teams Worldwide"
      testimonials={[
        {
          quote:
            "The level of customization available is remarkable. We've tailored the platform to fit our unique workflow perfectly, and the results have exceeded all expectations.",
          author: "Rachel Anderson",
          role: "CEO",
          company: "BuildRight Inc",
          avatarSrc: imagePlaceholders[18],
        },
        {
          quote:
            "Our data analytics capabilities have transformed overnight. The insights dashboard provides actionable intelligence that drives real business decisions.",
          author: "Kevin Patel",
          role: "Head of Analytics",
          company: "DataFirst",
          avatarSrc: imagePlaceholders[36],
        },
        {
          quote:
            "The mobile experience is just as powerful as desktop. Our field teams can access everything they need on the go without any compromises.",
          author: "Maria Santos",
          role: "Field Operations Manager",
          company: "ServiceMasters",
          avatarSrc: imagePlaceholders[54],
        },
        {
          quote:
            "Integration with our CRM and project management tools was flawless. Everything syncs in real-time, keeping our entire organization aligned.",
          author: "Thomas Wright",
          role: "Systems Administrator",
          company: "TechUnify",
          avatarSrc: imagePlaceholders[72],
        },
        {
          quote:
            "The training resources and documentation are top-notch. Our team was up and running at full capacity within the first week.",
          author: "Nicole Johnson",
          role: "Training Director",
          company: "LearnFast",
          avatarSrc: imagePlaceholders[90],
        },
      ]}
      background="dark"
      pattern="squareAltGrid"
      patternOpacity={0.75}
    />
  );
}
