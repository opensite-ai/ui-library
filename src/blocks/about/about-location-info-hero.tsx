import { AboutLocationInfoHero } from "@opensite/ui/blocks/about/about-location-info-hero";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutLocationInfoHero
      headline="Visit Our Studio"
      address="123 Innovation Drive, Suite 400, San Francisco, CA 94102"
      phone="+1 (555) 123-4567"
      actions={[
        {
          label: "Get Directions",
          href: "https://maps.google.com",
          variant: "default",
          icon: <DynamicIcon name="lucide/map-pin" size={16} />,
        },
        {
          label: "Schedule a Visit",
          href: "/contact",
          variant: "outline",
        },
      ]}
      hoursSections={[
        {
          title: "Office Hours",
          hours: [
            { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
            { day: "Saturday", time: "10:00 AM - 2:00 PM" },
            { day: "Sunday", time: "Closed" },
          ],
        },
        {
          title: "Support Hours",
          hours: [
            { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
            { day: "Weekend", time: "10:00 AM - 4:00 PM" },
          ],
        },
      ]}
      images={[
        {
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
          alt: "Office exterior",
        },
        {
          src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop",
          alt: "Office interior",
        },
        {
          src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop",
          alt: "Meeting room",
        },
      ]}
      pattern="dots"
      patternOpacity={0.05}
    />
  );
}
