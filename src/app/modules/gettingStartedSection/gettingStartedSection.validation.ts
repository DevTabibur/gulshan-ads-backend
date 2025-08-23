import { z } from "zod";

const stepSchema = z.object({
  number: z.number({
    required_error: "Step number is required",
  }).min(1, "Step number must be at least 1").max(10, "Step number cannot exceed 10"),
  title: z.string({
    required_error: "Step title is required",
  }).min(1, "Step title cannot be empty"),
  subtitle: z.string({
    required_error: "Step subtitle is required",
  }).min(1, "Step subtitle cannot be empty"),
  description: z.string({
    required_error: "Step description is required",
  }).min(1, "Step description cannot be empty"),
  features: z.array(z.string()).min(1, "At least one feature is required").max(10, "Maximum 10 features allowed"),
  iconColor: z.string({
    required_error: "Step icon color is required",
  }).min(1, "Step icon color cannot be empty"),
});

const ctaButtonSchema = z.object({
  text: z.string({
    required_error: "CTA button text is required",
  }).min(1, "CTA button text cannot be empty"),
  type: z.enum(['primary', 'secondary'], {
    required_error: "CTA button type is required",
  }),
  action: z.string({
    required_error: "CTA button action is required",
  }).min(1, "CTA button action cannot be empty"),
});

const createGettingStartedSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    description: z.string({
      required_error: "Description is required",
    }).min(1, "Description cannot be empty"),
    steps: z.array(stepSchema).min(1, "At least one step is required").max(10, "Maximum 10 steps allowed"),
    ctaTitle: z.string({
      required_error: "CTA title is required",
    }).min(1, "CTA title cannot be empty"),
    ctaDescription: z.string({
      required_error: "CTA description is required",
    }).min(1, "CTA description cannot be empty"),
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
  }),
});

const updateGettingStartedSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    description: z.string().min(1, "Description cannot be empty").optional(),
    steps: z.array(stepSchema).min(1, "At least one step is required").max(10, "Maximum 10 steps allowed").optional(),
    ctaTitle: z.string().min(1, "CTA title cannot be empty").optional(),
    ctaDescription: z.string().min(1, "CTA description cannot be empty").optional(),
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed").optional(),
  }),
});

const updateStepsZodSchema = z.object({
  body: z.object({
    steps: z.array(stepSchema).min(1, "At least one step is required").max(10, "Maximum 10 steps allowed"),
  }),
});

const updateCTAButtonsZodSchema = z.object({
  body: z.object({
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
  }),
});

export const GettingStartedSectionValidation = {
  createGettingStartedSectionZodSchema,
  updateGettingStartedSectionZodSchema,
  updateStepsZodSchema,
  updateCTAButtonsZodSchema,
};
