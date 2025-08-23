import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { AdvertisersGettingStartedSecService } from './advertisersGettingStartedSec.service';

// Create advertisers getting started section
const createAdvertisersGettingStartedSec = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersGettingStartedSecService.createAdvertisersGettingStartedSec(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Advertisers getting started section created successfully',
    data: result,
  });
});

// Get advertisers getting started section
const getAdvertisersGettingStartedSec = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersGettingStartedSecService.getAdvertisersGettingStartedSec();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertisers getting started section retrieved successfully',
    data: result,
  });
});

// Update advertisers getting started section
const updateAdvertisersGettingStartedSec = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersGettingStartedSecService.updateAdvertisersGettingStartedSec(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertisers getting started section updated successfully',
    data: result,
  });
});

// Update steps only
const updateSteps = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersGettingStartedSecService.updateSteps(req.body.steps);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Process steps updated successfully',
    data: result,
  });
});

// Delete advertisers getting started section
const deleteAdvertisersGettingStartedSec = catchAsync(async (req: Request, res: Response) => {
  const result = await AdvertisersGettingStartedSecService.deleteAdvertisersGettingStartedSec();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Advertisers getting started section deleted successfully',
    data: result,
  });
});

export const AdvertisersGettingStartedSecController = {
  createAdvertisersGettingStartedSec,
  getAdvertisersGettingStartedSec,
  updateAdvertisersGettingStartedSec,
  updateSteps,
  deleteAdvertisersGettingStartedSec,
};
