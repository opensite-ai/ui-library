import { videoPlaceholders, imagePlaceholders } from "@/lib/media";
import { HeroMentorshipVideoSplit } from "@opensite/ui/blocks/hero/hero-mentorship-video-split";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroMentorshipVideoSplit
      heading="Learn from industry experts"
      description="Get personalized guidance from experienced professionals who have walked the path before you. Accelerate your growth with 1-on-1 mentorship."
      action={{
        label: "Find a Mentor",
        href: "#",
        variant: "default",
        asButton: true,
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      videoLabel="Watch success stories"
      videoThumbnail={{ src: imagePlaceholders[45], alt: "Mentorship video" }}
      videoUrl={videoPlaceholders[10]}
      videoTitle="Mentorship Success Stories"
      image={{ src: imagePlaceholders[120], alt: "Video Showcase" }}
      background="dark"
    />
  );
}
