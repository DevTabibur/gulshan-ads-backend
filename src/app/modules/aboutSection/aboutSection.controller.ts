import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { AboutSectionService } from './aboutSection.service';

// Create about section
const createAboutSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AboutSectionService.createAboutSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'About section created successfully',
    data: result,
  });
});

// Get about section
const getAboutSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AboutSectionService.getAboutSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'About section retrieved successfully',
    data: result,
  });
});

// Update about section
const updateAboutSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AboutSectionService.updateAboutSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'About section updated successfully',
    data: result,
  });
});

// Update statistics only
const updateStatistics = catchAsync(async (req: Request, res: Response) => {
  const result = await AboutSectionService.updateStatistics(req.body.statistics);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Statistics updated successfully',
    data: result,
  });
});

// Update client types only
const updateClientTypes = catchAsync(async (req: Request, res: Response) => {
  const result = await AboutSectionService.updateClientTypes(req.body.clientTypes);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Client types updated successfully',
    data: result,
  });
});

// Update mission pillars only
const updateMissionPillars = catchAsync(async (req: Request, res: Response) => {
  const result = await AboutSectionService.updateMissionPillars(req.body.missionPillars);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Mission pillars updated successfully',
    data: result,
  });
});

// Delete about section
const deleteAboutSection = catchAsync(async (req: Request, res: Response) => {
  const result = await AboutSectionService.deleteAboutSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'About section deleted successfully',
    data: result,
  });
});

export const AboutSectionController = {
  createAboutSection,
  getAboutSection,
  updateAboutSection,
  updateStatistics,
  updateClientTypes,
  updateMissionPillars,
  deleteAboutSection,
};
