import { BannerPromoCta, DynamicIcon } from "@opensite/ui";
import NavbarCenteredMenu from "@/blocks/navbars/navbar-centered-menu";

// TODO
// need to build in the ability for a navbar to be aware of the banner and adjust its position accordingly (e.g. fixed to top of viewport, but below the banner)
export default function Demo() {
  return (
    <>
      <BannerPromoCta
        message="Spring build sprint"
        discount="Save up to 35% on annual team plans"
        actions={[
          {
            label: "Claim discount",
            href: "#spring-offer",
            iconAfter: <DynamicIcon name="lucide/arrow-right" size={14} />,
          },
        ]}
        background="primary"
      />

      <NavbarCenteredMenu />
    </>
  );
}
