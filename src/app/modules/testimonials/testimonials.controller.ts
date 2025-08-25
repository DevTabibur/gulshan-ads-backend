import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { TestimonialService } from './testimonials.service';
import pick from '../../../shared/pick';
import paginationHelper from '../../helpers/paginationHelper';

// Create testimonial
const createTestimonial = catchAsync(async (req: Request, res: Response) => {
  const result = await TestimonialService.createTestimonial(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Testimonial created successfully',
    data: result,
  });
});

// Get all testimonials
const getAllTestimonials = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'fullName', 'companyName', 'rating']);
  const paginationOptions = pick(
    req.query,
    ['page', 'limit', 'sortBy', 'sortOrder'] // explicitly list pagination fields
  );

  const result = await TestimonialService.getAllTestimonials(filters, paginationOptions);

  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Testimonials retrieved successfully',
    data: result.data,
    meta: result.meta,
  });
});

// Get testimonial by ID
const getTestimonialById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TestimonialService.getTestimonialById(id);

  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Testimonial retrieved successfully',
    data: result,
  });
});

// Update testimonial
const updateTestimonial = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TestimonialService.updateTestimonial(id, req.body);

  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Testimonial updated successfully',
    data: result,
  });
});

// Delete testimonial
const deleteTestimonial = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TestimonialService.deleteTestimonial(id);

  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Testimonial deleted successfully',
    data: result,
  });
});

export const TestimonialController = {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
};
