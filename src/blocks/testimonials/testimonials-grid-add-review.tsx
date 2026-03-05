import { TestimonialsGridAddReview } from "@opensite/ui/blocks/testimonials/testimonials-grid-add-review";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <TestimonialsGridAddReview
      heading="Customer Reviews"
      description="Join thousands of satisfied customers sharing their experiences"
      addReviewText="Write a Review"
      addReviewSubtext="Share your experience with us"
      reviews={[
        {
          rating: 5,
          content:
            "Exceptional quality and service. The product arrived exactly as described and exceeded my expectations. Would definitely recommend to anyone looking for reliability.",
          author: "Michael Torres",
          avatarSrc: imagePlaceholders[31],
        },
        {
          rating: 5,
          content:
            "Best purchase I've made this year. The attention to detail and customer support are unmatched. Worth every penny.",
          author: "Sarah Mitchell",
          avatarSrc: imagePlaceholders[47],
        },
        {
          rating: 4,
          content:
            "Great product overall. Installation was straightforward and it works as advertised. Only minor issue was shipping took longer than expected.",
          author: "James Wilson",
          avatarSrc: imagePlaceholders[63],
        },
        {
          rating: 5,
          content:
            "I've tried several similar products, and this one stands out for its quality and durability. Customer service was also very responsive.",
          author: "Emily Chen",
          avatarSrc: imagePlaceholders[79],
        },
        {
          rating: 5,
          content:
            "Absolutely love it! The design is sleek and modern, and it fits perfectly with my setup. Highly recommended for anyone hesitating.",
          author: "Robert Anderson",
          avatarSrc: imagePlaceholders[95],
        },
      ]}
      onAddReview={() => console.log("Open review form")}
      background="gray"
      spacing="lg"
    />
  );
}
