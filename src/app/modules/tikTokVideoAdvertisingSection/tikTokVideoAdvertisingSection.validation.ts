import { z } from "zod";

const advertisingOptionSchema = z.object({
  title: z.string({
    required_error: "Advertising option title is required",
  }).min(1, "Advertising option title cannot be empty"),
  description: z.string({
    required_error: "Advertising option description is required",
  }).min(1, "Advertising option description cannot be empty"),
});

const budgetInfoSchema = z.object({
  amount: z.string({
    required_error: "Budget amount is required",
  }).min(1, "Budget amount cannot be empty"),
  label: z.string({
    required_error: "Budget label is required",
  }).min(1, "Budget label cannot be empty"),
});

const profileInfoSchema = z.object({
  icon: z.string({
    required_error: "Profile icon is required",
  }).min(1, "Profile icon cannot be empty"),
  username: z.string({
    required_error: "Profile username is required",
  }).min(1, "Profile username cannot be empty"),
});

const interactionInfoSchema = z.object({
  icon: z.string({
    required_error: "Interaction icon is required",
  }).min(1, "Interaction icon cannot be empty"),
  count: z.string({
    required_error: "Interaction count is required",
  }).min(1, "Interaction count cannot be empty"),
});

const phoneMockupSchema = z.object({
  profileInfo: profileInfoSchema,
  interactionInfo: interactionInfoSchema,
  adCopy: z.string({
    required_error: "Ad copy is required",
  }).min(1, "Ad copy cannot be empty"),
});

const engagementStatisticSchema = z.object({
  value: z.string({
    required_error: "Engagement statistic value is required",
  }).min(1, "Engagement statistic value cannot be empty"),
  label: z.string({
    required_error: "Engagement statistic label is required",
  }).min(1, "Engagement statistic label cannot be empty"),
});

const createTikTokVideoAdvertisingSectionZodSchema = z.object({
  body: z.object({
    mainTitle: z.string({
      required_error: "Main title is required",
    }).min(1, "Main title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    description: z.string({
      required_error: "Description is required",
    }).min(1, "Description cannot be empty"),
    advertisingOptions: z.array(advertisingOptionSchema).min(1, "At least one advertising option is required").max(10, "Maximum 10 advertising options allowed"),
    budgetInfo: budgetInfoSchema,
    phoneMockup: phoneMockupSchema,
    engagementStatistic: engagementStatisticSchema,
  }),
});

const updateTikTokVideoAdvertisingSectionZodSchema = z.object({
  body: z.object({
    mainTitle: z.string().min(1, "Main title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    description: z.string().min(1, "Description cannot be empty").optional(),
    advertisingOptions: z.array(advertisingOptionSchema).min(1, "At least one advertising option is required").max(10, "Maximum 10 advertising options allowed").optional(),
    budgetInfo: budgetInfoSchema.optional(),
    phoneMockup: phoneMockupSchema.optional(),
    engagementStatistic: engagementStatisticSchema.optional(),
  }),
});

const updateAdvertisingOptionsZodSchema = z.object({
  body: z.object({
    advertisingOptions: z.array(advertisingOptionSchema).min(1, "At least one advertising option is required").max(10, "Maximum 10 advertising options allowed"),
  }),
});

const updateBudgetInfoZodSchema = z.object({
  body: z.object({
    budgetInfo: budgetInfoSchema,
  }),
});

const updatePhoneMockupZodSchema = z.object({
  body: z.object({
    phoneMockup: phoneMockupSchema,
  }),
});

const updateEngagementStatisticZodSchema = z.object({
  body: z.object({
    engagementStatistic: engagementStatisticSchema,
  }),
});

export const TikTokVideoAdvertisingSectionValidation = {
  createTikTokVideoAdvertisingSectionZodSchema,
  updateTikTokVideoAdvertisingSectionZodSchema,
  updateAdvertisingOptionsZodSchema,
  updateBudgetInfoZodSchema,
  updatePhoneMockupZodSchema,
  updateEngagementStatisticZodSchema,
};
