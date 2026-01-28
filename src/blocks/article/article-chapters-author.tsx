import { ArticleChaptersAuthor } from "@opensite/ui/blocks/article/article-chapters-author";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <ArticleChaptersAuthor
      breadcrumbs={[
        { label: "Resources", href: "#resources" },
        { label: "Guides", href: "#guides" },
      ]}
      currentPage="Design Patterns"
      title="The Complete Guide to Design Patterns"
      subtitle="Master the fundamental patterns that power modern software architecture"
      heroImageSrc={imagePlaceholders[73]}
      heroImageAlt="Software architecture visualization"
      chapters={[
        { id: "chapter-1", number: 1, title: "The Foundation" },
        { id: "chapter-2", number: 2, title: "Building Blocks" },
        { id: "chapter-3", number: 3, title: "Advanced Patterns" },
        { id: "chapter-4", number: 4, title: "Real-World Applications" },
        { id: "chapter-5", number: 5, title: "Future Directions" },
      ]}
      author={{
        name: "Dr. Marcus Chen",
        role: "Principal Engineer",
        image: imagePlaceholders[88],
        bio: "Marcus has over 15 years of experience designing large-scale distributed systems. He's the author of three books on software architecture and a frequent speaker at tech conferences.",
        socialLinks: [
          {
            platform: "twitter",
            href: "https://twitter.com/marcuschen",
            icon: undefined,
            "aria-label": "Follow Marcus on Twitter",
          },
          {
            platform: "linkedin",
            href: "https://linkedin.com/in/marcuschen",
            icon: undefined,
            "aria-label": "Connect with Marcus on LinkedIn",
          },
          {
            platform: "github",
            href: "https://github.com/marcuschen",
            icon: undefined,
            "aria-label": "View Marcus's GitHub",
          },
        ],
      }}
      conclusionTitle="Ready to Master Design Patterns?"
      conclusionDescription="Take your software architecture skills to the next level with our comprehensive course and interactive workshops."
      conclusionActions={[
        {
          label: "Enroll in Course",
          href: "#enroll",
          variant: "default",
        },
        {
          label: "Download Resources",
          href: "#download",
          variant: "outline",
        },
      ]}
      enableChapterTracking={true}
    >
      <section id="chapter-1">
        <h2>Chapter 1: The Foundation</h2>
        <p>
          Design patterns are reusable solutions to common problems in software
          design. They represent best practices evolved over time by experienced
          software developers.
        </p>
        <p>
          Understanding the foundation of design patterns helps you recognize
          when and how to apply them effectively in your own projects. Each
          pattern addresses a specific problem and provides a proven solution.
        </p>
      </section>

      <section id="chapter-2">
        <h2>Chapter 2: Building Blocks</h2>
        <p>
          The building blocks of design patterns include creational, structural,
          and behavioral patterns. Each category addresses different aspects of
          software design.
        </p>
        <img
          src={imagePlaceholders[91]}
          alt="Pattern categories diagram"
          className="my-8 aspect-video w-full rounded-lg object-cover"
        />
        <p>
          Creational patterns deal with object creation mechanisms, structural
          patterns focus on class composition, and behavioral patterns
          characterize object interaction and responsibility distribution.
        </p>
      </section>

      <section id="chapter-3">
        <h2>Chapter 3: Advanced Patterns</h2>
        <p>
          Advanced patterns build upon the fundamentals to address more complex
          scenarios. These include patterns for concurrency, distributed systems,
          and enterprise applications.
        </p>
        <blockquote>
          &ldquo;Patterns are not invented, they are discovered.&rdquo; -
          Christopher Alexander
        </blockquote>
        <p>
          As you gain experience, you'll start recognizing patterns in existing
          codebases and know when to apply specific patterns to solve particular
          problems.
        </p>
      </section>

      <section id="chapter-4">
        <h2>Chapter 4: Real-World Applications</h2>
        <p>
          Seeing patterns in action helps solidify understanding. This chapter
          explores how major frameworks and libraries implement design patterns.
        </p>
        <ul>
          <li>React&apos;s use of the Observer pattern with hooks</li>
          <li>Express.js middleware as Chain of Responsibility</li>
          <li>Redux implementing the Flux pattern</li>
          <li>Dependency injection in Angular and NestJS</li>
          <li>Factory patterns in popular UI libraries</li>
        </ul>
      </section>

      <section id="chapter-5">
        <h2>Chapter 5: Future Directions</h2>
        <p>
          As software development evolves, new patterns emerge while others
          become less relevant. Understanding the principles behind patterns
          helps you adapt to changing technologies.
        </p>
        <p>
          The rise of functional programming, microservices, and serverless
          architectures has introduced new patterns and variations on classic
          ones. Stay curious and keep learning.
        </p>
      </section>
    </ArticleChaptersAuthor>
  );
}
