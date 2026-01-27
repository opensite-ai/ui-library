import { AlternatingBlocks } from "@opensite/ui/blocks/about/alternating-blocks";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AlternatingBlocks
      title="How We Work"
      subtitle="Our Process"
      background="gray"
      spacing="lg"
      sections={[
        {
          content: (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</div>
                <h3 className="text-2xl font-bold">Discovery & Strategy</h3>
              </div>
              <p className="text-muted-foreground">
                We start by understanding your business, goals, and challenges. Through workshops and research, we develop a strategic roadmap that guides every decision.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <DynamicIcon name="lucide/check" size={16} className="text-primary" />
                  Stakeholder interviews
                </li>
                <li className="flex items-center gap-2">
                  <DynamicIcon name="lucide/check" size={16} className="text-primary" />
                  Competitive analysis
                </li>
                <li className="flex items-center gap-2">
                  <DynamicIcon name="lucide/check" size={16} className="text-primary" />
                  User research
                </li>
              </ul>
            </div>
          ),
          media: (
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=375&fit=crop"
              alt="Discovery workshop"
              className="h-full w-full object-cover"
            />
          ),
          mediaLeft: false,
        },
        {
          content: (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</div>
                <h3 className="text-2xl font-bold">Design & Prototype</h3>
              </div>
              <p className="text-muted-foreground">
                Our design team creates intuitive, beautiful interfaces that bring your vision to life. We iterate rapidly based on feedback to ensure the final product exceeds expectations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <DynamicIcon name="lucide/check" size={16} className="text-primary" />
                  Wireframing & prototyping
                </li>
                <li className="flex items-center gap-2">
                  <DynamicIcon name="lucide/check" size={16} className="text-primary" />
                  Visual design
                </li>
                <li className="flex items-center gap-2">
                  <DynamicIcon name="lucide/check" size={16} className="text-primary" />
                  User testing
                </li>
              </ul>
            </div>
          ),
          media: (
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=375&fit=crop"
              alt="Design process"
              className="h-full w-full object-cover"
            />
          ),
          mediaLeft: true,
        },
        {
          content: (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">3</div>
                <h3 className="text-2xl font-bold">Build & Launch</h3>
              </div>
              <p className="text-muted-foreground">
                Our engineering team brings designs to life with clean, scalable code. We handle everything from development to deployment, ensuring a smooth launch.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <DynamicIcon name="lucide/check" size={16} className="text-primary" />
                  Agile development
                </li>
                <li className="flex items-center gap-2">
                  <DynamicIcon name="lucide/check" size={16} className="text-primary" />
                  Quality assurance
                </li>
                <li className="flex items-center gap-2">
                  <DynamicIcon name="lucide/check" size={16} className="text-primary" />
                  Deployment & monitoring
                </li>
              </ul>
            </div>
          ),
          media: (
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=375&fit=crop"
              alt="Development"
              className="h-full w-full object-cover"
            />
          ),
          mediaLeft: false,
        },
      ]}
    />
  );
}
