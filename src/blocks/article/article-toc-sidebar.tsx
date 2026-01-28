import { ArticleTocSidebar } from "@opensite/ui/blocks/article/article-toc-sidebar";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <ArticleTocSidebar
      category="Development"
      title="Building Scalable Systems: A Comprehensive Guide"
      description="Learn the principles, patterns, and practices that enable applications to grow gracefully from prototype to production scale."
      authorName="Michael Zhang"
      authorImage={imagePlaceholders[88]}
      authorHref="#author"
      publishDate="January 12, 2026"
      readTime="20 min read"
      heroImageSrc={imagePlaceholders[95]}
      heroImageAlt="Scalable architecture diagram"
      sections={[
        { id: "introduction", title: "Introduction" },
        { id: "getting-started", title: "Getting Started" },
        { id: "core-concepts", title: "Core Concepts" },
        { id: "best-practices", title: "Best Practices" },
        { id: "conclusion", title: "Conclusion" },
      ]}
      ctaTitle="Want to Learn More?"
      ctaDescription="Join our upcoming workshop on scalable system design and architecture patterns."
      ctaActions={[
        {
          label: "Register for Workshop",
          href: "#workshop",
          variant: "default",
          className: "w-full",
        },
      ]}
      enableTocTracking={true}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          Building scalable applications requires careful consideration of
          architecture, design patterns, and infrastructure. In this guide,
          we&apos;ll explore the key principles that enable applications to grow
          gracefully with increasing demand.
        </p>
        <div className="my-6 rounded-lg border bg-muted/50 p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">Pro Tip</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Start with a simple architecture and evolve it as your needs
                grow. Premature optimization can lead to unnecessary complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>
          Before diving into complex architectural patterns, ensure you have a
          solid understanding of your application&apos;s requirements. Consider
          factors like expected traffic, data volume, and team expertise.
        </p>
        <p>
          A well-designed system starts with clear requirements and constraints.
          Document your assumptions and validate them with stakeholders before
          making architectural decisions.
        </p>
        <ul>
          <li>Define your scalability goals with specific metrics</li>
          <li>Identify your system's critical paths and bottlenecks</li>
          <li>Understand your data access patterns and query volumes</li>
          <li>Plan for monitoring and observability from day one</li>
        </ul>
      </section>

      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <p>
          Scalability encompasses both horizontal and vertical scaling
          strategies. Horizontal scaling adds more machines to handle load,
          while vertical scaling increases the capacity of existing machines.
        </p>
        <img
          src={imagePlaceholders[8]}
          alt="Architecture diagram showing scaling strategies"
          className="my-8 aspect-video w-full rounded-lg object-cover"
        />
        <p>
          Key concepts include load balancing, caching, database sharding, and
          microservices architecture. Each approach has trade-offs that must be
          carefully evaluated based on your specific use case.
        </p>
        <blockquote>
          &ldquo;Scalability is not just about handling more load—it&apos;s
          about doing so efficiently while maintaining reliability and
          cost-effectiveness.&rdquo;
        </blockquote>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <p>
          Follow these best practices to ensure your application scales
          effectively:
        </p>
        <ul>
          <li>Design for failure and implement graceful degradation</li>
          <li>
            Use caching strategically at multiple levels (CDN, application,
            database)
          </li>
          <li>
            Implement proper monitoring and alerting for all critical systems
          </li>
          <li>
            Automate deployment and scaling processes with Infrastructure as
            Code
          </li>
          <li>Use asynchronous processing for non-critical operations</li>
          <li>Implement circuit breakers for external service dependencies</li>
          <li>Design APIs with rate limiting and throttling from the start</li>
        </ul>
        <p>
          Remember that premature optimization is often counterproductive. Focus
          on building a solid foundation and optimize based on real-world data
          and bottleneck analysis.
        </p>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          Building scalable applications is both an art and a science. By
          understanding the fundamental principles and applying them
          thoughtfully, you can create systems that grow with your business
          needs.
        </p>
        <p>
          The key is to remain pragmatic: scale when needed, not when
          anticipated. Over-engineering can be as problematic as
          under-engineering. Use monitoring data to guide your scaling decisions
          and continuously iterate on your architecture as you learn more about
          your system's behavior.
        </p>
      </section>
    </ArticleTocSidebar>
  );
}
