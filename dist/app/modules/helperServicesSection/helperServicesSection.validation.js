"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperServicesSectionValidation = void 0;
const zod_1 = require("zod");
const serviceCardSchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: "Service title is required",
    }).min(1, "Service title cannot be empty"),
    subtitle: zod_1.z.string({
        required_error: "Service subtitle is required",
    }).min(1, "Service subtitle cannot be empty"),
    rating: zod_1.z.number({
        required_error: "Service rating is required",
    }).min(0, "Rating must be 0 or greater").max(10, "Rating must be 10 or less"),
    stars: zod_1.z.number({
        required_error: "Service stars is required",
    }).min(0, "Stars must be 0 or greater").max(5, "Stars must be 5 or less"),
});
const createHelperServicesSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        icon: zod_1.z.string({
            required_error: "Icon is required",
        }).min(1, "Icon cannot be empty"),
        description: zod_1.z.string({
            required_error: "Description is required",
        }).min(1, "Description cannot be empty"),
        recommendedLabel: zod_1.z.string({
            required_error: "Recommended label is required",
        }).min(1, "Recommended label cannot be empty"),
        recommendedCount: zod_1.z.number({
            required_error: "Recommended count is required",
        }).min(0, "Recommended count must be 0 or greater"),
        currentlyUsedLabel: zod_1.z.string({
            required_error: "Currently used label is required",
        }).min(1, "Currently used label cannot be empty"),
        currentlyUsedCount: zod_1.z.number({
            required_error: "Currently used count is required",
        }).min(0, "Currently used count must be 0 or greater"),
        services: zod_1.z.array(serviceCardSchema).min(1, "At least one service is required").max(20, "Maximum 20 services allowed"),
    }),
});
const updateHelperServicesSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        icon: zod_1.z.string().min(1, "Icon cannot be empty").optional(),
        description: zod_1.z.string().min(1, "Description cannot be empty").optional(),
        recommendedLabel: zod_1.z.string().min(1, "Recommended label cannot be empty").optional(),
        recommendedCount: zod_1.z.number().min(0, "Recommended count must be 0 or greater").optional(),
        currentlyUsedLabel: zod_1.z.string().min(1, "Currently used label cannot be empty").optional(),
        currentlyUsedCount: zod_1.z.number().min(0, "Currently used count must be 0 or greater").optional(),
        services: zod_1.z.array(serviceCardSchema).min(1, "At least one service is required").max(20, "Maximum 20 services allowed").optional(),
    }),
});
const updateServicesZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        services: zod_1.z.array(serviceCardSchema).min(1, "At least one service is required").max(20, "Maximum 20 services allowed"),
    }),
});
exports.HelperServicesSectionValidation = {
    createHelperServicesSectionZodSchema,
    updateHelperServicesSectionZodSchema,
    updateServicesZodSchema,
};
