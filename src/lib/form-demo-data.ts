import type { PageSpeedFormConfig } from "@opensite/ui";

export const contactCategoryToken = "cad2947a-49b5-491e-b7a5-c0cd828291f3";
export const websiteToken = "bcf1c82f-0c47-49ec-a303-807eec0a25c6";
export const websiteId = 435;
export const formDemoApiKey = "02d522b2-49b7-413d-8a77-0d5543e1915d";

export const baseDemoFormConfig: PageSpeedFormConfig = {
  apiKey: formDemoApiKey,
  contactCategoryToken: contactCategoryToken,
  websiteId: websiteId?.toString() || "",
  endpoint: "https://api.dashtrack.com/contacts",
  method: "post",
};

export function createDemoFormConfig(
  overrides: Partial<PageSpeedFormConfig> = {},
): PageSpeedFormConfig {
  return {
    ...baseDemoFormConfig,
    ...overrides,
    submissionConfig: overrides.submissionConfig
      ? {
          ...baseDemoFormConfig.submissionConfig,
          ...overrides.submissionConfig,
        }
      : baseDemoFormConfig.submissionConfig,
  };
}

export const demoFormConfig: PageSpeedFormConfig = createDemoFormConfig();
