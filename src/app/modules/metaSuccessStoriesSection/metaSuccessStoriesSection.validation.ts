import { z } from "zod";

const metricSchema = z.object({
  label: z.string({
    required_error: "Metric label is required",
  }).min(1, "Metric label cannot be empty"),
  value: z.string({
    required_error: "Metric value is required",
  }).min(1, "Metric value cannot be empty"),
  color: z.string({
    required_error: "Metric color is required",
  }).min(1, "Metric color cannot be empty"),
});

const testimonialCardSchema = z.object({
  reviewerName: z.string({
    required_error: "Reviewer name is required",
  }).min(1, "Reviewer name cannot be empty"),
  reviewerTitle: z.string({
    required_error: "Reviewer title is required",
  }).min(1, "Reviewer title cannot be empty"),
  companyName: z.string({
    required_error: "Company name is required",
  }).min(1, "Company name cannot be empty"),
  initials: z.string({
    required_error: "Initials are required",
  }).min(1, "Initials cannot be empty"),
  rating: z.number({
    required_error: "Rating is required",
  }).min(0, "Rating must be 0 or greater").max(5, "Rating must be 5 or less"),
  testimonialText: z.string({
    required_error: "Testimonial text is required",
  }).min(1, "Testimonial text cannot be empty"),
  metrics: z.array(metricSchema).min(1, "At least one metric is required").max(10, "Maximum 10 metrics allowed"),
});

const createMetaSuccessStoriesSectionZodSchema = z.object({
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

const updateMetaSuccessStoriesSectionZodSchema = z.object({
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

export const MetaSuccessStoriesSectionValidation = {
  createMetaSuccessStoriesSectionZodSchema,
  updateMetaSuccessStoriesSectionZodSchema,
  updateTestimonialsZodSchema,
};
