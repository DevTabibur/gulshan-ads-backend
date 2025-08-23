import { z } from "zod";

const processStepSchema = z.object({
  stepNumber: z.string({
    required_error: "Step number is required",
  }).min(1, "Step number cannot be empty"),
  icon: z.string({
    required_error: "Step icon is required",
  }).min(1, "Step icon cannot be empty"),
  title: z.string({
    required_error: "Step title is required",
  }).min(1, "Step title cannot be empty"),
  description: z.string({
    required_error: "Step description is required",
  }).min(1, "Step description cannot be empty"),
  duration: z.string({
    required_error: "Step duration is required",
  }).min(1, "Step duration cannot be empty"),
});

const createAdvertisersGettingStartedSecZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    steps: z.array(processStepSchema).min(1, "At least one process step is required").max(10, "Maximum 10 process steps allowed"),
  }),
});

const updateAdvertisersGettingStartedSecZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    steps: z.array(processStepSchema).min(1, "At least one process step is required").max(10, "Maximum 10 process steps allowed").optional(),
  }),
});

const updateStepsZodSchema = z.object({
  body: z.object({
    steps: z.array(processStepSchema).min(1, "At least one process step is required").max(10, "Maximum 10 process steps allowed"),
  }),
});

export const AdvertisersGettingStartedSecValidation = {
  createAdvertisersGettingStartedSecZodSchema,
  updateAdvertisersGettingStartedSecZodSchema,
  updateStepsZodSchema,
};
