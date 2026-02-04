import { imagePlaceholders } from "@/lib/media";
import { FeatureShowcase } from "@opensite/ui/blocks/features/feature-showcase";

export default function Demo() {
  return (
    <FeatureShowcase
      items={[
        {
          content: (
            <div>
              <h3 className="mb-4 text-3xl font-bold">
                Deploy to the Edge in Seconds
              </h3>
              <p className="text-lg text-muted-foreground">
                Push your code and watch it deploy to 200+ edge locations
                worldwide. Automatic builds, tests, and zero-downtime
                deployments make shipping to production effortless.
              </p>
            </div>
          ),
          mediaComponent: (
            <img
              src={imagePlaceholders[62]}
              alt="Edge deployment"
              className="w-full rounded-lg object-cover"
            />
          ),
        },
        {
          content: (
            <div>
              <h3 className="mb-4 text-3xl font-bold">
                Built-in Analytics & Monitoring
              </h3>
              <p className="text-lg text-muted-foreground">
                Real-time insights into performance, errors, and user behavior.
                Custom dashboards and alerts help you stay on top of what
                matters most.
              </p>
            </div>
          ),
          mediaComponent: (
            <img
              src={imagePlaceholders[84]}
              alt="Analytics dashboard"
              className="w-full rounded-lg object-cover"
            />
          ),
        },
        {
          content: (
            <div>
              <h3 className="mb-4 text-3xl font-bold">
                Collaborate with Your Team
              </h3>
              <p className="text-lg text-muted-foreground">
                Preview environments for every pull request, integrated code
                review, and team-wide visibility. Ship faster together.
              </p>
            </div>
          ),
          mediaComponent: (
            <img
              src={imagePlaceholders[107]}
              alt="Team collaboration"
              className="w-full rounded-lg object-cover"
            />
          ),
        },
      ]}
      background="white"
      spacing="xl"
      pattern="architect"
      patternOpacity={0.8}
    />
  );
}
