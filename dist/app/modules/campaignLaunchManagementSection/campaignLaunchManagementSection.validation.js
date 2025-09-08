"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignLaunchManagementSectionValidation = void 0;
const zod_1 = require("zod");
const spendFeatureSchema = zod_1.z.object({
    label: zod_1.z.string({
        required_error: "Spend feature label is required",
    }).min(1, "Spend feature label cannot be empty"),
    text: zod_1.z.string({
        required_error: "Spend feature text is required",
    }).min(1, "Spend feature text cannot be empty"),
    indicators: zod_1.z.array(zod_1.z.string()).min(1, "At least one indicator is required").max(10, "Maximum 10 indicators allowed"),
});
const progressIndicatorSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "Progress indicator text is required",
    }).min(1, "Progress indicator text cannot be empty"),
    progress: zod_1.z.number({
        required_error: "Progress value is required",
    }).min(0, "Progress must be 0 or greater"),
    total: zod_1.z.number({
        required_error: "Total value is required",
    }).min(1, "Total must be 1 or greater"),
    color: zod_1.z.string({
        required_error: "Progress color is required",
    }).min(1, "Progress color cannot be empty"),
});
const chatInterfaceSchema = zod_1.z.object({
    profileIcon: zod_1.z.string({
        required_error: "Profile icon is required",
    }).min(1, "Profile icon cannot be empty"),
    name: zod_1.z.string({
        required_error: "Name is required",
    }).min(1, "Name cannot be empty"),
    status: zod_1.z.string({
        required_error: "Status is required",
    }).min(1, "Status cannot be empty"),
    message: zod_1.z.string({
        required_error: "Message is required",
    }).min(1, "Message cannot be empty"),
});
const managementCardSchema = zod_1.z.object({
    icon: zod_1.z.string({
        required_error: "Card icon is required",
    }).min(1, "Card icon cannot be empty"),
    title: zod_1.z.string({
        required_error: "Card title is required",
    }).min(1, "Card title cannot be empty"),
    description: zod_1.z.string({
        required_error: "Card description is required",
    }).min(1, "Card description cannot be empty"),
    spendFeature: spendFeatureSchema.optional(),
    progressIndicator: progressIndicatorSchema.optional(),
    chatInterface: chatInterfaceSchema.optional(),
});
const createCampaignLaunchManagementSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        icon: zod_1.z.string({
            required_error: "Icon is required",
        }).min(1, "Icon cannot be empty"),
        cards: zod_1.z.array(managementCardSchema).min(1, "At least one management card is required").max(10, "Maximum 10 management cards allowed"),
    }),
});
const updateCampaignLaunchManagementSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        icon: zod_1.z.string().min(1, "Icon cannot be empty").optional(),
        cards: zod_1.z.array(managementCardSchema).min(1, "At least one management card is required").max(10, "Maximum 10 management cards allowed").optional(),
    }),
});
const updateCardsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        cards: zod_1.z.array(managementCardSchema).min(1, "At least one management card is required").max(10, "Maximum 10 management cards allowed"),
    }),
});
exports.CampaignLaunchManagementSectionValidation = {
    createCampaignLaunchManagementSectionZodSchema,
    updateCampaignLaunchManagementSectionZodSchema,
    updateCardsZodSchema,
};
