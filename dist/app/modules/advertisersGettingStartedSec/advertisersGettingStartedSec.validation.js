"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisersGettingStartedSecValidation = void 0;
const zod_1 = require("zod");
const processStepSchema = zod_1.z.object({
    stepNumber: zod_1.z.string({
        required_error: "Step number is required",
    }).min(1, "Step number cannot be empty"),
    icon: zod_1.z.string({
        required_error: "Step icon is required",
    }).min(1, "Step icon cannot be empty"),
    title: zod_1.z.string({
        required_error: "Step title is required",
    }).min(1, "Step title cannot be empty"),
    description: zod_1.z.string({
        required_error: "Step description is required",
    }).min(1, "Step description cannot be empty"),
    duration: zod_1.z.string({
        required_error: "Step duration is required",
    }).min(1, "Step duration cannot be empty"),
});
const createAdvertisersGettingStartedSecZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        steps: zod_1.z.array(processStepSchema).min(1, "At least one process step is required").max(10, "Maximum 10 process steps allowed"),
    }),
});
const updateAdvertisersGettingStartedSecZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        steps: zod_1.z.array(processStepSchema).min(1, "At least one process step is required").max(10, "Maximum 10 process steps allowed").optional(),
    }),
});
const updateStepsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        steps: zod_1.z.array(processStepSchema).min(1, "At least one process step is required").max(10, "Maximum 10 process steps allowed"),
    }),
});
exports.AdvertisersGettingStartedSecValidation = {
    createAdvertisersGettingStartedSecZodSchema,
    updateAdvertisersGettingStartedSecZodSchema,
    updateStepsZodSchema,
};
