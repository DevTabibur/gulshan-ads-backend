import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ISiteSettings } from './siteSettings.interface';
import SiteSettingsModel from './siteSettings.model';

// Create Site Settings (only one instance allowed)
const createSiteSettings = async (siteSettingsData: ISiteSettings): Promise<ISiteSettings> => {
  // Check if Site Settings already exists
  const existingSiteSettings = await SiteSettingsModel.findOne();
  if (existingSiteSettings) {
    throw new ApiError(httpStatus.CONFLICT, 'Site Settings already exists. You can only update it.');
  }

  const result = await SiteSettingsModel.create(siteSettingsData);
  return result;
};

// Get Site Settings (only one instance)
const getSiteSettings = async (): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOne();
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

// Update Site Settings
const updateSiteSettings = async (updateData: Partial<ISiteSettings>): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOneAndUpdate({}, updateData, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

// Update Basic Site Info
const updateBasicSiteInfo = async (basicInfo: {
  siteName?: string;
  siteTagline?: string;
  logo?: string;
  logoDark?: string;
}): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOneAndUpdate({}, basicInfo, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

// Update Contact Information
const updateContactInfo = async (contactInfo: {
  email?: string;
  phone?: string;
  address?: string;
  workingHours?: string;
}): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOneAndUpdate({}, { contactInfo }, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

// Update Social Media Links
const updateSocialMedia = async (socialMedia: {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
  telegram?: string;
}): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOneAndUpdate({}, { socialMedia }, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

// Update SEO Settings
const updateSeoSettings = async (seoSettings: {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  ogImage?: string;
  favicon?: string;
}): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOneAndUpdate({}, { seoSettings }, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

// Update Footer Settings
const updateFooterSettings = async (footerSettings: {
  copyrightText?: string;
  footerDescription?: string;
  footerLinks?: { title: string; url: string; }[];
}): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOneAndUpdate({}, { footerSettings }, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

// Update Business Information
const updateBusinessInfo = async (businessInfo: {
  businessName?: string;
  businessDescription?: string;
  businessType?: string;
  foundedYear?: number;
}): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOneAndUpdate({}, businessInfo, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

// Update Legal Information
const updateLegalInfo = async (legalInfo: {
  privacyPolicyUrl?: string;
  termsOfServiceUrl?: string;
  cookiePolicyUrl?: string;
}): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOneAndUpdate({}, legalInfo, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

// Update Analytics & Tracking
const updateAnalytics = async (analytics: {
  googleAnalyticsId?: string;
  facebookPixelId?: string;
  tiktokPixelId?: string;
}): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOneAndUpdate({}, analytics, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

// Update Feature Flags
const updateFeatureFlags = async (featureFlags: {
  enableNewsletter?: boolean;
  enableContactForm?: boolean;
  enableBlog?: boolean;
  enableTestimonials?: boolean;
}): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOneAndUpdate({}, featureFlags, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

// Update Maintenance Mode
const updateMaintenanceMode = async (maintenance: {
  maintenanceMode?: boolean;
  maintenanceMessage?: string;
}): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOneAndUpdate({}, maintenance, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

// Delete Site Settings
const deleteSiteSettings = async (): Promise<ISiteSettings | null> => {
  const result = await SiteSettingsModel.findOneAndDelete({});
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Site Settings not found');
  }
  return result;
};

export const SiteSettingsService = {
  createSiteSettings,
  getSiteSettings,
  updateSiteSettings,
  updateBasicSiteInfo,
  updateContactInfo,
  updateSocialMedia,
  updateSeoSettings,
  updateFooterSettings,
  updateBusinessInfo,
  updateLegalInfo,
  updateAnalytics,
  updateFeatureFlags,
  updateMaintenanceMode,
  deleteSiteSettings,
};
