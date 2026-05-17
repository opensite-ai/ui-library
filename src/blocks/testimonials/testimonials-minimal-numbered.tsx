import { TestimonialsMinimalNumbered } from "@opensite/ui/blocks/testimonials/testimonials-minimal-numbered";

export default function Demo() {
  return (
    <TestimonialsMinimalNumbered
      testimonials={[
        {
          quote:
            "The platform has completely transformed how we approach our business operations. Every feature is thoughtfully designed and the performance is exceptional.",
          author: "Dr. Catherine Foster",
          role: "CEO",
          company: "Innovation Labs",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/dvz0441h9fxjhh88lzqbwdoyxv52",
        },
        {
          quote:
            "We've tried many solutions over the years, but this is the only one that truly delivered on its promises. The team's dedication to excellence shows in every detail.",
          author: "Marcus Rodriguez",
          role: "VP of Engineering",
          company: "TechScale",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c",
        },
        {
          quote:
            "What impressed us most was the seamless integration with our existing systems. No disruption, just immediate value from day one.",
          author: "Jennifer Kim",
          role: "IT Director",
          company: "Enterprise Solutions",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/rews5enr9ynu6izioj66s8ec90nc",
        },
        {
          quote:
            "The analytics capabilities alone have transformed our decision-making process. We now have insights we never knew were possible.",
          author: "Robert Zhang",
          role: "Head of Data",
          company: "DataFirst Corp",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/ytbyjrcvrghc7wl6w1g7g8fwka22",
        },
      ]}
      autoPlayInterval={10000}
      pattern="squareAltGrid"
      patternOpacity={0.5}
      background="muted"
    />
  );
}
