import { LinkTreeBlock } from "@opensite/ui/blocks/link-page/link-tree-block";
import { imagePlaceholders, logoPlaceholders } from "@/lib/media";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <LinkTreeBlock
      brandName="Creative Studio"
      brandTagline="Award-winning design & branding agency"
      brandAvatar={{
        src: logoPlaceholders.lightHorizontalLogo,
        alt: "Creative Studio",
      }}
      brandVerified={false}
      socialLinks={[
        {
          href: "https://instagram.com/@client-username",
        },
        {
          href: "https://x.com/client-username",
        },
        {
          href: "https://linkedin.com/:client-linkedin",
        },
        {
          href: "https://youtube.com/@client-channel",
        },
      ]}
      links={[
        {
          id: "1",
          label: "Featured Project",
          description: "New Brand Identity Launch",
          href: "#",
          iconName: "lucide/star",
          featured: true,
          badge: "New",
        },
        {
          id: "2",
          label: "Our Portfolio",
          description: "View our latest work",
          href: "#",
          iconName: "lucide/briefcase",
        },
        {
          id: "3",
          label: "Services & Pricing",
          description: "Discover what we offer",
          href: "#",
          iconName: "lucide/package",
        },
        {
          id: "4",
          label: "Client Testimonials",
          description: "Hear from our clients",
          href: "#",
          iconName: "lucide/message-circle",
        },
        {
          id: "5",
          label: "Free Consultation",
          description: "Book a 30-minute call",
          href: "#",
          iconName: "lucide/calendar",
          badge: "Limited",
        },
        {
          id: "6",
          label: "Contact Us",
          description: "Get in touch",
          href: "#",
          iconName: "lucide/mail",
        },
      ]}
      mediaGalleryTitle="Recent Work"
      mediaGallery={[
        {
          id: "1",
          type: "image",
          src: imagePlaceholders[125],
          alt: "Project showcase 1",
          href: "https://example.com/project1",
        },
        {
          id: "2",
          type: "image",
          src: imagePlaceholders[126],
          alt: "Project showcase 2",
          href: "https://example.com/project2",
        },
        {
          id: "3",
          type: "image",
          src: imagePlaceholders[127],
          alt: "Project showcase 3",
          href: "https://example.com/project3",
        },
        {
          id: "4",
          type: "image",
          src: imagePlaceholders[128],
          alt: "Project showcase 4",
          href: "https://example.com/project4",
        },
        {
          id: "5",
          type: "image",
          src: imagePlaceholders[129],
          alt: "Project showcase 5",
          href: "#",
        },
        {
          id: "6",
          type: "image",
          src: imagePlaceholders[130],
          alt: "Project showcase 6",
          href: "#",
        },
      ]}
      footerAction={{
        label: "Powered by OpenSite",
        href: "https://opensite.ai",
        iconAfter: <DynamicIcon name="lucide/arrow-up-right" size={16} />,
      }}
      spacing="xl"
      patternOpacity={0.33}
      pattern="diagonalCrossFadeCenter"
      background="dark"
    />
  );
}
