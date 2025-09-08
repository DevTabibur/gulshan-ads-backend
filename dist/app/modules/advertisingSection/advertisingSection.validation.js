"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisingSectionValidation = void 0;
const zod_1 = require("zod");
const keyFeatureSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "Feature text is required",
    }).min(1, "Feature text cannot be empty"),
    icon: zod_1.z.string({
        required_error: "Feature icon is required",
    }).min(1, "Feature icon cannot be empty"),
    color: zod_1.z.string({
        required_error: "Feature color is required",
    }).min(1, "Feature color cannot be empty"),
});
const testimonialSchema = zod_1.z.object({
    authorName: zod_1.z.string({
        required_error: "Author name is required",
    }).min(1, "Author name cannot be empty"),
    authorPosition: zod_1.z.string({
        required_error: "Author position is required",
    }).min(1, "Author position cannot be empty"),
    authorInitials: zod_1.z.string({
        required_error: "Author initials are required",
    }).min(1, "Author initials cannot be empty").max(5, "Author initials must be 5 characters or less"),
});
const serviceCardSchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: "Service card title is required",
    }).min(1, "Service card title cannot be empty"),
    description: zod_1.z.string({
        required_error: "Service card description is required",
    }).min(1, "Service card description cannot be empty"),
    icon: zod_1.z.string({
        required_error: "Service card icon is required",
    }).min(1, "Service card icon cannot be empty"),
    iconColor: zod_1.z.string({
        required_error: "Service card icon color is required",
    }).min(1, "Service card icon color cannot be empty"),
    socialMediaIcons: zod_1.z.array(zod_1.z.string()).optional(),
    testimonial: testimonialSchema.optional(),
});
const statisticSchema = zod_1.z.object({
    value: zod_1.z.string({
        required_error: "Statistic value is required",
    }).min(1, "Statistic value cannot be empty"),
    label: zod_1.z.string({
        required_error: "Statistic label is required",
    }).min(1, "Statistic label cannot be empty"),
    color: zod_1.z.string({
        required_error: "Statistic color is required",
    }).min(1, "Statistic color cannot be empty"),
});
const ctaButtonSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "CTA button text is required",
    }).min(1, "CTA button text cannot be empty"),
    type: zod_1.z.enum(['primary', 'secondary'], {
        required_error: "CTA button type is required",
        invalid_type_error: "CTA button type must be either 'primary' or 'secondary'",
    }),
    color: zod_1.z.string({
        required_error: "CTA button color is required",
    }).min(1, "CTA button color cannot be empty"),
    action: zod_1.z.string({
        required_error: "CTA button action is required",
    }).min(1, "CTA button action cannot be empty"),
});
const createAdvertisingSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        keyFeatures: zod_1.z.array(keyFeatureSchema).min(1, "At least one key feature is required").max(10, "Maximum 10 key features allowed"),
        serviceCards: zod_1.z.array(serviceCardSchema).min(1, "At least one service card is required").max(10, "Maximum 10 service cards allowed"),
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
    }),
});
const updateAdvertisingSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        keyFeatures: zod_1.z.array(keyFeatureSchema).min(1, "At least one key feature is required").max(10, "Maximum 10 key features allowed").optional(),
        serviceCards: zod_1.z.array(serviceCardSchema).min(1, "At least one service card is required").max(10, "Maximum 10 service cards allowed").optional(),
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed").optional(),
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed").optional(),
    }),
});
const updateKeyFeaturesZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        keyFeatures: zod_1.z.array(keyFeatureSchema).min(1, "At least one key feature is required").max(10, "Maximum 10 key features allowed"),
    }),
});
const updateServiceCardsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        serviceCards: zod_1.z.array(serviceCardSchema).min(1, "At least one service card is required").max(10, "Maximum 10 service cards allowed"),
    }),
});
const updateStatisticsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
    }),
});
const updateCTAButtonsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
    }),
});
exports.AdvertisingSectionValidation = {
    createAdvertisingSectionZodSchema,
    updateAdvertisingSectionZodSchema,
    updateKeyFeaturesZodSchema,
    updateServiceCardsZodSchema,
    updateStatisticsZodSchema,
    updateCTAButtonsZodSchema,
};
