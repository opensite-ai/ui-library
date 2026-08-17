import { ScriptEmbed } from "@opensite/ui/blocks/advanced/script-embed";

// Self-contained demo of the load-order contract: `companionHtml` is in the DOM
// before anything executes, so the inline script always finds its mount point.
// A real embed splits the owner's snippet across the props — `<script src>` goes
// in `scriptUrl` (further ones in `additionalScriptUrls`), and the body of an
// inline `<script>` goes in `inlineScriptHtml` WITHOUT the surrounding tags.
//
// EXTRACTOR CONSTRAINT (enforced by scripts/verify-registry-contract.mjs):
// the registry `code` below is republished as the canonical example, sliced
// from the returned JSX and cut at the FIRST close-paren-then-semicolon pair.
// The inline script therefore relies on automatic semicolon insertion instead
// of ending a statement immediately after a closing parenthesis.
export default function Demo() {
  return (
    <ScriptEmbed
      title="Our Menu"
      subtitle="Script Embed"
      companionHtml={
        '<div id="os-script-embed-demo" class="rounded-xl border border-border p-8 text-center text-muted-foreground">Companion markup rendered. Waiting for the script…</div>'
      }
      inlineScriptHtml={
        'var el = document.getElementById("os-script-embed-demo")\n' +
        'if (el) { el.textContent = "The inline script ran and found its container." }'
      }
      scriptKey="opensite-showcase-script-embed-demo"
      loadStrategy="afterInteractive"
      containMode="auto"
    />
  );
}
