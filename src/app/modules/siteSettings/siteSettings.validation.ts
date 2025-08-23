import { z } from "zod";

const contactInfoSchema = z.object({
  email: z.string({
    required_error: "Email is required",
  }).email("Invalid email format"),
  phone: z.string({
    required_error: "Phone is required",
  }).min(1, "Phone cannot be empty"),
  address: z.string({
    required_error: "Address is required",
  }).min(1, "Address cannot be empty"),
  workingHours: z.string({
    required_error: "Working hours is required",
  }).min(1, "Working hours cannot be empty"),
});

const socialMediaSchema = z.object({
  facebook: z.string().url("Invalid Facebook URL").optional(),
  twitter: z.string().url("Invalid Twitter URL").optional(),
  instagram: z.string().url("Invalid Instagram URL").optional(),
  linkedin: z.string().url("Invalid LinkedIn URL").optional(),
  youtube: z.string().url("Invalid YouTube URL").optional(),
  tiktok: z.string().url("Invalid TikTok URL").optional(),
  telegram: z.string().url("Invalid Telegram URL").optional(),
});

const seoSettingsSchema = z.object({
  metaTitle: z.string({
    required_error: "Meta title is required",
  }).min(1, "Meta title cannot be empty").max(60, "Meta title must be less than 60 characters"),
  metaDescription: z.string({
    required_error: "Meta description is required",
  }).min(1, "Meta description cannot be empty").max(160, "Meta description must be less than 160 characters"),
  keywords: z.string({
    required_error: "Keywords are required",
  }).min(1, "Keywords cannot be empty"),
  ogImage: z.string({
    required_error: "OG image is required",
  }).min(1, "OG image cannot be empty"),
  favicon: z.string({
    required_error: "Favicon is required",
  }).min(1, "Favicon cannot be empty"),
});

const footerLinkSchema = z.object({
  title: z.string({
    required_error: "Footer link title is required",
  }).min(1, "Footer link title cannot be empty"),
  url: z.string({
    required_error: "Footer link URL is required",
  }).url("Invalid footer link URL"),
});

const footerSettingsSchema = z.object({
  copyrightText: z.string({
    required_error: "Copyright text is required",
  }).min(1, "Copyright text cannot be empty"),
  footerDescription: z.string({
    required_error: "Footer description is required",
  }).min(1, "Footer description cannot be empty"),
  footerLinks: z.array(footerLinkSchema).max(20, "Maximum 20 footer links allowed"),
});

const createSiteSettingsZodSchema = z.object({
  body: z.object({
    // Basic Site Info
    siteName: z.string({
      required_error: "Site name is required",
    }).min(1, "Site name cannot be empty"),
    siteTagline: z.string({
      required_error: "Site tagline is required",
    }).min(1, "Site tagline cannot be empty"),
    logo: z.string({
      required_error: "Logo is required",
    }).min(1, "Logo cannot be empty"),
    logoDark: z.string().optional(),
    
    // Contact Information
    contactInfo: contactInfoSchema,
    
    // Social Media Links
    socialMedia: socialMediaSchema,
    
    // SEO Settings
    seoSettings: seoSettingsSchema,
    
    // Footer Settings
    footerSettings: footerSettingsSchema,
    
    // Additional Settings
    primaryColor: z.string({
      required_error: "Primary color is required",
    }).min(1, "Primary color cannot be empty"),
    secondaryColor: z.string({
      required_error: "Secondary color is required",
    }).min(1, "Secondary color cannot be empty"),
    currency: z.string({
      required_error: "Currency is required",
    }).min(1, "Currency cannot be empty"),
    timezone: z.string({
      required_error: "Timezone is required",
    }).min(1, "Timezone cannot be empty"),
    language: z.string({
      required_error: "Language is required",
    }).min(1, "Language cannot be empty"),
    
    // Business Info
    businessName: z.string({
      required_error: "Business name is required",
    }).min(1, "Business name cannot be empty"),
    businessDescription: z.string({
      required_error: "Business description is required",
    }).min(1, "Business description cannot be empty"),
    businessType: z.string({
      required_error: "Business type is required",
    }).min(1, "Business type cannot be empty"),
    foundedYear: z.number({
      required_error: "Founded year is required",
    }).min(1900, "Founded year must be at least 1900").max(new Date().getFullYear(), "Founded year cannot be in the future"),
    
    // Legal Info
    privacyPolicyUrl: z.string({
      required_error: "Privacy policy URL is required",
    }).url("Invalid privacy policy URL"),
    termsOfServiceUrl: z.string({
      required_error: "Terms of service URL is required",
    }).url("Invalid terms of service URL"),
    cookiePolicyUrl: z.string({
      required_error: "Cookie policy URL is required",
    }).url("Invalid cookie policy URL"),
    
    // Analytics & Tracking
    googleAnalyticsId: z.string().optional(),
    facebookPixelId: z.string().optional(),
    tiktokPixelId: z.string().optional(),
    
    // Feature Flags
    enableNewsletter: z.boolean().default(true),
    enableContactForm: z.boolean().default(true),
    enableBlog: z.boolean().default(false),
    enableTestimonials: z.boolean().default(true),
    
    // Maintenance Mode
    maintenanceMode: z.boolean().default(false),
    maintenanceMessage: z.string().default("Site is under maintenance. Please check back later."),
  }),
});

const updateSiteSettingsZodSchema = z.object({
  body: z.object({
    // Basic Site Info
    siteName: z.string().min(1, "Site name cannot be empty").optional(),
    siteTagline: z.string().min(1, "Site tagline cannot be empty").optional(),
    logo: z.string().min(1, "Logo cannot be empty").optional(),
    logoDark: z.string().optional(),
    
    // Contact Information
    contactInfo: contactInfoSchema.partial().optional(),
    
    // Social Media Links
    socialMedia: socialMediaSchema.partial().optional(),
    
    // SEO Settings
    seoSettings: seoSettingsSchema.partial().optional(),
    
    // Footer Settings
    footerSettings: footerSettingsSchema.partial().optional(),
    
    // Additional Settings
    primaryColor: z.string().min(1, "Primary color cannot be empty").optional(),
    secondaryColor: z.string().min(1, "Secondary color cannot be empty").optional(),
    currency: z.string().min(1, "Currency cannot be empty").optional(),
    timezone: z.string().min(1, "Timezone cannot be empty").optional(),
    language: z.string().min(1, "Language cannot be empty").optional(),
    
    // Business Info
    businessName: z.string().min(1, "Business name cannot be empty").optional(),
    businessDescription: z.string().min(1, "Business description cannot be empty").optional(),
    businessType: z.string().min(1, "Business type cannot be empty").optional(),
    foundedYear: z.number().min(1900, "Founded year must be at least 1900").max(new Date().getFullYear(), "Founded year cannot be in the future").optional(),
    
    // Legal Info
    privacyPolicyUrl: z.string().url("Invalid privacy policy URL").optional(),
    termsOfServiceUrl: z.string().url("Invalid terms of service URL").optional(),
    cookiePolicyUrl: z.string().url("Invalid cookie policy URL").optional(),
    
    // Analytics & Tracking
    googleAnalyticsId: z.string().optional(),
    facebookPixelId: z.string().optional(),
    tiktokPixelId: z.string().optional(),
    
    // Feature Flags
    enableNewsletter: z.boolean().optional(),
    enableContactForm: z.boolean().optional(),
    enableBlog: z.boolean().optional(),
    enableTestimonials: z.boolean().optional(),
    
    // Maintenance Mode
    maintenanceMode: z.boolean().optional(),
    maintenanceMessage: z.string().optional(),
  }),
});

const updateBasicSiteInfoZodSchema = z.object({
  body: z.object({
    siteName: z.string().min(1, "Site name cannot be empty").optional(),
    siteTagline: z.string().min(1, "Site tagline cannot be empty").optional(),
    logo: z.string().min(1, "Logo cannot be empty").optional(),
    logoDark: z.string().optional(),
  }),
});

const updateContactInfoZodSchema = z.object({
  body: contactInfoSchema.partial(),
});

const updateSocialMediaZodSchema = z.object({
  body: socialMediaSchema.partial(),
});

const updateSeoSettingsZodSchema = z.object({
  body: seoSettingsSchema.partial(),
});

const updateFooterSettingsZodSchema = z.object({
  body: footerSettingsSchema.partial(),
});

const updateBusinessInfoZodSchema = z.object({
  body: z.object({
    businessName: z.string().min(1, "Business name cannot be empty").optional(),
    businessDescription: z.string().min(1, "Business description cannot be empty").optional(),
    businessType: z.string().min(1, "Business type cannot be empty").optional(),
    foundedYear: z.number().min(1900, "Founded year must be at least 1900").max(new Date().getFullYear(), "Founded year cannot be in the future").optional(),
  }),
});

const updateLegalInfoZodSchema = z.object({
  body: z.object({
    privacyPolicyUrl: z.string().url("Invalid privacy policy URL").optional(),
    termsOfServiceUrl: z.string().url("Invalid terms of service URL").optional(),
    cookiePolicyUrl: z.string().url("Invalid cookie policy URL").optional(),
  }),
});

const updateAnalyticsZodSchema = z.object({
  body: z.object({
    googleAnalyticsId: z.string().optional(),
    facebookPixelId: z.string().optional(),
    tiktokPixelId: z.string().optional(),
  }),
});

const updateFeatureFlagsZodSchema = z.object({
  body: z.object({
    enableNewsletter: z.boolean().optional(),
    enableContactForm: z.boolean().optional(),
    enableBlog: z.boolean().optional(),
    enableTestimonials: z.boolean().optional(),
  }),
});

const updateMaintenanceModeZodSchema = z.object({
  body: z.object({
    maintenanceMode: z.boolean().optional(),
    maintenanceMessage: z.string().optional(),
  }),
});

export const SiteSettingsValidation = {
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
