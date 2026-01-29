import { imagePlaceholders } from "@/lib/media";
import { HeroTherapyTestimonialGrid } from "@opensite/ui/blocks/hero/hero-therapy-testimonial-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroTherapyTestimonialGrid
      heading="Real stories, real healing"
      description="Hear from clients who've found support, growth, and healing through our therapy services."
      testimonial={{
        quote: "Therapy changed my life. I finally feel understood and supported.",
        author: "Anonymous Client",
        avatar: { src: imagePlaceholders[27], alt: "Client testimonial" },
      }}
      images={[
        { src: imagePlaceholders[28], alt: "Therapy session 1" },
        { src: imagePlaceholders[29], alt: "Therapy session 2" },
        { src: imagePlaceholders[30], alt: "Therapy session 3" },
        { src: imagePlaceholders[31], alt: "Therapy session 4" },
      ]}
      actions={[
        {
          label: "Find Your Therapist",
          href: "/therapists",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Read More Stories",
          href: "/testimonials",
          variant: "outline",
        },
      ]}
      spacing="xl"
    />
  );
}
