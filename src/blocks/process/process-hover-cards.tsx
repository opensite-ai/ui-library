import { ProcessHoverCards } from "@opensite/ui/blocks/process/process-hover-cards";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <ProcessHoverCards
      heading="How We Work"
      description="A streamlined approach to delivering exceptional digital experiences"
      steps={[
        {
          step: "01",
          title: "Ideate & Define",
          description: "Transform your vision into a clear project scope with detailed requirements, user personas, and success metrics.",
          image: imagePlaceholders[42],
        },
        {
          step: "02",
          title: "Design & Prototype",
          description: "Create stunning interfaces that balance aesthetics with usability, validated through user testing and stakeholder feedback.",
          image: imagePlaceholders[67],
        },
        {
          step: "03",
          title: "Build & Integrate",
          description: "Develop robust solutions using cutting-edge technologies, with seamless integration of APIs, databases, and third-party services.",
          image: imagePlaceholders[89],
        },
        {
          step: "04",
          title: "Test & Refine",
          description: "Ensure quality through comprehensive testing, performance optimization, and iterative improvements based on real-world usage.",
          image: imagePlaceholders[103],
        },
        {
          step: "05",
          title: "Deploy & Scale",
          description: "Launch your product with confidence and scale it efficiently as your user base grows, with ongoing monitoring and support.",
          image: imagePlaceholders[28],
        },
      ]}
      spacing="xl"
      background="default"
    />
  );
}
