import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { HeroSectionService } from './heroSection.service';

// Create hero section
const createHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await HeroSectionService.createHeroSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Hero section created successfully',
    data: result,
  });
});

// Get hero section
const getHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await HeroSectionService.getHeroSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Hero section retrieved successfully',
    data: result,
  });
});

// Update hero section
const updateHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await HeroSectionService.updateHeroSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Hero section updated successfully',
    data: result,
  });
});

// Delete hero section
const deleteHeroSection = catchAsync(async (req: Request, res: Response) => {
  const result = await HeroSectionService.deleteHeroSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Hero section deleted successfully',
    data: result,
  });
});

export const HeroSectionController = {
  createHeroSection,
  getHeroSection,
  updateHeroSection,
  deleteHeroSection,
};
