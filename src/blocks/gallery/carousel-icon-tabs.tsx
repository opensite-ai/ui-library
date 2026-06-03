import { CarouselIconTabs } from "@opensite/ui/blocks/gallery/carousel-icon-tabs";

export default function Demo() {
  return (
    <CarouselIconTabs
      heading="Platform Features"
      badge="Enterprise Ready"
      sections={[
        {
          img: "https://toastability-production.s3.amazonaws.com/6ku135fhv528eei3agnoc3zd7y75",
          alt: "Analytics Dashboard",
          title: "Advanced Analytics",
          text: "Comprehensive analytics dashboard with real-time data visualization, custom reports, and predictive insights. Track KPIs, user behavior, and business metrics in one unified platform.",
          icon: "lucide/bar-chart-3",
        },
        {
          img: "https://toastability-production.s3.amazonaws.com/x4scuzhsozrwrg703df5wbhygkgo",
          alt: "Team Collaboration",
          title: "Team Collaboration",
          text: "Built-in collaboration tools including real-time messaging, file sharing, and project management. Keep your team aligned and productive with seamless communication.",
          icon: "lucide/users",
        },
        {
          img: "https://toastability-production.s3.amazonaws.com/73e0s79u4crdu7cmjfp99j1l2v55",
          alt: "API Integration",
          title: "API Integration",
          text: "Extensive REST API with comprehensive documentation and SDKs for all major languages. Connect with your existing tools and build custom integrations effortlessly.",
          icon: "lucide/plug",
        },
      ]}
      background="white"
      pattern="gridFadeTop"
      patternOpacity={0.9}
    />
  );
}
