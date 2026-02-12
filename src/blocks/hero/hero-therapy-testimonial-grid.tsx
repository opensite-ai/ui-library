import { imagePlaceholders } from "@/lib/media";
import { HeroTherapyTestimonialGrid } from "@opensite/ui/blocks/hero/hero-therapy-testimonial-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroTherapyTestimonialGrid
      heading="Real stories, real healing"
      description="Hear from clients who've found support, growth, and healing through our therapy services."
      testimonial={{
        quote:
          "Therapy changed my life. I finally feel understood and supported. Highly recommend to anyone seeking help. Also, the therapists are amazing!",
        author: "Anonymous Client",
        avatar: { src: imagePlaceholders[27], alt: "Client testimonial" },
      }}
      images={[
        { src: imagePlaceholders[28], alt: "Therapy session 1" },
        { src: imagePlaceholders[29], alt: "Therapy session 2" },
        { src: imagePlaceholders[30], alt: "Therapy session 3" },
      ]}
      actions={[
        {
          label: "Find Your Therapist",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Read More Stories",
          href: "#",
          variant: "outline",
        },
      ]}
      background="muted"
    />
  );
}
