import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import MetaHeroSectionService from './metaHeroSection.service';

// Create meta hero section
const createMetaHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaHeroSectionService.createMetaHeroSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Meta hero section created successfully',
    data: result,
  });
});

// Get meta hero section
const getMetaHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaHeroSectionService.getMetaHeroSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta hero section retrieved successfully',
    data: result,
  });
});

// Update meta hero section
const updateMetaHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaHeroSectionService.updateMetaHeroSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta hero section updated successfully',
    data: result,
  });
});

// Update CTA buttons only
const updateCTAButtons = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaHeroSectionService.updateCTAButtons(req.body.ctaButtons);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'CTA buttons updated successfully',
    data: result,
  });
});

// Update statistics only
const updateStatistics = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaHeroSectionService.updateStatistics(req.body.statistics);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Statistics updated successfully',
    data: result,
  });
});

// Delete meta hero section
const deleteMetaHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await MetaHeroSectionService.deleteMetaHeroSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Meta hero section deleted successfully',
    data: result,
  });
});

export const MetaHeroSectionController = {
  createMetaHeroSection,
  getMetaHeroSection,
  updateMetaHeroSection,
  updateCTAButtons,
  updateStatistics,
  deleteMetaHeroSection,
};
