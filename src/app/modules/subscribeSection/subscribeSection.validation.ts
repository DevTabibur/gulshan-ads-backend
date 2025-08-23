import { z } from "zod";

const createSubscribeSectionZodSchema = z.object({
  body: z.object({
    icon: z.string({
      required_error: "Icon is required",
    }).min(1, "Icon cannot be empty"),
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    emailPlaceholder: z.string({
      required_error: "Email placeholder is required",
    }).min(1, "Email placeholder cannot be empty"),
    subscribeButtonText: z.string({
      required_error: "Subscribe button text is required",
    }).min(1, "Subscribe button text cannot be empty"),
    legalDisclaimer: z.string({
      required_error: "Legal disclaimer is required",
    }).min(1, "Legal disclaimer cannot be empty"),
  }),
});

const updateSubscribeSectionZodSchema = z.object({
  body: z.object({
    icon: z.string().min(1, "Icon cannot be empty").optional(),
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    emailPlaceholder: z.string().min(1, "Email placeholder cannot be empty").optional(),
    subscribeButtonText: z.string().min(1, "Subscribe button text cannot be empty").optional(),
    legalDisclaimer: z.string().min(1, "Legal disclaimer cannot be empty").optional(),
  }),
});

export const SubscribeSectionValidation = {
  createSubscribeSectionZodSchema,
  updateSubscribeSectionZodSchema,
};
