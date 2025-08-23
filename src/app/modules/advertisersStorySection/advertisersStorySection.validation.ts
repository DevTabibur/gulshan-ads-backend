import { z } from "zod";

const testimonialCardSchema = z.object({
  rating: z.number({
    required_error: "Rating is required",
  }).min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
  testimonialText: z.string({
    required_error: "Testimonial text is required",
  }).min(1, "Testimonial text cannot be empty"),
  reviewerName: z.string({
    required_error: "Reviewer name is required",
  }).min(1, "Reviewer name cannot be empty"),
  reviewerTitle: z.string({
    required_error: "Reviewer title is required",
  }).min(1, "Reviewer title cannot be empty"),
  impactMetric: z.string({
    required_error: "Impact metric is required",
  }).min(1, "Impact metric cannot be empty"),
  profileImage: z.string().optional(),
});

const createAdvertisersStorySectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    testimonials: z.array(testimonialCardSchema).min(1, "At least one testimonial is required").max(20, "Maximum 20 testimonials allowed"),
  }),
});

const updateAdvertisersStorySectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    testimonials: z.array(testimonialCardSchema).min(1, "At least one testimonial is required").max(20, "Maximum 20 testimonials allowed").optional(),
  }),
});

const updateTestimonialsZodSchema = z.object({
  body: z.object({
    testimonials: z.array(testimonialCardSchema).min(1, "At least one testimonial is required").max(20, "Maximum 20 testimonials allowed"),
  }),
});

export const AdvertisersStorySectionValidation = {
  createAdvertisersStorySectionZodSchema,
  updateAdvertisersStorySectionZodSchema,
  updateTestimonialsZodSchema,
};
