import { z } from "zod";

const companyInfoSchema = z.object({
  initialsIcon: z.string({
    required_error: "Company initials icon is required",
  }).min(1, "Company initials icon cannot be empty"),
  companyName: z.string({
    required_error: "Company name is required",
  }).min(1, "Company name cannot be empty"),
  rating: z.number({
    required_error: "Company rating is required",
  }).min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
});

const clientInfoSchema = z.object({
  initialsIcon: z.string({
    required_error: "Client initials icon is required",
  }).min(1, "Client initials icon cannot be empty"),
  clientName: z.string({
    required_error: "Client name is required",
  }).min(1, "Client name cannot be empty"),
  clientTitle: z.string({
    required_error: "Client title is required",
  }).min(1, "Client title cannot be empty"),
});

const testimonialCardSchema = z.object({
  companyInfo: companyInfoSchema,
  testimonialText: z.string({
    required_error: "Testimonial text is required",
  }).min(1, "Testimonial text cannot be empty"),
  clientInfo: clientInfoSchema,
});

const createTikTokClientSaysSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    testimonialCards: z.array(testimonialCardSchema).min(1, "At least one testimonial card is required").max(20, "Maximum 20 testimonial cards allowed"),
  }),
});

const updateTikTokClientSaysSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    testimonialCards: z.array(testimonialCardSchema).min(1, "At least one testimonial card is required").max(20, "Maximum 20 testimonial cards allowed").optional(),
  }),
});

const updateTestimonialCardsZodSchema = z.object({
  body: z.object({
    testimonialCards: z.array(testimonialCardSchema).min(1, "At least one testimonial card is required").max(20, "Maximum 20 testimonial cards allowed"),
  }),
});

const addTestimonialCardZodSchema = z.object({
  body: z.object({
    testimonialCard: testimonialCardSchema,
  }),
});

const updateTestimonialCardByIndexZodSchema = z.object({
  body: z.object({
    testimonialCard: testimonialCardSchema,
  }),
});

export const TikTokClientSaysSectionValidation = {
  createTikTokClientSaysSectionZodSchema,
  updateTikTokClientSaysSectionZodSchema,
  updateTestimonialCardsZodSchema,
  addTestimonialCardZodSchema,
  updateTestimonialCardByIndexZodSchema,
};
