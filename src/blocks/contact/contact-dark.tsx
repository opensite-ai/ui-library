"use client";

import { ContactDark } from "@opensite/ui/blocks/contact/contact-dark";
import { demoFormConfig } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "fullName",
    type: "text",
    label: "Full Name",
    placeholder: "Full Name",
    required: true,
    columnSpan: 2,
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "your@email.com",
    required: true,
    columnSpan: 2,
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number (Optional)",
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
    name: "message",
    type: "textarea",
    label: "Your Message",
    placeholder: "Tell us more about your inquiry...",
    required: true,
    rows: 4,
    // columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactDark
      heading="Get In Touch"
      description="Have a question or want to work together? Fill out the form below and we'll get back to you within 24 hours."
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
      formConfig={demoFormConfig}
      successMessage="Thank you for contacting us! We'll get back to you shortly."
      background="dark"
      pattern="architect"
      patternOpacity={1}
    />
  );
}
