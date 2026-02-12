"use client";

import { ContactDark } from "@opensite/ui/blocks/contact/contact-dark";
import { demoFormConfig } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui/lib/form-field-types";

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
    name: "budget",
    type: "select",
    label: "Budget Range (Optional)",
    placeholder: "Select budget range",
    required: false,
    columnSpan: 6,
    options: [
      { value: "under-5k", label: "Under $5,000" },
      { value: "5k-10k", label: "$5,000 - $10,000" },
      { value: "10k-25k", label: "$10,000 - $25,000" },
      { value: "25k-plus", label: "$25,000+" },
    ],
  },
  {
    name: "contactMethod",
    type: "radio",
    label: "Preferred Contact Method",
    required: true,
    columnSpan: 12,
    layout: "inline",
    options: [
      { value: "email", label: "Email" },
      { value: "phone", label: "Phone Call" },
      { value: "either", label: "Either is fine" },
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

export default function Demo() {
  return (
    <ContactDark
      heading="Get In Touch"
      description="Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible."
      contactHeading="Contact Information"
      contactDescription="Reach out to us directly using any of the methods below, or fill out the form and we'll respond within 24 hours."
      buttonText="Send Message"
      formFields={formFields}
      contactOptions={[
        {
          icon: "lucide/phone",
          info: "+1 (555) 123-4567",
          href: "tel:+15551234567",
        },
        {
          icon: "lucide/mail",
          info: "hello@example.com",
          href: "mailto:hello@example.com",
        },
        {
          icon: "lucide/map-pin",
          info: "123 Main Street, San Francisco, CA 94105",
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
      formConfig={demoFormConfig}
      successMessage="Thank you for contacting us! We'll respond to your inquiry within 24 hours via your preferred contact method."
      errorMessage="We encountered an issue submitting your message. Please try again or contact us directly."
      background="dark"
      pattern="architect"
      patternOpacity={1}
    />
  );
}
