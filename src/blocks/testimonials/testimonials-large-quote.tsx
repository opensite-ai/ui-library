import { TestimonialsLargeQuote } from "@opensite/ui/blocks/testimonials/testimonials-large-quote";

export default function Demo() {
  return (
    <TestimonialsLargeQuote
      testimonial={{
        quote:
          "This platform has revolutionized how we approach our business operations. The impact on our team's productivity and morale has been extraordinary.",
        author: "Victoria Reynolds",
        role: "Founder & CEO",
        company: "NextWave Ventures",
        avatarSrc: "https://toastability-production.s3.amazonaws.com/9797jh6slgbf9oq6lzlimcdiuziv",
      }}
      background="gradient"
      spacing="xl"
      pattern="gridFadeTop"
      patternOpacity={0.15}
    />
  );
}
