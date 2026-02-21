import { imagePlaceholders } from "@/lib/media";
import { HeroImageSlider } from "@opensite/ui/blocks/hero/hero-image-slider";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "first_name",
    type: "text",
    label: "First Name",
    placeholder: "First name",
    required: true,
    columnSpan: 12,
  },
  {
    name: "last_name",
    type: "text",
    label: "Last Name",
    placeholder: "Last name",
    required: true,
    columnSpan: 12,
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "your@email.com",
    required: true,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <HeroImageSlider
      heading="Explore our collection"
      description="Browse through our carefully curated selection of products, each one designed to enhance your experience."
      images={[
        { src: imagePlaceholders[14], alt: "Slide 1" },
        { src: imagePlaceholders[18], alt: "Slide 2" },
        { src: imagePlaceholders[19], alt: "Slide 3" },
        { src: imagePlaceholders[26], alt: "Slide 4" },
      ]}
      actions={[
        {
          label: "Shop Now",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/shopping-bag" size={16} />,
        },
      ]}
      formHeading="Join the list"
      buttonText="Get Updates"
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thanks for subscribing! We'll keep you updated.",
      }}
      background="white"
      pattern="gridFadeTop"
      patternOpacity={0.9}
    />
  );
}
