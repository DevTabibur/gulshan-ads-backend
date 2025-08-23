import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { WhyChooseUsSectionService } from './whyChooseUsSection.service';

// Create why choose us section
const createWhyChooseUsSection = catchAsync(async (req: Request, res: Response) => {
  const result = await WhyChooseUsSectionService.createWhyChooseUsSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Why choose us section created successfully',
    data: result,
  });
});

// Get why choose us section
const getWhyChooseUsSection = catchAsync(async (req: Request, res: Response) => {
  const result = await WhyChooseUsSectionService.getWhyChooseUsSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Why choose us section retrieved successfully',
    data: result,
  });
});

// Update why choose us section
const updateWhyChooseUsSection = catchAsync(async (req: Request, res: Response) => {
  const result = await WhyChooseUsSectionService.updateWhyChooseUsSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Why choose us section updated successfully',
    data: result,
  });
});

// Update benefits only
const updateBenefits = catchAsync(async (req: Request, res: Response) => {
  const result = await WhyChooseUsSectionService.updateBenefits(req.body.benefits);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Benefits updated successfully',
    data: result,
  });
});

// Delete why choose us section
const deleteWhyChooseUsSection = catchAsync(async (req: Request, res: Response) => {
  const result = await WhyChooseUsSectionService.deleteWhyChooseUsSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Why choose us section deleted successfully',
    data: result,
  });
});

export const WhyChooseUsSectionController = {
  createWhyChooseUsSection,
  getWhyChooseUsSection,
  updateWhyChooseUsSection,
  updateBenefits,
  deleteWhyChooseUsSection,
};
