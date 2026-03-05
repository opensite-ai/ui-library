import { TestimonialsSplitImage } from "@opensite/ui/blocks/testimonials/testimonials-split-image";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsSplitImage
      testimonial={{
        quote:
          "This platform represents everything we were looking for - powerful features, intuitive design, and exceptional performance. The transformation in our workflow has been nothing short of remarkable.",
        author: "Dr. Jonathan Parker",
        role: "Chief Technology Officer",
        company: "TechVision Enterprises",
        avatarSrc: imagePlaceholders[46],
      }}
      imageSrc={imagePlaceholders[64]}
      imageAlt="Modern office workspace"
      background="gray"
      pattern="diagonalCrossBasic"
      patternOpacity={0.9}
      spacing="xl"
      imagePosition="right"
    />
  );
}
