import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { TikTokVideoAdvertisingSectionService } from './tikTokVideoAdvertisingSection.service';

// Create TikTok video advertising section
const createTikTokVideoAdvertisingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokVideoAdvertisingSectionService.createTikTokVideoAdvertisingSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'TikTok video advertising section created successfully',
    data: result,
  });
});

// Get TikTok video advertising section
const getTikTokVideoAdvertisingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokVideoAdvertisingSectionService.getTikTokVideoAdvertisingSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok video advertising section retrieved successfully',
    data: result,
  });
});

// Update TikTok video advertising section
const updateTikTokVideoAdvertisingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokVideoAdvertisingSectionService.updateTikTokVideoAdvertisingSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok video advertising section updated successfully',
    data: result,
  });
});

// Update advertising options only
const updateAdvertisingOptions = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokVideoAdvertisingSectionService.updateAdvertisingOptions(req.body.advertisingOptions);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertising options updated successfully',
    data: result,
  });
});

// Update budget info only
const updateBudgetInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokVideoAdvertisingSectionService.updateBudgetInfo(req.body.budgetInfo);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Budget info updated successfully',
    data: result,
  });
});

// Update phone mockup only
const updatePhoneMockup = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokVideoAdvertisingSectionService.updatePhoneMockup(req.body.phoneMockup);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Phone mockup updated successfully',
    data: result,
  });
});

// Update engagement statistic only
const updateEngagementStatistic = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokVideoAdvertisingSectionService.updateEngagementStatistic(req.body.engagementStatistic);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Engagement statistic updated successfully',
    data: result,
  });
});

// Delete TikTok video advertising section
const deleteTikTokVideoAdvertisingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokVideoAdvertisingSectionService.deleteTikTokVideoAdvertisingSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok video advertising section deleted successfully',
    data: result,
  });
});

export const TikTokVideoAdvertisingSectionController = {
  createTikTokVideoAdvertisingSection,
  getTikTokVideoAdvertisingSection,
  updateTikTokVideoAdvertisingSection,
  updateAdvertisingOptions,
  updateBudgetInfo,
  updatePhoneMockup,
  updateEngagementStatistic,
  deleteTikTokVideoAdvertisingSection,
};
