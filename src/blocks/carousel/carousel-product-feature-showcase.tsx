import { CarouselProductFeatureShowcase } from "@opensite/ui/blocks/carousel/carousel-product-feature-showcase";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselProductFeatureShowcase
      heading="Premium Wireless Headphones"
      subheading="Studio-quality sound meets cutting-edge technology"
      features={[
        {
          id: "noise-cancellation",
          title: "Active Noise Cancellation",
          description: "Industry-leading ANC technology blocks out ambient noise for an immersive listening experience. Enjoy your music, podcasts, or calls without distractions, whether you're on a plane, train, or busy city street.",
          image: imagePlaceholders[25],
          colors: [
            { name: "Midnight Black", value: "#1a1a1a", image: imagePlaceholders[25] },
            { name: "Silver Mist", value: "#c0c0c0", image: imagePlaceholders[26] },
            { name: "Rose Gold", value: "#b76e79", image: imagePlaceholders[27] },
          ],
        },
        {
          id: "battery-life",
          title: "40-Hour Battery Life",
          description: "Power through your entire week with up to 40 hours of continuous playback. Fast charging gives you 5 hours of playback with just 10 minutes of charging via USB-C.",
          image: imagePlaceholders[48],
          colors: [
            { name: "Midnight Black", value: "#1a1a1a", image: imagePlaceholders[48] },
            { name: "Silver Mist", value: "#c0c0c0", image: imagePlaceholders[49] },
            { name: "Rose Gold", value: "#b76e79", image: imagePlaceholders[50] },
          ],
        },
        {
          id: "comfort",
          title: "Premium Comfort Design",
          description: "Memory foam ear cushions wrapped in premium protein leather provide all-day comfort. The adjustable headband ensures a perfect fit for extended listening sessions without fatigue.",
          image: imagePlaceholders[64],
          colors: [
            { name: "Midnight Black", value: "#1a1a1a", image: imagePlaceholders[64] },
            { name: "Silver Mist", value: "#c0c0c0", image: imagePlaceholders[65] },
            { name: "Rose Gold", value: "#b76e79", image: imagePlaceholders[68] },
          ],
        },
        {
          id: "connectivity",
          title: "Multipoint Bluetooth 5.3",
          description: "Connect to two devices simultaneously and seamlessly switch between them. Latest Bluetooth 5.3 technology ensures stable connection up to 30 feet with minimal latency.",
          image: imagePlaceholders[81],
          colors: [
            { name: "Midnight Black", value: "#1a1a1a", image: imagePlaceholders[81] },
            { name: "Silver Mist", value: "#c0c0c0", image: imagePlaceholders[83] },
            { name: "Rose Gold", value: "#b76e79", image: imagePlaceholders[85] },
          ],
        },
      ]}
      actions={[
        {
          label: "Buy Now - $349",
          href: "#purchase",
          variant: "default",
          size: "lg",
        },
        {
          label: "Learn More",
          href: "#details",
          variant: "outline",
          size: "lg",
        },
      ]}
    />
  );
}
