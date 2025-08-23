"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisersCtaHeroSectionValidation = void 0;
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
const benefitSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "Benefit text is required",
    }).min(1, "Benefit text cannot be empty"),
});
const createAdvertisersCtaHeroSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
        benefits: zod_1.z.array(benefitSchema).min(1, "At least one benefit is required").max(10, "Maximum 10 benefits allowed"),
    }),
});
const updateAdvertisersCtaHeroSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed").optional(),
        benefits: zod_1.z.array(benefitSchema).min(1, "At least one benefit is required").max(10, "Maximum 10 benefits allowed").optional(),
    }),
});
const updateCTAButtonsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        ctaButtons: zod_1.z.array(ctaButtonSchema).min(1, "At least one CTA button is required").max(5, "Maximum 5 CTA buttons allowed"),
    }),
});
const updateBenefitsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        benefits: zod_1.z.array(benefitSchema).min(1, "At least one benefit is required").max(10, "Maximum 10 benefits allowed"),
    }),
});
exports.AdvertisersCtaHeroSectionValidation = {
    createAdvertisersCtaHeroSectionZodSchema,
    updateAdvertisersCtaHeroSectionZodSchema,
    updateCTAButtonsZodSchema,
    updateBenefitsZodSchema,
};
