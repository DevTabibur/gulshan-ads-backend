"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeSectionValidation = void 0;
const zod_1 = require("zod");
const createSubscribeSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        icon: zod_1.z.string({
            required_error: "Icon is required",
        }).min(1, "Icon cannot be empty"),
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        emailPlaceholder: zod_1.z.string({
            required_error: "Email placeholder is required",
        }).min(1, "Email placeholder cannot be empty"),
        subscribeButtonText: zod_1.z.string({
            required_error: "Subscribe button text is required",
        }).min(1, "Subscribe button text cannot be empty"),
        legalDisclaimer: zod_1.z.string({
            required_error: "Legal disclaimer is required",
        }).min(1, "Legal disclaimer cannot be empty"),
    }),
});
const updateSubscribeSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        icon: zod_1.z.string().min(1, "Icon cannot be empty").optional(),
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        emailPlaceholder: zod_1.z.string().min(1, "Email placeholder cannot be empty").optional(),
        subscribeButtonText: zod_1.z.string().min(1, "Subscribe button text cannot be empty").optional(),
        legalDisclaimer: zod_1.z.string().min(1, "Legal disclaimer cannot be empty").optional(),
    }),
});
exports.SubscribeSectionValidation = {
    createSubscribeSectionZodSchema,
    updateSubscribeSectionZodSchema,
};
