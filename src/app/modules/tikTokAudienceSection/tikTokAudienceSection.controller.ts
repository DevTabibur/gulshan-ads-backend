import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { TikTokAudienceSectionService } from './tikTokAudienceSection.service';

// Create TikTok audience section
const createTikTokAudienceSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokAudienceSectionService.createTikTokAudienceSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'TikTok audience section created successfully',
    data: result,
  });
});

// Get TikTok audience section
const getTikTokAudienceSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokAudienceSectionService.getTikTokAudienceSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok audience section retrieved successfully',
    data: result,
  });
});

// Update TikTok audience section
const updateTikTokAudienceSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokAudienceSectionService.updateTikTokAudienceSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok audience section updated successfully',
    data: result,
  });
});

// Update statistics only
const updateStatistics = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokAudienceSectionService.updateStatistics(req.body.statistics);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Statistics updated successfully',
    data: result,
  });
});

// Update advertising benefit only
const updateAdvertisingBenefit = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokAudienceSectionService.updateAdvertisingBenefit(req.body.advertisingBenefit);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertising benefit updated successfully',
    data: result,
  });
});

// Update testimonial card only
const updateTestimonialCard = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokAudienceSectionService.updateTestimonialCard(req.body.testimonialCard);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Testimonial card updated successfully',
    data: result,
  });
});

// Delete TikTok audience section
const deleteTikTokAudienceSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokAudienceSectionService.deleteTikTokAudienceSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok audience section deleted successfully',
    data: result,
  });
});

export const TikTokAudienceSectionController = {
  createTikTokAudienceSection,
  getTikTokAudienceSection,
  updateTikTokAudienceSection,
  updateStatistics,
  updateAdvertisingBenefit,
  updateTestimonialCard,
  deleteTikTokAudienceSection,
};
