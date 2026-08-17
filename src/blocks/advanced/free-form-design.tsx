import { FreeFormDesign } from "@opensite/ui/blocks/advanced/free-form-design";

// `className` is the CLASS MANIFEST (applied to nothing): it must list every
// Tailwind token used anywhere in this block — every `className` inside
// `designTree` PLUS every token in `sectionClassName`/`containerClassName`,
// because the live-site safelist compiler only scans this one prop. Style the
// Section via `sectionClassName`. Links = Pressable nodes, images = Img nodes
// (https only).
export default function Demo() {
  return (
    <FreeFormDesign
      sectionId="events"
      sectionClassName="bg-secondary text-secondary-foreground"
      className="bg-secondary text-secondary-foreground grid gap-10 md:grid-cols-2 items-center space-y-4 text-4xl font-bold text-lg opacity-90 w-full rounded-2xl object-cover"
      designTree={{
        tag: "div",
        className: "grid gap-10 md:grid-cols-2 items-center",
        children: [
          {
            tag: "div",
            className: "space-y-4",
            children: [
              { tag: "h2", className: "text-4xl font-bold", children: ["Private Events"] },
              { tag: "p", className: "text-lg opacity-90", children: ["Book the room for up to 60 guests."] },
              { tag: "Pressable", attrs: { href: "/contact", variant: "default", size: "lg" }, children: ["Request a date"] },
            ],
          },
          { tag: "Img", className: "w-full rounded-2xl object-cover", attrs: { src: "https://cdn.ing/assets/i/r/289165/py905nlu0any8riaohkf5ervr3m8/gourmet-asparagus-crostini-on-white-plate-marble-table.jpg", alt: "Dining room" } },
        ],
      }}
    />
  );
}
