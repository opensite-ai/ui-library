/**
 * Not Found Page
 * 404 error page
 */

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center space-y-6">
      <h1 className="text-6xl font-bold text-accent">404</h1>
      <h2 className="text-3xl font-semibold">Page Not Found</h2>
      <p className="text-lg text-muted-foreground max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
