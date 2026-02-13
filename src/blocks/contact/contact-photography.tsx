"use client";

import { ContactPhotography } from "@opensite/ui/blocks/contact/contact-photography";
import { demoFormConfig } from "@/lib/form-demo-data";
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
    required: false,
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
    label: "Preferred Date",
    placeholder: "Select a date",
    required: false,
    columnSpan: 6,
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
];

export default function Demo() {
  return (
    <ContactPhotography
      heading="Ready to Get Started?"
      description="Tell us about your project and we'll put together a custom quote for you. We typically respond within 1-2 business days."
      buttonText="Submit Inquiry"
      formFields={formFields}
      formConfig={demoFormConfig}
      successMessage="Thank you for your inquiry! We'll review your project details and get back to you within 1-2 business days."
      background="dark"
      pattern="gridFadeTopLeft"
      patternOpacity={0.15}
      imageSrc={imagePlaceholders[111]}
      imageAlt="Contact us banner"
    />
  );
}
