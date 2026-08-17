import { IframeEmbed } from "@opensite/ui/blocks/advanced/iframe-embed";

// Parsed form: take the `src` out of the owner's embed code and put it in
// `embedUrl` verbatim. `embedTitle` is the frame's accessible name (required
// whenever `embedUrl` is set).
export default function Demo() {
  return (
    // Showcase-only: `loadingStrategy="eager"` is set so this static preview
    // paints the frame without waiting on the viewport observer. On a real page
    // omit the prop — it defaults to "lazy" — and use "eager" only when the
    // embed is above the fold.
    <IframeEmbed
      title="Find Us"
      subtitle="Visit"
      embedUrl="https://www.openstreetmap.org/export/embed.html?bbox=-87.6360%2C41.8760%2C-87.6120%2C41.8900&layer=mapnik"
      embedTitle="Map showing the restaurant location"
      loadingStrategy="eager"
      containMode="aspect-ratio"
      aspectRatio="16:9"
      referrerPolicy="strict-origin-when-cross-origin"
      iframeClassName="rounded-2xl border border-border"
    />
  );
}
