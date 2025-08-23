import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { MetaPricingSectionService } from './metaPricingSection.service';

// Create meta pricing section
const createMetaPricingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaPricingSectionService.createMetaPricingSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Meta pricing section created successfully',
    data: result,
  });
});

// Get meta pricing section
const getMetaPricingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaPricingSectionService.getMetaPricingSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta pricing section retrieved successfully',
    data: result,
  });
});

// Update meta pricing section
const updateMetaPricingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaPricingSectionService.updateMetaPricingSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta pricing section updated successfully',
    data: result,
  });
});

// Update plans only
const updatePlans = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaPricingSectionService.updatePlans(req.body.plans);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Pricing plans updated successfully',
    data: result,
  });
});

// Delete meta pricing section
const deleteMetaPricingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaPricingSectionService.deleteMetaPricingSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta pricing section deleted successfully',
    data: result,
  });
});

export const MetaPricingSectionController = {
  createMetaPricingSection,
  getMetaPricingSection,
  updateMetaPricingSection,
  updatePlans,
  deleteMetaPricingSection,
};
