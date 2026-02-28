import type { Metadata } from "next";
import { openGraphImgUrl } from "@/lib/media";
import Block from "@/blocks/footers/footer-newsletter-minimal";
import HeroBlock1 from "@/blocks/hero/hero-event-registration";
import HeroBlock2 from "@/blocks/hero/hero-crm-streamlined";
import ContactPhotography from "@/blocks/contact/contact-photography";

import { SocialShare } from "@page-speed/social-share";

export const metadata: Metadata = {
  title: "Demo OpenSite UI Component Library - 600+ Production-Ready Blocks",
  description:
    "Discover 600+ beautiful, production-ready UI components and blocks for building modern websites. Browse headers, footers, CTAs, testimonials, forms, and more. Built for OpenSite AI.",
  openGraph: {
    title: "OpenSite UI Component Library - 600+ Production-Ready Blocks",
    description:
      "Discover 600+ beautiful, production-ready UI components and blocks for building modern websites.",
    images: [openGraphImgUrl],
  },
};

export default function DemoPage() {
  return (
    <div className="">
      <HeroBlock1 />
      <ContactPhotography />
      <HeroBlock2 />
      <div className="flex items-center justify-center py-24 bg-white">
        <SocialShare
          variant="combo"
          postTitle="My Demo Page"
          shareUrl="https://ui.opensite.dev/"
          summaryContent="Production-ready component library utilized by the OpenSite Semantic UI engine.Strong enough for an AI agent, but made for a designer. 600+ Blocks 97%-100% Google Speed Avg"
          // imgUrls={[openGraphImgUrl]}
          hashtags={["react", "webdev"]}
          disableImageAttachments
        />
      </div>
      <Block />
    </div>
  );
}
