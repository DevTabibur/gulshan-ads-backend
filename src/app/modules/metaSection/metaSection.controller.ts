import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { MetaSectionService } from './metaSection.service';

// Create meta section
const createMetaSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSectionService.createMetaSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Meta section created successfully',
    data: result,
  });
});

// Get meta section
const getMetaSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSectionService.getMetaSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta section retrieved successfully',
    data: result,
  });
});

// Update meta section
const updateMetaSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSectionService.updateMetaSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta section updated successfully',
    data: result,
  });
});

// Update platform icons only
const updatePlatformIcons = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSectionService.updatePlatformIcons(req.body.platformIcons);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Platform icons updated successfully',
    data: result,
  });
});

// Update feature buttons only
const updateFeatureButtons = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSectionService.updateFeatureButtons(req.body.featureButtons);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Feature buttons updated successfully',
    data: result,
  });
});

// Update service cards only
const updateServiceCards = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSectionService.updateServiceCards(req.body.serviceCards);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Service cards updated successfully',
    data: result,
  });
});

// Update performance statistics only
const updatePerformanceStatistics = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSectionService.updatePerformanceStatistics(req.body.performanceStatistics);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Performance statistics updated successfully',
    data: result,
  });
});

// Delete meta section
const deleteMetaSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaSectionService.deleteMetaSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta section deleted successfully',
    data: result,
  });
});

export const MetaSectionController = {
  createMetaSection,
  getMetaSection,
  updateMetaSection,
  updatePlatformIcons,
  updateFeatureButtons,
  updateServiceCards,
  updatePerformanceStatistics,
  deleteMetaSection,
};
