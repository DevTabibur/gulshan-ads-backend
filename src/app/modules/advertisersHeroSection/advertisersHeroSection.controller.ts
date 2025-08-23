import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { AdvertisersHeroSectionService } from './advertisersHeroSection.service';

// Create advertisers hero section
const createAdvertisersHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersHeroSectionService.createAdvertisersHeroSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Advertisers hero section created successfully',
    data: result,
  });
});

// Get advertisers hero section
const getAdvertisersHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersHeroSectionService.getAdvertisersHeroSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertisers hero section retrieved successfully',
    data: result,
  });
});

// Update advertisers hero section
const updateAdvertisersHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersHeroSectionService.updateAdvertisersHeroSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertisers hero section updated successfully',
    data: result,
  });
});

// Update CTA buttons only
const updateCTAButtons = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersHeroSectionService.updateCTAButtons(req.body.ctaButtons);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'CTA buttons updated successfully',
    data: result,
  });
});

// Update campaign performance only
const updateCampaignPerformance = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersHeroSectionService.updateCampaignPerformance(req.body.campaignPerformance);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Campaign performance updated successfully',
    data: result,
  });
});

// Update bottom statistics only
const updateBottomStatistics = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersHeroSectionService.updateBottomStatistics(req.body.bottomStatistics);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Bottom statistics updated successfully',
    data: result,
  });
});

// Delete advertisers hero section
const deleteAdvertisersHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersHeroSectionService.deleteAdvertisersHeroSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertisers hero section deleted successfully',
    data: result,
  });
});

export const AdvertisersHeroSectionController = {
  createAdvertisersHeroSection,
  getAdvertisersHeroSection,
  updateAdvertisersHeroSection,
  updateCTAButtons,
  updateCampaignPerformance,
  updateBottomStatistics,
  deleteAdvertisersHeroSection,
};
