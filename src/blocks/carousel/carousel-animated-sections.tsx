import { CarouselAnimatedSections } from "@opensite/ui/blocks/carousel/carousel-animated-sections";

export default function Demo() {
  return (
    <CarouselAnimatedSections
      sections={[
        {
          id: "innovation",
          subtitle: "Technology Leadership",
          title: "Building the Future of AI",
          description:
            "Explore groundbreaking innovations that transform how businesses harness artificial intelligence to solve complex challenges and unlock new opportunities.",
          image:
            "https://toastability-production.s3.amazonaws.com/3nqc7xvjy3e8d7jo1gdvbzty0oqg",
          ctaText: "Discover Our Platform",
          ctaHref: "#",
        },
        {
          id: "design",
          subtitle: "Creative Excellence",
          title: "Design That Inspires Action",
          description:
            "Experience stunning visual narratives crafted with precision and purpose. Our design philosophy merges aesthetics with functionality to create memorable digital experiences.",
          image:
            "https://toastability-production.s3.amazonaws.com/rews5enr9ynu6izioj66s8ec90nc",
          ctaText: "View Our Work",
          ctaHref: "#",
        },
        {
          id: "performance",
          subtitle: "Speed & Efficiency",
          title: "Lightning-Fast Performance",
          description:
            "Built on cutting-edge infrastructure that delivers millisecond response times. Every interaction is optimized for speed, reliability, and seamless user experience.",
          image:
            "https://toastability-production.s3.amazonaws.com/kka8f550on7acx1lf82xleu6zhzo",
          ctaText: "See Benchmarks",
          ctaHref: "#",
        },
        {
          id: "security",
          subtitle: "Enterprise Security",
          title: "Fort Knox-Level Protection",
          description:
            "Your data is protected by military-grade encryption and multi-layered security protocols. We meet the highest compliance standards across all major industries.",
          image:
            "https://toastability-production.s3.amazonaws.com/okf6fg4n9yv59up8ivgcdjy3w030",
          ctaText: "Security Details",
          ctaHref: "#",
        },
      ]}
    />
  );
}
