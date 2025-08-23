"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroSectionValidation = void 0;
const zod_1 = require("zod");
const createHeroSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
    }),
});
const updateHeroSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
    }),
});
exports.HeroSectionValidation = {
    createHeroSectionZodSchema,
    updateHeroSectionZodSchema,
};
