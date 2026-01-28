import { CarouselHorizontalCards } from "@opensite/ui/blocks/carousel/carousel-horizontal-cards";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselHorizontalCards
      heading="Trending Destinations"
      subtitle="Discover the world's most captivating travel experiences"
      headingHref="#destinations"
      items={[
        {
          id: "santorini",
          imageSrc: imagePlaceholders[7],
          title: "Santorini, Greece",
          count: "2,847",
          countLabel: "Travel Experiences",
        },
        {
          id: "kyoto",
          imageSrc: imagePlaceholders[22],
          title: "Kyoto, Japan",
          count: "3,192",
          countLabel: "Cultural Tours",
        },
        {
          id: "patagonia",
          imageSrc: imagePlaceholders[38],
          title: "Patagonia, Chile",
          count: "1,563",
          countLabel: "Adventure Activities",
        },
        {
          id: "reykjavik",
          imageSrc: imagePlaceholders[51],
          title: "Reykjavik, Iceland",
          count: "2,104",
          countLabel: "Northern Lights Tours",
        },
        {
          id: "marrakech",
          imageSrc: imagePlaceholders[69],
          title: "Marrakech, Morocco",
          count: "1,876",
          countLabel: "Cultural Experiences",
        },
        {
          id: "queenstown",
          imageSrc: imagePlaceholders[84],
          title: "Queenstown, New Zealand",
          count: "2,341",
          countLabel: "Outdoor Adventures",
        },
        {
          id: "barcelona",
          imageSrc: imagePlaceholders[99],
          title: "Barcelona, Spain",
          count: "4,127",
          countLabel: "City Tours",
        },
        {
          id: "bali",
          imageSrc: imagePlaceholders[112],
          title: "Bali, Indonesia",
          count: "3,658",
          countLabel: "Wellness Retreats",
        },
      ]}
    />
  );
}
