import { BlogCategoryOverlay } from "@opensite/ui/blocks/blog/blog-category-overlay";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <BlogCategoryOverlay
      badge="Explore Topics"
      heading="Curated Content for Every Interest"
      description="Browse through our carefully organized collection of articles, tutorials, and insights across various technology domains."
      posts={[
        {
          id: "1",
          title: "Machine Learning Model Optimization Techniques",
          image: imagePlaceholders[38],
          category: "AI & ML",
          date: "April 12, 2024",
          href: "/blog/ml-optimization",
        },
        {
          id: "2",
          title: "Progressive Web Apps: The Complete Guide",
          image: imagePlaceholders[76],
          category: "Web Development",
          date: "April 8, 2024",
          href: "/blog/pwa-complete-guide",
        },
        {
          id: "3",
          title: "Cybersecurity Best Practices for Remote Teams",
          image: imagePlaceholders[14],
          category: "Security",
          date: "April 5, 2024",
          href: "/blog/remote-cybersecurity",
        },
        {
          id: "4",
          title: "Data Visualization with D3.js and React",
          image: imagePlaceholders[52],
          category: "Data Science",
          date: "March 29, 2024",
          href: "/blog/data-viz-d3-react",
        },
        {
          id: "5",
          title: "Building Accessible Web Applications",
          image: imagePlaceholders[98],
          category: "Accessibility",
          date: "March 25, 2024",
          href: "/blog/accessible-web-apps",
        },
        {
          id: "6",
          title: "DevOps Culture: Bridging Development and Operations",
          image: imagePlaceholders[31],
          category: "DevOps",
          date: "March 20, 2024",
          href: "/blog/devops-culture",
        },
      ]}
      viewAllAction={{
        label: "Browse All Categories",
        href: "/categories",
        asButton: true,
      }}
      readMoreText="Read Article"
    />
  );
}
