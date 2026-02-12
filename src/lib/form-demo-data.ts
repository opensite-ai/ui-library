export const contactCategoryToken = "cad2947a-49b5-491e-b7a5-c0cd828291f3";
export const websiteToken = "bcf1c82f-0c47-49ec-a303-807eec0a25c6";
export const websiteId = 435;
export const formDemoApiKey = "02d522b2-49b7-413d-8a77-0d5543e1915d";

type PageSpeedFormMethod = "post" | "get" | "put" | "patch";
type PageSpeedFormSubmissionFormat = "json" | "rails";

export interface PageSpeedFormConfig {
  /**
   * API endpoint used for submission (also applied to form action).
   */
  endpoint?: string;
  /**
   * HTTP method for submission.
   * @default "post"
   */
  method?: PageSpeedFormMethod;
  /**
   * Submission format.
   * Defaults to "rails" when apiKey is present, otherwise "json".
   */
  format?: PageSpeedFormSubmissionFormat;
  /**
   * Additional headers for the submission request.
   */
  headers?: Record<string, string>;
  /**
   * Static values merged into the payload (e.g. subject, content).
   */
  values?: Record<string, unknown>;
  /**
   * Rails API key (required for rails format).
   */
  apiKey?: string;
  /**
   * Rails contact category token.
   */
  contactCategoryToken?: string;
  /**
   * Rails location ID.
   */
  locationId?: string;
  /**
   * Rails website ID.
   */
  websiteId?: string;
  /**
   * Rails website form assignment ID.
   */
  websiteFormAssignmentId?: string;
  /**
   * Rails visitor IP address override.
   */
  visitorIpAddress?: string;
  /**
   * Reset form values after a successful submission.
   * @default true
   */
  resetOnSuccess?: boolean;
}

export const demoFormConfig: PageSpeedFormConfig = {
  apiKey: formDemoApiKey,
  contactCategoryToken: contactCategoryToken,
  websiteId: websiteId?.toString() || "",
  endpoint: "https://api.dashtrack.com/contacts",
  method: "post",
};
