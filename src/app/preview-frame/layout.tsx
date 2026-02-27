/**
 * Preview Frame Layout
 * Minimal layout for component previews - NO navbar, NO footer
 * This layout completely overrides the root layout for this route segment
 */

import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  robots: "noindex,nofollow",
};

export default function PreviewFrameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`} style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
