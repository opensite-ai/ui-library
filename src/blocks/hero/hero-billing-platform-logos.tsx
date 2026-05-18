import { HeroBillingPlatformLogos } from "@opensite/ui/blocks/hero/hero-billing-platform-logos";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroBillingPlatformLogos
      heading="Simplified billing for modern businesses"
      description="Accept payments, manage subscriptions, and handle invoicing all in one place. Trusted by thousands of companies worldwide."
      actions={[
        {
          label: "Start Free Trial",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Pricing",
          href: "#",
          variant: "outline",
        },
      ]}
      mainImage={{ src: "https://toastability-production.s3.amazonaws.com/b555hwjt7ltr81et05v5254q1ak6", alt: "Billing dashboard" }}
      logos={[
        { src: "https://toastability-production.s3.amazonaws.com/c4sgsy0g7o2rrjmvm9x7evxems82", alt: "Partner 1" },
        { src: "https://toastability-production.s3.amazonaws.com/a3m42usevv0iet0fpfwa1fsytxmv", alt: "Partner 2" },
        { src: "https://toastability-production.s3.amazonaws.com/qghzqu1i99vaubyew9s5dxcbel9l", alt: "Partner 3" },
        { src: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw", alt: "Partner 4" },
        { src: "https://toastability-production.s3.amazonaws.com/2d4k8d5shwg82276hzj2ztbj7mxq", alt: "Partner 5" },
        { src: "https://toastability-production.s3.amazonaws.com/op92dycs7w856e2jsvx20st0nyz9", alt: "Partner 6" },
      ]}
      background="gray"
    />
  );
}
