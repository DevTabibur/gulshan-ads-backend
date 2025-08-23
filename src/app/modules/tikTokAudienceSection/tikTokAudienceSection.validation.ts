import { z } from "zod";

const statisticSchema = z.object({
  percentage: z.string({
    required_error: "Statistic percentage is required",
  }).min(1, "Statistic percentage cannot be empty"),
  description: z.string({
    required_error: "Statistic description is required",
  }).min(1, "Statistic description cannot be empty"),
  color: z.enum(['green', 'blue'], {
    required_error: "Statistic color is required",
  }),
});

const advertisingBenefitSchema = z.object({
  icon: z.string({
    required_error: "Advertising benefit icon is required",
  }).min(1, "Advertising benefit icon cannot be empty"),
  title: z.string({
    required_error: "Advertising benefit title is required",
  }).min(1, "Advertising benefit title cannot be empty"),
  description: z.string({
    required_error: "Advertising benefit description is required",
  }).min(1, "Advertising benefit description cannot be empty"),
});

const profileSchema = z.object({
  icon: z.string({
    required_error: "Profile icon is required",
  }).min(1, "Profile icon cannot be empty"),
  username: z.string({
    required_error: "Profile username is required",
  }).min(1, "Profile username cannot be empty"),
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

const testimonialCardSchema = z.object({
  profile: profileSchema,
  timestamp: z.string({
    required_error: "Timestamp is required",
  }).min(1, "Timestamp cannot be empty"),
  testimonialText: z.string({
    required_error: "Testimonial text is required",
  }).min(1, "Testimonial text cannot be empty"),
  interactions: interactionsSchema,
});

const createTikTokAudienceSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
    advertisingBenefit: advertisingBenefitSchema,
    testimonialCard: testimonialCardSchema,
  }),
});

const updateTikTokAudienceSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed").optional(),
    advertisingBenefit: advertisingBenefitSchema.optional(),
    testimonialCard: testimonialCardSchema.optional(),
  }),
});

const updateStatisticsZodSchema = z.object({
  body: z.object({
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
  }),
});

const updateAdvertisingBenefitZodSchema = z.object({
  body: z.object({
    advertisingBenefit: advertisingBenefitSchema,
  }),
});

const updateTestimonialCardZodSchema = z.object({
  body: z.object({
    testimonialCard: testimonialCardSchema,
  }),
});

export const TikTokAudienceSectionValidation = {
  createTikTokAudienceSectionZodSchema,
  updateTikTokAudienceSectionZodSchema,
  updateStatisticsZodSchema,
  updateAdvertisingBenefitZodSchema,
  updateTestimonialCardZodSchema,
};
