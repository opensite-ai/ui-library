import {
  FreeFormDesign,
  type FreeFormNode,
} from "@opensite/ui/blocks/advanced/free-form-design";
import { igPosts } from "@/lib/media";

// ---------------------------------------------------------------------------
// Free-form design — reference payload
//
// This demo doubles as the reference example for the Semantic UI Agent: a
// bespoke, full-bleed hero (in the spirit of jeton.com / fabric.vc) that no
// catalog block can express, built ONLY from the constrained node tree.
//
// The rules it demonstrates:
// - Platform primitives are injected as component nodes: `Pressable` for every
//   link/CTA (JS routing, tel/mailto normalization), `Img` and `Video` for all
//   media (https media-library URLs only). Raw `a`/`img`/`video` tags degrade.
// - Styling is Tailwind classes on each node's `className` — the `style`
//   attribute and event handlers are stripped by the renderer.
// - `className` on the BLOCK is the class manifest (applied to nothing): every
//   token used in the tree PLUS the `sectionClassName` / `containerClassName`
//   tokens, so each class gets a compiled CSS rule on live customer sites. It
//   is kept as the static CLASS_MANIFEST literal below so the registry
//   contract can verify completeness (scripts/verify-registry-contract.mjs
//   recomputes the expected set on every sync). To regenerate after editing
//   the tree: collectFreeFormClassNames(designTree, { extraClassNames:
//   [sectionClassName, containerClassName] }).join(" ") from
//   @opensite/ui/blocks/advanced/free-form-design.
// - Edge-to-edge layout = `spacing="none"` + `containerMaxWidth="full"` +
//   zeroed container gutters (mirrored into the manifest automatically here).
// ---------------------------------------------------------------------------

const media = {
  backdrop:
    "https://cdn.ing/assets/i/r/289134/pq7xx1m5piaai94v56e8kpt5rc7m/luxury-champagne-wall-with-ambient-sconce-lighting.jpg",
  pour: "https://cdn.ing/assets/i/r/289151/19d77cto4oilyslwmdmuzvz36z4o/espresso-martini-pour-with-lemon-twist-on-dark-bar.jpg",
};

// Restaurant b-roll (dark dining room) from the re-hosted IG set in media.ts.
const barReel = igPosts.find((post) => post.id === "ig-reel-04") ?? igPosts[0];

const sparkle: FreeFormNode = {
  tag: "svg",
  className: "h-5 w-5 text-amber-300",
  attrs: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" },
  children: [
    {
      tag: "path",
      attrs: {
        d: "M12 2c.55 5.05 4.4 8.9 9.45 9.45-5.05.55-8.9 4.4-9.45 9.45-.55-5.05-4.4-8.9-9.45-9.45C7.6 10.9 11.45 7.05 12 2z",
      },
    },
  ],
};

const arrowIcon: FreeFormNode = {
  tag: "svg",
  className:
    "h-4 w-4 shrink-0 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-amber-300",
  attrs: {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  },
  children: [{ tag: "path", attrs: { d: "M5 12h14m0 0-6-6m6 6-6 6" } }],
};

const stat = (value: string, label: string): FreeFormNode => ({
  tag: "div",
  children: [
    {
      tag: "p",
      className: "text-2xl font-semibold text-white sm:text-3xl",
      children: [value],
    },
    {
      tag: "p",
      className:
        "mt-1 text-[11px] uppercase tracking-[0.2em] text-white/50",
      children: [label],
    },
  ],
});

const editorialCard = (
  href: string,
  title: string,
  description: string,
): FreeFormNode => ({
  tag: "Pressable",
  className:
    "group flex items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-white/5 lg:px-10",
  attrs: { href },
  children: [
    {
      tag: "div",
      children: [
        {
          tag: "p",
          className: "text-sm font-semibold text-white",
          children: [title],
        },
        {
          tag: "p",
          className: "mt-1 text-xs leading-relaxed text-white/55",
          children: [description],
        },
      ],
    },
    arrowIcon,
  ],
});

const designTree: FreeFormNode = {
  tag: "div",
  className: "relative flex min-h-[100svh] flex-col",
  children: [
    // -- Layered backdrop: photography + gradient scrims (decorative) --------
    {
      tag: "div",
      className: "absolute inset-0",
      attrs: { "aria-hidden": "true" },
      children: [
        {
          tag: "Img",
          className: "h-full w-full object-cover object-center",
          attrs: {
            src: media.backdrop,
            alt: "",
            loading: "eager",
            fetchpriority: "high",
          },
        },
        {
          tag: "div",
          className:
            "absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-zinc-950/25",
        },
        {
          tag: "div",
          className:
            "absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/50",
        },
      ],
    },
    // -- Ghost wordmark watermark --------------------------------------------
    {
      tag: "div",
      className:
        "pointer-events-none absolute inset-x-0 top-16 hidden select-none text-center text-[17vw] font-black uppercase leading-none tracking-tighter text-white/[0.04] sm:block",
      attrs: { "aria-hidden": "true" },
      children: ["Hearth"],
    },
    // -- Top rail: booking badge + locale ------------------------------------
    {
      tag: "div",
      className:
        "relative z-10 flex items-center justify-between px-6 pt-8 lg:px-14 lg:pt-12",
      children: [
        {
          tag: "span",
          className:
            "inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-md",
          children: [
            {
              tag: "span",
              className: "h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400",
              attrs: { "aria-hidden": "true" },
            },
            "Winter tasting menu · now booking",
          ],
        },
        {
          tag: "span",
          className:
            "hidden text-[11px] uppercase tracking-[0.2em] text-white/60 md:block",
          children: ["Phoenix, AZ · Est. 2016"],
        },
      ],
    },
    // -- Floating media cluster (video + still) ------------------------------
    {
      tag: "div",
      className:
        "pointer-events-none absolute right-12 top-28 z-10 hidden xl:block",
      children: [
        {
          tag: "div",
          className:
            "relative w-72 rotate-2 overflow-hidden rounded-3xl border border-white/15 bg-zinc-900 shadow-2xl shadow-black/60",
          children: [
            {
              tag: "Video",
              className: "aspect-[4/5] w-full object-cover",
              attrs: {
                src: barReel.videoUrl ?? "",
                poster: barReel.image,
                autoplay: true,
                muted: true,
                loop: true,
                playsinline: true,
                preload: "metadata",
                title: "Behind the bar at Hearth & Ember",
              },
            },
            {
              tag: "span",
              className:
                "absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur",
              children: [
                {
                  tag: "span",
                  className:
                    "h-1.5 w-1.5 animate-pulse rounded-full bg-red-400",
                  attrs: { "aria-hidden": "true" },
                },
                "Live from the pass",
              ],
            },
          ],
        },
        {
          tag: "div",
          className:
            "-mt-14 mr-56 ml-auto w-44 -rotate-6 overflow-hidden rounded-2xl border border-white/15 shadow-xl shadow-black/50",
          children: [
            {
              tag: "Img",
              className: "aspect-[3/4] w-full object-cover",
              attrs: {
                src: media.pour,
                alt: "Espresso martini poured with a lemon twist at the dark marble bar",
                loading: "lazy",
              },
            },
          ],
        },
      ],
    },
    { tag: "div", className: "flex-1" },
    // -- Main composition: display heading left, copy + CTAs right -----------
    {
      tag: "div",
      className:
        "relative z-10 grid gap-12 px-6 pb-14 pt-24 lg:grid-cols-12 lg:items-end lg:gap-8 lg:px-14",
      children: [
        {
          tag: "div",
          className: "lg:col-span-7",
          children: [
            {
              tag: "div",
              className: "mb-6 flex items-center gap-3",
              children: [
                sparkle,
                {
                  tag: "span",
                  className:
                    "text-xs font-medium uppercase tracking-[0.3em] text-amber-300/90",
                  children: ["Hearth & Ember — supper club"],
                },
              ],
            },
            {
              tag: "h1",
              className:
                "text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl xl:text-8xl",
              children: [
                "The night runs on",
                { tag: "br", className: "hidden sm:block" },
                {
                  tag: "span",
                  className: "font-serif italic text-amber-200",
                  children: [" good taste."],
                },
              ],
            },
            {
              tag: "div",
              className:
                "mt-10 flex flex-wrap items-center gap-x-12 gap-y-6",
              children: [
                stat("7", "Courses, chef's pace"),
                stat("60", "Seats in the cellar"),
                stat("2 AM", "Last nightcap poured"),
              ],
            },
          ],
        },
        {
          tag: "div",
          className: "flex flex-col gap-7 lg:col-span-5 lg:items-end",
          children: [
            {
              tag: "p",
              className:
                "max-w-md text-base leading-relaxed text-white/80 sm:text-lg lg:text-right",
              children: [
                "A subterranean tasting counter, a vaulted cellar for private dinners, and a bar that keeps pouring long after the kitchen takes its bow.",
              ],
            },
            {
              tag: "div",
              className: "flex flex-wrap gap-3 lg:justify-end",
              children: [
                {
                  tag: "Pressable",
                  className: "rounded-full px-8",
                  attrs: {
                    href: "/reservations",
                    variant: "default",
                    size: "lg",
                  },
                  children: ["Reserve a table"],
                },
                {
                  tag: "Pressable",
                  className:
                    "rounded-full border-white/25 bg-white/5 px-8 text-white backdrop-blur hover:bg-white/10 hover:text-white",
                  attrs: { href: "/menu", variant: "outline", size: "lg" },
                  children: ["Explore the menu"],
                },
              ],
            },
            {
              tag: "p",
              className: "text-xs text-white/50 lg:text-right",
              children: [
                "Walk-ins welcome at the bar · Parties of 8+, ",
                {
                  tag: "Pressable",
                  className:
                    "underline underline-offset-4 transition-colors hover:text-amber-300",
                  attrs: { href: "events@hearthandember.com" },
                  children: ["email the events team"],
                },
              ],
            },
          ],
        },
      ],
    },
    // -- Editorial index: full-card Pressable links (fabric.vc-style) --------
    {
      tag: "nav",
      className:
        "relative z-10 border-t border-white/10 bg-zinc-950/60 backdrop-blur-md",
      attrs: { "aria-label": "Featured experiences" },
      children: [
        {
          tag: "div",
          className:
            "grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0",
          children: [
            editorialCard(
              "/tasting-counter",
              "The tasting counter",
              "Seven courses at the chef's pace, Thursday through Saturday.",
            ),
            editorialCard(
              "/private-events",
              "The vaulted cellar",
              "Private dinners and full buyouts for up to 60 guests.",
            ),
            editorialCard(
              "/nightcap",
              "Nightcap hour",
              "Rare pours and live jazz from 11 PM until close.",
            ),
          ],
        },
      ],
    },
  ],
};

// Class manifest — verified against the tree + section/container tokens by
// scripts/verify-registry-contract.mjs. Regenerate with
// collectFreeFormClassNames (see header comment) whenever classes change.
// prettier-ignore
const CLASS_MANIFEST =
  "-mt-14 -rotate-6 absolute animate-pulse aspect-[3/4] aspect-[4/5] backdrop-blur backdrop-blur-md bg-amber-400 bg-black/60 bg-gradient-to-r bg-gradient-to-t bg-red-400 bg-white/5 bg-zinc-900 bg-zinc-950 bg-zinc-950/60 border border-t border-white/10 border-white/15 border-white/25 divide-white/10 divide-y flex flex-1 flex-col flex-wrap font-black font-medium font-semibold font-serif from-zinc-950 from-zinc-950/80 gap-12 gap-2 gap-2.5 gap-3 gap-6 gap-7 gap-x-12 gap-y-6 grid group group-hover:text-amber-300 group-hover:translate-x-1 h-1.5 h-4 h-5 h-full hidden hover:bg-white/10 hover:bg-white/5 hover:text-amber-300 hover:text-white inline-flex inset-0 inset-x-0 italic items-center justify-between leading-[0.95] leading-none leading-relaxed left-4 lg:col-span-5 lg:col-span-7 lg:gap-8 lg:grid-cols-12 lg:items-end lg:justify-end lg:pt-12 lg:px-0 lg:px-10 lg:px-14 lg:text-right max-w-md mb-6 md:block min-h-[100svh] ml-auto mr-56 mt-1 mt-10 object-center object-cover overflow-hidden pb-14 pointer-events-none pt-24 pt-8 px-0 px-3 px-4 px-6 px-8 py-1 py-2 py-6 relative right-12 rotate-2 rounded-2xl rounded-3xl rounded-full select-none shadow-2xl shadow-black/50 shadow-black/60 shadow-xl shrink-0 sm:block sm:divide-x sm:divide-y-0 sm:grid-cols-3 sm:px-0 sm:text-3xl sm:text-7xl sm:text-lg text-2xl text-5xl text-[10px] text-[11px] text-[17vw] text-amber-200 text-amber-300 text-amber-300/90 text-base text-center text-left text-sm text-white text-white/40 text-white/50 text-white/55 text-white/60 text-white/80 text-white/90 text-white/[0.04] text-xs to-zinc-950/25 to-zinc-950/50 top-16 top-28 top-4 tracking-[0.18em] tracking-[0.2em] tracking-[0.3em] tracking-tight tracking-tighter transition-all transition-colors underline underline-offset-4 uppercase via-transparent via-zinc-950/55 w-1.5 w-4 w-44 w-5 w-72 w-full xl:block xl:text-8xl z-10";

export default function Demo() {
  return (
    <FreeFormDesign
      sectionId="hearth-and-ember-hero"
      spacing="none"
      containerMaxWidth="full"
      sectionClassName="overflow-hidden bg-zinc-950 text-white"
      containerClassName="px-0 sm:px-0 lg:px-0"
      className={CLASS_MANIFEST}
      designTree={designTree}
    />
  );
}
