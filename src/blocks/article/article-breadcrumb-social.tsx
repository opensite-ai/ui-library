import { ArticleBreadcrumbSocial } from "@opensite/ui/blocks/article/article-breadcrumb-social";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <ArticleBreadcrumbSocial
      breadcrumbs={[
        { label: "Blog", href: "#blog" },
        { label: "Technology", href: "#technology" },
      ]}
      currentPage="Building Scalable Web Applications"
      title="Building Scalable Web Applications in 2026"
      author={{
        name: "Sarah Mitchell",
        image: imagePlaceholders[9],
        role: "Senior Software Architect",
      }}
      publishDate="January 15, 2026"
      readTime="12 min read"
      heroImageSrc={imagePlaceholders[42]}
      heroImageAlt="Modern web application architecture"
      sections={[
        { id: "overview", title: "Overview" },
        { id: "key-features", title: "Key Features" },
        { id: "implementation", title: "Implementation" },
        { id: "performance", title: "Performance Metrics" },
        { id: "summary", title: "Summary" },
      ]}
      socialLinks={[
        {
          platform: "twitter",
          href: "https://twitter.com/share",
          icon: undefined,
          "aria-label": "Share on Twitter",
        },
        {
          platform: "facebook",
          href: "https://facebook.com/share",
          icon: undefined,
          "aria-label": "Share on Facebook",
        },
        {
          platform: "linkedin",
          href: "https://linkedin.com/share",
          icon: undefined,
          "aria-label": "Share on LinkedIn",
        },
      ]}
      enableTocTracking={true}
      enableBackToTop={true}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          Performance optimization is crucial for delivering exceptional user
          experiences. In this comprehensive guide, we&apos;ll explore proven
          strategies for improving web application performance.
        </p>
        <p>
          From initial page load to runtime performance, every millisecond
          counts. Users expect fast, responsive applications, and search engines
          reward sites that deliver.
        </p>
      </section>

      <section id="key-features">
        <h2>Key Features</h2>
        <p>Modern performance optimization encompasses several key areas:</p>
        <ul>
          <li>Code splitting and lazy loading for optimal bundle sizes</li>
          <li>Image optimization with responsive formats (AVIF, WebP)</li>
          <li>Intelligent caching strategies and CDN utilization</li>
          <li>Bundle size optimization through tree-shaking</li>
          <li>Progressive enhancement for core functionality</li>
        </ul>
        <img
          src={imagePlaceholders[58]}
          alt="Performance metrics dashboard"
          className="my-8 aspect-video w-full rounded-lg object-cover"
        />
      </section>

      <section id="implementation">
        <h2>Implementation</h2>
        <p>
          Implementing performance optimizations requires a systematic approach.
          Start by measuring your current performance using tools like
          Lighthouse, WebPageTest, or Chrome DevTools.
        </p>
        <blockquote>
          &ldquo;You can&apos;t improve what you don&apos;t measure.&rdquo; -
          Peter Drucker
        </blockquote>
        <p>
          Once you have baseline metrics, prioritize optimizations based on
          their potential impact and implementation effort. Focus on quick wins
          first while planning for longer-term improvements.
        </p>
      </section>

      <section id="performance">
        <h2>Performance Metrics</h2>
        <p>
          Focus on Core Web Vitals: Largest Contentful Paint (LCP), First Input
          Delay (FID), and Cumulative Layout Shift (CLS). These metrics directly
          impact user experience and SEO rankings.
        </p>
        <p>
          Aim for LCP under 2.5 seconds, FID under 100ms, and CLS under 0.1.
          Regular monitoring helps catch performance regressions early.
        </p>
      </section>

      <section id="summary">
        <h2>Summary</h2>
        <p>
          Performance optimization is an ongoing process, not a one-time task.
          Continuously monitor your metrics, identify bottlenecks, and iterate
          on improvements to maintain a fast, responsive application.
        </p>
      </section>
    </ArticleBreadcrumbSocial>
  );
}
