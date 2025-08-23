import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { TikTokPartnerSectionService } from './tikTokPartnerSection.service';

// Create TikTok Partner section
const createTikTokPartnerSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokPartnerSectionService.createTikTokPartnerSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'TikTok Partner section created successfully',
    data: result,
  });
});

// Get TikTok Partner section
const getTikTokPartnerSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokPartnerSectionService.getTikTokPartnerSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok Partner section retrieved successfully',
    data: result,
  });
});

// Update TikTok Partner section
const updateTikTokPartnerSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokPartnerSectionService.updateTikTokPartnerSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok Partner section updated successfully',
    data: result,
  });
});

// Update partnership logos only
const updatePartnershipLogos = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokPartnerSectionService.updatePartnershipLogos(req.body.partnershipLogos);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Partnership logos updated successfully',
    data: result,
  });
});

// Update feature cards only
const updateFeatureCards = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokPartnerSectionService.updateFeatureCards(req.body.featureCards);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Feature cards updated successfully',
    data: result,
  });
});

// Update CTA button only
const updateCTAButton = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokPartnerSectionService.updateCTAButton(req.body.ctaButton);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'CTA button updated successfully',
    data: result,
  });
});

// Delete TikTok Partner section
const deleteTikTokPartnerSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokPartnerSectionService.deleteTikTokPartnerSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok Partner section deleted successfully',
    data: result,
  });
});

export const TikTokPartnerSectionController = {
  createTikTokPartnerSection,
  getTikTokPartnerSection,
  updateTikTokPartnerSection,
  updatePartnershipLogos,
  updateFeatureCards,
  updateCTAButton,
  deleteTikTokPartnerSection,
};
