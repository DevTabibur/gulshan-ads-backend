"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAutomationSectionValidation = void 0;
const zod_1 = require("zod");
const benefitTagSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "Benefit tag text is required",
    }).min(1, "Benefit tag text cannot be empty"),
    color: zod_1.z.enum(['orange', 'green', 'blue'], {
        required_error: "Benefit tag color is required",
    }),
});
const featureCardSchema = zod_1.z.object({
    icon: zod_1.z.string({
        required_error: "Feature card icon is required",
    }).min(1, "Feature card icon cannot be empty"),
    title: zod_1.z.string({
        required_error: "Feature card title is required",
    }).min(1, "Feature card title cannot be empty"),
    description: zod_1.z.string({
        required_error: "Feature card description is required",
    }).min(1, "Feature card description cannot be empty"),
});
const ctaButtonSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "CTA button text is required",
    }).min(1, "CTA button text cannot be empty"),
    color: zod_1.z.string({
        required_error: "CTA button color is required",
    }).min(1, "CTA button color cannot be empty"),
});
const createPaymentAutomationSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        mainTitle: zod_1.z.string({
            required_error: "Main title is required",
        }).min(1, "Main title cannot be empty"),
        highlightedText: zod_1.z.string({
            required_error: "Highlighted text is required",
        }).min(1, "Highlighted text cannot be empty"),
        benefitTags: zod_1.z.array(benefitTagSchema).min(1, "At least one benefit tag is required").max(10, "Maximum 10 benefit tags allowed"),
        featureCards: zod_1.z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed"),
        financialCalloutText: zod_1.z.string({
            required_error: "Financial callout text is required",
        }).min(1, "Financial callout text cannot be empty"),
        ctaButton: ctaButtonSchema,
    }),
});
const updatePaymentAutomationSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        mainTitle: zod_1.z.string().min(1, "Main title cannot be empty").optional(),
        highlightedText: zod_1.z.string().min(1, "Highlighted text cannot be empty").optional(),
        benefitTags: zod_1.z.array(benefitTagSchema).min(1, "At least one benefit tag is required").max(10, "Maximum 10 benefit tags allowed").optional(),
        featureCards: zod_1.z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed").optional(),
        financialCalloutText: zod_1.z.string().min(1, "Financial callout text cannot be empty").optional(),
        ctaButton: ctaButtonSchema.optional(),
    }),
});
const updateBenefitTagsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        benefitTags: zod_1.z.array(benefitTagSchema).min(1, "At least one benefit tag is required").max(10, "Maximum 10 benefit tags allowed"),
    }),
});
const updateFeatureCardsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        featureCards: zod_1.z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed"),
    }),
});
const updateFinancialCalloutTextZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        financialCalloutText: zod_1.z.string().min(1, "Financial callout text cannot be empty"),
    }),
});
const updateCTAButtonZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        ctaButton: ctaButtonSchema,
    }),
});
exports.PaymentAutomationSectionValidation = {
    createPaymentAutomationSectionZodSchema,
    updatePaymentAutomationSectionZodSchema,
    updateBenefitTagsZodSchema,
    updateFeatureCardsZodSchema,
    updateFinancialCalloutTextZodSchema,
    updateCTAButtonZodSchema,
};
