import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { TikTokClientSaysSectionService } from './tikTokClientSaysSection.service';

// Create TikTok Client Says section
const createTikTokClientSaysSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokClientSaysSectionService.createTikTokClientSaysSection(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'TikTok Client Says section created successfully',
    data: result,
  });
});

// Get TikTok Client Says section
const getTikTokClientSaysSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokClientSaysSectionService.getTikTokClientSaysSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok Client Says section retrieved successfully',
    data: result,
  });
});

// Update TikTok Client Says section
const updateTikTokClientSaysSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokClientSaysSectionService.updateTikTokClientSaysSection(req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok Client Says section updated successfully',
    data: result,
  });
});

// Update testimonial cards only
const updateTestimonialCards = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokClientSaysSectionService.updateTestimonialCards(req.body.testimonialCards);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Testimonial cards updated successfully',
    data: result,
  });
});

// Add a single testimonial card
const addTestimonialCard = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokClientSaysSectionService.addTestimonialCard(req.body.testimonialCard);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Testimonial card added successfully',
    data: result,
  });
});

// Update a specific testimonial card by index
const updateTestimonialCardByIndex = catchAsync(async (req: Request, res: Response) => {
  const { index } = req.params;
  const result = await TikTokClientSaysSectionService.updateTestimonialCardByIndex(
    parseInt(index),
    req.body.testimonialCard
  );
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Testimonial card updated successfully',
    data: result,
  });
});

// Delete a specific testimonial card by index
const deleteTestimonialCardByIndex = catchAsync(async (req: Request, res: Response) => {
  const { index } = req.params;
  const result = await TikTokClientSaysSectionService.deleteTestimonialCardByIndex(parseInt(index));
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Testimonial card deleted successfully',
    data: result,
  });
});

// Delete TikTok Client Says section
const deleteTikTokClientSaysSection = catchAsync(async (req: Request, res: Response) => {
  const result = await TikTokClientSaysSectionService.deleteTikTokClientSaysSection();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'TikTok Client Says section deleted successfully',
    data: result,
  });
});

export const TikTokClientSaysSectionController = {
  createTikTokClientSaysSection,
  getTikTokClientSaysSection,
  updateTikTokClientSaysSection,
  updateTestimonialCards,
  addTestimonialCard,
  updateTestimonialCardByIndex,
  deleteTestimonialCardByIndex,
  deleteTikTokClientSaysSection,
};
