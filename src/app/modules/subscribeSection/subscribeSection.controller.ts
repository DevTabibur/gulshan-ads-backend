import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { SubscribeSectionService } from './subscribeSection.service';

// Create Subscribe section
const createSubscribeSection = catchAsync(async (req: Request, res: Response) => {
  const result = await SubscribeSectionService.createSubscribeSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Subscribe section created successfully',
    data: result,
  });
});

// Get Subscribe section
const getSubscribeSection = catchAsync(async (req: Request, res: Response) => {
  const result = await SubscribeSectionService.getSubscribeSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Subscribe section retrieved successfully',
    data: result,
  });
});

// Update Subscribe section
const updateSubscribeSection = catchAsync(async (req: Request, res: Response) => {
  const result = await SubscribeSectionService.updateSubscribeSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Subscribe section updated successfully',
    data: result,
  });
});

// Delete Subscribe section
const deleteSubscribeSection = catchAsync(async (req: Request, res: Response) => {
  const result = await SubscribeSectionService.deleteSubscribeSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Subscribe section deleted successfully',
    data: result,
  });
});

export const SubscribeSectionController = {
  createSubscribeSection,
  getSubscribeSection,
  updateSubscribeSection,
  deleteSubscribeSection,
};
