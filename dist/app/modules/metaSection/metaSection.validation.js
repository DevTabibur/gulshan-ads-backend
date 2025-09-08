"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaSectionValidation = void 0;
const zod_1 = require("zod");
const platformIconSchema = zod_1.z.object({
    platform: zod_1.z.string({
        required_error: "Platform name is required",
    }).min(1, "Platform name cannot be empty"),
    icon: zod_1.z.string({
        required_error: "Platform icon is required",
    }).min(1, "Platform icon cannot be empty"),
    color: zod_1.z.string({
        required_error: "Platform color is required",
    }).min(1, "Platform color cannot be empty"),
});
const featureButtonSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "Feature button text is required",
    }).min(1, "Feature button text cannot be empty"),
    icon: zod_1.z.string({
        required_error: "Feature button icon is required",
    }).min(1, "Feature button icon cannot be empty"),
    color: zod_1.z.string({
        required_error: "Feature button color is required",
    }).min(1, "Feature button color cannot be empty"),
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
});
const performanceStatisticSchema = zod_1.z.object({
    value: zod_1.z.string({
        required_error: "Performance statistic value is required",
    }).min(1, "Performance statistic value cannot be empty"),
    label: zod_1.z.string({
        required_error: "Performance statistic label is required",
    }).min(1, "Performance statistic label cannot be empty"),
    color: zod_1.z.string({
        required_error: "Performance statistic color is required",
    }).min(1, "Performance statistic color cannot be empty"),
});
const createMetaSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        platformIcons: zod_1.z.array(platformIconSchema).min(1, "At least one platform icon is required").max(10, "Maximum 10 platform icons allowed"),
        featureButtons: zod_1.z.array(featureButtonSchema).min(1, "At least one feature button is required").max(10, "Maximum 10 feature buttons allowed"),
        serviceCards: zod_1.z.array(serviceCardSchema).min(1, "At least one service card is required").max(10, "Maximum 10 service cards allowed"),
        performanceTitle: zod_1.z.string({
            required_error: "Performance title is required",
        }).min(1, "Performance title cannot be empty"),
        performanceSubtitle: zod_1.z.string({
            required_error: "Performance subtitle is required",
        }).min(1, "Performance subtitle cannot be empty"),
        performanceStatistics: zod_1.z.array(performanceStatisticSchema).min(1, "At least one performance statistic is required").max(10, "Maximum 10 performance statistics allowed"),
    }),
});
const updateMetaSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        platformIcons: zod_1.z.array(platformIconSchema).min(1, "At least one platform icon is required").max(10, "Maximum 10 platform icons allowed").optional(),
        featureButtons: zod_1.z.array(featureButtonSchema).min(1, "At least one feature button is required").max(10, "Maximum 10 feature buttons allowed").optional(),
        serviceCards: zod_1.z.array(serviceCardSchema).min(1, "At least one service card is required").max(10, "Maximum 10 service cards allowed").optional(),
        performanceTitle: zod_1.z.string().min(1, "Performance title cannot be empty").optional(),
        performanceSubtitle: zod_1.z.string().min(1, "Performance subtitle cannot be empty").optional(),
        performanceStatistics: zod_1.z.array(performanceStatisticSchema).min(1, "At least one performance statistic is required").max(10, "Maximum 10 performance statistics allowed").optional(),
    }),
});
const updatePlatformIconsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        platformIcons: zod_1.z.array(platformIconSchema).min(1, "At least one platform icon is required").max(10, "Maximum 10 platform icons allowed"),
    }),
});
const updateFeatureButtonsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        featureButtons: zod_1.z.array(featureButtonSchema).min(1, "At least one feature button is required").max(10, "Maximum 10 feature buttons allowed"),
    }),
});
const updateServiceCardsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        serviceCards: zod_1.z.array(serviceCardSchema).min(1, "At least one service card is required").max(10, "Maximum 10 service cards allowed"),
    }),
});
const updatePerformanceStatisticsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        performanceStatistics: zod_1.z.array(performanceStatisticSchema).min(1, "At least one performance statistic is required").max(10, "Maximum 10 performance statistics allowed"),
    }),
});
exports.MetaSectionValidation = {
    createMetaSectionZodSchema,
    updateMetaSectionZodSchema,
    updatePlatformIconsZodSchema,
    updateFeatureButtonsZodSchema,
    updateServiceCardsZodSchema,
    updatePerformanceStatisticsZodSchema,
};
