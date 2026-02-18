"use client";

import { ContactMap } from "@opensite/ui/blocks/contact/contact-map";
import { demoFormConfig } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "Your name",
    required: true,
    columnSpan: 12,
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
    name: "department",
    type: "select",
    label: "Department",
    required: true,
    columnSpan: 12,
    options: [
      {
        value: "sales",
        label: "Sales",
        description: "Product information and quotes.",
      },
      {
        value: "support",
        label: "Support",
        description: "Technical assistance and help.",
      },
      {
        value: "billing",
        label: "Billing",
        description: "Invoices and payment questions.",
      },
      {
        value: "general",
        label: "General Inquiry",
        description: "Other questions or feedback.",
      },
    ],
  },
  {
    name: "subject",
    type: "text",
    label: "Subject",
    placeholder: "Brief subject line",
    required: true,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Message",
    placeholder: "Your message...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactMap
      heading="Contact Us"
      description="We're here to help! Send us a message and we'll respond within 24 hours."
      buttonText="Send Message"
      formFields={formFields}
      formConfig={demoFormConfig}
      successMessage="Thank you for contacting us! We'll get back to you within 24 hours."
      background="white"
      pattern="dots"
      patternOpacity={0.1}
    />
  );
}
