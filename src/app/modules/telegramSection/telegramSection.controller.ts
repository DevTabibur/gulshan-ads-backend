import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { TelegramSectionService } from './telegramSection.service';

// Create telegram section
const createTelegramSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TelegramSectionService.createTelegramSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Telegram section created successfully',
    data: result,
  });
});

// Get telegram section
const getTelegramSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TelegramSectionService.getTelegramSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Telegram section retrieved successfully',
    data: result,
  });
});

// Update telegram section
const updateTelegramSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TelegramSectionService.updateTelegramSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Telegram section updated successfully',
    data: result,
  });
});

// Update key features only
const updateKeyFeatures = catchAsync(async (req: Request, res: Response) => {
  const result = await TelegramSectionService.updateKeyFeatures(req.body.keyFeatures);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Key features updated successfully',
    data: result,
  });
});

// Update pricing points only
const updatePricingPoints = catchAsync(async (req: Request, res: Response) => {
  const result = await TelegramSectionService.updatePricingPoints(req.body.pricingPoints);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Pricing points updated successfully',
    data: result,
  });
});

// Update chat interface only
const updateChatInterface = catchAsync(async (req: Request, res: Response) => {
  const result = await TelegramSectionService.updateChatInterface(req.body.chatInterface);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Chat interface updated successfully',
    data: result,
  });
});

// Update future banner only
const updateFutureBanner = catchAsync(async (req: Request, res: Response) => {
  const result = await TelegramSectionService.updateFutureBanner(req.body.futureBanner);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Future banner updated successfully',
    data: result,
  });
});

// Delete telegram section
const deleteTelegramSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TelegramSectionService.deleteTelegramSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Telegram section deleted successfully',
    data: result,
  });
});

export const TelegramSectionController = {
  createTelegramSection,
  getTelegramSection,
  updateTelegramSection,
  updateKeyFeatures,
  updatePricingPoints,
  updateChatInterface,
  updateFutureBanner,
  deleteTelegramSection,
};
