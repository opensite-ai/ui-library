import { CommunityInitiatives } from "@opensite/ui/blocks/about/community-initiatives";

export default function Demo() {
  return (
    <CommunityInitiatives
      badgeText="Our Commitment"
      heading="Building an Inclusive Future"
      description="We believe diverse teams build better products. Our initiatives focus on creating opportunities, fostering belonging, and driving meaningful change."
      categories={[
        {
          id: "workplace",
          title: "Inclusive Workplace",
          description: "Creating an environment where everyone can thrive and bring their authentic selves to work.",
          initiatives: [
            {
              id: "ergs",
              title: "Employee Resource Groups",
              description: "Our ERGs provide community, support, and professional development opportunities for underrepresented groups. From Women in Tech to Pride Alliance, these groups shape our culture and policies.",
              icon: "lucide/users",
              metrics: [
                { value: "8", label: "Active ERGs" },
                { value: "65%", label: "Participation" },
                { value: "12", label: "Events/Month" },
              ],
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=375&fit=crop",
            },
            {
              id: "mentorship",
              title: "Mentorship Programs",
              description: "Structured mentorship pairs emerging talent with experienced leaders, accelerating career growth and building lasting professional relationships.",
              icon: "lucide/graduation-cap",
              metrics: [
                { value: "200+", label: "Mentors" },
                { value: "500+", label: "Mentees" },
                { value: "92%", label: "Satisfaction" },
              ],
            },
          ],
        },
        {
          id: "community",
          title: "Community Impact",
          description: "Extending our commitment beyond our walls to create positive change in the communities we serve.",
          initiatives: [
            {
              id: "scholarships",
              title: "Tech Scholarships",
              description: "We fund scholarships for students from underrepresented backgrounds pursuing careers in technology, removing financial barriers to education.",
              icon: "lucide/book-open",
              metrics: [
                { value: "$2M+", label: "Awarded" },
                { value: "150+", label: "Recipients" },
                { value: "45", label: "Partner Schools" },
              ],
              image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=375&fit=crop",
            },
            {
              id: "volunteering",
              title: "Skills-Based Volunteering",
              description: "Our team members donate their expertise to nonprofits, helping organizations amplify their impact through technology.",
              icon: "lucide/heart-handshake",
              metrics: [
                { value: "10K+", label: "Hours/Year" },
                { value: "50+", label: "Nonprofits" },
                { value: "85%", label: "Participation" },
              ],
            },
          ],
        },
        {
          id: "hiring",
          title: "Inclusive Hiring",
          description: "Building diverse teams through intentional, equitable hiring practices.",
          initiatives: [
            {
              id: "blind-review",
              title: "Blind Resume Review",
              description: "We remove identifying information from applications to reduce unconscious bias and focus on skills and experience.",
              icon: "lucide/eye-off",
              metrics: [
                { value: "100%", label: "Adoption" },
                { value: "35%", label: "More Diverse" },
                { value: "2x", label: "Interview Rate" },
              ],
            },
            {
              id: "partnerships",
              title: "Diversity Partnerships",
              description: "We partner with organizations focused on connecting underrepresented talent with opportunities in tech.",
              icon: "lucide/handshake",
              metrics: [
                { value: "25+", label: "Partners" },
                { value: "500+", label: "Hires" },
                { value: "40%", label: "Diverse Hires" },
              ],
              image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=375&fit=crop",
            },
          ],
        },
        {
          id: "sustainability",
          title: "Sustainability",
          description: "Reducing our environmental impact and building for a sustainable future.",
          initiatives: [
            {
              id: "carbon-neutral",
              title: "Carbon Neutral Operations",
              description: "We've achieved carbon neutrality across all operations through renewable energy, efficiency improvements, and verified offsets.",
              icon: "lucide/leaf",
              metrics: [
                { value: "100%", label: "Renewable" },
                { value: "45%", label: "Reduction" },
                { value: "2023", label: "Achieved" },
              ],
              image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=375&fit=crop",
            },
            {
              id: "green-tech",
              title: "Green Technology",
              description: "Our engineering practices prioritize efficiency, reducing the environmental footprint of the products we build.",
              icon: "lucide/cpu",
              metrics: [
                { value: "60%", label: "More Efficient" },
                { value: "30%", label: "Less Energy" },
                { value: "A+", label: "Rating" },
              ],
            },
          ],
        },
      ]}
      ctaBadgeText="Join Us"
      ctaHeading="Be Part of the Change"
      ctaDescription="We're always looking for people who share our values and want to make a difference. Explore opportunities to join our team."
      actions={[
        {
          label: "View Open Positions",
          href: "/careers",
          variant: "default",
          size: "lg",
        },
        {
          label: "Learn More",
          href: "/about/initiatives",
          variant: "outline",
          size: "lg",
        },
      ]}
    />
  );
}
