/**
 * Footer Component
 * Site footer with links and copyright
 */

import Link from "next/link";
import { logoPlaceholders, optixFlowApiKey } from "@/lib/media";
import { Img } from "@page-speed/img";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Img
                src={logoPlaceholders.darkHorizontalLogo}
                alt="OpenSite Logo"
                className="h-14 w-auto object-contain"
                optixFlowConfig={{ apiKey: optixFlowApiKey }}
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              A comprehensive component library for building beautiful websites
              with AI.
            </p>
          </div>

          {/* Components */}
          <div className="space-y-4">
            <div className="text-sm font-semibold text-foreground uppercase">
              Components
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Browse All
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <div className="text-sm font-semibold text-foreground uppercase">
              Resources
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.opensite.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/opensite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://labs.dashtrack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  DashTrack Labs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <div className="text-sm font-semibold text-foreground uppercase">
              Legal
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} OpenSite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
