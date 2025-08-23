import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { MetaPartnershipSectionService } from './metaPartnershipSection.service';

// Create meta partnership section
const createMetaPartnershipSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaPartnershipSectionService.createMetaPartnershipSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Meta partnership section created successfully',
    data: result,
  });
});

// Get meta partnership section
const getMetaPartnershipSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaPartnershipSectionService.getMetaPartnershipSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta partnership section retrieved successfully',
    data: result,
  });
});

// Update meta partnership section
const updateMetaPartnershipSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaPartnershipSectionService.updateMetaPartnershipSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta partnership section updated successfully',
    data: result,
  });
});

// Update feature cards only
const updateFeatureCards = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaPartnershipSectionService.updateFeatureCards(req.body.featureCards);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Feature cards updated successfully',
    data: result,
  });
});

// Delete meta partnership section
const deleteMetaPartnershipSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaPartnershipSectionService.deleteMetaPartnershipSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta partnership section deleted successfully',
    data: result,
  });
});

export const MetaPartnershipSectionController = {
  createMetaPartnershipSection,
  getMetaPartnershipSection,
  updateMetaPartnershipSection,
  updateFeatureCards,
  deleteMetaPartnershipSection,
};
