/**
 * Footer Component
 * Site footer with links and copyright
 */

import Link from "next/link";
import { logoPlaceholders, optixFlowApiKey } from "@/lib/media";
import { Img } from "@page-speed/img";
import { Section } from "@opensite/ui";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Section
      background="dark"
      patternOpacity={0.1}
      pattern="dashedGridBasic"
      spacing="sm"
    >
      <div className="">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Img
                src={logoPlaceholders.lightHorizontalLogo}
                alt="OpenSite Logo"
                className="h-14 w-auto object-contain"
                optixFlowConfig={{ apiKey: optixFlowApiKey }}
              />
            </Link>
            <p className="text-sm text-white/90 text-balance">
              Delivering the world's first Semantic UI site builder
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold  uppercase">Components</div>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm  transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-sm   transition-colors"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <div className="text-sm font-semibold  uppercase">Resources</div>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.opensite.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm   transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/opensite-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm   transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://labs.dashtrack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm   transition-colors"
                >
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase">Legal</div>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm  transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm  transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/opensite-ai/opensite-ui/blob/master/LICENSE"
                  className="text-sm  transition-colors"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-24">
          <p className="text-center text-sm opacity-50">
            © {currentYear} OpenSite. All rights reserved.
          </p>
        </div>
      </div>
    </Section>
  );
}
