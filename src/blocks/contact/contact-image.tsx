"use client";

import { ContactImage } from "@opensite/ui/blocks/contact/contact-image";
import { demoFormConfig, demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "Enter your name",
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
    name: "service",
    type: "checkbox-group",
    label: "Services Needed",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "web-design",
        label: "Web Design",
        description: "Custom website design and development.",
      },
      {
        value: "branding",
        label: "Branding",
        description: "Logo design and brand identity.",
      },
      {
        value: "marketing",
        label: "Digital Marketing",
        description: "SEO, PPC, and social media campaigns.",
      },
      {
        value: "consulting",
        label: "Consulting",
        description: "Strategy and business consulting.",
      },
    ],
  },
  {
    name: "budget",
    type: "select",
    label: "Project Budget",
    required: false,
    columnSpan: 12,
    options: [
      { value: "5k-10k", label: "$5,000 - $10,000" },
      { value: "10k-25k", label: "$10,000 - $25,000" },
      { value: "25k-50k", label: "$25,000 - $50,000" },
      { value: "50k+", label: "$50,000+" },
    ],
  },
  {
    name: "timeline",
    type: "radio",
    label: "Project Timeline",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      { value: "urgent", label: "ASAP (< 1 month)" },
      { value: "normal", label: "1-3 months" },
      { value: "flexible", label: "3+ months" },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Project Details",
    placeholder:
      "Tell us about your project goals, target audience, and any specific requirements...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactImage
      heading="Let's Build Something Amazing"
      description="Ready to take your business to the next level? Share your project details with us and we'll craft a custom proposal tailored to your needs."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for reaching out! We'll review your project details and get back to you with a custom proposal within 2-3 business days.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Start Your Project",
          },
        },
      }}
      background="white"
      pattern="dashedGridFadeBottom"
      patternOpacity={0.4}
    />
  );
}
