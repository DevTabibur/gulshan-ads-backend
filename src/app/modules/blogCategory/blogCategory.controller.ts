import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { BlogCategoryService } from './blogCategory.service';

// Create blog category
const createBlogCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogCategoryService.createBlogCategory(req.body);
  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Blog category created successfully',
    data: result,
  });
});

// Get all blog categories
const getAllBlogCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogCategoryService.getAllBlogCategories();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog categories retrieved successfully',
    data: result,
  });
});

// Get blog category by ID
const getBlogCategoryById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogCategoryService.getBlogCategoryById(id);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog category retrieved successfully',
    data: result,
  });
});

// Update blog category
const updateBlogCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogCategoryService.updateBlogCategory(id, req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog category updated successfully',
    data: result,
  });
});

// Delete blog category
const deleteBlogCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogCategoryService.deleteBlogCategory(id);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog category deleted successfully',
    data: result,
  });
});


export const BlogCategoryController = {
  createBlogCategory,
  getAllBlogCategories,
  getBlogCategoryById,
  updateBlogCategory,
  deleteBlogCategory,
};
