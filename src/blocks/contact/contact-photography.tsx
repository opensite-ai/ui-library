"use client";

import { ContactPhotography } from "@opensite/ui/blocks/contact/contact-photography";
import { demoFormConfig } from "@/lib/form-demo-data";
import { imagePlaceholders } from "@/lib/media";
import type { FormFieldConfig } from "@opensite/ui/lib/form-field-types";

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
    layout: "inline",
    options: [
      { value: "1-hour", label: "1 Hour" },
      { value: "2-hours", label: "2 Hours" },
      { value: "half-day", label: "Half Day" },
      { value: "full-day", label: "Full Day" },
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
    placeholder: "Tell us about your vision, location, special requests, etc...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
  {
    name: "services",
    type: "checkbox-group",
    label: "Additional Services Needed (Optional)",
    required: false,
    columnSpan: 12,
    options: [
      { value: "editing", label: "Photo Editing & Retouching" },
      { value: "printing", label: "Professional Printing" },
      { value: "album", label: "Photo Album Design" },
      { value: "video", label: "Videography" },
    ],
  },
  {
    name: "newsletter",
    type: "checkbox",
    label: "Subscribe to our newsletter for photography tips and special offers",
    required: false,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactPhotography
      heading="Ready to Get Started?"
      description="Our team is here to help you find the perfect solution for your business. Fill out the form and we'll get back to you shortly."
      buttonText="Submit Inquiry"
      formFields={formFields}
      formConfig={demoFormConfig}
      successMessage="Thank you for your inquiry! We'll review your project details and get back to you within 1-2 business days."
      errorMessage="There was a problem submitting your inquiry. Please check your information and try again."
      background="dark"
      pattern="gridFadeTopLeft"
      patternOpacity={0.15}
      imageSrc={imagePlaceholders[111]}
      imageAlt="Contact us banner"
    />
  );
}
