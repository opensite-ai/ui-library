"use client";

import { ContactDark } from "@opensite/ui/blocks/contact/contact-dark";
import { demoFormConfig } from "@/lib/form-demo-data";

export default function Demo() {
  return (
    <ContactDark
      heading="Get In Touch"
      description="Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible."
      contactHeading="Contact Information"
      contactDescription="Reach out to us directly using any of the methods below, or fill out the form and we'll respond within 24 hours."
      buttonText="Send Message"
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
      background="dark"
      pattern="architect"
      patternOpacity={1}
    />
  );
}
