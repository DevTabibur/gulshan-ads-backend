"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialValidation = void 0;
const zod_1 = require("zod");
const createTestimonialZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        authorUrl: zod_1.z.string({
            required_error: "Author URL is required",
        }),
        fullName: zod_1.z.string({
            required_error: "Full name is required",
        }),
        rating: zod_1.z.number({
            required_error: "Rating is required",
        }).min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
        companyName: zod_1.z.string({
            required_error: "Company name is required",
        }),
        description: zod_1.z.string({
            required_error: "Description is required",
        }),
    }),
});
const updateTestimonialZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        authorUrl: zod_1.z.string().optional(),
        fullName: zod_1.z.string().optional(),
        rating: zod_1.z.number().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5").optional(),
        companyName: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string({
            required_error: "Testimonial ID is required",
        }),
    }),
});
const getTestimonialByIdZodSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string({
            required_error: "Testimonial ID is required",
        }),
    }),
});
const deleteTestimonialZodSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string({
            required_error: "Testimonial ID is required",
        }),
    }),
});
exports.TestimonialValidation = {
    createTestimonialZodSchema,
    updateTestimonialZodSchema,
    getTestimonialByIdZodSchema,
    deleteTestimonialZodSchema,
};
