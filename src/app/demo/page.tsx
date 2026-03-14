import type { Metadata } from "next";
import { openGraphImgUrl } from "@/lib/media";
import Footer from "@/blocks/footers/footer-newsletter-minimal";
import Article from "@/blocks/article/article-compact-toc";
import Article2 from "@/blocks/article/article-toc-sidebar";
import HeroDemo from "@/blocks/hero/hero-badge-image-split";
import { VideoPlayer } from "@page-speed/video";
import {
  loadSkinFromJsDelivr,
  resolveVideoClasses,
  getSkinStyleObject,
} from "@page-speed/skins";

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

const skin = await loadSkinFromJsDelivr(
  "0.1.0",
  "skins/video/linear-inspired.json",
);

const skinClasses = resolveVideoClasses(skin);
const skinStyle = getSkinStyleObject(skin);

export default function DemoPage() {
  return (
    <div className="relative">
      <HeroDemo />
      <Article />
      <div className="flex items-center justify-center p-32">
        <VideoPlayer
          masterPlaylistUrl="https://octane.cdn.ing/api/v1/video/5ae48b81-2a69-5108-aeaa-4fa947f8d48d/master_playlist"
          fallbackSrc="https://octane.cdn.ing/api/v1/video/5ae48b81-2a69-5108-aeaa-4fa947f8d48d/progressive.mp4"
          poster="https://cdn.ing/assets/i/r/283714/o25uaxrpiw7bft5juw8nz2lflpi5/3z1o083tb7t7gol73v5afpfc7x8m.jpg"
          skinClasses={skinClasses}
          skinStyle={skinStyle}
        />
      </div>
      {/* <Article2 /> */}
      <Footer />
    </div>
  );
}
