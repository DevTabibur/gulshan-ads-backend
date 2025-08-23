import { z } from "zod";

const benefitCardSchema = z.object({
  icon: z.string({
    required_error: "Benefit icon is required",
  }).min(1, "Benefit icon cannot be empty"),
  title: z.string({
    required_error: "Benefit title is required",
  }).min(1, "Benefit title cannot be empty"),
  description: z.string({
    required_error: "Benefit description is required",
  }).min(1, "Benefit description cannot be empty"),
  iconColor: z.string({
    required_error: "Benefit icon color is required",
  }).min(1, "Benefit icon color cannot be empty"),
});

const createWhyChooseUsSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    benefits: z.array(benefitCardSchema).min(1, "At least one benefit is required").max(10, "Maximum 10 benefits allowed"),
  }),
});

const updateWhyChooseUsSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    benefits: z.array(benefitCardSchema).min(1, "At least one benefit is required").max(10, "Maximum 10 benefits allowed").optional(),
  }),
});

const updateBenefitsZodSchema = z.object({
  body: z.object({
    benefits: z.array(benefitCardSchema).min(1, "At least one benefit is required").max(10, "Maximum 10 benefits allowed"),
  }),
});

export const WhyChooseUsSectionValidation = {
  createWhyChooseUsSectionZodSchema,
  updateWhyChooseUsSectionZodSchema,
  updateBenefitsZodSchema,
};
