import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { GettingStartedSectionService } from './gettingStartedSection.service';

// Create getting started section
const createGettingStartedSection = catchAsync(async (req: Request, res: Response) => {
  const result = await GettingStartedSectionService.createGettingStartedSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Getting started section created successfully',
    data: result,
  });
});

// Get getting started section
const getGettingStartedSection = catchAsync(async (req: Request, res: Response) => {
  const result = await GettingStartedSectionService.getGettingStartedSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Getting started section retrieved successfully',
    data: result,
  });
});

// Update getting started section
const updateGettingStartedSection = catchAsync(async (req: Request, res: Response) => {
  const result = await GettingStartedSectionService.updateGettingStartedSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Getting started section updated successfully',
    data: result,
  });
});

// Update steps only
const updateSteps = catchAsync(async (req: Request, res: Response) => {
  const result = await GettingStartedSectionService.updateSteps(req.body.steps);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Steps updated successfully',
    data: result,
  });
});

// Update CTA buttons only
const updateCTAButtons = catchAsync(async (req: Request, res: Response) => {
  const result = await GettingStartedSectionService.updateCTAButtons(req.body.ctaButtons);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'CTA buttons updated successfully',
    data: result,
  });
});

// Delete getting started section
const deleteGettingStartedSection = catchAsync(async (req: Request, res: Response) => {
  const result = await GettingStartedSectionService.deleteGettingStartedSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Getting started section deleted successfully',
    data: result,
  });
});

export const GettingStartedSectionController = {
  createGettingStartedSection,
  getGettingStartedSection,
  updateGettingStartedSection,
  updateSteps,
  updateCTAButtons,
  deleteGettingStartedSection,
};
