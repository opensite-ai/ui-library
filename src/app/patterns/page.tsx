/**
 * Patterns Page
 * Preview all available background patterns with customizable settings
 */

import type { Metadata } from "next";
import { PatternsClient } from "./patterns-client";

export const metadata: Metadata = {
  title: "Pattern Library - OpenSite UI Showcase",
  description:
    "Preview all available background patterns with customizable settings. Test different backgrounds and opacity values.",
};

export default function PatternsPage() {
  return <PatternsClient />;
}
