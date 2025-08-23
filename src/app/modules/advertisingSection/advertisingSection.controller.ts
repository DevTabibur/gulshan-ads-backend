import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { AdvertisingSectionService } from './advertisingSection.service';

// Create advertising section
const createAdvertisingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisingSectionService.createAdvertisingSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Advertising section created successfully',
    data: result,
  });
});

// Get advertising section
const getAdvertisingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisingSectionService.getAdvertisingSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertising section retrieved successfully',
    data: result,
  });
});

// Update advertising section
const updateAdvertisingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisingSectionService.updateAdvertisingSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertising section updated successfully',
    data: result,
  });
});

// Update key features only
const updateKeyFeatures = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisingSectionService.updateKeyFeatures(req.body.keyFeatures);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Key features updated successfully',
    data: result,
  });
});

// Update service cards only
const updateServiceCards = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisingSectionService.updateServiceCards(req.body.serviceCards);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Service cards updated successfully',
    data: result,
  });
});

// Update statistics only
const updateStatistics = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisingSectionService.updateStatistics(req.body.statistics);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Statistics updated successfully',
    data: result,
  });
});

// Update CTA buttons only
const updateCTAButtons = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisingSectionService.updateCTAButtons(req.body.ctaButtons);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'CTA buttons updated successfully',
    data: result,
  });
});

// Delete advertising section
const deleteAdvertisingSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisingSectionService.deleteAdvertisingSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertising section deleted successfully',
    data: result,
  });
});

export const AdvertisingSectionController = {
  createAdvertisingSection,
  getAdvertisingSection,
  updateAdvertisingSection,
  updateKeyFeatures,
  updateServiceCards,
  updateStatistics,
  updateCTAButtons,
  deleteAdvertisingSection,
};
