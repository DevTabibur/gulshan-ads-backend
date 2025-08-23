import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { TikTokHeroSectionService } from './tikTokHeroSection.service';

// Create TikTok hero section
const createTikTokHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokHeroSectionService.createTikTokHeroSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'TikTok hero section created successfully',
    data: result,
  });
});

// Get TikTok hero section
const getTikTokHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokHeroSectionService.getTikTokHeroSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok hero section retrieved successfully',
    data: result,
  });
});

// Update TikTok hero section
const updateTikTokHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokHeroSectionService.updateTikTokHeroSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok hero section updated successfully',
    data: result,
  });
});

// Update CTA buttons only
const updateCTAButtons = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokHeroSectionService.updateCTAButtons(req.body.ctaButtons);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'CTA buttons updated successfully',
    data: result,
  });
});

// Update statistics only
const updateStatistics = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokHeroSectionService.updateStatistics(req.body.statistics);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Statistics updated successfully',
    data: result,
  });
});

// Update phone mockup only
const updatePhoneMockup = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokHeroSectionService.updatePhoneMockup(req.body.phoneMockup);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Phone mockup updated successfully',
    data: result,
  });
});

// Delete TikTok hero section
const deleteTikTokHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokHeroSectionService.deleteTikTokHeroSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok hero section deleted successfully',
    data: result,
  });
});

export const TikTokHeroSectionController = {
  createTikTokHeroSection,
  getTikTokHeroSection,
  updateTikTokHeroSection,
  updateCTAButtons,
  updateStatistics,
  updatePhoneMockup,
  deleteTikTokHeroSection,
};
