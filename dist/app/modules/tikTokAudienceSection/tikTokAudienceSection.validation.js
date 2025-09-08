"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokAudienceSectionValidation = void 0;
const zod_1 = require("zod");
const statisticSchema = zod_1.z.object({
    percentage: zod_1.z.string({
        required_error: "Statistic percentage is required",
    }).min(1, "Statistic percentage cannot be empty"),
    description: zod_1.z.string({
        required_error: "Statistic description is required",
    }).min(1, "Statistic description cannot be empty"),
    color: zod_1.z.enum(['green', 'blue'], {
        required_error: "Statistic color is required",
    }),
});
const advertisingBenefitSchema = zod_1.z.object({
    icon: zod_1.z.string({
        required_error: "Advertising benefit icon is required",
    }).min(1, "Advertising benefit icon cannot be empty"),
    title: zod_1.z.string({
        required_error: "Advertising benefit title is required",
    }).min(1, "Advertising benefit title cannot be empty"),
    description: zod_1.z.string({
        required_error: "Advertising benefit description is required",
    }).min(1, "Advertising benefit description cannot be empty"),
});
const profileSchema = zod_1.z.object({
    icon: zod_1.z.string({
        required_error: "Profile icon is required",
    }).min(1, "Profile icon cannot be empty"),
    username: zod_1.z.string({
        required_error: "Profile username is required",
    }).min(1, "Profile username cannot be empty"),
});
const interactionsSchema = zod_1.z.object({
    likes: zod_1.z.string({
        required_error: "Likes count is required",
    }).min(1, "Likes count cannot be empty"),
    comments: zod_1.z.string({
        required_error: "Comments count is required",
    }).min(1, "Comments count cannot be empty"),
    shares: zod_1.z.string({
        required_error: "Shares count is required",
    }).min(1, "Shares count cannot be empty"),
});
const testimonialCardSchema = zod_1.z.object({
    profile: profileSchema,
    timestamp: zod_1.z.string({
        required_error: "Timestamp is required",
    }).min(1, "Timestamp cannot be empty"),
    testimonialText: zod_1.z.string({
        required_error: "Testimonial text is required",
    }).min(1, "Testimonial text cannot be empty"),
    interactions: interactionsSchema,
});
const createTikTokAudienceSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
        advertisingBenefit: advertisingBenefitSchema,
        testimonialCard: testimonialCardSchema,
    }),
});
const updateTikTokAudienceSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed").optional(),
        advertisingBenefit: advertisingBenefitSchema.optional(),
        testimonialCard: testimonialCardSchema.optional(),
    }),
});
const updateStatisticsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
    }),
});
const updateAdvertisingBenefitZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        advertisingBenefit: advertisingBenefitSchema,
    }),
});
const updateTestimonialCardZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        testimonialCard: testimonialCardSchema,
    }),
});
exports.TikTokAudienceSectionValidation = {
    createTikTokAudienceSectionZodSchema,
    updateTikTokAudienceSectionZodSchema,
    updateStatisticsZodSchema,
    updateAdvertisingBenefitZodSchema,
    updateTestimonialCardZodSchema,
};
