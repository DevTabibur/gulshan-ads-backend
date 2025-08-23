import { z } from "zod";

const partnershipLogosSchema = z.object({
  leftLogoIcon: z.string({
    required_error: "Left logo icon is required",
  }).min(1, "Left logo icon cannot be empty"),
  rightLogoIcon: z.string({
    required_error: "Right logo icon is required",
  }).min(1, "Right logo icon cannot be empty"),
  separatorIcon: z.string({
    required_error: "Separator icon is required",
  }).min(1, "Separator icon cannot be empty"),
});

const featureCardSchema = z.object({
  cardTitle: z.string({
    required_error: "Feature card title is required",
  }).min(1, "Feature card title cannot be empty"),
  cardSubtitle: z.string({
    required_error: "Feature card subtitle is required",
  }).min(1, "Feature card subtitle cannot be empty"),
});

const ctaButtonSchema = z.object({
  ctaButtonText: z.string({
    required_error: "CTA button text is required",
  }).min(1, "CTA button text cannot be empty"),
  ctaButtonLink: z.string().optional(),
});

const createTikTokPartnerSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    description: z.string({
      required_error: "Description is required",
    }).min(1, "Description cannot be empty"),
    partnershipLogos: partnershipLogosSchema,
    featureCards: z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed"),
    ctaButton: ctaButtonSchema,
  }),
});

const updateTikTokPartnerSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    description: z.string().min(1, "Description cannot be empty").optional(),
    partnershipLogos: partnershipLogosSchema.optional(),
    featureCards: z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed").optional(),
    ctaButton: ctaButtonSchema.optional(),
  }),
});

const updatePartnershipLogosZodSchema = z.object({
  body: z.object({
    partnershipLogos: partnershipLogosSchema,
  }),
});

const updateFeatureCardsZodSchema = z.object({
  body: z.object({
    featureCards: z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed"),
  }),
});

const updateCTAButtonZodSchema = z.object({
  body: z.object({
    ctaButton: ctaButtonSchema,
  }),
});

export const TikTokPartnerSectionValidation = {
  createTikTokPartnerSectionZodSchema,
  updateTikTokPartnerSectionZodSchema,
  updatePartnershipLogosZodSchema,
  updateFeatureCardsZodSchema,
  updateCTAButtonZodSchema,
};
