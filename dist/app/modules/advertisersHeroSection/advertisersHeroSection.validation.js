"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisersHeroSectionValidation = void 0;
const zod_1 = require("zod");
const topPillSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "Top pill text is required",
    }).min(1, "Top pill text cannot be empty"),
    icon: zod_1.z.string({
        required_error: "Top pill icon is required",
    }).min(1, "Top pill icon cannot be empty"),
    color: zod_1.z.string({
        required_error: "Top pill color is required",
    }).min(1, "Top pill color cannot be empty"),
});
const ctaButtonSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "CTA button text is required",
    }).min(1, "CTA button text cannot be empty"),
    link: zod_1.z.string({
        required_error: "CTA button link is required",
    }).min(1, "CTA button link cannot be empty"),
    type: zod_1.z.enum(['primary', 'secondary'], {
        required_error: "CTA button type is required",
    }),
});
const ratingSchema = zod_1.z.object({
    score: zod_1.z.string({
        required_error: "Rating score is required",
    }).min(1, "Rating score cannot be empty"),
    reviewCount: zod_1.z.string({
        required_error: "Review count is required",
    }).min(1, "Review count cannot be empty"),
});
const campaignMetricSchema = zod_1.z.object({
    value: zod_1.z.string({
        required_error: "Campaign metric value is required",
    }).min(1, "Campaign metric value cannot be empty"),
    label: zod_1.z.string({
        required_error: "Campaign metric label is required",
    }).min(1, "Campaign metric label cannot be empty"),
});
const campaignPerformanceSchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: "Campaign performance title is required",
    }).min(1, "Campaign performance title cannot be empty"),
    percentageChange: zod_1.z.string({
        required_error: "Percentage change is required",
    }).min(1, "Percentage change cannot be empty"),
    metrics: zod_1.z.array(campaignMetricSchema).min(1, "At least one campaign metric is required").max(10, "Maximum 10 campaign metrics allowed"),
    adPlatform: zod_1.z.string({
        required_error: "Ad platform is required",
    }).min(1, "Ad platform cannot be empty"),
    adSpend: zod_1.z.string({
        required_error: "Ad spend is required",
    }).min(1, "Ad spend cannot be empty"),
});
const bottomStatisticSchema = zod_1.z.object({
    value: zod_1.z.string({
        required_error: "Bottom statistic value is required",
    }).min(1, "Bottom statistic value cannot be empty"),
    label: zod_1.z.string({
        required_error: "Bottom statistic label is required",
    }).min(1, "Bottom statistic label cannot be empty"),
    icon: zod_1.z.string({
        required_error: "Bottom statistic icon is required",
    }).min(1, "Bottom statistic icon cannot be empty"),
    iconColor: zod_1.z.string().optional(),
});
const createAdvertisersHeroSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        topPill: topPillSchema,
        mainTitle: zod_1.z.string({
            required_error: "Main title is required",
        }).min(1, "Main title cannot be empty"),
        mainDescription: zod_1.z.string({
            required_error: "Main description is required",
        }).min(1, "Main description cannot be empty"),
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
        rating: ratingSchema,
        campaignPerformance: campaignPerformanceSchema,
        bottomStatistics: zod_1.z.array(bottomStatisticSchema).min(1, "At least one bottom statistic is required").max(10, "Maximum 10 bottom statistics allowed"),
    }),
});
const updateAdvertisersHeroSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        topPill: topPillSchema.optional(),
        mainTitle: zod_1.z.string().min(1, "Main title cannot be empty").optional(),
        mainDescription: zod_1.z.string().min(1, "Main description cannot be empty").optional(),
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed").optional(),
        rating: ratingSchema.optional(),
        campaignPerformance: campaignPerformanceSchema.optional(),
        bottomStatistics: zod_1.z.array(bottomStatisticSchema).min(1, "At least one bottom statistic is required").max(10, "Maximum 10 bottom statistics allowed").optional(),
    }),
});
const updateCTAButtonsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
    }),
});
const updateCampaignPerformanceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        campaignPerformance: campaignPerformanceSchema,
    }),
});
const updateBottomStatisticsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        bottomStatistics: zod_1.z.array(bottomStatisticSchema).min(1, "At least one bottom statistic is required").max(10, "Maximum 10 bottom statistics allowed"),
    }),
});
exports.AdvertisersHeroSectionValidation = {
    createAdvertisersHeroSectionZodSchema,
    updateAdvertisersHeroSectionZodSchema,
    updateCTAButtonsZodSchema,
    updateCampaignPerformanceZodSchema,
    updateBottomStatisticsZodSchema,
};
