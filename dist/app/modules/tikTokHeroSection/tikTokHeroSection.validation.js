"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokHeroSectionValidation = void 0;
const zod_1 = require("zod");
const ctaButtonSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "CTA button text is required",
    }).min(1, "CTA button text cannot be empty"),
    type: zod_1.z.enum(['primary', 'secondary'], {
        required_error: "CTA button type is required",
    }),
    icon: zod_1.z.string().optional(),
});
const statisticSchema = zod_1.z.object({
    value: zod_1.z.string({
        required_error: "Statistic value is required",
    }).min(1, "Statistic value cannot be empty"),
    label: zod_1.z.string({
        required_error: "Statistic label is required",
    }).min(1, "Statistic label cannot be empty"),
});
const profilePictureSchema = zod_1.z.object({
    initials: zod_1.z.string({
        required_error: "Profile picture initials are required",
    }).min(1, "Profile picture initials cannot be empty"),
    color: zod_1.z.string({
        required_error: "Profile picture color is required",
    }).min(1, "Profile picture color cannot be empty"),
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
const phoneMockupSchema = zod_1.z.object({
    profilePicture: profilePictureSchema,
    username: zod_1.z.string({
        required_error: "Username is required",
    }).min(1, "Username cannot be empty"),
    adCopy: zod_1.z.string({
        required_error: "Ad copy is required",
    }).min(1, "Ad copy cannot be empty"),
    interactions: interactionsSchema,
    learnMoreLink: zod_1.z.string({
        required_error: "Learn more link is required",
    }).min(1, "Learn more link cannot be empty"),
});
const decorativeElementsSchema = zod_1.z.object({
    lightningIcon: zod_1.z.string({
        required_error: "Lightning icon is required",
    }).min(1, "Lightning icon cannot be empty"),
    floatingHeartIcon: zod_1.z.string({
        required_error: "Floating heart icon is required",
    }).min(1, "Floating heart icon cannot be empty"),
});
const createTikTokHeroSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        description: zod_1.z.string({
            required_error: "Description is required",
        }).min(1, "Description cannot be empty"),
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
        phoneMockup: phoneMockupSchema,
        decorativeElements: decorativeElementsSchema,
    }),
});
const updateTikTokHeroSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        description: zod_1.z.string().min(1, "Description cannot be empty").optional(),
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed").optional(),
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed").optional(),
        phoneMockup: phoneMockupSchema.optional(),
        decorativeElements: decorativeElementsSchema.optional(),
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
const updatePhoneMockupZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        phoneMockup: phoneMockupSchema,
    }),
});
exports.TikTokHeroSectionValidation = {
    createTikTokHeroSectionZodSchema,
    updateTikTokHeroSectionZodSchema,
    updateCTAButtonsZodSchema,
    updateStatisticsZodSchema,
    updatePhoneMockupZodSchema,
};
