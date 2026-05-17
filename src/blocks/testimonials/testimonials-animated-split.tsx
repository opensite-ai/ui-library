import { TestimonialsAnimatedSplit } from "@opensite/ui/blocks/testimonials/testimonials-animated-split";

export default function Demo() {
  return (
    <TestimonialsAnimatedSplit
      testimonials={[
        {
          quote:
            "Implementing this platform has revolutionized how we handle client communications. The response time improvement alone has justified the investment tenfold.",
          author: "Sarah Chen",
          role: "VP of Operations",
          company: "TechFlow Solutions",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/vvucxqs128w2d0z3n4s2z131rq7p",
          image: "https://toastability-production.s3.amazonaws.com/vvixyoo7ybq3h04q2q0kact0s5wc",
        },
        {
          quote:
            "Our team productivity increased by 40% in the first quarter. The intuitive interface and powerful features make complex workflows feel effortless.",
          author: "Marcus Johnson",
          role: "Director of Engineering",
          company: "Innovate Labs",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/1xdx70c7gp9l883soyh5d3exesvt",
          image: "https://toastability-production.s3.amazonaws.com/hu4gmd93sp95wdyr9qijze0rgim9",
        },
        {
          quote:
            "The analytics dashboard gives us insights we never had before. Data-driven decision making has become our competitive advantage.",
          author: "Emily Rodriguez",
          role: "Chief Strategy Officer",
          company: "DataVision Inc",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/vrezhtksoqbw1nyo4hwnoqizrus5",
          image: "https://toastability-production.s3.amazonaws.com/y1aezpa78m2fhfvj8whcx337y9cb",
        },
        {
          quote:
            "Customer satisfaction scores jumped from 3.8 to 4.7 stars within months. The automation features free up our team to focus on what truly matters.",
          author: "David Park",
          role: "Head of Customer Success",
          company: "ServicePro",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/ytbyjrcvrghc7wl6w1g7g8fwka22",
          image: "https://toastability-production.s3.amazonaws.com/l080sx0lcx51x44dqrb8006nqf08",
        },
      ]}
      // autoPlayInterval={7000}
      background="dark"
      spacing="xl"
      pattern="diagonalCrossFadeTopRight"
      patternOpacity={0.15}
    />
  );
}
