"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteSettingsValidation = void 0;
const zod_1 = require("zod");
const contactInfoSchema = zod_1.z.object({
    email: zod_1.z.string({
        required_error: "Email is required",
    }).email("Invalid email format"),
    phone: zod_1.z.string({
        required_error: "Phone is required",
    }).min(1, "Phone cannot be empty"),
    address: zod_1.z.string({
        required_error: "Address is required",
    }).min(1, "Address cannot be empty"),
    workingHours: zod_1.z.string({
        required_error: "Working hours is required",
    }).min(1, "Working hours cannot be empty"),
});
const socialMediaSchema = zod_1.z.object({
    facebook: zod_1.z.string().url("Invalid Facebook URL").optional(),
    twitter: zod_1.z.string().url("Invalid Twitter URL").optional(),
    instagram: zod_1.z.string().url("Invalid Instagram URL").optional(),
    linkedin: zod_1.z.string().url("Invalid LinkedIn URL").optional(),
    youtube: zod_1.z.string().url("Invalid YouTube URL").optional(),
    tiktok: zod_1.z.string().url("Invalid TikTok URL").optional(),
    telegram: zod_1.z.string().url("Invalid Telegram URL").optional(),
});
const seoSettingsSchema = zod_1.z.object({
    metaTitle: zod_1.z.string({
        required_error: "Meta title is required",
    }).min(1, "Meta title cannot be empty").max(60, "Meta title must be less than 60 characters"),
    metaDescription: zod_1.z.string({
        required_error: "Meta description is required",
    }).min(1, "Meta description cannot be empty").max(160, "Meta description must be less than 160 characters"),
    keywords: zod_1.z.string({
        required_error: "Keywords are required",
    }).min(1, "Keywords cannot be empty"),
    ogImage: zod_1.z.string({
        required_error: "OG image is required",
    }).min(1, "OG image cannot be empty"),
    favicon: zod_1.z.string({
        required_error: "Favicon is required",
    }).min(1, "Favicon cannot be empty"),
});
const footerLinkSchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: "Footer link title is required",
    }).min(1, "Footer link title cannot be empty"),
    url: zod_1.z.string({
        required_error: "Footer link URL is required",
    }).url("Invalid footer link URL"),
});
const footerSettingsSchema = zod_1.z.object({
    copyrightText: zod_1.z.string({
        required_error: "Copyright text is required",
    }).min(1, "Copyright text cannot be empty"),
    footerDescription: zod_1.z.string({
        required_error: "Footer description is required",
    }).min(1, "Footer description cannot be empty"),
    footerLinks: zod_1.z.array(footerLinkSchema).max(20, "Maximum 20 footer links allowed"),
});
const createSiteSettingsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        // Basic Site Info
        siteName: zod_1.z.string({
            required_error: "Site name is required",
        }).min(1, "Site name cannot be empty"),
        siteTagline: zod_1.z.string({
            required_error: "Site tagline is required",
        }).min(1, "Site tagline cannot be empty"),
        logo: zod_1.z.string({
            required_error: "Logo is required",
        }).min(1, "Logo cannot be empty"),
        logoDark: zod_1.z.string().optional(),
        // Contact Information
        contactInfo: contactInfoSchema,
        // Social Media Links
        socialMedia: socialMediaSchema,
        // SEO Settings
        seoSettings: seoSettingsSchema,
        // Footer Settings
        footerSettings: footerSettingsSchema,
        // Additional Settings
        primaryColor: zod_1.z.string({
            required_error: "Primary color is required",
        }).min(1, "Primary color cannot be empty"),
        secondaryColor: zod_1.z.string({
            required_error: "Secondary color is required",
        }).min(1, "Secondary color cannot be empty"),
        currency: zod_1.z.string({
            required_error: "Currency is required",
        }).min(1, "Currency cannot be empty"),
        timezone: zod_1.z.string({
            required_error: "Timezone is required",
        }).min(1, "Timezone cannot be empty"),
        language: zod_1.z.string({
            required_error: "Language is required",
        }).min(1, "Language cannot be empty"),
        // Business Info
        businessName: zod_1.z.string({
            required_error: "Business name is required",
        }).min(1, "Business name cannot be empty"),
        businessDescription: zod_1.z.string({
            required_error: "Business description is required",
        }).min(1, "Business description cannot be empty"),
        businessType: zod_1.z.string({
            required_error: "Business type is required",
        }).min(1, "Business type cannot be empty"),
        foundedYear: zod_1.z.number({
            required_error: "Founded year is required",
        }).min(1900, "Founded year must be at least 1900").max(new Date().getFullYear(), "Founded year cannot be in the future"),
        // Legal Info
        privacyPolicyUrl: zod_1.z.string({
            required_error: "Privacy policy URL is required",
        }).url("Invalid privacy policy URL"),
        termsOfServiceUrl: zod_1.z.string({
            required_error: "Terms of service URL is required",
        }).url("Invalid terms of service URL"),
        cookiePolicyUrl: zod_1.z.string({
            required_error: "Cookie policy URL is required",
        }).url("Invalid cookie policy URL"),
        // Analytics & Tracking
        googleAnalyticsId: zod_1.z.string().optional(),
        facebookPixelId: zod_1.z.string().optional(),
        tiktokPixelId: zod_1.z.string().optional(),
        // Feature Flags
        enableNewsletter: zod_1.z.boolean().default(true),
        enableContactForm: zod_1.z.boolean().default(true),
        enableBlog: zod_1.z.boolean().default(false),
        enableTestimonials: zod_1.z.boolean().default(true),
        // Maintenance Mode
        maintenanceMode: zod_1.z.boolean().default(false),
        maintenanceMessage: zod_1.z.string().default("Site is under maintenance. Please check back later."),
    }),
});
const updateSiteSettingsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        // Basic Site Info
        siteName: zod_1.z.string().min(1, "Site name cannot be empty").optional(),
        siteTagline: zod_1.z.string().min(1, "Site tagline cannot be empty").optional(),
        logo: zod_1.z.string().min(1, "Logo cannot be empty").optional(),
        logoDark: zod_1.z.string().optional(),
        // Contact Information
        contactInfo: contactInfoSchema.partial().optional(),
        // Social Media Links
        socialMedia: socialMediaSchema.partial().optional(),
        // SEO Settings
        seoSettings: seoSettingsSchema.partial().optional(),
        // Footer Settings
        footerSettings: footerSettingsSchema.partial().optional(),
        // Additional Settings
        primaryColor: zod_1.z.string().min(1, "Primary color cannot be empty").optional(),
        secondaryColor: zod_1.z.string().min(1, "Secondary color cannot be empty").optional(),
        currency: zod_1.z.string().min(1, "Currency cannot be empty").optional(),
        timezone: zod_1.z.string().min(1, "Timezone cannot be empty").optional(),
        language: zod_1.z.string().min(1, "Language cannot be empty").optional(),
        // Business Info
        businessName: zod_1.z.string().min(1, "Business name cannot be empty").optional(),
        businessDescription: zod_1.z.string().min(1, "Business description cannot be empty").optional(),
        businessType: zod_1.z.string().min(1, "Business type cannot be empty").optional(),
        foundedYear: zod_1.z.number().min(1900, "Founded year must be at least 1900").max(new Date().getFullYear(), "Founded year cannot be in the future").optional(),
        // Legal Info
        privacyPolicyUrl: zod_1.z.string().url("Invalid privacy policy URL").optional(),
        termsOfServiceUrl: zod_1.z.string().url("Invalid terms of service URL").optional(),
        cookiePolicyUrl: zod_1.z.string().url("Invalid cookie policy URL").optional(),
        // Analytics & Tracking
        googleAnalyticsId: zod_1.z.string().optional(),
        facebookPixelId: zod_1.z.string().optional(),
        tiktokPixelId: zod_1.z.string().optional(),
        // Feature Flags
        enableNewsletter: zod_1.z.boolean().optional(),
        enableContactForm: zod_1.z.boolean().optional(),
        enableBlog: zod_1.z.boolean().optional(),
        enableTestimonials: zod_1.z.boolean().optional(),
        // Maintenance Mode
        maintenanceMode: zod_1.z.boolean().optional(),
        maintenanceMessage: zod_1.z.string().optional(),
    }),
});
const updateBasicSiteInfoZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        siteName: zod_1.z.string().min(1, "Site name cannot be empty").optional(),
        siteTagline: zod_1.z.string().min(1, "Site tagline cannot be empty").optional(),
        logo: zod_1.z.string().min(1, "Logo cannot be empty").optional(),
        logoDark: zod_1.z.string().optional(),
    }),
});
const updateContactInfoZodSchema = zod_1.z.object({
    body: contactInfoSchema.partial(),
});
const updateSocialMediaZodSchema = zod_1.z.object({
    body: socialMediaSchema.partial(),
});
const updateSeoSettingsZodSchema = zod_1.z.object({
    body: seoSettingsSchema.partial(),
});
const updateFooterSettingsZodSchema = zod_1.z.object({
    body: footerSettingsSchema.partial(),
});
const updateBusinessInfoZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        businessName: zod_1.z.string().min(1, "Business name cannot be empty").optional(),
        businessDescription: zod_1.z.string().min(1, "Business description cannot be empty").optional(),
        businessType: zod_1.z.string().min(1, "Business type cannot be empty").optional(),
        foundedYear: zod_1.z.number().min(1900, "Founded year must be at least 1900").max(new Date().getFullYear(), "Founded year cannot be in the future").optional(),
    }),
});
const updateLegalInfoZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        privacyPolicyUrl: zod_1.z.string().url("Invalid privacy policy URL").optional(),
        termsOfServiceUrl: zod_1.z.string().url("Invalid terms of service URL").optional(),
        cookiePolicyUrl: zod_1.z.string().url("Invalid cookie policy URL").optional(),
    }),
});
const updateAnalyticsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        googleAnalyticsId: zod_1.z.string().optional(),
        facebookPixelId: zod_1.z.string().optional(),
        tiktokPixelId: zod_1.z.string().optional(),
    }),
});
const updateFeatureFlagsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        enableNewsletter: zod_1.z.boolean().optional(),
        enableContactForm: zod_1.z.boolean().optional(),
        enableBlog: zod_1.z.boolean().optional(),
        enableTestimonials: zod_1.z.boolean().optional(),
    }),
});
const updateMaintenanceModeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        maintenanceMode: zod_1.z.boolean().optional(),
        maintenanceMessage: zod_1.z.string().optional(),
    }),
});
exports.SiteSettingsValidation = {
    createSiteSettingsZodSchema,
    updateSiteSettingsZodSchema,
    updateBasicSiteInfoZodSchema,
    updateContactInfoZodSchema,
    updateSocialMediaZodSchema,
    updateSeoSettingsZodSchema,
    updateFooterSettingsZodSchema,
    updateBusinessInfoZodSchema,
    updateLegalInfoZodSchema,
    updateAnalyticsZodSchema,
    updateFeatureFlagsZodSchema,
    updateMaintenanceModeZodSchema,
};
