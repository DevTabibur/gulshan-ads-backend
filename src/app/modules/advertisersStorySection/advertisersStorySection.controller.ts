import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { AdvertisersStorySectionService } from './advertisersStorySection.service';

// Create advertisers story section
const createAdvertisersStorySection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersStorySectionService.createAdvertisersStorySection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Advertisers story section created successfully',
    data: result,
  });
});

// Get advertisers story section
const getAdvertisersStorySection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersStorySectionService.getAdvertisersStorySection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertisers story section retrieved successfully',
    data: result,
  });
});

// Update advertisers story section
const updateAdvertisersStorySection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersStorySectionService.updateAdvertisersStorySection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertisers story section updated successfully',
    data: result,
  });
});

// Update testimonials only
const updateTestimonials = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersStorySectionService.updateTestimonials(req.body.testimonials);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Testimonials updated successfully',
    data: result,
  });
});

// Delete advertisers story section
const deleteAdvertisersStorySection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersStorySectionService.deleteAdvertisersStorySection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertisers story section deleted successfully',
    data: result,
  });
});

export const AdvertisersStorySectionController = {
  createAdvertisersStorySection,
  getAdvertisersStorySection,
  updateAdvertisersStorySection,
  updateTestimonials,
  deleteAdvertisersStorySection,
};
