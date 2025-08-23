import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { PricingSectionService } from './pricingSection.service';

// Create pricing section
const createPricingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await PricingSectionService.createPricingSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Pricing section created successfully',
    data: result,
  });
});

// Get pricing section
const getPricingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await PricingSectionService.getPricingSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Pricing section retrieved successfully',
    data: result,
  });
});

// Update pricing section
const updatePricingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await PricingSectionService.updatePricingSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Pricing section updated successfully',
    data: result,
  });
});

// Update plans only
const updatePlans = catchAsync(async (req: Request, res: Response) => {
  const result = await PricingSectionService.updatePlans(req.body.plans);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Pricing plans updated successfully',
    data: result,
  });
});

// Delete pricing section
const deletePricingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await PricingSectionService.deletePricingSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Pricing section deleted successfully',
    data: result,
  });
});

export const PricingSectionController = {
  createPricingSection,
  getPricingSection,
  updatePricingSection,
  updatePlans,
  deletePricingSection,
};
