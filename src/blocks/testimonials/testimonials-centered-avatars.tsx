import { TestimonialsCenteredAvatars } from "@opensite/ui/blocks/testimonials/testimonials-centered-avatars";

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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/b555hwjt7ltr81et05v5254q1ak6",
        },
        {
          quote:
            "Our data analytics capabilities have transformed overnight. The insights dashboard provides actionable intelligence that drives real business decisions.",
          author: "Kevin Patel",
          role: "Head of Analytics",
          company: "DataFirst",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/9uxe0jw1zl1tujy0m5yalo7m2ht8",
        },
        {
          quote:
            "The mobile experience is just as powerful as desktop. Our field teams can access everything they need on the go without any compromises.",
          author: "Maria Santos",
          role: "Field Operations Manager",
          company: "ServiceMasters",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/l080sx0lcx51x44dqrb8006nqf08",
        },
        {
          quote:
            "Integration with our CRM and project management tools was flawless. Everything syncs in real-time, keeping our entire organization aligned.",
          author: "Thomas Wright",
          role: "Systems Administrator",
          company: "TechUnify",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/x4scuzhsozrwrg703df5wbhygkgo",
        },
        {
          quote:
            "The training resources and documentation are top-notch. Our team was up and running at full capacity within the first week.",
          author: "Nicole Johnson",
          role: "Training Director",
          company: "LearnFast",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/yrp5k5xszwpe26fquupey6a6g0uu",
        },
      ]}
      background="dark"
      pattern="squareAltGrid"
      patternOpacity={0.75}
    />
  );
}
