"use client";

import * as React from "react";
import { ContactFaq } from "@opensite/ui/blocks/contact/contact-faq";
import { createDemoFormConfig } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Full Name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "your@email.com",
    required: true,
    columnSpan: 6,
  },
  {
    name: "subject",
    type: "text",
    label: "Subject",
    placeholder: "What is this regarding?",
    required: true,
    columnSpan: 12,
  },
  {
    name: "priority",
    type: "radio",
    label: "Priority Level",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      { value: "low", label: "Low", description: "Non-urgent inquiries" },
      {
        value: "medium",
        label: "Medium",
        description: "Requires attention within 48 hours",
      },
      {
        value: "high",
        label: "High",
        description: "Immediate attention required",
      },
    ],
  },
  {
    name: "category",
    type: "select",
    label: "Question Category",
    placeholder: "Select a category",
    required: true,
    columnSpan: 6,
    options: [
      { value: "billing", label: "Billing & Payments" },
      { value: "technical", label: "Technical Support" },
      { value: "account", label: "Account Management" },
      { value: "features", label: "Features & Usage" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "attachments",
    type: "file",
    label: "Attachments (Optional)",
    placeholder: "Upload supporting documents...",
    required: false,
    columnSpan: 6,
    accept: ".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png",
    maxSize: 5 * 1024 * 1024,
    maxFiles: 3,
    multiple: true,
  },
  {
    name: "message",
    type: "textarea",
    label: "Message",
    placeholder: "Please describe your question in detail...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
  {
    name: "interests",
    type: "checkbox-group",
    label: "I'm also interested in (optional)",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      { value: "newsletter", label: "Newsletter" },
      { value: "updates", label: "Product Updates" },
      { value: "webinars", label: "Webinars" },
    ],
  },
  {
    name: "agreeToTerms",
    type: "checkbox",
    label: "I agree to the terms and conditions and privacy policy",
    required: true,
    columnSpan: 12,
  },
];

type RedirectMode = "internal" | "external";

export default function Demo() {
  const [redirectMode, setRedirectMode] = React.useState<RedirectMode>("internal");
  const [internalRedirectUrl, setInternalRedirectUrl] = React.useState("/");
  const [lastCallbackSnapshot, setLastCallbackSnapshot] = React.useState<
    string | null
  >(null);
  const [redirectNotice, setRedirectNotice] = React.useState<string | null>(
    null,
  );

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const url = new URL(window.location.href);
    const internalUrl = new URL(window.location.href);
    internalUrl.searchParams.set("contactFaqRedirect", "internal");
    setInternalRedirectUrl(`${internalUrl.pathname}${internalUrl.search}`);

    const redirectedBy = url.searchParams.get("contactFaqRedirect");
    if (redirectedBy) {
      setRedirectNotice(
        `Internal redirect complete (contactFaqRedirect=${redirectedBy}).`,
      );
    }

    const snapshot = window.sessionStorage.getItem(
      "showcase-contact-faq-last-submission",
    );
    if (snapshot) {
      setLastCallbackSnapshot(snapshot);
    }
  }, []);

  const redirectUrl =
    redirectMode === "external"
      ? "https://example.com/?from=opensite-ui-showcase-contact-faq"
      : internalRedirectUrl;

  const formConfig = React.useMemo(
    () =>
      createDemoFormConfig({
        submissionConfig: {
          behavior: "redirect",
          redirectUrl,
          newFormSubmissionAction: {
            enable: false,
            label: "This label should not render when enable=false.",
          },
          handleFormSubmission: ({ formData, responseData }) => {
            if (typeof window === "undefined") {
              return;
            }
            const snapshot = JSON.stringify(
              {
                mode: redirectMode,
                redirectUrl,
                submittedAt: new Date().toISOString(),
                formData,
                responseData,
              },
              null,
              2,
            );
            window.sessionStorage.setItem(
              "showcase-contact-faq-last-submission",
              snapshot,
            );
            setLastCallbackSnapshot(snapshot);
          },
        },
      }),
    [redirectMode, redirectUrl],
  );

  return (
    <div className="space-y-4">
      <div className="mx-auto max-w-6xl rounded-md border border-border bg-muted/20 p-4">
        <p className="text-sm font-semibold">
          Redirect behavior test controls (contact-faq)
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          This block is configured with{" "}
          <code>submissionConfig.behavior=&quot;redirect&quot;</code>.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setRedirectMode("internal")}
            className={
              redirectMode === "internal"
                ? "rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium ring-2 ring-ring"
                : "rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium hover:bg-muted"
            }
          >
            Internal Redirect
          </button>
          <button
            type="button"
            onClick={() => setRedirectMode("external")}
            className={
              redirectMode === "external"
                ? "rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium ring-2 ring-ring"
                : "rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium hover:bg-muted"
            }
          >
            External Redirect
          </button>
        </div>
        <p className="mt-3 text-xs">
          <span className="font-medium">Current redirect URL:</span>{" "}
          <code>{redirectUrl}</code>
        </p>
        {redirectNotice ? (
          <p className="mt-2 text-xs text-emerald-700 dark:text-emerald-400">
            {redirectNotice}
          </p>
        ) : null}
        {lastCallbackSnapshot ? (
          <pre className="mt-3 max-h-60 overflow-auto rounded bg-background p-3 text-xs">
            {lastCallbackSnapshot}
          </pre>
        ) : null}
      </div>

      <ContactFaq
        heading="Have Questions?"
        description="Showcase mode: this block validates redirect behavior (internal + external), plus callback execution before navigation."
        formHeading="Send Us a Message"
        buttonText="Submit Question"
        formFields={formFields}
        formConfig={formConfig}
        successMessage="Thank you for reaching out! Redirect should start immediately."
        background="white"
        pattern="gridFadeTop"
        patternOpacity={0.9}
        faqHeading="Frequently Asked Questions"
        items={[
          {
            id: "billing-cycle",
            question: "When will I be charged?",
            answer:
              "Billing occurs on the same day each month or year, depending on your plan. You'll receive an invoice via email 3 days before each billing cycle.",
          },
          {
            id: "refunds",
            question: "What is your refund policy?",
            answer:
              "We offer a 30-day money-back guarantee. If you're not satisfied, contact us within 30 days of your initial purchase for a full refund.",
          },
          {
            id: "upgrades",
            question: "How do plan upgrades work?",
            answer:
              "Upgrades take effect immediately. You'll be charged a prorated amount for the remainder of your billing cycle at the new plan rate.",
          },
          {
            id: "downgrade",
            question: "Can I downgrade my plan?",
            answer:
              "Yes, downgrades take effect at the end of your current billing cycle. You'll continue to have access to your current plan features until then.",
          },
        ]}
      />
    </div>
  );
}
