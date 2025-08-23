"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramSectionValidation = void 0;
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
const pricingPointSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "Pricing point text is required",
    }).min(1, "Pricing point text cannot be empty"),
    icon: zod_1.z.string({
        required_error: "Pricing point icon is required",
    }).min(1, "Pricing point icon cannot be empty"),
});
const engagementSchema = zod_1.z.object({
    likes: zod_1.z.string({
        required_error: "Likes count is required",
    }).min(1, "Likes count cannot be empty"),
    comments: zod_1.z.string({
        required_error: "Comments count is required",
    }).min(1, "Comments count cannot be empty"),
    views: zod_1.z.string({
        required_error: "Views count is required",
    }).min(1, "Views count cannot be empty"),
});
const buttonSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "Button text is required",
    }).min(1, "Button text cannot be empty"),
    color: zod_1.z.string({
        required_error: "Button color is required",
    }).min(1, "Button color cannot be empty"),
});
const chatMessageSchema = zod_1.z.object({
    sender: zod_1.z.string({
        required_error: "Message sender is required",
    }).min(1, "Message sender cannot be empty"),
    timestamp: zod_1.z.string({
        required_error: "Message timestamp is required",
    }).min(1, "Message timestamp cannot be empty"),
    content: zod_1.z.string({
        required_error: "Message content is required",
    }).min(1, "Message content cannot be empty"),
    emoji: zod_1.z.string().optional(),
    engagement: engagementSchema.optional(),
    button: buttonSchema.optional(),
});
const sponsoredAdSchema = zod_1.z.object({
    label: zod_1.z.string({
        required_error: "Sponsored ad label is required",
    }).min(1, "Sponsored ad label cannot be empty"),
    content: zod_1.z.string({
        required_error: "Sponsored ad content is required",
    }).min(1, "Sponsored ad content cannot be empty"),
});
const chatInterfaceSchema = zod_1.z.object({
    channelName: zod_1.z.string({
        required_error: "Channel name is required",
    }).min(1, "Channel name cannot be empty"),
    channelSubscribers: zod_1.z.string({
        required_error: "Channel subscribers count is required",
    }).min(1, "Channel subscribers count cannot be empty"),
    messages: zod_1.z.array(chatMessageSchema).min(1, "At least one message is required").max(20, "Maximum 20 messages allowed"),
    sponsoredAd: sponsoredAdSchema,
});
const futureBannerSchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: "Future banner title is required",
    }).min(1, "Future banner title cannot be empty"),
    description: zod_1.z.string({
        required_error: "Future banner description is required",
    }).min(1, "Future banner description cannot be empty"),
    icon: zod_1.z.string({
        required_error: "Future banner icon is required",
    }).min(1, "Future banner icon cannot be empty"),
    gradientColors: zod_1.z.array(zod_1.z.string()).min(2, "At least 2 gradient colors are required").max(5, "Maximum 5 gradient colors allowed"),
});
const createTelegramSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        keyFeatures: zod_1.z.array(keyFeatureSchema).min(1, "At least one key feature is required").max(10, "Maximum 10 key features allowed"),
        pricingTitle: zod_1.z.string({
            required_error: "Pricing title is required",
        }).min(1, "Pricing title cannot be empty"),
        pricingPoints: zod_1.z.array(pricingPointSchema).min(1, "At least one pricing point is required").max(10, "Maximum 10 pricing points allowed"),
        ctaButton: zod_1.z.object({
            text: zod_1.z.string({
                required_error: "CTA button text is required",
            }).min(1, "CTA button text cannot be empty"),
            color: zod_1.z.string({
                required_error: "CTA button color is required",
            }).min(1, "CTA button color cannot be empty"),
        }),
        chatInterface: chatInterfaceSchema,
        futureBanner: futureBannerSchema,
    }),
});
const updateTelegramSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        keyFeatures: zod_1.z.array(keyFeatureSchema).min(1, "At least one key feature is required").max(10, "Maximum 10 key features allowed").optional(),
        pricingTitle: zod_1.z.string().min(1, "Pricing title cannot be empty").optional(),
        pricingPoints: zod_1.z.array(pricingPointSchema).min(1, "At least one pricing point is required").max(10, "Maximum 10 pricing points allowed").optional(),
        ctaButton: zod_1.z.object({
            text: zod_1.z.string().min(1, "CTA button text cannot be empty"),
            color: zod_1.z.string().min(1, "CTA button color cannot be empty"),
        }).optional(),
        chatInterface: chatInterfaceSchema.optional(),
        futureBanner: futureBannerSchema.optional(),
    }),
});
const updateKeyFeaturesZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        keyFeatures: zod_1.z.array(keyFeatureSchema).min(1, "At least one key feature is required").max(10, "Maximum 10 key features allowed"),
    }),
});
const updatePricingPointsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        pricingPoints: zod_1.z.array(pricingPointSchema).min(1, "At least one pricing point is required").max(10, "Maximum 10 pricing points allowed"),
    }),
});
const updateChatInterfaceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        chatInterface: chatInterfaceSchema,
    }),
});
const updateFutureBannerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        futureBanner: futureBannerSchema,
    }),
});
exports.TelegramSectionValidation = {
    createTelegramSectionZodSchema,
    updateTelegramSectionZodSchema,
    updateKeyFeaturesZodSchema,
    updatePricingPointsZodSchema,
    updateChatInterfaceZodSchema,
    updateFutureBannerZodSchema,
};
