"use client";

import * as React from "react";
import { ContactDark } from "@opensite/ui/blocks/contact/contact-dark";
import { createDemoFormConfig } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "fullName",
    type: "text",
    label: "Full Name",
    placeholder: "Full Name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "company",
    type: "text",
    label: "Company (Optional)",
    placeholder: "Company Name",
    required: false,
    columnSpan: 6,
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "your@email.com",
    required: true,
    columnSpan: 6,
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "+1 (555) 000-0000",
    required: false,
    columnSpan: 6,
  },
  {
    name: "inquiryType",
    type: "select",
    label: "Inquiry Type",
    placeholder: "Select an option",
    required: true,
    columnSpan: 6,
    options: [
      { value: "general", label: "General Inquiry" },
      { value: "support", label: "Technical Support" },
      { value: "sales", label: "Sales Question" },
      { value: "partnership", label: "Partnership Opportunity" },
      { value: "feedback", label: "Feedback" },
    ],
  },
  {
    name: "meetingTime",
    type: "time",
    label: "Preferred Meeting Time (Optional)",
    placeholder: "Select a time",
    required: false,
  },
  {
    name: "meetingDateRange",
    type: "date-range",
    label: "What days works best to meet? (Optional)",
    placeholder: "Select a date range",
    required: false,
  },
  {
    name: "contactMethod",
    type: "checkbox-group",
    label: "Preferred Contact Method",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "email",
        label: "Email",
        description: "We'll respond to your email within 24 hours.",
      },
      {
        value: "phone",
        label: "Phone Call",
        description: "We'll respond to your phone call within 24 hours.",
      },
    ],
  },
  {
    name: "documents",
    type: "file",
    label: "Upload Documents (Optional)",
    placeholder: "Choose files to upload...",
    required: false,
    columnSpan: 12,
    accept: ".pdf,.doc,.docx,.xls,.xlsx",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 5,
    multiple: true,
  },
  {
    name: "message",
    type: "textarea",
    label: "Your Message",
    placeholder: "Tell us more about your inquiry...",
    required: true,
    rows: 4,
    columnSpan: 12,
  },
  {
    name: "subscribe",
    type: "checkbox",
    label: "Subscribe to our newsletter for updates and insights",
    required: false,
    columnSpan: 12,
  },
];

type SubmissionAudit = {
  submittedAt: string;
  formData: Record<string, unknown>;
  responseData: unknown;
};

export default function Demo() {
  const [lastSubmission, setLastSubmission] =
    React.useState<SubmissionAudit | null>(null);

  const formConfig = React.useMemo(
    () =>
      createDemoFormConfig({
        submissionConfig: {
          behavior: "showConfirmation",
          newFormSubmissionAction: {
            enable: true,
            label: "Submit another dark contact form",
          },
          handleFormSubmission: ({ formData, responseData }) => {
            const audit: SubmissionAudit = {
              submittedAt: new Date().toISOString(),
              formData,
              responseData,
            };
            setLastSubmission(audit);
            if (typeof window !== "undefined") {
              window.sessionStorage.setItem(
                "showcase-contact-dark-last-submission",
                JSON.stringify(audit),
              );
            }
          },
        },
      }),
    [],
  );

  return (
    <>
      <ContactDark
        heading="Get In Touch"
        description="Showcase mode: this block tests submissionConfig.behavior='showConfirmation' plus a custom new-submission action label."
        contactHeading="Contact Information"
        contactDescription="Reach out to us directly using any of the methods below, or fill out the form and we'll respond within 24 hours."
        buttonText="Send Message"
        formFields={formFields}
        contactOptions={[
          {
            icon: "lucide/phone",
            info: "+1 (555) 123-4567",
            href: "#",
          },
          {
            icon: "lucide/mail",
            info: "hello@example.com",
            href: "#",
          },
          {
            icon: "lucide/map-pin",
            info: "123 Main Street, San Francisco, CA 94105",
            href: "#",
          },
        ]}
        socialLinks={[
          {
            icon: "lucide/twitter",
            href: "https://twitter.com",
            label: "Follow us on Twitter",
          },
          {
            icon: "lucide/facebook",
            href: "https://facebook.com",
            label: "Like us on Facebook",
          },
          {
            icon: "lucide/linkedin",
            href: "https://linkedin.com",
            label: "Connect on LinkedIn",
          },
          {
            icon: "lucide/instagram",
            href: "https://instagram.com",
            label: "Follow us on Instagram",
          },
        ]}
        formConfig={formConfig}
        successMessage="Thank you for contacting us! This confirmation is rendered by Form behavior='showConfirmation'."
        background="dark"
        pattern="architect"
        patternOpacity={1}
      />

      {lastSubmission ? (
        <div className="mx-auto mt-6 max-w-5xl rounded-md border border-border bg-muted/30 p-4">
          <p className="text-sm font-semibold">
            Callback payload snapshot (contact-dark)
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Submitted at: {new Date(lastSubmission.submittedAt).toLocaleString()}
          </p>
          <pre className="mt-3 max-h-80 overflow-auto rounded bg-background p-3 text-xs">
            {JSON.stringify(lastSubmission, null, 2)}
          </pre>
        </div>
      ) : null}
    </>
  );
}
