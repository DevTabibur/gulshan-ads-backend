import { z } from "zod";

const trustedCompanySchema = z.object({
  abbreviation: z.string({
    required_error: "Company abbreviation is required",
  }).min(1, "Abbreviation cannot be empty").max(10, "Abbreviation must be 10 characters or less"),
  fullName: z.string({
    required_error: "Company full name is required",
  }).min(1, "Full name cannot be empty"),
  iconColor: z.string({
    required_error: "Icon color is required",
  }).min(1, "Icon color cannot be empty"),
});

const statisticSchema = z.object({
  value: z.string({
    required_error: "Statistic value is required",
  }).min(1, "Value cannot be empty"),
  label: z.string({
    required_error: "Statistic label is required",
  }).min(1, "Label cannot be empty"),
  color: z.string({
    required_error: "Statistic color is required",
  }).min(1, "Color cannot be empty"),
});

const featuredTestimonialSchema = z.object({
  quote: z.string({
    required_error: "Testimonial quote is required",
  }).min(1, "Quote cannot be empty"),
  authorName: z.string({
    required_error: "Author name is required",
  }).min(1, "Author name cannot be empty"),
  authorPosition: z.string({
    required_error: "Author position is required",
  }).min(1, "Author position cannot be empty"),
  authorCompany: z.string({
    required_error: "Author company is required",
  }).min(1, "Author company cannot be empty"),
  authorInitials: z.string({
    required_error: "Author initials are required",
  }).min(1, "Author initials cannot be empty").max(5, "Author initials must be 5 characters or less"),
});

const createTrustSectionZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }).min(1, "Title cannot be empty"),
    subtitle: z.string({
      required_error: "Subtitle is required",
    }).min(1, "Subtitle cannot be empty"),
    trustedCompanies: z.array(trustedCompanySchema).min(1, "At least one trusted company is required").max(20, "Maximum 20 trusted companies allowed"),
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
    featuredTestimonial: featuredTestimonialSchema,
  }),
});

const updateTrustSectionZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    subtitle: z.string().min(1, "Subtitle cannot be empty").optional(),
    trustedCompanies: z.array(trustedCompanySchema).min(1, "At least one trusted company is required").max(20, "Maximum 20 trusted companies allowed").optional(),
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed").optional(),
    featuredTestimonial: featuredTestimonialSchema.optional(),
  }),
});

const updateTrustedCompaniesZodSchema = z.object({
  body: z.object({
    trustedCompanies: z.array(trustedCompanySchema).min(1, "At least one trusted company is required").max(20, "Maximum 20 trusted companies allowed"),
  }),
});

const updateStatisticsZodSchema = z.object({
  body: z.object({
    statistics: z.array(statisticSchema).min(1, "At least one statistic is required").max(10, "Maximum 10 statistics allowed"),
  }),
});

const updateFeaturedTestimonialZodSchema = z.object({
  body: z.object({
    featuredTestimonial: featuredTestimonialSchema,
  }),
});

export const TrustSectionValidation = {
  createTrustSectionZodSchema,
  updateTrustSectionZodSchema,
  updateTrustedCompaniesZodSchema,
  updateStatisticsZodSchema,
  updateFeaturedTestimonialZodSchema,
};
