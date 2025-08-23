import { z } from "zod";

const createHeroSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
  }),
});

const updateHeroSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
  }),
});

export const HeroSectionValidation = {
  createHeroSectionZodSchema,
  updateHeroSectionZodSchema,
};
