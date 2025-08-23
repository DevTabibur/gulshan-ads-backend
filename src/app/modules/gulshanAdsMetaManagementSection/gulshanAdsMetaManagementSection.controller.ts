import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { GulshanAdsMetaManagementSectionService } from './gulshanAdsMetaManagementSection.service';

// Create gulshan ads meta management section
const createGulshanAdsMetaManagementSection = catchAsync(async (req: Request, res: Response) => {
  const result = await GulshanAdsMetaManagementSectionService.createGulshanAdsMetaManagementSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Gulshan Ads meta management section created successfully',
    data: result,
  });
});

// Get gulshan ads meta management section
const getGulshanAdsMetaManagementSection = catchAsync(async (req: Request, res: Response) => {
  const result = await GulshanAdsMetaManagementSectionService.getGulshanAdsMetaManagementSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Gulshan Ads meta management section retrieved successfully',
    data: result,
  });
});

// Update gulshan ads meta management section
const updateGulshanAdsMetaManagementSection = catchAsync(async (req: Request, res: Response) => {
  const result = await GulshanAdsMetaManagementSectionService.updateGulshanAdsMetaManagementSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Gulshan Ads meta management section updated successfully',
    data: result,
  });
});

// Update commission tag only
const updateCommissionTag = catchAsync(async (req: Request, res: Response) => {
  const result = await GulshanAdsMetaManagementSectionService.updateCommissionTag(req.body.commissionTag);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Commission tag updated successfully',
    data: result,
  });
});

// Update payment feature only
const updatePaymentFeature = catchAsync(async (req: Request, res: Response) => {
  const result = await GulshanAdsMetaManagementSectionService.updatePaymentFeature(req.body.paymentFeature);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Payment feature updated successfully',
    data: result,
  });
});

// Update paperwork feature only
const updatePaperworkFeature = catchAsync(async (req: Request, res: Response) => {
  const result = await GulshanAdsMetaManagementSectionService.updatePaperworkFeature(req.body.paperworkFeature);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Paperwork feature updated successfully',
    data: result,
  });
});

// Delete gulshan ads meta management section
const deleteGulshanAdsMetaManagementSection = catchAsync(async (req: Request, res: Response) => {
  const result = await GulshanAdsMetaManagementSectionService.deleteGulshanAdsMetaManagementSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Gulshan Ads meta management section deleted successfully',
    data: result,
  });
});

export const GulshanAdsMetaManagementSectionController = {
  createGulshanAdsMetaManagementSection,
  getGulshanAdsMetaManagementSection,
  updateGulshanAdsMetaManagementSection,
  updateCommissionTag,
  updatePaymentFeature,
  updatePaperworkFeature,
  deleteGulshanAdsMetaManagementSection,
};
