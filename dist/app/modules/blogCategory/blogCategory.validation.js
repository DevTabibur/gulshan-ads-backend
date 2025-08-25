"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogCategoryValidation = void 0;
const zod_1 = require("zod");
const createBlogCategoryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
        }).min(1, "Name cannot be empty"),
        description: zod_1.z.string().optional(),
        status: zod_1.z.enum(['active', 'inactive']).default('active'),
    }),
});
const updateBlogCategoryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name cannot be empty").optional(),
        description: zod_1.z.string().optional(),
        status: zod_1.z.enum(['active', 'inactive']).optional(),
    }),
});
exports.BlogCategoryValidation = {
    createBlogCategoryZodSchema,
    updateBlogCategoryZodSchema,
};
