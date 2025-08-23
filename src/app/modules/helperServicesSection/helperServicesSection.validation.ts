import { z } from "zod";

const serviceCardSchema = z.object({
  title: z.string({
    required_error: "Service title is required",
  }).min(1, "Service title cannot be empty"),
  subtitle: z.string({
    required_error: "Service subtitle is required",
  }).min(1, "Service subtitle cannot be empty"),
  rating: z.number({
    required_error: "Service rating is required",
  }).min(0, "Rating must be 0 or greater").max(10, "Rating must be 10 or less"),
  stars: z.number({
    required_error: "Service stars is required",
  }).min(0, "Stars must be 0 or greater").max(5, "Stars must be 5 or less"),
});

const createHelperServicesSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    icon: z.string({
      required_error: "Icon is required",
    }).min(1, "Icon cannot be empty"),
    description: z.string({
      required_error: "Description is required",
    }).min(1, "Description cannot be empty"),
    recommendedLabel: z.string({
      required_error: "Recommended label is required",
    }).min(1, "Recommended label cannot be empty"),
    recommendedCount: z.number({
      required_error: "Recommended count is required",
    }).min(0, "Recommended count must be 0 or greater"),
    currentlyUsedLabel: z.string({
      required_error: "Currently used label is required",
    }).min(1, "Currently used label cannot be empty"),
    currentlyUsedCount: z.number({
      required_error: "Currently used count is required",
    }).min(0, "Currently used count must be 0 or greater"),
    services: z.array(serviceCardSchema).min(1, "At least one service is required").max(20, "Maximum 20 services allowed"),
  }),
});

const updateHelperServicesSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    icon: z.string().min(1, "Icon cannot be empty").optional(),
    description: z.string().min(1, "Description cannot be empty").optional(),
    recommendedLabel: z.string().min(1, "Recommended label cannot be empty").optional(),
    recommendedCount: z.number().min(0, "Recommended count must be 0 or greater").optional(),
    currentlyUsedLabel: z.string().min(1, "Currently used label cannot be empty").optional(),
    currentlyUsedCount: z.number().min(0, "Currently used count must be 0 or greater").optional(),
    services: z.array(serviceCardSchema).min(1, "At least one service is required").max(20, "Maximum 20 services allowed").optional(),
  }),
});

const updateServicesZodSchema = z.object({
  body: z.object({
    services: z.array(serviceCardSchema).min(1, "At least one service is required").max(20, "Maximum 20 services allowed"),
  }),
});

export const HelperServicesSectionValidation = {
  createHelperServicesSectionZodSchema,
  updateHelperServicesSectionZodSchema,
  updateServicesZodSchema,
};
