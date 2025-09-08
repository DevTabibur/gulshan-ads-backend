"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAQSectionValidation = void 0;
const zod_1 = require("zod");
const faqItemSchema = zod_1.z.object({
    question: zod_1.z.string({
        required_error: "Question is required",
    }).min(1, "Question cannot be empty"),
    answer: zod_1.z.string({
        required_error: "Answer is required",
    }).min(1, "Answer cannot be empty"),
});
const createFAQSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        faqItems: zod_1.z.array(faqItemSchema).min(1, "At least one FAQ item is required").max(50, "Maximum 50 FAQ items allowed"),
    }),
});
const updateFAQSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        faqItems: zod_1.z.array(faqItemSchema).min(1, "At least one FAQ item is required").max(50, "Maximum 50 FAQ items allowed").optional(),
    }),
});
const updateFAQItemsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        faqItems: zod_1.z.array(faqItemSchema).min(1, "At least one FAQ item is required").max(50, "Maximum 50 FAQ items allowed"),
    }),
});
exports.FAQSectionValidation = {
    createFAQSectionZodSchema,
    updateFAQSectionZodSchema,
    updateFAQItemsZodSchema,
};
