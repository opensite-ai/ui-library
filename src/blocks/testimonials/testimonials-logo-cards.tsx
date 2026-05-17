import { TestimonialsLogoCards } from "@opensite/ui/blocks/testimonials/testimonials-logo-cards";

export default function Demo() {
  return (
    <TestimonialsLogoCards
      heading="Trusted by Industry Leaders"
      description="See how top companies are transforming their operations with our platform"
      testimonials={[
        {
          quote:
            "The platform has completely revolutionized our operational efficiency. We've seen measurable improvements across every metric that matters. The implementation team was exceptional, and the ongoing support has been world-class.",
          author: "Rebecca Thompson",
          role: "Chief Technology Officer",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/uh2vd59np82h8sevbmfnsha89sf1",
          companyLogo: "https://cdn.ing/assets/i/r/288964/4xdrg1wjc2knoy58ulqijicamar3/ui-placeholder-logo-dark-1.png",
          companyLogoAlt: "TechCorp International",
        },
        {
          quote:
            "Outstanding reliability and performance. Our team adopted it instantly.",
          author: "Marcus Lee",
          role: "VP of Engineering",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k",
          companyLogo: "https://cdn.ing/assets/i/r/288965/aw0n8ithqntxtfweqrlmseqlcak7/ui-placeholder-logo-black-2.png",
          companyLogoAlt: "CloudScale Solutions",
        },
        {
          quote:
            "Best investment we've made. ROI exceeded projections within three months.",
          author: "Sarah Martinez",
          role: "CFO",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/3nqc7xvjy3e8d7jo1gdvbzty0oqg",
          companyLogo: "https://cdn.ing/assets/i/r/288972/kppvdeo8kgeweawxisqy9h9ybz6h/ui-placeholder-logo-black-3.png",
          companyLogoAlt: "Finance Dynamics",
        },
        {
          quote:
            "The analytics capabilities transformed our decision-making process entirely.",
          author: "James Wilson",
          role: "Data Director",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/6ku135fhv528eei3agnoc3zd7y75",
          companyLogo: "https://cdn.ing/assets/i/r/288970/op9ys0gsyi7len3w742n0os7ebu6/ui-placeholder-logo-black-4.png",
          companyLogoAlt: "DataFirst Inc",
        },
        {
          quote:
            "Security features met our enterprise requirements without compromising usability.",
          author: "Linda Chen",
          role: "CISO",
          avatarSrc: "https://toastability-production.s3.amazonaws.com/gq3c9qalkiomu0rzdzxymkdaazdu",
          companyLogo: "https://cdn.ing/assets/i/r/288968/nn5xpkit7idgr7i6fa46ez3g9kwn/ui-placeholder-logo-black-5.png",
          companyLogoAlt: "SecureNet Corp",
        },
      ]}
      background="muted"
      pattern="circles"
      spacing="lg"
    />
  );
}
