import { TestimonialsListVerified } from "@opensite/ui/blocks/testimonials/testimonials-list-verified";

export default function Demo() {
  return (
    <TestimonialsListVerified
      heading="Verified Customer Reviews"
      verifiedPurchaseLabel="Verified"
      reviews={[
        {
          rating: 5,
          title: "Outstanding quality and service",
          content:
            "I've been using this product for three months now, and it has completely transformed my workflow. The build quality is exceptional, and customer support has been incredibly responsive whenever I've had questions.",
          author: "Daniel Foster",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/sj8cs2gpbanaowqwxar1uhhwd23z",
          date: "January 20, 2026",
          verified: true,
        },
        {
          rating: 5,
          title: "Worth every dollar",
          content:
            "After extensive research and comparing multiple options, I chose this product and couldn't be happier. It's reliable, efficient, and the features exceed what was advertised. Highly recommend for professionals.",
          author: "Lisa Park",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/0mh8a1dg7ftcqnyzgv303u501c8y",
          date: "January 18, 2026",
          verified: true,
        },
        {
          rating: 4,
          title: "Excellent product with great potential",
          content:
            "Very satisfied with my purchase overall. The core functionality is solid and works exactly as described. A few features could be refined, but the team seems very responsive to feedback and regularly ships updates.",
          author: "Christopher Hughes",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/2t36c7l0ywchaz4nys8yj2l5amae",
          date: "January 15, 2026",
          verified: true,
        },
        {
          rating: 5,
          title: "Game changer for my business",
          content:
            "As a small business owner, this has been an invaluable investment. The efficiency gains alone have paid for itself multiple times over. My team adopted it quickly, and we've seen measurable improvements in our output.",
          author: "Michelle Rodriguez",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/ihhq8unynafk4aikmys3rhbfibaz",
          date: "January 12, 2026",
          verified: true,
        },
        {
          rating: 5,
          title: "Impressed beyond expectations",
          content:
            "I was initially hesitant due to the price point, but this has proven to be one of the best purchases I've made. The attention to detail in both design and functionality is evident. Setup was straightforward, and I was productive within minutes.",
          author: "Kevin Zhang",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/67fnapqepn7f8vwt0x4nqho70hbz",
          date: "January 8, 2026",
          verified: true,
        },
      ]}
      background="white"
      pattern="diagonalCrossFadeTop"
      patternOpacity={0.9}
    />
  );
}
