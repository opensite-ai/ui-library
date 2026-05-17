import { TestimonialsCarouselImage } from "@opensite/ui/blocks/testimonials/testimonials-carousel-image";

export default function Demo() {
  return (
    <TestimonialsCarouselImage
      testimonials={[
        {
          quote:
            "This solution has completely transformed how our team collaborates. The seamless integration with our existing tools made adoption effortless.",
          author: "Jennifer Martinez",
          role: "VP of Product",
          company: "CloudScale",
          backgroundImage: "https://toastability-production.s3.amazonaws.com/zykfhuapdqzu94ee1535gsgnvyac",
          logoSrc: "https://cdn.ing/assets/i/r/288963/4kq4loxmhh5lwc7scw7hhusu87km/ui-placeholder-logo-white-1.png",
        },
        {
          quote:
            "We've seen a 200% increase in team productivity since implementing this platform. The ROI speaks for itself.",
          author: "Robert Chen",
          role: "Chief Technology Officer",
          company: "NextGen Solutions",
          backgroundImage: "https://toastability-production.s3.amazonaws.com/dvz0441h9fxjhh88lzqbwdoyxv52",
          logoSrc: "https://cdn.ing/assets/i/r/288966/0ls9to9jqnrc4gcxty9rx2c4udjv/ui-placeholder-logo-white-2.png",
        },
        {
          quote:
            "The customer support is exceptional. Every question is answered promptly, and the team genuinely cares about our success.",
          author: "Amanda Foster",
          role: "Director of Operations",
          company: "Enterprise Dynamics",
          backgroundImage: "https://toastability-production.s3.amazonaws.com/gg5qnvb4nsl2k3g4dw4ls8bsllwh",
          logoSrc: "https://cdn.ing/assets/i/r/288971/sow5o2s8dp1cr159rxexm0yhov5w/ui-placeholder-logo-white-3.png",
        },
        {
          quote:
            "Security and compliance were our top concerns. This platform exceeded all expectations and passed our rigorous audits with flying colors.",
          author: "Daniel Kim",
          role: "Information Security Officer",
          company: "SecureData Corp",
          backgroundImage: "https://toastability-production.s3.amazonaws.com/5jsc0b4e3gxnjs81iotw2c3e6da3",
          logoSrc: "https://cdn.ing/assets/i/r/288969/h9k3b0ett73u3pouc2w15ibvl7tc/ui-placeholder-logo-white-4.png",
        },
      ]}
      height="h-[500px] md:h-[600px] lg:h-[700px]"
      overlayOpacity={0.6}
      background="dark"
    />
  );
}
