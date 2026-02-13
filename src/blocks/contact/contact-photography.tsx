"use client";

import * as React from "react";
import { ContactPhotography } from "@opensite/ui/blocks/contact/contact-photography";
import { createDemoFormConfig } from "@/lib/form-demo-data";
import { imagePlaceholders } from "@/lib/media";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "First name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "Last name",
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
    name: "phone",
    type: "tel",
    label: "Phone",
    placeholder: "+1 (555) 000-0000",
    required: true,
    columnSpan: 6,
  },
  {
    name: "projectType",
    type: "select",
    label: "Project Type",
    placeholder: "Select a project type",
    required: true,
    columnSpan: 6,
    options: [
      { value: "wedding", label: "Wedding Photography" },
      { value: "portrait", label: "Portrait Session" },
      { value: "corporate", label: "Corporate Event" },
      { value: "product", label: "Product Photography" },
      { value: "real-estate", label: "Real Estate" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "eventDate",
    type: "date-picker",
    label: "Preferred Event Date",
    placeholder: "Select a date",
    required: false,
    columnSpan: 6,
  },
  {
    name: "sessionLength",
    type: "radio",
    label: "Preferred Session Length",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "1-hour",
        label: "1 Hour",
        description: "Great for quick portraits or product shoots",
      },
      {
        value: "2-hours",
        label: "2 Hours",
        description: "Ideal for extended sessions or small events",
      },
      {
        value: "half-day",
        label: "Half Day",
        description: "Perfect for medium-sized events or multiple locations",
      },
      {
        value: "full-day",
        label: "Full Day",
        description: "Best for large events or comprehensive coverage",
      },
    ],
  },
  {
    name: "budget",
    type: "number",
    label: "Budget (USD)",
    placeholder: "5000",
    required: false,
    columnSpan: 6,
  },
  {
    name: "guestCount",
    type: "number",
    label: "Number of Guests/People (Optional)",
    placeholder: "50",
    required: false,
    columnSpan: 6,
  },
  {
    name: "referencePhotos",
    type: "file",
    label: "Reference Photos/Inspiration (Optional)",
    placeholder: "Upload reference images...",
    required: false,
    columnSpan: 12,
    accept: "image/*",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 10,
    multiple: true,
  },
  {
    name: "message",
    type: "textarea",
    label: "Project Details",
    placeholder:
      "Tell us about your vision, location, special requests, etc...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
  {
    name: "services",
    type: "checkbox-group",
    label: "Additional Services Needed (Optional)",
    required: false,
    options: [
      {
        value: "editing",
        label: "Photo Editing & Retouching",
        description: "Enhance your photos with professional editing services",
      },
      {
        value: "printing",
        label: "Professional Printing",
        description: "High-quality prints of your photos",
      },
      {
        value: "album",
        label: "Photo Album Design",
        description: "Custom-designed photo albums",
      },
      {
        value: "video",
        label: "Videography",
        description: "Professional video coverage of your event",
      },
    ],
  },
  {
    name: "newsletter",
    type: "checkbox",
    label:
      "Subscribe to our newsletter for photography tips and special offers",
    required: false,
    columnSpan: 12,
  },
];

type SubmissionAudit = {
  submittedAt: string;
  formData: Record<string, unknown>;
  responseData: unknown;
};

function getStringValue(value: unknown): string {
  return typeof value === "string" && value.length > 0 ? value : "N/A";
}

export default function Demo() {
  const [lastSubmission, setLastSubmission] =
    React.useState<SubmissionAudit | null>(null);
  const [submissionCount, setSubmissionCount] = React.useState(0);

  const formConfig = React.useMemo(
    () => {
      const customSuccessComponent = (
        <div className="space-y-4 rounded-lg border border-border bg-muted/30 p-4">
          <h3 className="text-lg font-semibold">Inquiry received</h3>
          <p className="text-sm text-muted-foreground">
            This success panel is rendered via{" "}
            <code>
              submissionConfig.behavior=&quot;renderCustomComponent&quot;
            </code>
            .
          </p>
          <div className="grid gap-2 text-sm sm:grid-cols-2">
            <p>
              <span className="font-medium">Project type:</span>{" "}
              {getStringValue(lastSubmission?.formData["projectType"])}
            </p>
            <p>
              <span className="font-medium">Session length:</span>{" "}
              {getStringValue(lastSubmission?.formData["sessionLength"])}
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              {getStringValue(lastSubmission?.formData["email"])}
            </p>
            <p>
              <span className="font-medium">
                Total submissions this session:
              </span>{" "}
              {submissionCount}
            </p>
          </div>
        </div>
      );

      return createDemoFormConfig({
        submissionConfig: {
          behavior: "renderCustomComponent",
          customComponent: customSuccessComponent,
          newFormSubmissionAction: {
            enable: true,
          },
          handleFormSubmission: ({ formData, responseData }) => {
            const audit: SubmissionAudit = {
              submittedAt: new Date().toISOString(),
              formData,
              responseData,
            };
            setLastSubmission(audit);
            setSubmissionCount((current) => current + 1);
            if (typeof window !== "undefined") {
              window.sessionStorage.setItem(
                "showcase-contact-photography-last-submission",
                JSON.stringify(audit),
              );
            }
          },
        },
      });
    },
    [lastSubmission, submissionCount],
  );

  return (
    <ContactPhotography
      heading="Ready to Get Started?"
      description="Showcase mode: this block tests behavior='renderCustomComponent' with callback-driven success content and default new-submission button label."
      buttonText="Submit Inquiry"
      formFields={formFields}
      formConfig={formConfig}
      successMessage="Thank you for your inquiry! We'll review your project details and get back to you within 1-2 business days."
      background="dark"
      pattern="gridFadeTopLeft"
      patternOpacity={0.15}
      imageSrc={imagePlaceholders[111]}
      imageAlt="Contact us banner"
    />
  );
}
