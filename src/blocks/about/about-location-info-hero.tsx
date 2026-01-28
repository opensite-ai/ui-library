import { AboutLocationInfoHero } from "@opensite/ui/blocks/about/about-location-info-hero";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <AboutLocationInfoHero
      headline="Visit Our Studio"
      address="123 Innovation Drive, Suite 400, San Francisco, CA 94102"
      addressHref="#"
      phone="+1 (555) 123-4567"
      phoneHref="tel:+15551234567"
      actions={[
        {
          label: "Get Directions",
          href: "#",
        },
        {
          label: "Schedule a Visit",
          href: "#",
        },
      ]}
      hoursSections={[
        {
          label: "Office Hours",
          hours: [
            { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
            { day: "Saturday", time: "10:00 AM - 2:00 PM" },
            { day: "Sunday", time: "Closed" },
          ],
        },
        {
          label: "Support Hours",
          hours: [
            { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
            { day: "Weekend", time: "10:00 AM - 4:00 PM" },
          ],
        },
      ]}
      images={[
        {
          src: imagePlaceholders[45],
          alt: "Office exterior",
        },
        {
          src: imagePlaceholders[56],
          alt: "Office interior",
        },
      ]}
      pattern="dots"
      patternOpacity={0.05}
    />
  );
}
