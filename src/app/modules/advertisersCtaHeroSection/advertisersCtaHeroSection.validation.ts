import { z } from "zod";

const ctaButtonSchema = z.object({
  text: z.string({
    required_error: "CTA button text is required",
  }).min(1, "CTA button text cannot be empty"),
  link: z.string({
    required_error: "CTA button link is required",
  }).min(1, "CTA button link cannot be empty"),
  icon: z.string({
    required_error: "CTA button icon is required",
  }).min(1, "CTA button icon cannot be empty"),
  variant: z.enum(['primary', 'secondary'], {
    required_error: "CTA button variant is required",
  }),
});

const benefitSchema = z.object({
  text: z.string({
    required_error: "Benefit text is required",
  }).min(1, "Benefit text cannot be empty"),
});

const createAdvertisersCtaHeroSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
    benefits: z.array(benefitSchema).min(1, "At least one benefit is required").max(10, "Maximum 10 benefits allowed"),
  }),
});

const updateAdvertisersCtaHeroSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed").optional(),
    benefits: z.array(benefitSchema).min(1, "At least one benefit is required").max(10, "Maximum 10 benefits allowed").optional(),
  }),
});

const updateCTAButtonsZodSchema = z.object({
  body: z.object({
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
  }),
});

const updateBenefitsZodSchema = z.object({
  body: z.object({
    benefits: z.array(benefitSchema).min(1, "At least one benefit is required").max(10, "Maximum 10 benefits allowed"),
  }),
});

export const AdvertisersCtaHeroSectionValidation = {
  createAdvertisersCtaHeroSectionZodSchema,
  updateAdvertisersCtaHeroSectionZodSchema,
  updateCTAButtonsZodSchema,
  updateBenefitsZodSchema,
};
