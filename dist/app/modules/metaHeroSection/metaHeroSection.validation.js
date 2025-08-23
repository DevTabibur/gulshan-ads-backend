"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaHeroSectionValidation = void 0;
const zod_1 = require("zod");
const ctaButtonSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "CTA button text is required",
    }).min(1, "CTA button text cannot be empty"),
    link: zod_1.z.string({
        required_error: "CTA button link is required",
    }).min(1, "CTA button link cannot be empty"),
    icon: zod_1.z.string({
        required_error: "CTA button icon is required",
    }).min(1, "CTA button icon cannot be empty"),
    variant: zod_1.z.enum(['primary', 'secondary'], {
        required_error: "CTA button variant is required",
    }),
});
const statisticSchema = zod_1.z.object({
    value: zod_1.z.string({
        required_error: "Statistic value is required",
    }).min(1, "Statistic value cannot be empty"),
    label: zod_1.z.string({
        required_error: "Statistic label is required",
    }).min(1, "Statistic label cannot be empty"),
});
const createMetaHeroSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
    }),
});
const updateMetaHeroSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed").optional(),
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed").optional(),
    }),
});
const updateCTAButtonsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
    }),
});
const updateStatisticsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
    }),
});
exports.MetaHeroSectionValidation = {
    createMetaHeroSectionZodSchema,
    updateMetaHeroSectionZodSchema,
    updateCTAButtonsZodSchema,
    updateStatisticsZodSchema,
};
