"use client";

import { demoFormConfig } from "@/lib/form-demo-data";
import { ContactFaq } from "@opensite/ui/blocks/contact/contact-faq";

export default function Demo() {
  return (
    <ContactFaq
      heading="Have Questions?"
      description="Can't find the answer you're looking for in our FAQ? Drop us a message and we'll get back to you within 24 hours."
      formHeading="Send Us a Message"
      buttonText="Submit Question"
      formConfig={demoFormConfig}
      background="white"
      pattern="gridFadeTop"
      patternOpacity={0.9}
      faqHeading="Frequently Asked Questions"
      items={[
        {
          id: "billing-cycle",
          question: "When will I be charged?",
          answer:
            "Billing occurs on the same day each month or year, depending on your plan. You'll receive an invoice via email 3 days before each billing cycle.",
        },
        {
          id: "refunds",
          question: "What is your refund policy?",
          answer:
            "We offer a 30-day money-back guarantee. If you're not satisfied, contact us within 30 days of your initial purchase for a full refund.",
        },
        {
          id: "upgrades",
          question: "How do plan upgrades work?",
          answer:
            "Upgrades take effect immediately. You'll be charged a prorated amount for the remainder of your billing cycle at the new plan rate.",
        },
        {
          id: "downgrade",
          question: "Can I downgrade my plan?",
          answer:
            "Yes, downgrades take effect at the end of your current billing cycle. You'll continue to have access to your current plan features until then.",
        },
      ]}
    />
  );
}
