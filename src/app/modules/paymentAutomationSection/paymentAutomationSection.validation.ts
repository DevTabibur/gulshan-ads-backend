import { z } from "zod";

const benefitTagSchema = z.object({
  text: z.string({
    required_error: "Benefit tag text is required",
  }).min(1, "Benefit tag text cannot be empty"),
  color: z.enum(['orange', 'green', 'blue'], {
    required_error: "Benefit tag color is required",
  }),
});

const featureCardSchema = z.object({
  icon: z.string({
    required_error: "Feature card icon is required",
  }).min(1, "Feature card icon cannot be empty"),
  title: z.string({
    required_error: "Feature card title is required",
  }).min(1, "Feature card title cannot be empty"),
  description: z.string({
    required_error: "Feature card description is required",
  }).min(1, "Feature card description cannot be empty"),
});

const ctaButtonSchema = z.object({
  text: z.string({
    required_error: "CTA button text is required",
  }).min(1, "CTA button text cannot be empty"),
  color: z.string({
    required_error: "CTA button color is required",
  }).min(1, "CTA button color cannot be empty"),
});

const createPaymentAutomationSectionZodSchema = z.object({
  body: z.object({
    mainTitle: z.string({
      required_error: "Main title is required",
    }).min(1, "Main title cannot be empty"),
    highlightedText: z.string({
      required_error: "Highlighted text is required",
    }).min(1, "Highlighted text cannot be empty"),
    benefitTags: z.array(benefitTagSchema).min(1, "At least one benefit tag is required").max(10, "Maximum 10 benefit tags allowed"),
    featureCards: z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed"),
    financialCalloutText: z.string({
      required_error: "Financial callout text is required",
    }).min(1, "Financial callout text cannot be empty"),
    ctaButton: ctaButtonSchema,
  }),
});

const updatePaymentAutomationSectionZodSchema = z.object({
  body: z.object({
    mainTitle: z.string().min(1, "Main title cannot be empty").optional(),
    highlightedText: z.string().min(1, "Highlighted text cannot be empty").optional(),
    benefitTags: z.array(benefitTagSchema).min(1, "At least one benefit tag is required").max(10, "Maximum 10 benefit tags allowed").optional(),
    featureCards: z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed").optional(),
    financialCalloutText: z.string().min(1, "Financial callout text cannot be empty").optional(),
    ctaButton: ctaButtonSchema.optional(),
  }),
});

const updateBenefitTagsZodSchema = z.object({
  body: z.object({
    benefitTags: z.array(benefitTagSchema).min(1, "At least one benefit tag is required").max(10, "Maximum 10 benefit tags allowed"),
  }),
});

const updateFeatureCardsZodSchema = z.object({
  body: z.object({
    featureCards: z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed"),
  }),
});

const updateFinancialCalloutTextZodSchema = z.object({
  body: z.object({
    financialCalloutText: z.string().min(1, "Financial callout text cannot be empty"),
  }),
});

const updateCTAButtonZodSchema = z.object({
  body: z.object({
    ctaButton: ctaButtonSchema,
  }),
});

export const PaymentAutomationSectionValidation = {
  createPaymentAutomationSectionZodSchema,
  updatePaymentAutomationSectionZodSchema,
  updateBenefitTagsZodSchema,
  updateFeatureCardsZodSchema,
  updateFinancialCalloutTextZodSchema,
  updateCTAButtonZodSchema,
};
