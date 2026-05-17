import { TestimonialsSplitImage } from "@opensite/ui/blocks/testimonials/testimonials-split-image";

export default function Demo() {
  return (
    <TestimonialsSplitImage
      testimonial={{
        quote:
          "This platform represents everything we were looking for - powerful features, intuitive design, and exceptional performance. The transformation in our workflow has been nothing short of remarkable.",
        author: "Dr. Jonathan Parker",
        role: "Chief Technology Officer",
        company: "TechVision Enterprises",
        avatarSrc: "https://toastability-production.s3.amazonaws.com/ssgb7unxdwdqokfvhkp7cok2v79s",
      }}
      imageSrc={"https://toastability-production.s3.amazonaws.com/t3k42fbzq7r7j93feldqm5cj1o1n"}
      imageAlt="Modern office workspace"
      background="gray"
      pattern="diagonalCrossBasic"
      patternOpacity={0.9}
      spacing="xl"
      imagePosition="right"
    />
  );
}
