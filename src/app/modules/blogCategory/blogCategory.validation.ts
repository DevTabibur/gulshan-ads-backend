import { z } from "zod";

const createBlogCategoryZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }).min(1, "Name cannot be empty"),
    description: z.string().optional(),
    status: z.enum(['active', 'inactive']).default('active'),
  }),
});

const updateBlogCategoryZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name cannot be empty").optional(),
    description: z.string().optional(),
    status: z.enum(['active', 'inactive']).optional(),
  }),
});

export const BlogCategoryValidation = {
  createBlogCategoryZodSchema,
  updateBlogCategoryZodSchema,
};
