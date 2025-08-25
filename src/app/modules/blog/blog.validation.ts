import { z } from "zod";

const createBlogZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    excerpt: z.string().optional(),
    content: z.string({
      required_error: "Content is required",
    }).min(1, "Content cannot be empty"),
    status: z.enum(['draft', 'published']).default('draft'),
    category: z.string({
      required_error: "Category is required",
    }).min(1, "Category cannot be empty"),
    featuredImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    slug: z.string({
      required_error: "Slug is required",
    }).min(1, "Slug cannot be empty"),
  }),
});

const updateBlogZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    excerpt: z.string().optional(),
    content: z.string().min(1, "Content cannot be empty").optional(),
    status: z.enum(['draft', 'published']).optional(),
    category: z.string().min(1, "Category cannot be empty").optional(),
    featuredImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    slug: z.string().min(1, "Slug cannot be empty").optional(),
  }),
});

const getBlogBySlugZodSchema = z.object({
  params: z.object({
    slug: z.string({
      required_error: "Slug is required",
    }).min(1, "Slug cannot be empty"),
  }),
});

export const BlogValidation = {
  createBlogZodSchema,
  updateBlogZodSchema,
  getBlogBySlugZodSchema, // Add this if you want to validate slug format
};
