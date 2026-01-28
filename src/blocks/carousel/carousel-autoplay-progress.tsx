import { CarouselAutoplayProgress } from "@opensite/ui/blocks/carousel/carousel-autoplay-progress";
import { imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <CarouselAutoplayProgress
      slides={[
        {
          src: imagePlaceholders[12],
          alt: "Mountain Expedition",
          content: (
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Mountain Expedition</h3>
              <p className="text-muted-foreground text-sm">
                Discover breathtaking peaks and pristine wilderness trails
              </p>
            </div>
          ),
        },
        {
          src: imagePlaceholders[28],
          alt: "Urban Architecture",
          content: (
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Urban Architecture</h3>
              <p className="text-muted-foreground text-sm">
                Modern cityscapes showcasing cutting-edge design
              </p>
            </div>
          ),
        },
        {
          src: imagePlaceholders[45],
          alt: "Coastal Sunset",
          content: (
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Coastal Sunset</h3>
              <p className="text-muted-foreground text-sm">
                Golden hour magic along pristine shorelines
              </p>
            </div>
          ),
        },
        {
          src: imagePlaceholders[61],
          alt: "Forest Canopy",
          content: (
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Forest Canopy</h3>
              <p className="text-muted-foreground text-sm">
                Immerse yourself in ancient woodland ecosystems
              </p>
            </div>
          ),
        },
        {
          src: imagePlaceholders[78],
          alt: "Desert Dunes",
          content: (
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Desert Dunes</h3>
              <p className="text-muted-foreground text-sm">
                Endless horizons and sculpted sand formations
              </p>
            </div>
          ),
        },
        {
          src: imagePlaceholders[94],
          alt: "Northern Lights",
          content: (
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Northern Lights</h3>
              <p className="text-muted-foreground text-sm">
                Witness nature's most spectacular light show
              </p>
            </div>
          ),
        },
      ]}
      autoplayDelay={4000}
      options={{ loop: true }}
    />
  );
}
