import { imagePlaceholders, optixFlowApiKey } from "@/lib/media";
import { HeroFloatingImages } from "@opensite/ui/blocks/hero/hero-floating-images";
import { Badge } from "@opensite/ui/components/badge";
import { Pressable } from "@opensite/ui/components/pressable";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroFloatingImages
      images={[
        {
          src: imagePlaceholders[10],
          alt: "Floating Image 1",
          className: "rounded-lg shadow-lg",
        },
        {
          src: imagePlaceholders[15],
          alt: "Floating Image 2",
          className: "rounded-lg shadow-lg",
        },
        {
          src: imagePlaceholders[20],
          alt: "Floating Image 3",
          className: "rounded-lg shadow-lg",
        },
      ]}
      optixFlowConfig={{ apiKey: optixFlowApiKey as string }}
      className="flex items-center justify-center"
    >
      <div className="flex flex-col justify-center">
        <Badge className="mb-6 w-fit" variant="secondary">
          Featured Work
        </Badge>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Build Stunning Websites with
          <br />
          <span className="text-primary">OpenSite UI</span>
        </h1>

        <p className="mb-8 max-w-lg text-lg text-muted-foreground">
          We design and build beautiful digital products that help brands
          connect with their audience. From concept to launch, we bring visions
          to life.
        </p>

        <div className="flex flex-wrap space-x-2 space-y-4">
          <Pressable
            onClick={() => console.log("Clicked")}
            componentType="button"
            asButton
            size="lg"
            variant="default"
          >
            View Portfolio
            <DynamicIcon name="lucide/arrow-right" className="h-4 w-4" />
          </Pressable>
          <Pressable
            onClick={() => console.log("Clicked")}
            asButton
            size="lg"
            componentType="button"
            variant="link"
          >
            Our Process
          </Pressable>
        </div>
      </div>
    </HeroFloatingImages>
  );
}
