"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisersStorySectionValidation = void 0;
const zod_1 = require("zod");
const testimonialCardSchema = zod_1.z.object({
    rating: zod_1.z.number({
        required_error: "Rating is required",
    }).min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
    testimonialText: zod_1.z.string({
        required_error: "Testimonial text is required",
    }).min(1, "Testimonial text cannot be empty"),
    reviewerName: zod_1.z.string({
        required_error: "Reviewer name is required",
    }).min(1, "Reviewer name cannot be empty"),
    reviewerTitle: zod_1.z.string({
        required_error: "Reviewer title is required",
    }).min(1, "Reviewer title cannot be empty"),
    impactMetric: zod_1.z.string({
        required_error: "Impact metric is required",
    }).min(1, "Impact metric cannot be empty"),
    profileImage: zod_1.z.string().optional(),
});
const createAdvertisersStorySectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        testimonials: zod_1.z.array(testimonialCardSchema).min(1, "At least one testimonial is required").max(20, "Maximum 20 testimonials allowed"),
    }),
});
const updateAdvertisersStorySectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        testimonials: zod_1.z.array(testimonialCardSchema).min(1, "At least one testimonial is required").max(20, "Maximum 20 testimonials allowed").optional(),
    }),
});
const updateTestimonialsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        testimonials: zod_1.z.array(testimonialCardSchema).min(1, "At least one testimonial is required").max(20, "Maximum 20 testimonials allowed"),
    }),
});
exports.AdvertisersStorySectionValidation = {
    createAdvertisersStorySectionZodSchema,
    updateAdvertisersStorySectionZodSchema,
    updateTestimonialsZodSchema,
};
