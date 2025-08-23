import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { CampaignLaunchManagementSectionService } from './campaignLaunchManagementSection.service';

// Create campaign launch management section
const createCampaignLaunchManagementSection = catchAsync(async (req: Request, res: Response) => {
  const result = await CampaignLaunchManagementSectionService.createCampaignLaunchManagementSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Campaign launch management section created successfully',
    data: result,
  });
});

// Get campaign launch management section
const getCampaignLaunchManagementSection = catchAsync(async (req: Request, res: Response) => {
  const result = await CampaignLaunchManagementSectionService.getCampaignLaunchManagementSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Campaign launch management section retrieved successfully',
    data: result,
  });
});

// Update campaign launch management section
const updateCampaignLaunchManagementSection = catchAsync(async (req: Request, res: Response) => {
  const result = await CampaignLaunchManagementSectionService.updateCampaignLaunchManagementSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Campaign launch management section updated successfully',
    data: result,
  });
});

// Update cards only
const updateCards = catchAsync(async (req: Request, res: Response) => {
  const result = await CampaignLaunchManagementSectionService.updateCards(req.body.cards);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Management cards updated successfully',
    data: result,
  });
});

// Delete campaign launch management section
const deleteCampaignLaunchManagementSection = catchAsync(async (req: Request, res: Response) => {
  const result = await CampaignLaunchManagementSectionService.deleteCampaignLaunchManagementSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Campaign launch management section deleted successfully',
    data: result,
  });
});

export const CampaignLaunchManagementSectionController = {
  createCampaignLaunchManagementSection,
  getCampaignLaunchManagementSection,
  updateCampaignLaunchManagementSection,
  updateCards,
  deleteCampaignLaunchManagementSection,
};
