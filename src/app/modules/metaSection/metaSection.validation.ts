import { z } from "zod";

const platformIconSchema = z.object({
  platform: z.string({
    required_error: "Platform name is required",
  }).min(1, "Platform name cannot be empty"),
  icon: z.string({
    required_error: "Platform icon is required",
  }).min(1, "Platform icon cannot be empty"),
  color: z.string({
    required_error: "Platform color is required",
  }).min(1, "Platform color cannot be empty"),
});

const featureButtonSchema = z.object({
  text: z.string({
    required_error: "Feature button text is required",
  }).min(1, "Feature button text cannot be empty"),
  icon: z.string({
    required_error: "Feature button icon is required",
  }).min(1, "Feature button icon cannot be empty"),
  color: z.string({
    required_error: "Feature button color is required",
  }).min(1, "Feature button color cannot be empty"),
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
});

const performanceStatisticSchema = z.object({
  value: z.string({
    required_error: "Performance statistic value is required",
  }).min(1, "Performance statistic value cannot be empty"),
  label: z.string({
    required_error: "Performance statistic label is required",
  }).min(1, "Performance statistic label cannot be empty"),
  color: z.string({
    required_error: "Performance statistic color is required",
  }).min(1, "Performance statistic color cannot be empty"),
});

const createMetaSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    platformIcons: z.array(platformIconSchema).min(1, "At least one platform icon is required").max(10, "Maximum 10 platform icons allowed"),
    featureButtons: z.array(featureButtonSchema).min(1, "At least one feature button is required").max(10, "Maximum 10 feature buttons allowed"),
    serviceCards: z.array(serviceCardSchema).min(1, "At least one service card is required").max(10, "Maximum 10 service cards allowed"),
    performanceTitle: z.string({
      required_error: "Performance title is required",
    }).min(1, "Performance title cannot be empty"),
    performanceSubtitle: z.string({
      required_error: "Performance subtitle is required",
    }).min(1, "Performance subtitle cannot be empty"),
    performanceStatistics: z.array(performanceStatisticSchema).min(1, "At least one performance statistic is required").max(10, "Maximum 10 performance statistics allowed"),
  }),
});

const updateMetaSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    platformIcons: z.array(platformIconSchema).min(1, "At least one platform icon is required").max(10, "Maximum 10 platform icons allowed").optional(),
    featureButtons: z.array(featureButtonSchema).min(1, "At least one feature button is required").max(10, "Maximum 10 feature buttons allowed").optional(),
    serviceCards: z.array(serviceCardSchema).min(1, "At least one service card is required").max(10, "Maximum 10 service cards allowed").optional(),
    performanceTitle: z.string().min(1, "Performance title cannot be empty").optional(),
    performanceSubtitle: z.string().min(1, "Performance subtitle cannot be empty").optional(),
    performanceStatistics: z.array(performanceStatisticSchema).min(1, "At least one performance statistic is required").max(10, "Maximum 10 performance statistics allowed").optional(),
  }),
});

const updatePlatformIconsZodSchema = z.object({
  body: z.object({
    platformIcons: z.array(platformIconSchema).min(1, "At least one platform icon is required").max(10, "Maximum 10 platform icons allowed"),
  }),
});

const updateFeatureButtonsZodSchema = z.object({
  body: z.object({
    featureButtons: z.array(featureButtonSchema).min(1, "At least one feature button is required").max(10, "Maximum 10 feature buttons allowed"),
  }),
});

const updateServiceCardsZodSchema = z.object({
  body: z.object({
    serviceCards: z.array(serviceCardSchema).min(1, "At least one service card is required").max(10, "Maximum 10 service cards allowed"),
  }),
});

const updatePerformanceStatisticsZodSchema = z.object({
  body: z.object({
    performanceStatistics: z.array(performanceStatisticSchema).min(1, "At least one performance statistic is required").max(10, "Maximum 10 performance statistics allowed"),
  }),
});

export const MetaSectionValidation = {
  createMetaSectionZodSchema,
  updateMetaSectionZodSchema,
  updatePlatformIconsZodSchema,
  updateFeatureButtonsZodSchema,
  updateServiceCardsZodSchema,
  updatePerformanceStatisticsZodSchema,
};
