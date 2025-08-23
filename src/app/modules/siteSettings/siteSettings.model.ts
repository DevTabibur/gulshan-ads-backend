import { Model, Schema, model } from "mongoose";
import { ISiteSettings } from "./siteSettings.interface";

type SiteSettingsModel = Model<ISiteSettings, object>;

const contactInfoSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  workingHours: {
    type: String,
    required: true,
  },
});

const socialMediaSchema = new Schema({
  facebook: String,
  twitter: String,
  instagram: String,
  linkedin: String,
  youtube: String,
  tiktok: String,
  telegram: String,
});

const seoSettingsSchema = new Schema({
  metaTitle: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
    required: true,
  },
  ogImage: {
    type: String,
    required: true,
  },
  favicon: {
    type: String,
    required: true,
  },
});

const footerLinkSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const footerSettingsSchema = new Schema({
  copyrightText: {
    type: String,
    required: true,
  },
  footerDescription: {
    type: String,
    required: true,
  },
  footerLinks: {
    type: [footerLinkSchema],
    required: true,
    validate: {
      validator: function(footerLinks: any[]) {
        return footerLinks.length >= 0 && footerLinks.length <= 20;
      },
      message: 'Footer links must be between 0 and 20',
    },
  },
});

const siteSettingsSchema = new Schema(
  {
    // Basic Site Info
    siteName: {
      type: String,
      required: true,
    },
    siteTagline: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    logoDark: String,
    
    // Contact Information
    contactInfo: {
      type: contactInfoSchema,
      required: true,
    },
    
    // Social Media Links
    socialMedia: {
      type: socialMediaSchema,
      required: true,
    },
    
    // SEO Settings
    seoSettings: {
      type: seoSettingsSchema,
      required: true,
    },
    
    // Footer Settings
    footerSettings: {
      type: footerSettingsSchema,
      required: true,
    },
    
    // Additional Settings
    primaryColor: {
      type: String,
      required: true,
    },
    secondaryColor: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    
    // Business Info
    businessName: {
      type: String,
      required: true,
    },
    businessDescription: {
      type: String,
      required: true,
    },
    businessType: {
      type: String,
      required: true,
    },
    foundedYear: {
      type: Number,
      required: true,
      min: 1900,
      max: new Date().getFullYear(),
    },
    
    // Legal Info
    privacyPolicyUrl: {
      type: String,
      required: true,
    },
    termsOfServiceUrl: {
      type: String,
      required: true,
    },
    cookiePolicyUrl: {
      type: String,
      required: true,
    },
    
    // Analytics & Tracking
    googleAnalyticsId: String,
    facebookPixelId: String,
    tiktokPixelId: String,
    
    // Feature Flags
    enableNewsletter: {
      type: Boolean,
      default: true,
    },
    enableContactForm: {
      type: Boolean,
      default: true,
    },
    enableBlog: {
      type: Boolean,
      default: false,
    },
    enableTestimonials: {
      type: Boolean,
      default: true,
    },
    
    // Maintenance Mode
    maintenanceMode: {
      type: Boolean,
      default: false,
    },
    maintenanceMessage: {
      type: String,
      default: "Site is under maintenance. Please check back later.",
    },
  },
  {
    timestamps: true,
  },
);

const SiteSettingsModel = model<ISiteSettings, SiteSettingsModel>("SiteSettings", siteSettingsSchema);
export default SiteSettingsModel;
