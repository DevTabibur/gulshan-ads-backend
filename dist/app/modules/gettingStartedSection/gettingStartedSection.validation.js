"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GettingStartedSectionValidation = void 0;
const zod_1 = require("zod");
const stepSchema = zod_1.z.object({
    number: zod_1.z.number({
        required_error: "Step number is required",
    }).min(1, "Step number must be at least 1").max(10, "Step number cannot exceed 10"),
    title: zod_1.z.string({
        required_error: "Step title is required",
    }).min(1, "Step title cannot be empty"),
    subtitle: zod_1.z.string({
        required_error: "Step subtitle is required",
    }).min(1, "Step subtitle cannot be empty"),
    description: zod_1.z.string({
        required_error: "Step description is required",
    }).min(1, "Step description cannot be empty"),
    features: zod_1.z.array(zod_1.z.string()).min(1, "At least one feature is required").max(10, "Maximum 10 features allowed"),
    iconColor: zod_1.z.string({
        required_error: "Step icon color is required",
    }).min(1, "Step icon color cannot be empty"),
});
const ctaButtonSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "CTA button text is required",
    }).min(1, "CTA button text cannot be empty"),
    type: zod_1.z.enum(['primary', 'secondary'], {
        required_error: "CTA button type is required",
    }),
    action: zod_1.z.string({
        required_error: "CTA button action is required",
    }).min(1, "CTA button action cannot be empty"),
});
const createGettingStartedSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        description: zod_1.z.string({
            required_error: "Description is required",
        }).min(1, "Description cannot be empty"),
        steps: zod_1.z.array(stepSchema).min(1, "At least one step is required").max(10, "Maximum 10 steps allowed"),
        ctaTitle: zod_1.z.string({
            required_error: "CTA title is required",
        }).min(1, "CTA title cannot be empty"),
        ctaDescription: zod_1.z.string({
            required_error: "CTA description is required",
        }).min(1, "CTA description cannot be empty"),
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
    }),
});
const updateGettingStartedSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        description: zod_1.z.string().min(1, "Description cannot be empty").optional(),
        steps: zod_1.z.array(stepSchema).min(1, "At least one step is required").max(10, "Maximum 10 steps allowed").optional(),
        ctaTitle: zod_1.z.string().min(1, "CTA title cannot be empty").optional(),
        ctaDescription: zod_1.z.string().min(1, "CTA description cannot be empty").optional(),
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed").optional(),
    }),
});
const updateStepsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        steps: zod_1.z.array(stepSchema).min(1, "At least one step is required").max(10, "Maximum 10 steps allowed"),
    }),
});
const updateCTAButtonsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
    }),
});
exports.GettingStartedSectionValidation = {
    createGettingStartedSectionZodSchema,
    updateGettingStartedSectionZodSchema,
    updateStepsZodSchema,
    updateCTAButtonsZodSchema,
};
