"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokPartnerSectionValidation = void 0;
const zod_1 = require("zod");
const partnershipLogosSchema = zod_1.z.object({
    leftLogoIcon: zod_1.z.string({
        required_error: "Left logo icon is required",
    }).min(1, "Left logo icon cannot be empty"),
    rightLogoIcon: zod_1.z.string({
        required_error: "Right logo icon is required",
    }).min(1, "Right logo icon cannot be empty"),
    separatorIcon: zod_1.z.string({
        required_error: "Separator icon is required",
    }).min(1, "Separator icon cannot be empty"),
});
const featureCardSchema = zod_1.z.object({
    cardTitle: zod_1.z.string({
        required_error: "Feature card title is required",
    }).min(1, "Feature card title cannot be empty"),
    cardSubtitle: zod_1.z.string({
        required_error: "Feature card subtitle is required",
    }).min(1, "Feature card subtitle cannot be empty"),
});
const ctaButtonSchema = zod_1.z.object({
    ctaButtonText: zod_1.z.string({
        required_error: "CTA button text is required",
    }).min(1, "CTA button text cannot be empty"),
    ctaButtonLink: zod_1.z.string().optional(),
});
const createTikTokPartnerSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        description: zod_1.z.string({
            required_error: "Description is required",
        }).min(1, "Description cannot be empty"),
        partnershipLogos: partnershipLogosSchema,
        featureCards: zod_1.z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed"),
        ctaButton: ctaButtonSchema,
    }),
});
const updateTikTokPartnerSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        description: zod_1.z.string().min(1, "Description cannot be empty").optional(),
        partnershipLogos: partnershipLogosSchema.optional(),
        featureCards: zod_1.z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed").optional(),
        ctaButton: ctaButtonSchema.optional(),
    }),
});
const updatePartnershipLogosZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        partnershipLogos: partnershipLogosSchema,
    }),
});
const updateFeatureCardsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        featureCards: zod_1.z.array(featureCardSchema).min(1, "At least one feature card is required").max(10, "Maximum 10 feature cards allowed"),
    }),
});
const updateCTAButtonZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        ctaButton: ctaButtonSchema,
    }),
});
exports.TikTokPartnerSectionValidation = {
    createTikTokPartnerSectionZodSchema,
    updateTikTokPartnerSectionZodSchema,
    updatePartnershipLogosZodSchema,
    updateFeatureCardsZodSchema,
    updateCTAButtonZodSchema,
};
