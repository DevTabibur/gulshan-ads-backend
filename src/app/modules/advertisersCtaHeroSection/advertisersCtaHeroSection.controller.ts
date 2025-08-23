import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { AdvertisersCtaHeroSectionService } from './advertisersCtaHeroSection.service';

// Create advertisers CTA hero section
const createAdvertisersCtaHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersCtaHeroSectionService.createAdvertisersCtaHeroSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Advertisers CTA hero section created successfully',
    data: result,
  });
});

// Get advertisers CTA hero section
const getAdvertisersCtaHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersCtaHeroSectionService.getAdvertisersCtaHeroSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertisers CTA hero section retrieved successfully',
    data: result,
  });
});

// Update advertisers CTA hero section
const updateAdvertisersCtaHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersCtaHeroSectionService.updateAdvertisersCtaHeroSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertisers CTA hero section updated successfully',
    data: result,
  });
});

// Update CTA buttons only
const updateCTAButtons = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersCtaHeroSectionService.updateCTAButtons(req.body.ctaButtons);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'CTA buttons updated successfully',
    data: result,
  });
});

// Update benefits only
const updateBenefits = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersCtaHeroSectionService.updateBenefits(req.body.benefits);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Benefits updated successfully',
    data: result,
  });
});

// Delete advertisers CTA hero section
const deleteAdvertisersCtaHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersCtaHeroSectionService.deleteAdvertisersCtaHeroSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertisers CTA hero section deleted successfully',
    data: result,
  });
});

export const AdvertisersCtaHeroSectionController = {
  createAdvertisersCtaHeroSection,
  getAdvertisersCtaHeroSection,
  updateAdvertisersCtaHeroSection,
  updateCTAButtons,
  updateBenefits,
  deleteAdvertisersCtaHeroSection,
};
