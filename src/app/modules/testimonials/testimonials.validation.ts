import { z } from "zod";

const createTestimonialZodSchema = z.object({
  body: z.object({
    authorUrl: z.string({
      required_error: "Author URL is required",
    }),
    fullName: z.string({
      required_error: "Full name is required",
    }),
    rating: z.number({
      required_error: "Rating is required",
    }).min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
    companyName: z.string({
      required_error: "Company name is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
  }),
});

const updateTestimonialZodSchema = z.object({
  body: z.object({
    authorUrl: z.string().optional(),
    fullName: z.string().optional(),
    rating: z.number().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5").optional(),
    companyName: z.string().optional(),
    description: z.string().optional(),
  }),
  params: z.object({
    id: z.string({
      required_error: "Testimonial ID is required",
    }),
  }),
});

const getTestimonialByIdZodSchema = z.object({
  params: z.object({
    id: z.string({
      required_error: "Testimonial ID is required",
    }),
  }),
});

const deleteTestimonialZodSchema = z.object({
  params: z.object({
    id: z.string({
      required_error: "Testimonial ID is required",
    }),
  }),
});

export const TestimonialValidation = {
  createTestimonialZodSchema,
  updateTestimonialZodSchema,
  getTestimonialByIdZodSchema,
  deleteTestimonialZodSchema,
};
