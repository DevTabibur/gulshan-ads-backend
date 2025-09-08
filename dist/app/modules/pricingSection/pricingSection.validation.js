"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingSectionValidation = void 0;
const zod_1 = require("zod");
const pricingFeatureSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "Feature text is required",
    }).min(1, "Feature text cannot be empty"),
});
const pricingPlanSchema = zod_1.z.object({
    icon: zod_1.z.string({
        required_error: "Plan icon is required",
    }).min(1, "Plan icon cannot be empty"),
    title: zod_1.z.string({
        required_error: "Plan title is required",
    }).min(1, "Plan title cannot be empty"),
    price: zod_1.z.string({
        required_error: "Plan price is required",
    }).min(1, "Plan price cannot be empty"),
    description: zod_1.z.string({
        required_error: "Plan description is required",
    }).min(1, "Plan description cannot be empty"),
    features: zod_1.z.array(pricingFeatureSchema).min(1, "At least one feature is required").max(20, "Maximum 20 features allowed"),
    ctaText: zod_1.z.string({
        required_error: "CTA text is required",
    }).min(1, "CTA text cannot be empty"),
    ctaLink: zod_1.z.string({
        required_error: "CTA link is required",
    }).min(1, "CTA link cannot be empty"),
    isPopular: zod_1.z.boolean().optional(),
    popularTag: zod_1.z.string().optional(),
});
const createPricingSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        plans: zod_1.z.array(pricingPlanSchema).min(1, "At least one pricing plan is required").max(10, "Maximum 10 pricing plans allowed"),
    }),
});
const updatePricingSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        plans: zod_1.z.array(pricingPlanSchema).min(1, "At least one pricing plan is required").max(10, "Maximum 10 pricing plans allowed").optional(),
    }),
});
const updatePlansZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        plans: zod_1.z.array(pricingPlanSchema).min(1, "At least one pricing plan is required").max(10, "Maximum 10 pricing plans allowed"),
    }),
});
exports.PricingSectionValidation = {
    createPricingSectionZodSchema,
    updatePricingSectionZodSchema,
    updatePlansZodSchema,
};
