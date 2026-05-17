import { TestimonialsGridAddReview } from "@opensite/ui/blocks/testimonials/testimonials-grid-add-review";

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
          quote:
            "Exceptional quality and service. The product arrived exactly as described and exceeded my expectations. Would definitely recommend to anyone looking for reliability.",
          author: "Michael Torres",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/s4vho0wfbjhf758oife8qfuekou8",
        },
        {
          rating: 5,
          quote:
            "Best purchase I've made this year. The attention to detail and customer support are unmatched. Worth every penny.",
          author: "Sarah Mitchell",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/vvkma6b8whdkiq5nq8z4eyfe00vo",
        },
        {
          rating: 4,
          quote:
            "Great product overall. Installation was straightforward and it works as advertised. Only minor issue was shipping took longer than expected.",
          author: "James Wilson",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/e83zsyvl0an0owzdmpwjnnty641x",
        },
        {
          rating: 5,
          quote:
            "I've tried several similar products, and this one stands out for its quality and durability. Customer service was also very responsive.",
          author: "Emily Chen",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/0g6t701zqr2r7najmdgftpeqnxmz",
        },
        {
          rating: 5,
          quote:
            "Absolutely love it! The design is sleek and modern, and it fits perfectly with my setup. Highly recommended for anyone hesitating.",
          author: "Robert Anderson",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/yw5f7iwyypf4kctpr5ye5e495swt",
        },
      ]}
      actions={[
        {
          label: "Read All Reviews",
          href: "#",
          variant: "default",
          size: "lg",
        },
      ]}
      onAddReview={() => console.log("Open review form")}
      background="dark"
      pattern="diagonalCrossFadeTop"
      patternOpacity={0.15}
      spacing="lg"
    />
  );
}
