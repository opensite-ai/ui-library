import { ProcessIconTimeline } from "@opensite/ui/blocks/process/process-icon-timeline";

export default function Demo() {
  return (
    <ProcessIconTimeline
      heading="Product Development Timeline"
      description="From concept to launch, our proven process ensures success at every milestone."
      background="dark"
      pattern="gridFadeTopLeft"
      patternOpacity={0.1}
      steps={[
        {
          icon: "lucide/lightbulb",
          title: "Concept & Validation",
          description:
            "Validate your idea through market research, competitive analysis, and user interviews. Define the value proposition and identify target markets.",
          highlights: [
            "Market Research",
            "User Surveys",
            "Competitive Analysis",
          ],
        },
        {
          icon: "lucide/layout",
          title: "Design & Wireframing",
          description:
            "Create detailed wireframes and user flows. Develop a cohesive design system that scales across your product.",
          highlights: ["Wireframes", "Design System", "User Flows"],
        },
        {
          icon: "lucide/code",
          title: "Development Sprint",
          description:
            "Build the MVP with agile methodology. Implement core features with clean, maintainable code and automated testing.",
          highlights: ["Agile Sprints", "Code Reviews", "Automated Tests"],
        },
        {
          icon: "lucide/users",
          title: "Beta Testing",
          description:
            "Launch beta program with early adopters. Gather feedback, fix bugs, and refine features based on real user behavior.",
          highlights: ["User Feedback", "Bug Fixes", "Feature Refinement"],
        },
        {
          icon: "lucide/rocket",
          title: "Production Launch",
          description:
            "Deploy to production with comprehensive monitoring. Execute go-to-market strategy and provide ongoing customer support.",
          highlights: [
            "Production Deploy",
            "Marketing Launch",
            "Customer Support",
          ],
        },
      ]}
    />
  );
}
