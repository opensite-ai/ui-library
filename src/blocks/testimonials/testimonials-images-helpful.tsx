import { TestimonialsImagesHelpful } from "@opensite/ui/blocks/testimonials/testimonials-images-helpful";

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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
          date: "Jan 15, 2026",
          verified: true,
          images: ["https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz", "https://toastability-production.s3.amazonaws.com/w41h7890eivogu3sr78vlwkpzz8g", "https://toastability-production.s3.amazonaws.com/ytbyjrcvrghc7wl6w1g7g8fwka22"],
          helpful: 24,
          variant: "Premium Edition",
        },
        {
          rating: 5,
          title: "Best investment for my business",
          content:
            "As a business owner, I needed something reliable and efficient. This has transformed how we operate daily. The ROI has been incredible, and our team loves using it. The photos show our actual setup in action.",
          author: "David Kumar",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/102grjqg8aigxkj585s9x3xbxfv7",
          date: "Jan 10, 2026",
          verified: true,
          images: ["https://toastability-production.s3.amazonaws.com/2t36c7l0ywchaz4nys8yj2l5amae", "https://toastability-production.s3.amazonaws.com/ms4s4zyqpmboh0slez1cwat9qhw4"],
          helpful: 18,
          variant: "Business Pro",
        },
        {
          rating: 4,
          title: "Great product with minor room for improvement",
          content:
            "Overall very satisfied with my purchase. The features work as advertised and the quality is solid. Only giving 4 stars because the setup process could be more intuitive. Once running, it's been flawless.",
          author: "Jennifer Lee",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz",
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
          avatarSrc: "https://toastability-production.s3.amazonaws.com/gg5qnvb4nsl2k3g4dw4ls8bsllwh",
          date: "Dec 28, 2025",
          verified: true,
          images: ["https://toastability-production.s3.amazonaws.com/6fffnb4phovtqkjhtzifs4rhb84u"],
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
