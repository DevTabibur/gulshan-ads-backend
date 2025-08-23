import { z } from "zod";

const topPillSchema = z.object({
  text: z.string({
    required_error: "Top pill text is required",
  }).min(1, "Top pill text cannot be empty"),
  icon: z.string({
    required_error: "Top pill icon is required",
  }).min(1, "Top pill icon cannot be empty"),
  color: z.string({
    required_error: "Top pill color is required",
  }).min(1, "Top pill color cannot be empty"),
});

const ctaButtonSchema = z.object({
  text: z.string({
    required_error: "CTA button text is required",
  }).min(1, "CTA button text cannot be empty"),
  link: z.string({
    required_error: "CTA button link is required",
  }).min(1, "CTA button link cannot be empty"),
  type: z.enum(['primary', 'secondary'], {
    required_error: "CTA button type is required",
  }),
});

const ratingSchema = z.object({
  score: z.string({
    required_error: "Rating score is required",
  }).min(1, "Rating score cannot be empty"),
  reviewCount: z.string({
    required_error: "Review count is required",
  }).min(1, "Review count cannot be empty"),
});

const campaignMetricSchema = z.object({
  value: z.string({
    required_error: "Campaign metric value is required",
  }).min(1, "Campaign metric value cannot be empty"),
  label: z.string({
    required_error: "Campaign metric label is required",
  }).min(1, "Campaign metric label cannot be empty"),
});

const campaignPerformanceSchema = z.object({
  title: z.string({
    required_error: "Campaign performance title is required",
  }).min(1, "Campaign performance title cannot be empty"),
  percentageChange: z.string({
    required_error: "Percentage change is required",
  }).min(1, "Percentage change cannot be empty"),
  metrics: z.array(campaignMetricSchema).min(1, "At least one campaign metric is required").max(10, "Maximum 10 campaign metrics allowed"),
  adPlatform: z.string({
    required_error: "Ad platform is required",
  }).min(1, "Ad platform cannot be empty"),
  adSpend: z.string({
    required_error: "Ad spend is required",
  }).min(1, "Ad spend cannot be empty"),
});

const bottomStatisticSchema = z.object({
  value: z.string({
    required_error: "Bottom statistic value is required",
  }).min(1, "Bottom statistic value cannot be empty"),
  label: z.string({
    required_error: "Bottom statistic label is required",
  }).min(1, "Bottom statistic label cannot be empty"),
  icon: z.string({
    required_error: "Bottom statistic icon is required",
  }).min(1, "Bottom statistic icon cannot be empty"),
  iconColor: z.string().optional(),
});

const createAdvertisersHeroSectionZodSchema = z.object({
  body: z.object({
    topPill: topPillSchema,
    mainTitle: z.string({
      required_error: "Main title is required",
    }).min(1, "Main title cannot be empty"),
    mainDescription: z.string({
      required_error: "Main description is required",
    }).min(1, "Main description cannot be empty"),
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
    rating: ratingSchema,
    campaignPerformance: campaignPerformanceSchema,
    bottomStatistics: z.array(bottomStatisticSchema).min(1, "At least one bottom statistic is required").max(10, "Maximum 10 bottom statistics allowed"),
  }),
});

const updateAdvertisersHeroSectionZodSchema = z.object({
  body: z.object({
    topPill: topPillSchema.optional(),
    mainTitle: z.string().min(1, "Main title cannot be empty").optional(),
    mainDescription: z.string().min(1, "Main description cannot be empty").optional(),
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed").optional(),
    rating: ratingSchema.optional(),
    campaignPerformance: campaignPerformanceSchema.optional(),
    bottomStatistics: z.array(bottomStatisticSchema).min(1, "At least one bottom statistic is required").max(10, "Maximum 10 bottom statistics allowed").optional(),
  }),
});

const updateCTAButtonsZodSchema = z.object({
  body: z.object({
    ctaButtons: z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
  }),
});

const updateCampaignPerformanceZodSchema = z.object({
  body: z.object({
    campaignPerformance: campaignPerformanceSchema,
  }),
});

const updateBottomStatisticsZodSchema = z.object({
  body: z.object({
    bottomStatistics: z.array(bottomStatisticSchema).min(1, "At least one bottom statistic is required").max(10, "Maximum 10 bottom statistics allowed"),
  }),
});

export const AdvertisersHeroSectionValidation = {
  createAdvertisersHeroSectionZodSchema,
  updateAdvertisersHeroSectionZodSchema,
  updateCTAButtonsZodSchema,
  updateCampaignPerformanceZodSchema,
  updateBottomStatisticsZodSchema,
};
