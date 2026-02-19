import { FooterSocialNewsletter } from "@opensite/ui/blocks/footers/footer-social-newsletter";
import { logoPlaceholders } from "@/lib/media";
import { demoFormConfig } from "@/lib/form-demo-data";
import { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "Enter your email",
    required: true,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <FooterSocialNewsletter
      logo={{
        url: "/",
        src: logoPlaceholders.darkHorizontalLogo,
        alt: "CloudSync Logo",
        title: "CloudSync",
      }}
      sections={[
        {
          title: "Product",
          links: [
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "Enterprise", href: "#enterprise" },
            { name: "Security", href: "#security" },
            { name: "Integrations", href: "#integrations" },
          ],
        },
        {
          title: "Resources",
          links: [
            { name: "Documentation", href: "#docs" },
            { name: "API Reference", href: "#api" },
            { name: "Guides & Tutorials", href: "#guides" },
            { name: "Changelog", href: "#changelog" },
            { name: "System Status", href: "#status" },
          ],
        },
        {
          title: "Community",
          links: [
            { name: "Blog", href: "#blog" },
            { name: "Events", href: "#events" },
            { name: "Developer Forum", href: "#forum" },
            { name: "Customer Stories", href: "#stories" },
            { name: "Open Source", href: "#opensource" },
          ],
        },
        {
          title: "Company",
          links: [
            { name: "About Us", href: "#about" },
            { name: "Careers", href: "#careers" },
            { name: "Press", href: "#press" },
            { name: "Partners", href: "#partners" },
            { name: "Contact", href: "#contact" },
          ],
        },
      ]}
      socialLinks={[
        {
          href: "https://linkedin.com/company/innovatetech",
          label: "Connect with InnovateTech on LinkedIn",
        },
        {
          href: "https://twitter.com/innovatetech",
          label: "Follow InnovateTech on Twitter",
        },
        {
          href: "https://facebook.com/innovatetech",
          label: "Like InnovateTech on Facebook",
        },
        {
          href: "https://instagram.com/innovatetech",
          label: "Follow InnovateTech on Instagram",
        },
        {
          href: "https://youtube.com/@innovatetech",
          label: "Subscribe to InnovateTech on YouTube",
        },
      ]}
      formFields={formFields}
      formConfig={{
        ...demoFormConfig,
      }}
      copyright="CloudSync LLC"
      pattern="gridFadeTop"
      patternOpacity={1}
      background="white"
      spacing="xl"
    />
  );
}
