import { ArticleHeroProse } from "@opensite/ui/blocks/article/article-hero-prose";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <ArticleHeroProse
      post={{
        title: "The Evolution of Modern JavaScript: From ES6 to ES2026",
        description:
          "Explore how JavaScript has transformed over the past decade, introducing powerful features that have reshaped web development as we know it.",
        authorName: "Alex Rodriguez",
        authorImage: imagePlaceholders[77],
        authorHref: "#author",
        image: imagePlaceholders[62],
        pubDate: new Date("2026-01-20"),
      }}
      dateFormat="MMMM d, yyyy"
    >
      <h2 className="text-3xl font-extrabold">The JavaScript Revolution</h2>
      <p className="mt-2 text-lg text-muted-foreground">
        JavaScript has come a long way since its humble beginnings in 1995. What
        started as a simple scripting language for adding interactivity to web
        pages has evolved into a powerful, full-stack programming language that
        powers everything from mobile apps to server infrastructure.
      </p>

      <h2>The ES6 Turning Point</h2>
      <p>
        ECMAScript 2015 (ES6) marked a watershed moment in JavaScript's
        evolution. The introduction of classes, arrow functions, promises, and
        modules fundamentally changed how developers write JavaScript code.
      </p>
      <p>
        These features weren't just syntactic sugar—they represented a paradigm
        shift in how we think about JavaScript development. Suddenly, writing
        clean, maintainable code became significantly easier.
      </p>

      <img
        src={imagePlaceholders[84]}
        alt="JavaScript evolution timeline"
        className="my-8 aspect-video w-full rounded-lg object-cover"
      />

      <h2>Key Innovations Since ES6</h2>
      <p>
        Since ES6, each yearly release has brought valuable improvements:
      </p>
      <ul>
        <li>
          <strong>ES2016:</strong> Exponentiation operator and Array.includes()
        </li>
        <li>
          <strong>ES2017:</strong> Async/await for cleaner asynchronous code
        </li>
        <li>
          <strong>ES2018:</strong> Rest/spread properties and Promise.finally()
        </li>
        <li>
          <strong>ES2019:</strong> Optional catch binding and flat/flatMap
        </li>
        <li>
          <strong>ES2020:</strong> Optional chaining and nullish coalescing
        </li>
        <li>
          <strong>ES2021:</strong> Logical assignment operators
        </li>
        <li>
          <strong>ES2022:</strong> Top-level await and private class fields
        </li>
      </ul>

      <h2>The Modern Developer Experience</h2>
      <p>
        Today's JavaScript development experience is vastly superior to what we
        had a decade ago. Modern tooling, including TypeScript, ESLint, and
        Prettier, has made it easier to catch bugs early and maintain consistent
        code quality across teams.
      </p>
      <blockquote>
        &ldquo;JavaScript's flexibility used to be its greatest weakness. Now,
        with modern tooling and language features, it's become one of its
        greatest strengths.&rdquo;
      </blockquote>

      <h2>Looking Ahead to ES2026 and Beyond</h2>
      <p>
        The TC39 committee continues to evolve JavaScript with proposals for
        pattern matching, decorators, and improved module systems. The language
        is becoming more expressive while maintaining backward compatibility—a
        remarkable achievement.
      </p>
      <p>
        As we look to the future, JavaScript's role in web development shows no
        signs of diminishing. If anything, its importance continues to grow as
        the language matures and the ecosystem expands.
      </p>

      <h2>Conclusion</h2>
      <p>
        The journey from ES6 to ES2026 represents more than just language
        evolution—it reflects the maturation of the web platform itself. By
        embracing these changes and staying current with best practices,
        developers can build better applications and deliver superior user
        experiences.
      </p>
    </ArticleHeroProse>
  );
}
