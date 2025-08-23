import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { TrustSectionService } from './trustSection.service';

// Create trust section
const createTrustSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TrustSectionService.createTrustSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Trust section created successfully',
    data: result,
  });
});

// Get trust section
const getTrustSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TrustSectionService.getTrustSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Trust section retrieved successfully',
    data: result,
  });
});

// Update trust section
const updateTrustSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TrustSectionService.updateTrustSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Trust section updated successfully',
    data: result,
  });
});

// Update trusted companies only
const updateTrustedCompanies = catchAsync(async (req: Request, res: Response) => {
  const result = await TrustSectionService.updateTrustedCompanies(req.body.trustedCompanies);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Trusted companies updated successfully',
    data: result,
  });
});

// Update statistics only
const updateStatistics = catchAsync(async (req: Request, res: Response) => {
  const result = await TrustSectionService.updateStatistics(req.body.statistics);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Statistics updated successfully',
    data: result,
  });
});

// Update featured testimonial only
const updateFeaturedTestimonial = catchAsync(async (req: Request, res: Response) => {
  const result = await TrustSectionService.updateFeaturedTestimonial(req.body.featuredTestimonial);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Featured testimonial updated successfully',
    data: result,
  });
});

// Delete trust section
const deleteTrustSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TrustSectionService.deleteTrustSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Trust section deleted successfully',
    data: result,
  });
});

export const TrustSectionController = {
  createTrustSection,
  getTrustSection,
  updateTrustSection,
  updateTrustedCompanies,
  updateStatistics,
  updateFeaturedTestimonial,
  deleteTrustSection,
};
