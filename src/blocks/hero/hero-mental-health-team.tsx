import { imagePlaceholders } from "@/lib/media";
import { DynamicIcon } from "@opensite/ui";
import { HeroMentalHealthTeam } from "@opensite/ui/blocks/hero/hero-mental-health-team";

export default function Demo() {
  return (
    <HeroMentalHealthTeam
      description="Our team of experienced mental health professionals is dedicated to providing compassionate care and support to individuals in need."
      heading="Compassionate care for your mental wellbeing"
      smallImages={[
        { src: imagePlaceholders[41], alt: "Dr. Smith" },
        { src: imagePlaceholders[42], alt: "Dr. Johnson" },
      ]}
      testimonial={{
        quote:
          "The support I received changed my life. I'm so grateful for the compassionate care.",
        author: "Sarah M.",
        role: "Client",
        avatarSrc: imagePlaceholders[43],
      }}
      featureImage={{
        src: imagePlaceholders[44],
        alt: "Mental health support",
      }}
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Talk to Sales",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/phone" size={16} />,
        },
      ]}
      background="gray"
      pattern="dashedGridFadeTop"
      patternOpacity={0.9}
    />
  );
}
