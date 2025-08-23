"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokVideoAdvertisingSectionValidation = void 0;
const zod_1 = require("zod");
const advertisingOptionSchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: "Advertising option title is required",
    }).min(1, "Advertising option title cannot be empty"),
    description: zod_1.z.string({
        required_error: "Advertising option description is required",
    }).min(1, "Advertising option description cannot be empty"),
});
const budgetInfoSchema = zod_1.z.object({
    amount: zod_1.z.string({
        required_error: "Budget amount is required",
    }).min(1, "Budget amount cannot be empty"),
    label: zod_1.z.string({
        required_error: "Budget label is required",
    }).min(1, "Budget label cannot be empty"),
});
const profileInfoSchema = zod_1.z.object({
    icon: zod_1.z.string({
        required_error: "Profile icon is required",
    }).min(1, "Profile icon cannot be empty"),
    username: zod_1.z.string({
        required_error: "Profile username is required",
    }).min(1, "Profile username cannot be empty"),
});
const interactionInfoSchema = zod_1.z.object({
    icon: zod_1.z.string({
        required_error: "Interaction icon is required",
    }).min(1, "Interaction icon cannot be empty"),
    count: zod_1.z.string({
        required_error: "Interaction count is required",
    }).min(1, "Interaction count cannot be empty"),
});
const phoneMockupSchema = zod_1.z.object({
    profileInfo: profileInfoSchema,
    interactionInfo: interactionInfoSchema,
    adCopy: zod_1.z.string({
        required_error: "Ad copy is required",
    }).min(1, "Ad copy cannot be empty"),
});
const engagementStatisticSchema = zod_1.z.object({
    value: zod_1.z.string({
        required_error: "Engagement statistic value is required",
    }).min(1, "Engagement statistic value cannot be empty"),
    label: zod_1.z.string({
        required_error: "Engagement statistic label is required",
    }).min(1, "Engagement statistic label cannot be empty"),
});
const createTikTokVideoAdvertisingSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        mainTitle: zod_1.z.string({
            required_error: "Main title is required",
        }).min(1, "Main title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        description: zod_1.z.string({
            required_error: "Description is required",
        }).min(1, "Description cannot be empty"),
        advertisingOptions: zod_1.z.array(advertisingOptionSchema).min(1, "At least one advertising option is required").max(10, "Maximum 10 advertising options allowed"),
        budgetInfo: budgetInfoSchema,
        phoneMockup: phoneMockupSchema,
        engagementStatistic: engagementStatisticSchema,
    }),
});
const updateTikTokVideoAdvertisingSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        mainTitle: zod_1.z.string().min(1, "Main title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        description: zod_1.z.string().min(1, "Description cannot be empty").optional(),
        advertisingOptions: zod_1.z.array(advertisingOptionSchema).min(1, "At least one advertising option is required").max(10, "Maximum 10 advertising options allowed").optional(),
        budgetInfo: budgetInfoSchema.optional(),
        phoneMockup: phoneMockupSchema.optional(),
        engagementStatistic: engagementStatisticSchema.optional(),
    }),
});
const updateAdvertisingOptionsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        advertisingOptions: zod_1.z.array(advertisingOptionSchema).min(1, "At least one advertising option is required").max(10, "Maximum 10 advertising options allowed"),
    }),
});
const updateBudgetInfoZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        budgetInfo: budgetInfoSchema,
    }),
});
const updatePhoneMockupZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        phoneMockup: phoneMockupSchema,
    }),
});
const updateEngagementStatisticZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        engagementStatistic: engagementStatisticSchema,
    }),
});
exports.TikTokVideoAdvertisingSectionValidation = {
    createTikTokVideoAdvertisingSectionZodSchema,
    updateTikTokVideoAdvertisingSectionZodSchema,
    updateAdvertisingOptionsZodSchema,
    updateBudgetInfoZodSchema,
    updatePhoneMockupZodSchema,
    updateEngagementStatisticZodSchema,
};
