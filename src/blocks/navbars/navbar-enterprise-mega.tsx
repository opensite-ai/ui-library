import { NavbarEnterpriseMega } from "@opensite/ui/blocks/navbars/navbar-enterprise-mega";
import { brandLogoPlaceholders, imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <div className="min-h-screen">
      <NavbarEnterpriseMega
        background="white"
        spacing="none"
        layoutVariant="fullScreenContainerizedLinks"
        logo={{
          url: "#",
          src: brandLogoPlaceholders.black[0],
          alt: "Enterprise Corp Logo",
        }}
        menuLinks={[
          {
            label: "Solutions",
            layout: "solutions-with-platform",
            solutionCards: [
              {
                id: "enterprise",
                title: "Enterprise",
                description: "For large organizations",
                href: "#enterprise",
                subpages: [
                  {
                    id: "enterprise-security",
                    title: "Security",
                    href: "#security",
                    icon: "lucide/shield",
                  },
                  {
                    id: "enterprise-compliance",
                    title: "Compliance",
                    href: "#compliance",
                    icon: "lucide/check-circle",
                  },
                  {
                    id: "enterprise-support",
                    title: "24/7 Support",
                    href: "#support",
                    icon: "lucide/headphones",
                  },
                ],
              },
              {
                id: "smb",
                title: "Small Business",
                description: "For growing companies",
                href: "#smb",
                subpages: [
                  {
                    id: "smb-start",
                    title: "Getting Started",
                    href: "#getting-started",
                    icon: "lucide/rocket",
                  },
                  {
                    id: "smb-templates",
                    title: "Templates",
                    href: "#templates",
                    icon: "lucide/layout",
                  },
                  {
                    id: "smb-training",
                    title: "Training",
                    href: "#training",
                    icon: "lucide/graduation-cap",
                  },
                ],
              },
            ],
            platformItems: [
              {
                id: "react",
                title: "React",
                href: "#react",
                icon: "lucide/code",
              },
              {
                id: "nodejs",
                title: "Node.js",
                href: "#nodejs",
                icon: "lucide/server",
              },
              {
                id: "python",
                title: "Python",
                href: "#python",
                icon: "lucide/terminal",
              },
              {
                id: "graphql",
                title: "GraphQL",
                href: "#graphql",
                icon: "lucide/git-graph",
              },
            ],
            featuredHeroCard: {
              title: "New Platform Release",
              description:
                "Experience the next generation of our enterprise platform with advanced features",
              href: "#platform-release",
              image: imagePlaceholders[10],
            },
          },
          {
            label: "Products",
            layout: "products-categorized",
            productCategories: [
              {
                title: "Analytics",
                products: [
                  {
                    id: "bi",
                    title: "Business Intelligence",
                    description: "Advanced analytics and reporting tools",
                    href: "#bi",
                    image: imagePlaceholders[11],
                  },
                  {
                    id: "warehouse",
                    title: "Data Warehouse",
                    description: "Centralized data storage and management",
                    href: "#warehouse",
                    image: imagePlaceholders[12],
                  },
                ],
              },
              {
                title: "Marketing",
                products: [
                  {
                    id: "email",
                    title: "Email Campaigns",
                    description: "Automated email marketing platform",
                    href: "#email",
                    image: imagePlaceholders[13],
                  },
                  {
                    id: "social",
                    title: "Social Media",
                    description: "Social media management suite",
                    href: "#social",
                    image: imagePlaceholders[14],
                  },
                ],
              },
            ],
            featuredHeroCard: {
              title: "Featured Product",
              description:
                "Check out our latest product launch with cutting-edge features",
              href: "#featured-product",
              image: imagePlaceholders[15],
            },
          },
          {
            label: "Resources",
            layout: "resources-with-topics",
            resourceItems: [
              {
                id: "docs",
                title: "Documentation",
                description: "Complete guides and API references",
                href: "#docs",
                icon: "lucide/book-open",
              },
              {
                id: "blog",
                title: "Blog",
                description: "Latest updates and insights",
                href: "#blog",
                icon: "lucide/newspaper",
              },
              {
                id: "cases",
                title: "Case Studies",
                description: "Customer success stories",
                href: "#cases",
                icon: "lucide/file-text",
              },
              {
                id: "webinars",
                title: "Webinars",
                description: "Live training sessions",
                href: "#webinars",
                icon: "lucide/video",
              },
            ],
            topicGroups: [
              {
                title: "Learning Paths",
                topics: [
                  {
                    id: "beginner",
                    title: "Beginner Guide",
                    href: "#beginner",
                    icon: "lucide/book",
                  },
                  {
                    id: "advanced",
                    title: "Advanced Topics",
                    href: "#advanced",
                    icon: "lucide/graduation-cap",
                  },
                  {
                    id: "certification",
                    title: "Certification",
                    href: "#certification",
                    icon: "lucide/award",
                  },
                ],
              },
            ],
            featuredHeroCard: {
              title: "Learning Hub",
              description:
                "Explore our comprehensive learning resources and documentation",
              href: "#learning",
              image: imagePlaceholders[16],
            },
          },
          {
            label: "Company",
            href: "#company",
          },
          {
            label: "Pricing",
            href: "#pricing",
          },
        ]}
        actions={[
          {
            label: "Contact Sales",
            variant: "ghost",
            href: "#contact",
          },
          {
            label: "Get Started",
            variant: "default",
            href: "#get-started",
          },
        ]}
      />
      <div className="pt-20 px-8">
        <h2 className="text-2xl font-bold mt-8">Content Below Navbar</h2>
        <p className="text-muted-foreground">
          This content appears below the fixed navbar.
        </p>
      </div>
    </div>
  );
}
