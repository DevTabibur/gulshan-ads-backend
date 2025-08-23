import { z } from "zod";

const faqItemSchema = z.object({
  question: z.string({
    required_error: "Question is required",
  }).min(1, "Question cannot be empty"),
  answer: z.string({
    required_error: "Answer is required",
  }).min(1, "Answer cannot be empty"),
});

const createFAQSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    faqItems: z.array(faqItemSchema).min(1, "At least one FAQ item is required").max(50, "Maximum 50 FAQ items allowed"),
  }),
});

const updateFAQSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    faqItems: z.array(faqItemSchema).min(1, "At least one FAQ item is required").max(50, "Maximum 50 FAQ items allowed").optional(),
  }),
});

const updateFAQItemsZodSchema = z.object({
  body: z.object({
    faqItems: z.array(faqItemSchema).min(1, "At least one FAQ item is required").max(50, "Maximum 50 FAQ items allowed"),
  }),
});

export const FAQSectionValidation = {
  createFAQSectionZodSchema,
  updateFAQSectionZodSchema,
  updateFAQItemsZodSchema,
};
