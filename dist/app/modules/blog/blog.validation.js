"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValidation = void 0;
const zod_1 = require("zod");
const createBlogZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        excerpt: zod_1.z.string().optional(),
        content: zod_1.z.string({
            required_error: "Content is required",
        }).min(1, "Content cannot be empty"),
        status: zod_1.z.enum(['draft', 'published']).default('draft'),
        category: zod_1.z.string({
            required_error: "Category is required",
        }).min(1, "Category cannot be empty"),
        featuredImage: zod_1.z.string().optional(),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
        slug: zod_1.z.string({
            required_error: "Slug is required",
        }).min(1, "Slug cannot be empty"),
    }),
});
const updateBlogZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        excerpt: zod_1.z.string().optional(),
        content: zod_1.z.string().min(1, "Content cannot be empty").optional(),
        status: zod_1.z.enum(['draft', 'published']).optional(),
        category: zod_1.z.string().min(1, "Category cannot be empty").optional(),
        featuredImage: zod_1.z.string().optional(),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
        slug: zod_1.z.string().min(1, "Slug cannot be empty").optional(),
    }),
});
const getBlogBySlugZodSchema = zod_1.z.object({
    params: zod_1.z.object({
        slug: zod_1.z.string({
            required_error: "Slug is required",
        }).min(1, "Slug cannot be empty"),
    }),
});
exports.BlogValidation = {
    createBlogZodSchema,
    updateBlogZodSchema,
    getBlogBySlugZodSchema, // Add this if you want to validate slug format
};
