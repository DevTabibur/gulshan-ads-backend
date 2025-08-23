import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { HelperServicesSectionService } from './helperServicesSection.service';

// Create helper services section
const createHelperServicesSection = catchAsync(async (req: Request, res: Response) => {
  const result = await HelperServicesSectionService.createHelperServicesSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Helper services section created successfully',
    data: result,
  });
});

// Get helper services section
const getHelperServicesSection = catchAsync(async (req: Request, res: Response) => {
  const result = await HelperServicesSectionService.getHelperServicesSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Helper services section retrieved successfully',
    data: result,
  });
});

// Update helper services section
const updateHelperServicesSection = catchAsync(async (req: Request, res: Response) => {
  const result = await HelperServicesSectionService.updateHelperServicesSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Helper services section updated successfully',
    data: result,
  });
});

// Update services only
const updateServices = catchAsync(async (req: Request, res: Response) => {
  const result = await HelperServicesSectionService.updateServices(req.body.services);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Services updated successfully',
    data: result,
  });
});

// Delete helper services section
const deleteHelperServicesSection = catchAsync(async (req: Request, res: Response) => {
  const result = await HelperServicesSectionService.deleteHelperServicesSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Helper services section deleted successfully',
    data: result,
  });
});

export const HelperServicesSectionController = {
  createHelperServicesSection,
  getHelperServicesSection,
  updateHelperServicesSection,
  updateServices,
  deleteHelperServicesSection,
};
