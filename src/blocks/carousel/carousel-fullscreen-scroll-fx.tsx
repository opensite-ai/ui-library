import { CarouselFullscreenScrollFx } from "@opensite/ui/blocks/carousel/carousel-fullscreen-scroll-fx";
import { imagePlaceholders } from "@/lib/media";
import { DynamicIcon } from "@opensite/ui";

export default function Demo() {
  return (
    <CarouselFullscreenScrollFx
      slides={[
        {
          id: "chapter-one",
          subtitle: "Chapter One",
          title: "The Journey Begins",
          description:
            "Every great story starts with a single step. This is where vision meets execution, where dreams transform into reality through determination and innovation.",
          image: imagePlaceholders[8],
          overlayColor: "rgba(0, 20, 40, 0.6)",
          actions: [
            {
              label: "Get Started",
              href: "#",
              asButton: true,
            },
            {
              label: "Learn More",
              href: "#",
              asButton: true,
              variant: "outline",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
        },
        {
          id: "chapter-two",
          subtitle: "Chapter Two",
          title: "Breaking Boundaries",
          description:
            "We challenged conventional thinking and pushed beyond the limits of what was thought possible. Innovation thrives when curiosity meets courage.",
          image: imagePlaceholders[31],
          overlayColor: "rgba(40, 20, 60, 0.6)",
        },
        {
          id: "chapter-three",
          subtitle: "Chapter Three",
          title: "Building Together",
          description:
            "Success is a team sport. Through collaboration and shared purpose, we created something greater than the sum of its parts.",
          image: imagePlaceholders[54],
          overlayColor: "rgba(20, 40, 20, 0.6)",
        },
        {
          id: "chapter-four",
          subtitle: "Chapter Four",
          title: "Global Impact",
          description:
            "From local roots to worldwide reach, our mission expanded to touch lives across continents and transform entire industries.",
          image: imagePlaceholders[73],
          overlayColor: "rgba(60, 30, 10, 0.6)",
        },
        {
          id: "chapter-five",
          subtitle: "Chapter Five",
          title: "The Future Awaits",
          description:
            "This is just the beginning. The next chapter is being written right now, and you're invited to be part of this incredible journey.",
          image: imagePlaceholders[96],
          overlayColor: "rgba(10, 30, 50, 0.6)",
        },
      ]}
    />
  );
}
