import { z } from "zod";

const ctaButtonSchema = z.object({
  text: z.string({
    required_error: "CTA button text is required",
  }).min(1, "CTA button text cannot be empty"),
  type: z.enum(['primary', 'secondary'], {
    required_error: "CTA button type is required",
  }),
  icon: z.string().optional(),
});

const statisticSchema = z.object({
  value: z.string({
    required_error: "Statistic value is required",
  }).min(1, "Statistic value cannot be empty"),
  label: z.string({
    required_error: "Statistic label is required",
  }).min(1, "Statistic label cannot be empty"),
});

const profilePictureSchema = z.object({
  initials: z.string({
    required_error: "Profile picture initials are required",
  }).min(1, "Profile picture initials cannot be empty"),
  color: z.string({
    required_error: "Profile picture color is required",
  }).min(1, "Profile picture color cannot be empty"),
});

const interactionsSchema = z.object({
  likes: z.string({
    required_error: "Likes count is required",
  }).min(1, "Likes count cannot be empty"),
  comments: z.string({
    required_error: "Comments count is required",
  }).min(1, "Comments count cannot be empty"),
  shares: z.string({
    required_error: "Shares count is required",
  }).min(1, "Shares count cannot be empty"),
});

const phoneMockupSchema = z.object({
  profilePicture: profilePictureSchema,
  username: z.string({
    required_error: "Username is required",
  }).min(1, "Username cannot be empty"),
  adCopy: z.string({
    required_error: "Ad copy is required",
  }).min(1, "Ad copy cannot be empty"),
  interactions: interactionsSchema,
  learnMoreLink: z.string({
    required_error: "Learn more link is required",
  }).min(1, "Learn more link cannot be empty"),
});

const decorativeElementsSchema = z.object({
  lightningIcon: z.string({
    required_error: "Lightning icon is required",
  }).min(1, "Lightning icon cannot be empty"),
  floatingHeartIcon: z.string({
    required_error: "Floating heart icon is required",
  }).min(1, "Floating heart icon cannot be empty"),
});

const createTikTokHeroSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    description: z.string({
      required_error: "Description is required",
    }).min(1, "Description cannot be empty"),
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
    phoneMockup: phoneMockupSchema,
    decorativeElements: decorativeElementsSchema,
  }),
});

const updateTikTokHeroSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    description: z.string().min(1, "Description cannot be empty").optional(),
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed").optional(),
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed").optional(),
    phoneMockup: phoneMockupSchema.optional(),
    decorativeElements: decorativeElementsSchema.optional(),
  }),
});

const updateCTAButtonsZodSchema = z.object({
  body: z.object({
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
  }),
});

const updateStatisticsZodSchema = z.object({
  body: z.object({
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
  }),
});

const updatePhoneMockupZodSchema = z.object({
  body: z.object({
    phoneMockup: phoneMockupSchema,
  }),
});

export const TikTokHeroSectionValidation = {
  createTikTokHeroSectionZodSchema,
  updateTikTokHeroSectionZodSchema,
  updateCTAButtonsZodSchema,
  updateStatisticsZodSchema,
  updatePhoneMockupZodSchema,
};
