import { TestimonialsMiniDividers } from "@opensite/ui/blocks/testimonials/testimonials-mini-dividers";

export default function Demo() {
  return (
    <TestimonialsMiniDividers
      heading="Customer Feedback"
      description="Quick insights from our satisfied customers"
      testimonials={[
        {
          quote:
            "Exceptional quality and service. Exceeded all my expectations.",
          author: "Alex Thompson",
          role: "Product Manager",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/gxs6zevccphti0hdq5l9fwytprpr",
          rating: 5,
        },
        {
          quote: "Best purchase I've made this year. Highly recommend!",
          author: "Maria Garcia",
          role: "Design Lead",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/vh1aowwr93yz4qrzct2s4je0cxdo",
          rating: 5,
        },
        {
          quote: "The support team went above and beyond to help us succeed.",
          author: "James Lee",
          role: "Engineering Manager",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/9keidwrag6g7jtqr7rdwb1ryt6ht",
          rating: 5,
        },
        {
          quote:
            "Intuitive interface and powerful features. Perfect combination.",
          author: "Sarah Williams",
          role: "Operations Director",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/mat88x8zzdek7wpgtocjrehfivsh",
          rating: 4,
        },
        {
          quote:
            "Transformed our workflow completely. Can't imagine working without it.",
          author: "Michael Chen",
          role: "CTO",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/yrp5k5xszwpe26fquupey6a6g0uu",
          rating: 5,
        },
        {
          quote: "Excellent value for money. ROI was evident within weeks.",
          author: "Lisa Anderson",
          role: "CFO",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/9eddibiq5ovc9cvs3ekijkrjpahg",
          rating: 5,
        },
      ]}
      background="dark"
      spacing="lg"
    />
  );
}
