import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { MetaSuccessStoriesSectionService } from './metaSuccessStoriesSection.service';

// Create meta success stories section
const createMetaSuccessStoriesSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSuccessStoriesSectionService.createMetaSuccessStoriesSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Meta success stories section created successfully',
    data: result,
  });
});

// Get meta success stories section
const getMetaSuccessStoriesSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSuccessStoriesSectionService.getMetaSuccessStoriesSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta success stories section retrieved successfully',
    data: result,
  });
});

// Update meta success stories section
const updateMetaSuccessStoriesSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSuccessStoriesSectionService.updateMetaSuccessStoriesSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta success stories section updated successfully',
    data: result,
  });
});

// Update testimonials only
const updateTestimonials = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSuccessStoriesSectionService.updateTestimonials(req.body.testimonials);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Testimonials updated successfully',
    data: result,
  });
});

// Delete meta success stories section
const deleteMetaSuccessStoriesSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSuccessStoriesSectionService.deleteMetaSuccessStoriesSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta success stories section deleted successfully',
    data: result,
  });
});

export const MetaSuccessStoriesSectionController = {
  createMetaSuccessStoriesSection,
  getMetaSuccessStoriesSection,
  updateMetaSuccessStoriesSection,
  updateTestimonials,
  deleteMetaSuccessStoriesSection,
};
