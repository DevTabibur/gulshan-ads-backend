import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { FAQSectionService } from './faqSection.service';

// Create FAQ section
const createFAQSection = catchAsync(async (req: Request, res: Response) => {
  const result = await FAQSectionService.createFAQSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'FAQ section created successfully',
    data: result,
  });
});

// Get FAQ section
const getFAQSection = catchAsync(async (req: Request, res: Response) => {
  const result = await FAQSectionService.getFAQSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'FAQ section retrieved successfully',
    data: result,
  });
});

// Update FAQ section
const updateFAQSection = catchAsync(async (req: Request, res: Response) => {
  const result = await FAQSectionService.updateFAQSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'FAQ section updated successfully',
    data: result,
  });
});

// Update FAQ items only
const updateFAQItems = catchAsync(async (req: Request, res: Response) => {
  const result = await FAQSectionService.updateFAQItems(req.body.faqItems);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'FAQ items updated successfully',
    data: result,
  });
});

// Delete FAQ section
const deleteFAQSection = catchAsync(async (req: Request, res: Response) => {
  const result = await FAQSectionService.deleteFAQSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'FAQ section deleted successfully',
    data: result,
  });
});

export const FAQSectionController = {
  createFAQSection,
  getFAQSection,
  updateFAQSection,
  updateFAQItems,
  deleteFAQSection,
};
