import { ArticleCompactToc } from "@opensite/ui/blocks/article/article-compact-toc";
import { imagePlaceholders } from "@/lib/media";

/**
 * ArticleCompactToc Demo
 *
 * Key Feature: Mobile-optimized collapsible Table of Contents
 * - TOC appears below the article meta on mobile/tablet screens
 * - Click "Table of Contents" button to expand/collapse navigation
 * - Automatically tracks active section as you scroll
 * - Sections are linked and clickable for quick navigation
 *
 * To see the TOC in action: resize your browser to mobile width (< 1024px)
 */
export default function Demo() {
  return (
    <ArticleCompactToc
      breadcrumbs={[
        { label: "Research", href: "#research" },
        { label: "Studies", href: "#studies" },
      ]}
      currentPage="User Behavior Analysis"
      title="Understanding User Behavior in Modern Web Applications"
      authorName="Dr. Jennifer Park"
      authorHref="#author"
      publishDate="January 22, 2026"
      readTime="8 min read"
      heroImageSrc={imagePlaceholders[5]}
      heroImageAlt="User behavior analytics visualization"
      sections={[
        { id: "introduction", title: "Introduction" },
        { id: "methodology", title: "Methodology" },
        { id: "results", title: "Results" },
        { id: "discussion", title: "Discussion" },
        { id: "conclusion", title: "Conclusion" },
      ]}
      socialLinks={[
        {
          platform: "twitter",
          href: "https://twitter.com/share",
          icon: undefined,
          "aria-label": "Share on Twitter",
        },
        {
          platform: "linkedin",
          href: "https://linkedin.com/share",
          icon: undefined,
          "aria-label": "Share on LinkedIn",
        },
      ]}
      enableTocTracking={true}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          Understanding user behavior is fundamental to creating effective web
          applications. This study examines patterns in user interaction and
          provides insights for improving user experience across desktop,
          mobile, and tablet devices.
        </p>
        <p>
          Our research focuses on identifying key factors that influence user
          engagement and satisfaction in modern web applications. We analyzed
          data from over 10,000 users across diverse demographics, tracking
          their interactions over a six-month period.
        </p>
        <p>
          The rapid evolution of web technologies and changing user expectations
          have made it increasingly important to understand how users interact
          with digital interfaces. This study aims to bridge the gap between
          theoretical UX principles and real-world user behavior.
        </p>
      </section>

      <section id="methodology">
        <h2>Methodology</h2>
        <p>
          We employed a mixed-methods approach combining quantitative analytics
          with qualitative user interviews. Data was collected from over 10,000
          users across diverse demographics and device types, including
          smartphones, tablets, and desktop computers.
        </p>
        <p>
          Statistical analysis was performed using industry-standard tools to
          ensure reliability and validity of our findings. We tracked user
          interactions, time on page, bounce rates, conversion metrics, and
          scroll depth patterns.
        </p>
        <img
          src={imagePlaceholders[18]}
          alt="Research methodology diagram"
          className="my-8 aspect-video w-full rounded-lg object-cover"
        />
        <p>
          Our participant pool was carefully selected to represent a wide range
          of technical proficiency levels, from novice users to power users.
          This diversity allowed us to identify patterns that apply broadly
          across user segments.
        </p>
      </section>

      <section id="results">
        <h2>Results</h2>
        <p>
          Our findings reveal several key patterns in user behavior that have
          significant implications for web design and development:
        </p>
        <ul>
          <li>
            Users prefer intuitive navigation over complex menus, with 78%
            abandoning sites with confusing navigation
          </li>
          <li>
            Page load time significantly impacts engagement rates - each
            additional second of load time reduces engagement by 11%
          </li>
          <li>
            Mobile-first design improves overall satisfaction scores by 43%
            across all device types
          </li>
          <li>
            Clear calls-to-action increase conversion rates by 34% on average
          </li>
          <li>
            Personalized content drives 2.5x more engagement than generic
            content
          </li>
          <li>
            Accessible design benefits all users, not just those with
            disabilities
          </li>
        </ul>
        <p>
          These patterns held true across different age groups and device types,
          suggesting universal principles for effective web design. The data
          shows that investing in user experience delivers measurable business
          results.
        </p>
        <p>
          Interestingly, we found that users form opinions about website
          credibility within the first 50 milliseconds of exposure, highlighting
          the importance of first impressions in web design.
        </p>
      </section>

      <section id="discussion">
        <h2>Discussion</h2>
        <p>
          These results align with existing literature while providing new
          insights into emerging user expectations. The implications for web
          development practices are significant and actionable.
        </p>
        <blockquote>
          &ldquo;User experience is not just about usability—it&apos;s about
          creating meaningful interactions that resonate with users and drive
          business outcomes.&rdquo;
        </blockquote>
        <p>
          Our findings suggest that developers should prioritize performance,
          simplicity, and personalization when building web applications. The
          data shows clear ROI for investments in UX research and optimization,
          with companies reporting up to 400% returns on UX investments.
        </p>
        <p>
          The study also revealed that responsive design is no longer optional
          but essential, as users increasingly expect seamless experiences
          across all devices. Mobile traffic now accounts for more than 60% of
          web traffic globally.
        </p>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          This study provides actionable insights for developers and designers
          seeking to improve user experience. Future research should explore the
          impact of emerging technologies like AI, voice interfaces, and
          augmented reality on user behavior patterns.
        </p>
        <p>
          By understanding and applying these principles, teams can create web
          applications that not only meet user expectations but exceed them,
          driving engagement and business outcomes. The evidence is clear: user
          experience is a competitive advantage.
        </p>
        <p>
          We recommend that organizations invest in continuous user research,
          performance optimization, and accessibility improvements. These
          investments pay dividends in user satisfaction, engagement, and
          ultimately, business success.
        </p>
      </section>
    </ArticleCompactToc>
  );
}
