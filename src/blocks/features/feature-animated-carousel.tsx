import { imagePlaceholders } from "@/lib/media";
import { FeatureAnimatedCarousel } from "@opensite/ui/blocks/features/feature-animated-carousel";

export default function Demo() {
  return (
    <FeatureAnimatedCarousel
      title="Elevate Your Projects"
      description="Discover the powerful features that set our platform apart. From lightning-fast performance to seamless scalability, explore how we can help you build, deploy, and manage your applications with ease."
      features={[
        {
          title: "Lightning Fast Performance",
          description:
            "Optimized for speed with sub-100ms response times globally. Edge computing and intelligent caching ensure your users get the best experience.",
          image: imagePlaceholders[51],
          imageAlt: "Performance dashboard",
          href: "#",
        },
        {
          title: "Enterprise Security",
          description:
            "Bank-level encryption with SOC 2 Type II compliance. Automated security scanning and regular penetration testing keep your data safe.",
          image: imagePlaceholders[75],
          imageAlt: "Security features",
          href: "#",
        },
        {
          title: "Seamless Scalability",
          description:
            "From zero to millions of users without configuration. Auto-scaling infrastructure handles demand spikes automatically.",
          image: imagePlaceholders[99],
          imageAlt: "Scalability metrics",
          href: "#",
        },
        {
          title: "Real-Time Collaboration",
          description:
            "Built-in tools for team communication, code review, and project management. Keep everyone aligned and productive.",
          image: imagePlaceholders[36],
          imageAlt: "Collaboration tools",
          href: "#",
        },
      ]}
      background="gray"
      pattern="gridFadeTop"
      patternOpacity={1}
    />
  );
}
