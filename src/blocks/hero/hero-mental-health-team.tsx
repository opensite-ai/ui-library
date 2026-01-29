import { imagePlaceholders } from "@/lib/media";
import { HeroMentalHealthTeam } from "@opensite/ui/blocks/hero/hero-mental-health-team";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroMentalHealthTeam
      subtitle="Professional Mental Health Support"
      heading="Compassionate care for your mental wellbeing"
      teamImages={[
        { src: imagePlaceholders[41], alt: "Dr. Smith" },
        { src: imagePlaceholders[42], alt: "Dr. Johnson" },
      ]}
      testimonial={{
        quote: "The support I received changed my life. I'm so grateful for the compassionate care.",
        author: "Sarah M.",
        role: "Client",
        avatarSrc: imagePlaceholders[43],
      }}
      featureImage={{ src: imagePlaceholders[44], alt: "Mental health support" }}
      spacing="xl"
    />
  );
}
