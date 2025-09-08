"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokClientSaysSectionValidation = void 0;
const zod_1 = require("zod");
const companyInfoSchema = zod_1.z.object({
    initialsIcon: zod_1.z.string({
        required_error: "Company initials icon is required",
    }).min(1, "Company initials icon cannot be empty"),
    companyName: zod_1.z.string({
        required_error: "Company name is required",
    }).min(1, "Company name cannot be empty"),
    rating: zod_1.z.number({
        required_error: "Company rating is required",
    }).min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
});
const clientInfoSchema = zod_1.z.object({
    initialsIcon: zod_1.z.string({
        required_error: "Client initials icon is required",
    }).min(1, "Client initials icon cannot be empty"),
    clientName: zod_1.z.string({
        required_error: "Client name is required",
    }).min(1, "Client name cannot be empty"),
    clientTitle: zod_1.z.string({
        required_error: "Client title is required",
    }).min(1, "Client title cannot be empty"),
});
const testimonialCardSchema = zod_1.z.object({
    companyInfo: companyInfoSchema,
    testimonialText: zod_1.z.string({
        required_error: "Testimonial text is required",
    }).min(1, "Testimonial text cannot be empty"),
    clientInfo: clientInfoSchema,
});
const createTikTokClientSaysSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        testimonialCards: zod_1.z.array(testimonialCardSchema).min(1, "At least one testimonial card is required").max(20, "Maximum 20 testimonial cards allowed"),
    }),
});
const updateTikTokClientSaysSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        testimonialCards: zod_1.z.array(testimonialCardSchema).min(1, "At least one testimonial card is required").max(20, "Maximum 20 testimonial cards allowed").optional(),
    }),
});
const updateTestimonialCardsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        testimonialCards: zod_1.z.array(testimonialCardSchema).min(1, "At least one testimonial card is required").max(20, "Maximum 20 testimonial cards allowed"),
    }),
});
const addTestimonialCardZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        testimonialCard: testimonialCardSchema,
    }),
});
const updateTestimonialCardByIndexZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        testimonialCard: testimonialCardSchema,
    }),
});
exports.TikTokClientSaysSectionValidation = {
    createTikTokClientSaysSectionZodSchema,
    updateTikTokClientSaysSectionZodSchema,
    updateTestimonialCardsZodSchema,
    addTestimonialCardZodSchema,
    updateTestimonialCardByIndexZodSchema,
};
