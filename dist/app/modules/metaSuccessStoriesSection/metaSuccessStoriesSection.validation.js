"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaSuccessStoriesSectionValidation = void 0;
const zod_1 = require("zod");
const metricSchema = zod_1.z.object({
    label: zod_1.z.string({
        required_error: "Metric label is required",
    }).min(1, "Metric label cannot be empty"),
    value: zod_1.z.string({
        required_error: "Metric value is required",
    }).min(1, "Metric value cannot be empty"),
    color: zod_1.z.string({
        required_error: "Metric color is required",
    }).min(1, "Metric color cannot be empty"),
});
const testimonialCardSchema = zod_1.z.object({
    reviewerName: zod_1.z.string({
        required_error: "Reviewer name is required",
    }).min(1, "Reviewer name cannot be empty"),
    reviewerTitle: zod_1.z.string({
        required_error: "Reviewer title is required",
    }).min(1, "Reviewer title cannot be empty"),
    companyName: zod_1.z.string({
        required_error: "Company name is required",
    }).min(1, "Company name cannot be empty"),
    initials: zod_1.z.string({
        required_error: "Initials are required",
    }).min(1, "Initials cannot be empty"),
    rating: zod_1.z.number({
        required_error: "Rating is required",
    }).min(0, "Rating must be 0 or greater").max(5, "Rating must be 5 or less"),
    testimonialText: zod_1.z.string({
        required_error: "Testimonial text is required",
    }).min(1, "Testimonial text cannot be empty"),
    metrics: zod_1.z.array(metricSchema).min(1, "At least one metric is required").max(10, "Maximum 10 metrics allowed"),
});
const createMetaSuccessStoriesSectionZodSchema = zod_1.z.object({
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
const updateMetaSuccessStoriesSectionZodSchema = zod_1.z.object({
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
exports.MetaSuccessStoriesSectionValidation = {
    createMetaSuccessStoriesSectionZodSchema,
    updateMetaSuccessStoriesSectionZodSchema,
    updateTestimonialsZodSchema,
};
