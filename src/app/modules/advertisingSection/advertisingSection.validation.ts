import { z } from "zod";

const keyFeatureSchema = z.object({
  text: z.string({
    required_error: "Feature text is required",
  }).min(1, "Feature text cannot be empty"),
  icon: z.string({
    required_error: "Feature icon is required",
  }).min(1, "Feature icon cannot be empty"),
  color: z.string({
    required_error: "Feature color is required",
  }).min(1, "Feature color cannot be empty"),
});

const testimonialSchema = z.object({
  authorName: z.string({
    required_error: "Author name is required",
  }).min(1, "Author name cannot be empty"),
  authorPosition: z.string({
    required_error: "Author position is required",
  }).min(1, "Author position cannot be empty"),
  authorInitials: z.string({
    required_error: "Author initials are required",
  }).min(1, "Author initials cannot be empty").max(5, "Author initials must be 5 characters or less"),
});

const serviceCardSchema = z.object({
  title: z.string({
    required_error: "Service card title is required",
  }).min(1, "Service card title cannot be empty"),
  description: z.string({
    required_error: "Service card description is required",
  }).min(1, "Service card description cannot be empty"),
  icon: z.string({
    required_error: "Service card icon is required",
  }).min(1, "Service card icon cannot be empty"),
  iconColor: z.string({
    required_error: "Service card icon color is required",
  }).min(1, "Service card icon color cannot be empty"),
  socialMediaIcons: z.array(z.string()).optional(),
  testimonial: testimonialSchema.optional(),
});

const statisticSchema = z.object({
  value: z.string({
    required_error: "Statistic value is required",
  }).min(1, "Statistic value cannot be empty"),
  label: z.string({
    required_error: "Statistic label is required",
  }).min(1, "Statistic label cannot be empty"),
  color: z.string({
    required_error: "Statistic color is required",
  }).min(1, "Statistic color cannot be empty"),
});

const ctaButtonSchema = z.object({
  text: z.string({
    required_error: "CTA button text is required",
  }).min(1, "CTA button text cannot be empty"),
  type: z.enum(['primary', 'secondary'], {
    required_error: "CTA button type is required",
    invalid_type_error: "CTA button type must be either 'primary' or 'secondary'",
  }),
  color: z.string({
    required_error: "CTA button color is required",
  }).min(1, "CTA button color cannot be empty"),
  action: z.string({
    required_error: "CTA button action is required",
  }).min(1, "CTA button action cannot be empty"),
});

const createAdvertisingSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    keyFeatures: z.array(keyFeatureSchema).min(1, "At least one key feature is required").max(10, "Maximum 10 key features allowed"),
    serviceCards: z.array(serviceCardSchema).min(1, "At least one service card is required").max(10, "Maximum 10 service cards allowed"),
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
  }),
});

const updateAdvertisingSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    keyFeatures: z.array(keyFeatureSchema).min(1, "At least one key feature is required").max(10, "Maximum 10 key features allowed").optional(),
    serviceCards: z.array(serviceCardSchema).min(1, "At least one service card is required").max(10, "Maximum 10 service cards allowed").optional(),
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed").optional(),
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed").optional(),
  }),
});

const updateKeyFeaturesZodSchema = z.object({
  body: z.object({
    keyFeatures: z.array(keyFeatureSchema).min(1, "At least one key feature is required").max(10, "Maximum 10 key features allowed"),
  }),
});

const updateServiceCardsZodSchema = z.object({
  body: z.object({
    serviceCards: z.array(serviceCardSchema).min(1, "At least one service card is required").max(10, "Maximum 10 service cards allowed"),
  }),
});

const updateStatisticsZodSchema = z.object({
  body: z.object({
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
  }),
});

const updateCTAButtonsZodSchema = z.object({
  body: z.object({
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
  }),
});

export const AdvertisingSectionValidation = {
  createAdvertisingSectionZodSchema,
  updateAdvertisingSectionZodSchema,
  updateKeyFeaturesZodSchema,
  updateServiceCardsZodSchema,
  updateStatisticsZodSchema,
  updateCTAButtonsZodSchema,
};
