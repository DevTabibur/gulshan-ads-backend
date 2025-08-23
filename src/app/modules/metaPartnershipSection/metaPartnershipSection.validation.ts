import { z } from "zod";

const logoSchema = z.object({
  icon: z.string({
    required_error: "Logo icon is required",
  }).min(1, "Logo icon cannot be empty"),
  color: z.string({
    required_error: "Logo color is required",
  }).min(1, "Logo color cannot be empty"),
});

const featureCardSchema = z.object({
  icon: z.string({
    required_error: "Feature card icon is required",
  }).min(1, "Feature card icon cannot be empty"),
  title: z.string({
    required_error: "Feature card title is required",
  }).min(1, "Feature card title cannot be empty"),
  subtitle: z.string({
    required_error: "Feature card subtitle is required",
  }).min(1, "Feature card subtitle cannot be empty"),
});

const ctaButtonSchema = z.object({
  text: z.string({
    required_error: "CTA button text is required",
  }).min(1, "CTA button text cannot be empty"),
  color: z.string({
    required_error: "CTA button color is required",
  }).min(1, "CTA button color cannot be empty"),
});

const createMetaPartnershipSectionZodSchema = z.object({
  body: z.object({
    leftLogo: logoSchema,
    rightLogo: logoSchema,
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    featureCards: z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed"),
    ctaButton: ctaButtonSchema,
  }),
});

const updateMetaPartnershipSectionZodSchema = z.object({
  body: z.object({
    leftLogo: logoSchema.optional(),
    rightLogo: logoSchema.optional(),
    title: z.string().min(1, "Title cannot be empty").optional(),
    featureCards: z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed").optional(),
    ctaButton: ctaButtonSchema.optional(),
  }),
});

const updateFeatureCardsZodSchema = z.object({
  body: z.object({
    featureCards: z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed"),
  }),
});

export const MetaPartnershipSectionValidation = {
  createMetaPartnershipSectionZodSchema,
  updateMetaPartnershipSectionZodSchema,
  updateFeatureCardsZodSchema,
};
