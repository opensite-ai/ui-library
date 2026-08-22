import { ArticleLegalProse } from "@opensite/ui/blocks/article/article-legal-prose";

export default function Demo() {
  return (
    // The ENTIRE legal document lives in ONE block: full sectioned markdown in
    // markdownString with ## headings. Supply lastUpdatedLabel/lastUpdatedDate
    // only when a real revision date is known — omit both rather than invent one.
    <ArticleLegalProse
      title="Privacy Policy"
      lastUpdatedLabel="Last updated"
      lastUpdatedDate="March 12, 2026"
      markdownString={`## Overview
This policy explains what information this website collects and how that information is used.

## Information We Collect
Contact details you submit through forms on this site, plus standard usage analytics.

## How We Use Information
We use submitted information to respond to inquiries, operate the website, and improve our services.

## Your Rights
You may request a copy of your personal data or ask for it to be deleted at any time.

## Contact
Questions about this policy can be sent through this website's contact page.`}
    />
  );
}
