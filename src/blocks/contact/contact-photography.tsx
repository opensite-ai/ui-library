"use client";

import { ContactPhotography } from "@opensite/ui/blocks/contact/contact-photography";
import { demoFormConfig } from "@/lib/form-demo-data";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <ContactPhotography
      heading="Ready to Get Started?"
      description="Our team is here to help you find the perfect solution for your business. Fill out the form and we'll get back to you shortly."
      buttonText="Submit Inquiry"
      formConfig={demoFormConfig}
      background="dark"
      pattern="gridFadeTopLeft"
      patternOpacity={0.15}
      imageSrc={imagePlaceholders[111]}
      imageAlt="Contact us banner"
    />
  );
}
