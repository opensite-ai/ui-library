import { CarouselMultiStepShowcase } from "@opensite/ui/blocks/carousel/carousel-multi-step-showcase";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselMultiStepShowcase
      heading="How It Works"
      subheading="Get started in minutes with our simple four-step process"
      steps={[
        {
          id: "step-1",
          step: 1,
          title: "Create Your Account",
          description: "Sign up in seconds with your email or Google account. No credit card required to start exploring our platform and all its powerful features.",
          image: imagePlaceholders[11],
        },
        {
          id: "step-2",
          step: 2,
          title: "Connect Your Data",
          description: "Seamlessly integrate with your existing tools and services. We support over 50 popular platforms including Salesforce, HubSpot, and Slack.",
          image: imagePlaceholders[34],
        },
        {
          id: "step-3",
          step: 3,
          title: "Customize Your Workflow",
          description: "Tailor the platform to match your unique business processes. Use our drag-and-drop builder to create custom workflows without writing code.",
          image: imagePlaceholders[59],
        },
        {
          id: "step-4",
          step: 4,
          title: "Launch & Scale",
          description: "Go live with confidence and grow your operations effortlessly. Our infrastructure automatically scales to meet your needs as you expand.",
          image: imagePlaceholders[86],
        },
      ]}
      actions={[
        {
          label: "Get Started Free",
          href: "#signup",
          variant: "default",
          size: "lg",
        },
        {
          label: "Schedule Demo",
          href: "#demo",
          variant: "outline",
          size: "lg",
        },
      ]}
    />
  );
}
