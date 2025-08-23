"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrustSectionValidation = void 0;
const zod_1 = require("zod");
const trustedCompanySchema = zod_1.z.object({
    abbreviation: zod_1.z.string({
        required_error: "Company abbreviation is required",
    }).min(1, "Abbreviation cannot be empty").max(10, "Abbreviation must be 10 characters or less"),
    fullName: zod_1.z.string({
        required_error: "Company full name is required",
    }).min(1, "Full name cannot be empty"),
    iconColor: zod_1.z.string({
        required_error: "Icon color is required",
    }).min(1, "Icon color cannot be empty"),
});
const statisticSchema = zod_1.z.object({
    value: zod_1.z.string({
        required_error: "Statistic value is required",
    }).min(1, "Value cannot be empty"),
    label: zod_1.z.string({
        required_error: "Statistic label is required",
    }).min(1, "Label cannot be empty"),
    color: zod_1.z.string({
        required_error: "Statistic color is required",
    }).min(1, "Color cannot be empty"),
});
const featuredTestimonialSchema = zod_1.z.object({
    quote: zod_1.z.string({
        required_error: "Testimonial quote is required",
    }).min(1, "Quote cannot be empty"),
    authorName: zod_1.z.string({
        required_error: "Author name is required",
    }).min(1, "Author name cannot be empty"),
    authorPosition: zod_1.z.string({
        required_error: "Author position is required",
    }).min(1, "Author position cannot be empty"),
    authorCompany: zod_1.z.string({
        required_error: "Author company is required",
    }).min(1, "Author company cannot be empty"),
    authorInitials: zod_1.z.string({
        required_error: "Author initials are required",
    }).min(1, "Author initials cannot be empty").max(5, "Author initials must be 5 characters or less"),
});
const createTrustSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
        }).min(1, "Title cannot be empty"),
        subtitle: zod_1.z.string({
            required_error: "Subtitle is required",
        }).min(1, "Subtitle cannot be empty"),
        trustedCompanies: zod_1.z.array(trustedCompanySchema).min(1, "At least one trusted company is required").max(20, "Maximum 20 trusted companies allowed"),
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
        featuredTestimonial: featuredTestimonialSchema,
    }),
});
const updateTrustSectionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title cannot be empty").optional(),
        subtitle: zod_1.z.string().min(1, "Subtitle cannot be empty").optional(),
        trustedCompanies: zod_1.z.array(trustedCompanySchema).min(1, "At least one trusted company is required").max(20, "Maximum 20 trusted companies allowed").optional(),
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed").optional(),
        featuredTestimonial: featuredTestimonialSchema.optional(),
    }),
});
const updateTrustedCompaniesZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        trustedCompanies: zod_1.z.array(trustedCompanySchema).min(1, "At least one trusted company is required").max(20, "Maximum 20 trusted companies allowed"),
    }),
});
const updateStatisticsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        statistics: zod_1.z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
    }),
});
const updateFeaturedTestimonialZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        featuredTestimonial: featuredTestimonialSchema,
    }),
});
exports.TrustSectionValidation = {
    createTrustSectionZodSchema,
    updateTrustSectionZodSchema,
    updateTrustedCompaniesZodSchema,
    updateStatisticsZodSchema,
    updateFeaturedTestimonialZodSchema,
};
