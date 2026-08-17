import { TripleseatForm } from "@opensite/ui/blocks/integrations/tripleseat-form";

// `leadFormId` and `publicKey` are the two query-parameter values from the
// client's own TripleSeat script tag —
// https://api.tripleseat.com/v1/leads/ts_script.js?lead_form_id=…&public_key=…
// Copy them verbatim; the values below are fake placeholders that match the
// library's own example props.
export default function Demo() {
  return (
    // Showcase-only: `recaptchaTimeoutSeconds={5}` lets this public demo settle
    // into the honest degraded state instead of spinning on a form whose fake
    // credentials can never load. Real sites omit the prop — the default is 30
    // seconds, and a shorter deadline shows visitors a false failure banner
    // while the third-party script is still loading.
    <TripleseatForm
      title="Plan Your Private Event"
      subtitle="Inquiries"
      leadFormId="12345"
      publicKey="your-tripleseat-public-key"
      recaptchaTimeoutSeconds={5}
      degradedTitle="The booking form isn't loading"
      degradedMessage="Reach our events team directly and we'll get straight back to you."
      contactPhone="(555) 010-4477"
      contactEmail="events@example.com"
      retryLabel="Try loading the form again"
      successTitle="Request received"
      successMessage="Our events team will follow up within one business day."
    />
  );
}
