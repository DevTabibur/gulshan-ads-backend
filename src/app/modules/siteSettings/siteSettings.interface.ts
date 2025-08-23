export interface IContactInfo {
  email: string;
  phone: string;
  address: string;
  workingHours: string;
}

export interface ISocialMedia {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
  telegram?: string;
}

export interface ISeoSettings {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  ogImage: string;
  favicon: string;
}

export interface IFooterSettings {
  copyrightText: string;
  footerDescription: string;
  footerLinks: {
    title: string;
    url: string;
  }[];
}

export interface ISiteSettings {
  // Basic Site Info
  siteName: string;
  siteTagline: string;
  logo: string;
  logoDark?: string;
  
  // Contact Information
  contactInfo: IContactInfo;
  
  // Social Media Links
  socialMedia: ISocialMedia;
  
  // SEO Settings
  seoSettings: ISeoSettings;
  
  // Footer Settings
  footerSettings: IFooterSettings;
  
  // Additional Settings
  primaryColor: string;
  secondaryColor: string;
  currency: string;
  timezone: string;
  language: string;
  
  // Business Info
  businessName: string;
  businessDescription: string;
  businessType: string;
  foundedYear: number;
  
  // Legal Info
  privacyPolicyUrl: string;
  termsOfServiceUrl: string;
  cookiePolicyUrl: string;
  
  // Analytics & Tracking
  googleAnalyticsId?: string;
  facebookPixelId?: string;
  tiktokPixelId?: string;
  
  // Feature Flags
  enableNewsletter: boolean;
  enableContactForm: boolean;
  enableBlog: boolean;
  enableTestimonials: boolean;
  
  // Maintenance Mode
  maintenanceMode: boolean;
  maintenanceMessage: string;
}

export interface ISiteSettingsResponse {
  message?: string;
  data?: Partial<ISiteSettings>;
}
