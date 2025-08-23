import { z } from "zod";

const pricingFeatureSchema = z.object({
  text: z.string({
    required_error: "Feature text is required",
  }).min(1, "Feature text cannot be empty"),
});

const pricingPlanSchema = z.object({
  icon: z.string({
    required_error: "Plan icon is required",
  }).min(1, "Plan icon cannot be empty"),
  title: z.string({
    required_error: "Plan title is required",
  }).min(1, "Plan title cannot be empty"),
  minimumSpend: z.string({
    required_error: "Minimum spend is required",
  }).min(1, "Minimum spend cannot be empty"),
  description: z.string({
    required_error: "Plan description is required",
  }).min(1, "Plan description cannot be empty"),
  features: z.array(pricingFeatureSchema).min(1, "At least one feature is required").max(20, "Maximum 20 features allowed"),
  ctaText: z.string({
    required_error: "CTA text is required",
  }).min(1, "CTA text cannot be empty"),
  isPopular: z.boolean().optional(),
  popularTag: z.string().optional(),
});

const createMetaPricingSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    plans: z.array(pricingPlanSchema).min(1, "At least one pricing plan is required").max(10, "Maximum 10 pricing plans allowed"),
  }),
});

const updateMetaPricingSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    plans: z.array(pricingPlanSchema).min(1, "At least one pricing plan is required").max(10, "Maximum 10 pricing plans allowed").optional(),
  }),
});

const updatePlansZodSchema = z.object({
  body: z.object({
    plans: z.array(pricingPlanSchema).min(1, "At least one pricing plan is required").max(10, "Maximum 10 pricing plans allowed"),
  }),
});

export const MetaPricingSectionValidation = {
  createMetaPricingSectionZodSchema,
  updateMetaPricingSectionZodSchema,
  updatePlansZodSchema,
};
