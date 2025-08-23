"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaPartnershipSectionValidation = void 0;
const zod_1 = require("zod");
const logoSchema = zod_1.z.object({
    icon: zod_1.z.string({
        required_error: "Logo icon is required",
    }).min(1, "Logo icon cannot be empty"),
    color: zod_1.z.string({
        required_error: "Logo color is required",
    }).min(1, "Logo color cannot be empty"),
});
const featureCardSchema = zod_1.z.object({
    icon: zod_1.z.string({
        required_error: "Feature card icon is required",
    }).min(1, "Feature card icon cannot be empty"),
    title: zod_1.z.string({
        required_error: "Feature card title is required",
    }).min(1, "Feature card title cannot be empty"),
    subtitle: zod_1.z.string({
        required_error: "Feature card subtitle is required",
    }).min(1, "Feature card subtitle cannot be empty"),
});
const ctaButtonSchema = zod_1.z.object({
    text: zod_1.z.string({
        required_error: "CTA button text is required",
    }).min(1, "CTA button text cannot be empty"),
    color: zod_1.z.string({
        required_error: "CTA button color is required",
    }).min(1, "CTA button color cannot be empty"),
});
const createMetaPartnershipSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        leftLogo: logoSchema,
        rightLogo: logoSchema,
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        featureCards: zod_1.z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed"),
        ctaButton: ctaButtonSchema,
    }),
});
const updateMetaPartnershipSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        leftLogo: logoSchema.optional(),
        rightLogo: logoSchema.optional(),
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        featureCards: zod_1.z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed").optional(),
        ctaButton: ctaButtonSchema.optional(),
    }),
});
const updateFeatureCardsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        featureCards: zod_1.z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed"),
    }),
});
exports.MetaPartnershipSectionValidation = {
    createMetaPartnershipSectionZodSchema,
    updateMetaPartnershipSectionZodSchema,
    updateFeatureCardsZodSchema,
};
