import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { SiteSettingsService } from './siteSettings.service';

// Create Site Settings
const createSiteSettings = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.createSiteSettings(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Site Settings created successfully',
    data: result,
  });
});

// Get Site Settings
const getSiteSettings = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.getSiteSettings();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Site Settings retrieved successfully',
    data: result,
  });
});

// Update Site Settings
const updateSiteSettings = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.updateSiteSettings(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Site Settings updated successfully',
    data: result,
  });
});

// Update Basic Site Info
const updateBasicSiteInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.updateBasicSiteInfo(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Basic Site Info updated successfully',
    data: result,
  });
});

// Update Contact Information
const updateContactInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.updateContactInfo(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Contact Information updated successfully',
    data: result,
  });
});

// Update Social Media Links
const updateSocialMedia = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.updateSocialMedia(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Social Media Links updated successfully',
    data: result,
  });
});

// Update SEO Settings
const updateSeoSettings = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.updateSeoSettings(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'SEO Settings updated successfully',
    data: result,
  });
});

// Update Footer Settings
const updateFooterSettings = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.updateFooterSettings(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Footer Settings updated successfully',
    data: result,
  });
});

// Update Business Information
const updateBusinessInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.updateBusinessInfo(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Business Information updated successfully',
    data: result,
  });
});

// Update Legal Information
const updateLegalInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.updateLegalInfo(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Legal Information updated successfully',
    data: result,
  });
});

// Update Analytics & Tracking
const updateAnalytics = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.updateAnalytics(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Analytics & Tracking updated successfully',
    data: result,
  });
});

// Update Feature Flags
const updateFeatureFlags = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.updateFeatureFlags(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Feature Flags updated successfully',
    data: result,
  });
});

// Update Maintenance Mode
const updateMaintenanceMode = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.updateMaintenanceMode(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Maintenance Mode updated successfully',
    data: result,
  });
});

// Delete Site Settings
const deleteSiteSettings = catchAsync(async (req: Request, res: Response) => {
  const result = await SiteSettingsService.deleteSiteSettings();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Site Settings deleted successfully',
    data: result,
  });
});

export const SiteSettingsController = {
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
