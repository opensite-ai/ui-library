import { Shield, Users, Zap } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Badge, DynamicIcon, Section } from "@opensite/ui";

interface HomepageHeroProps {
  className?: string;
}

const HomepageHero = ({ className }: HomepageHeroProps) => {
  const circle1Images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vue-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vite-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
  ];

  const circle2Images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/typescript-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg",
  ];

  const circle3Images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/laravel-icon.svg",
  ];

  const circle4Images = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/dropbox-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/brave-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vscode-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
  ];

  const stats = [
    {
      icon: <DynamicIcon name="mynaui/layout-solid" size={42} />,
      title: "600+",
      description: "Blocks",
    },
    {
      icon: <DynamicIcon name="simple-icons/pagespeedinsights" size={42} />,
      title: "97%-100%",
      description: "Google Speed Avg",
    },
  ];

  {
    /* Hero Section */
  }
  {
    /* <section className="text-center space-y-6 py-12">
        <Badge className="mx-auto mb-4" variant="default">
          
        </Badge>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="block text-accent mt-2">
            
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Production-ready component library utilized by the OpenSite Semantic
          UI engine
        </p>
      </section> */
  }

  return (
    <Section
      className={cn("h-screen relative w-screen overflow-hidden", className)}
      background="white"
    >
      <div className="relative flex flex-col lg:flex-row">
        <div className="space-y-2 lg:w-1/2">
          <Badge>Semantic UI + AI</Badge>
          <h1 className="mt-1 max-w-lg text-6xl font-medium lg:text-7xl!">
            Powering
            <span className="px-4 font-bold text-primary">Intelligent</span>
            Design
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground gap-2 text-balance">
            Production-ready component library utilized by the OpenSite Semantic
            UI engine.
            <span className="pl-1 font-medium text-primary">
              Strong enough for an AI agent, but made for a designer.
            </span>
          </p>

          <ul className="mt-18 flex flex-wrap gap-9">
            {stats.map((stat, index) => (
              <li key={stat.title} className="flex items-center gap-4">
                <div className="flex items-center justify-center  text-black/30">
                  {stat.icon}
                </div>
                <div>
                  <div className="font-bold ">{stat.title}</div>
                  <p className="text-sm md:text-base">{stat.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-112 lg:w-1/2">
          <div className="relative -left-35 flex h-275 w-375 flex-col items-center justify-center lg:absolute lg:left-0">
            <OrbitingCircles iconSize={40} radius={310} speed={2}>
              {circle1Images.map((src, index) => (
                <div key={index} className="size-12">
                  <img src={src} className="size-full object-contain" alt="" />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={390} reverse speed={2}>
              {circle2Images.map((src, index) => (
                <div key={index} className="size-12">
                  <img src={src} className="size-full object-contain" alt="" />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={470} speed={2}>
              {circle3Images.map((src, index) => (
                <div key={index} className="size-12">
                  <img src={src} className="size-full object-contain" alt="" />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={550} reverse speed={1}>
              {circle4Images.map((src, index) => (
                <div key={index} className="size-12">
                  <img src={src} className="size-full object-contain" alt="" />
                </div>
              ))}
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { HomepageHero };
