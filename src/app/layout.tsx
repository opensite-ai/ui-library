import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "sonner/dist/styles.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { openGraphImgUrl } from "@/lib/media";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OpenSite UI - Component Library & Blocks",
    template: "%s | OpenSite UI",
  },
  description:
    "Browse 600+ beautiful, production-ready UI components and blocks for building modern websites with OpenSite AI. Discover headers, footers, CTAs, testimonials, and more.",
  keywords: [
    "UI components",
    "React components",
    "component library",
    "design blocks",
    "OpenSite",
    "website builder",
    "Next.js components",
  ],
  authors: [{ name: "OpenSite" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ui.opensite.dev",
    siteName: "OpenSite UI",
    title: "OpenSite UI - Component Library & Blocks",
    description:
      "Browse 600+ beautiful, production-ready UI components and blocks for building modern websites with OpenSite AI.",
    images: [
      {
        url: openGraphImgUrl,
        width: 1200,
        height: 630,
        alt: "OpenSite UI Component Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenSite UI - Component Library & Blocks",
    description:
      "Browse 600+ beautiful, production-ready UI components and blocks for building modern websites.",
    images: [openGraphImgUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="OpenSite UI" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
