import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendSuccessResponse } from '../../../shared/sendSuccessResponse';
import httpStatus from 'http-status';
import { BlogService } from './blog.service';

// Create blog
const createBlog = catchAsync(async (req: Request, res: Response) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] } | Express.Multer.File[] | undefined;
  let blogFeaturedImage;
  if (Array.isArray(files)) {
    blogFeaturedImage = files;
  } else if (files && typeof files === 'object' && 'blogFeaturedImage' in files) {
    blogFeaturedImage = (files as { [fieldname: string]: Express.Multer.File[] }).blogFeaturedImage;
  }
  console.log("blogFeaturedImage", blogFeaturedImage)

  const result = await BlogService.createBlog(
    req.body,
    blogFeaturedImage ?? []
  );

  sendSuccessResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Blog created successfully',
    data: result,
  });
});

// Get all blogs
const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getAllBlogs();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blogs retrieved successfully',
    data: result,
  });
});

// Get blog by ID
const getBlogById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.getBlogById(id);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog retrieved successfully',
    data: result,
  });
});

// Update blog
const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.updateBlog(id, req.body);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog updated successfully',
    data: result,
  });
});

// Delete blog
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.deleteBlog(id);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog deleted successfully',
    data: result,
  });
});

// Get blogs by category
const getBlogsByCategory = catchAsync(async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const result = await BlogService.getBlogsByCategory(categoryId);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blogs by category retrieved successfully',
    data: result,
  });
});

// Get published blogs only
const getPublishedBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getPublishedBlogs();
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Published blogs retrieved successfully',
    data: result,
  });
});

// Get blog by slug
const getBlogBySlug = catchAsync(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const result = await BlogService.getBlogBySlug(slug);
  
  sendSuccessResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Blog retrieved successfully',
    data: result,
  });
});

export const BlogController = {
  createBlog,
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
  getBlogsByCategory,
  getPublishedBlogs,
};
