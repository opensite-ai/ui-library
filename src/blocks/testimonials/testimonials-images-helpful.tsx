import { TestimonialsImagesHelpful } from "@opensite/ui/blocks/testimonials/testimonials-images-helpful";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsImagesHelpful
      heading="Customer Reviews"
      writeReviewLabel="Write a Review"
      reportButtonLabel="Report"
      reviews={[
        {
          rating: 5,
          title: "Exceeded all expectations!",
          content:
            "I was skeptical at first, but this product completely won me over. The build quality is exceptional, and the performance is outstanding. I've attached photos showing how perfectly it integrates into my workspace.",
          author: "Alexandra Martinez",
          avatarSrc: imagePlaceholders[22],
          date: "Jan 15, 2026",
          verified: true,
          images: [imagePlaceholders[44], imagePlaceholders[66], imagePlaceholders[88]],
          helpful: 24,
          variant: "Premium Edition",
        },
        {
          rating: 5,
          title: "Best investment for my business",
          content:
            "As a business owner, I needed something reliable and efficient. This has transformed how we operate daily. The ROI has been incredible, and our team loves using it. The photos show our actual setup in action.",
          author: "David Kumar",
          avatarSrc: imagePlaceholders[33],
          date: "Jan 10, 2026",
          verified: true,
          images: [imagePlaceholders[55], imagePlaceholders[77]],
          helpful: 18,
          variant: "Business Pro",
        },
        {
          rating: 4,
          title: "Great product with minor room for improvement",
          content:
            "Overall very satisfied with my purchase. The features work as advertised and the quality is solid. Only giving 4 stars because the setup process could be more intuitive. Once running, it's been flawless.",
          author: "Jennifer Lee",
          avatarSrc: imagePlaceholders[44],
          date: "Jan 5, 2026",
          verified: true,
          helpful: 12,
          variant: "Standard",
        },
        {
          rating: 5,
          title: "Life-changing purchase!",
          content:
            "I cannot overstate how much this has improved my daily routine. It's intuitive, powerful, and beautifully designed. The customer support team has also been incredibly helpful with my questions. Highly recommend!",
          author: "Marcus Johnson",
          avatarSrc: imagePlaceholders[56],
          date: "Dec 28, 2025",
          verified: true,
          images: [imagePlaceholders[99]],
          helpful: 31,
          variant: "Premium Edition",
        },
      ]}
      onWriteReview={() => console.log("Open review form")}
      background="white"
      spacing="lg"
    />
  );
}
