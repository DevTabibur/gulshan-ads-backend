"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhyChooseUsSectionValidation = void 0;
const zod_1 = require("zod");
const benefitCardSchema = zod_1.z.object({
    icon: zod_1.z.string({
        required_error: "Benefit icon is required",
    }).min(1, "Benefit icon cannot be empty"),
    title: zod_1.z.string({
        required_error: "Benefit title is required",
    }).min(1, "Benefit title cannot be empty"),
    description: zod_1.z.string({
        required_error: "Benefit description is required",
    }).min(1, "Benefit description cannot be empty"),
    iconColor: zod_1.z.string({
        required_error: "Benefit icon color is required",
    }).min(1, "Benefit icon color cannot be empty"),
});
const createWhyChooseUsSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        benefits: zod_1.z.array(benefitCardSchema).min(1, "At least one benefit is required").max(10, "Maximum 10 benefits allowed"),
    }),
});
const updateWhyChooseUsSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        benefits: zod_1.z.array(benefitCardSchema).min(1, "At least one benefit is required").max(10, "Maximum 10 benefits allowed").optional(),
    }),
});
const updateBenefitsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        benefits: zod_1.z.array(benefitCardSchema).min(1, "At least one benefit is required").max(10, "Maximum 10 benefits allowed"),
    }),
});
exports.WhyChooseUsSectionValidation = {
    createWhyChooseUsSectionZodSchema,
    updateWhyChooseUsSectionZodSchema,
    updateBenefitsZodSchema,
};
